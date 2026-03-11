// Attendance Tracker Script

// Get URL parameters
const params = new URLSearchParams(window.location.search);
const courseId = params.get("course") || "1";
const type = params.get("type") || "course"; // "course" or "lab"
const course = COURSES[courseId];

// Funcție de ajutor pentru validare strictă (verifică dacă numele există în config.js)
function isStudentValid(name) {
  return STUDENTS.includes(name.toUpperCase().trim());
}

// Autocomplete
function setupAutocomplete() {
  const nameInput = document.getElementById('nameInput');
  const suggestionsList = document.getElementById('suggestionsList');
  
  if (!nameInput || !suggestionsList) return;
  
  nameInput.addEventListener('input', function() {
    const input = this.value.trim().toUpperCase();
    suggestionsList.innerHTML = ''; // Curățăm lista la fiecare tastă
    
    // Dacă am șters tot, ascundem lista și ieșim
    if (input.length === 0) {
      suggestionsList.style.display = 'none';
      return;
    }
    
    // Filtrăm studenții care CONȚIN literele introduse
    const matches = STUDENTS.filter(name => 
      name.toUpperCase().includes(input)
    ).slice(0, 10); // Arătăm max 10 rezultate pentru viteză
    
    if (matches.length === 0) {
      suggestionsList.style.display = 'none';
      return;
    }
    
    // Construim elementele listei
    matches.forEach(match => {
      const li = document.createElement('li');
      li.textContent = match;
      li.className = 'suggestion-item'; // Asigură-te că ai acest stil în CSS
      li.style.cursor = 'pointer';
      li.style.padding = '10px';
      
      li.onclick = function() {
        nameInput.value = match;
        suggestionsList.innerHTML = '';
        suggestionsList.style.display = 'none';
        nameInput.style.borderColor = "#2ecc71"; // Verde pentru valid
      };
      suggestionsList.appendChild(li);
    });
    
    // Forțăm afișarea listei
    suggestionsList.style.display = 'block';
  });
  
  // Închidem lista dacă dăm click în altă parte
  document.addEventListener('click', function(e) {
    if (e.target !== nameInput) {
      suggestionsList.style.display = 'none';
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupAutocomplete();
  if (!course) {
    alert("Curs invalid!");
    location.href = "index.html";
    return;
  }

  const titleElement = document.getElementById("courseTitle");
  if (titleElement) titleElement.textContent = course.name;

  const typeElement = document.getElementById("typeTitle");
  if (typeElement) typeElement.textContent = type === "lab" ? "LABORATOR" : "CURS";

  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.onclick = () => (location.href = `materie.html?course=${courseId}`);
  }
});

// Formula Haversine rămâne neschimbată
function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371000;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function getBestPosition(timeoutMs = 8000, targetAccuracyM = 25) {
  return new Promise((resolve, reject) => {
    let best = null;
    const watchId = navigator.geolocation.watchPosition(
      (p) => {
        if (!best || p.coords.accuracy < best.coords.accuracy) best = p;
        if (p.coords.accuracy <= targetAccuracyM) {
          navigator.geolocation.clearWatch(watchId);
          resolve(best);
        }
      },
      (err) => { if (best) resolve(best); else reject(err); },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
      if (best) resolve(best); else reject(new Error("timeout"));
    }, timeoutMs);
  });
}

// FUNCȚIA PRINCIPALĂ MODIFICATĂ
function checkIn() {
  const nameInput = document.getElementById("nameInput");
  const msgElement = document.getElementById("msg");
  const nameRaw = nameInput.value.trim();

  // 1. Validare: Câmp gol
  if (!nameRaw) {
    msgElement.textContent = "INTRODU NUMELE";
    return;
  }

  // 2. Validare: Numele TREBUIE să fie în listă (Blocare nume externe)
  if (!isStudentValid(nameRaw)) {
    msgElement.style.color = "red";
    msgElement.textContent = "NUME INVALID! ALEGE DIN LISTĂ.";
    nameInput.style.borderColor = "red";
    return;
  }

  // Resetare stil dacă e valid
  msgElement.style.color = "";
  nameInput.style.borderColor = "";

  if (!navigator.geolocation) {
    msgElement.textContent = "GEOLOCATION NU ESTE SUPORTAT";
    return;
  }

  msgElement.textContent = "VERIFICARE LOCATIE...";

  getBestPosition(8000, 25)
    .then((pos) => {
      const { latitude: lat, longitude: lon, accuracy } = pos.coords;
      const dist = haversine(lat, lon, CAMPUS.lat, CAMPUS.lon);
      const acc = isFinite(accuracy) ? Math.round(accuracy) : 9999;
      const allowedRadius = CAMPUS.radiusMeters + Math.min(acc, 100);

      if (dist > allowedRadius) {
        msgElement.innerHTML = `ESTI LA ${Math.round(dist)}m DE UNIVERSITATE.<br>Activeaza Precise location și WiFi.`;
        return;
      }

      msgElement.textContent = "SE TRIMITE...";

      fetch(course.scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name=${encodeURIComponent(nameRaw.toUpperCase())}&course=${courseId}&type=${type}`,
      })
      .then(() => {
        msgElement.textContent = `PREZENT: ${nameRaw.toUpperCase()}`;
        nameInput.value = "";
      })
      .catch(() => {
        msgElement.textContent = "EROARE LA SERVER";
      });
    })
    .catch(() => {
      msgElement.textContent = "LOCATIE INDISPONIBILA";
    });
}