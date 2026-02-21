// Central configuration for all courses
const COURSES = {
  1: {
    id: 1,
    name: "Dezvoltarea aplicațiilor mobile",
    shortName: "ACRONYM1",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxKsKI9pRe5dlAxNl92taAIzqVRYmHhaMh251HfV2Oik-mT_c3TAcbyvaiY20RS2r9Fgw/exec",
  },
  2: {
    id: 2,
    name: "Probabilitați și statistică",
    shortName: "ACRONYM2",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxKsKI9pRe5dlAxNl92taAIzqVRYmHhaMh251HfV2Oik-mT_c3TAcbyvaiY20RS2r9Fgw/exec",
  },
 
  3: {
    id: 3,
    name: "Geometrie computațională",
    shortName: "ACRONYM2",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxKsKI9pRe5dlAxNl92taAIzqVRYmHhaMh251HfV2Oik-mT_c3TAcbyvaiY20RS2r9Fgw/exec",
  },

    4: {
    id: 4,
    name: "Automate, calculabilitate si complexitate",
    shortName: "ACRONYM2",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxKsKI9pRe5dlAxNl92taAIzqVRYmHhaMh251HfV2Oik-mT_c3TAcbyvaiY20RS2r9Fgw/exec",
  },
   5: {
    id: 5,
    name: "Sisteme de gestiune a bazelor de date",
    shortName: "ACRONYM2",
    scriptUrl: "https://script.google.com/macros/s/AKfycbxKsKI9pRe5dlAxNl92taAIzqVRYmHhaMh251HfV2Oik-mT_c3TAcbyvaiY20RS2r9Fgw/exec",
  },
}; 
// Campus location for geolocation check
const CAMPUS = {
  lat: 38.878954558014385,
  lon: -84.69438504752182,
  radiusMeters: 100,
};

// Feature toggles
const ENABLE_AUTOCOMPLETE = true; // Set to false to disable name autocomplete

const STUDENTS = [
  "STUDENT NAME 1",
  "STUDENT NAME 2",
  "STUDENT NAME 3",
  // Add more student names here
].sort();
