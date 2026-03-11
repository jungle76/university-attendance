const COURSES = {
  1: { id: 1, name: "Dezvoltarea aplicațiilor mobile", scriptUrl: "https://script.google.com/macros/s/AKfycbxKsKI9pRe5dlAxNl92taAIzqVRYmHhaMh251HfV2Oik-mT_c3TAcbyvaiY20RS2r9Fgw/exec" },
  2: { id: 2, name: "Probabilitați și statistică", scriptUrl: "https://script.google.com/macros/s/AKfycbxm4aKaYw6N_dh7K-ZaPvMQIKEflsAlcQhghwSsaRN7Jn4GPt4-gVz-SWzFN95nmsCv/exec" },
  3: { id: 3, name: "Geometrie computațională", scriptUrl: "https://script.google.com/macros/s/AKfycbxgjhbCH9h9Fe7G0liqBFIWyM_hV6TgUC5XbYVTcgHwSZEck8s4MpCZ6SqsqWDRt6U/exec" },
  4: { id: 4, name: "Automate, calculabilitate si complexitate", scriptUrl: "https://script.google.com/macros/s/AKfycbzBKH1TOQglJk2GwLWrJqyc-kw8wZYdTfHIBe2v-hpCzGJcgklkqvTPLUaVxzgkra7FLQ/exec" },
  5: { id: 5, name: "Sisteme de gestiune a bazelor de date", scriptUrl: "https://script.google.com/macros/s/AKfycbyZ8S1pqrQ81k5Usf2JhEASzK0qCJPwF3j4IWXgugJ5ijDHLnuXwGs4hJ64IwsGl4o/exec" },
};

const CAMPUS = { lat: 46.17636, lon: 21.34336, radiusMeters: 200 };

const STUDENTS = [
  "AILUȚOAEI ANDREI-ADELIN", "ANGHEL DAVID-MIHAI", "ARDELEAN DANIEL-DEMETRIUS",
  "BANCI ALIN-DAVID", "BIRIȘ DENIS-FLORIN", "BONCACIU DANIELA-MIHAELA",
  "BORTEȘ AMELIA-NARCISA", "BRADIN ALEXANDRA-VALENTINA", "BRANC NATALIA-ALEXANDRA",
  "BREHA CRINA-LARISA", "BURUIANA MARIUS-FLORENTIN", "CHERESI-DOLGA NICOLA-CRISTINA",
  "CIOTOROSCHI FLAVIUS-FLORIN", "CLOP PAUL-EDUARD", "COVACI DENIS-EMANUEL",
  "CRĂCIUN DENIS-GABRIEL", "CRISTEA ANDRE", "CRISTEA ROBERT-SAMUEL",
  "DIMA DENIS-NICOLAE-IOAN", "FELEA DORIN-ANDREI", "FIȚ RAFAEL",
  "GAI MARIUS-CRISTIAN", "GHERDAN ALIN", "ILEA LETIȚIA", "ISHIMWE AIME BRUCE",
  "KIRCH ROLAND-NORBERT", "KÖTELES PATRICK", "LĂPUGEAN SAMUEL",
  "LEORINȚ ANDREEA-MARIA", "LILE ANDREEA-AMALIA", "MARIAȘIU TEODORA-ANDREEA",
  "MATEI BOGDAN-OVIDIU", "METOUGUE GAETAN CHRISTIAN", "MOR-BARTL ERIK",
  "MOR-BARTL ROBERT", "MORAR ANDREI-GEORGE", "NĂDĂBAN RAUL-DORIN",
  "NEDELCU ȘTEFAN-EUGEN", "OANCEA DANIEL", "PELE ANDREEA", "PETRUȚA BIANCA-MARIA",
  "POLEAC ALEX-FLORIN", "RAȚ ADRIAN-IOAN", "SANTA FLAVIUS-FRANCISC",
  "SENTIVEANU MARIUS-CLAUDIU", "SIDOR OANA-BOGDANA", "SOLONCĂ ANA-MARIA",
  "SPĂTARU ANDI-FLORIAN", "TOMESCU ROBERT-GABRIEL", "TOTH EVELINE-DENISA",
  "TUDOR ESTERA", "TUDOR RAHELA", "ȚUCUDEAN FABIAN", "URSACHE CLAUDIA-MINA",
  "VARGA NORBERT-FLAVIUS"
].sort();