// Cache pour stocker les données JSON une fois récupérées
let logementsData = null;

// Fonction pour récupérer les données de logements
export const fetchLogementsData = async () => {
  try {
    // Si les données n'ont pas encore été récupérées, effectuer une requête
    if (!logementsData) {
      const response = await fetch('/logements.json');
      logementsData = await response.json();
    }
    return logementsData; // Renvoyer les données (du cache ou nouvellement récupérées)
  } catch (error) {
    console.error('Error fetching logements data:', error);
    return []; // Renvoyer un tableau vide en cas d'erreur
  }
};

// Fonction pour récupérer les données d'un logement spécifique par ID
export const fetchLogementData = async (id) => {
  try {
    const logements = await fetchLogementsData();
    // Recherche un logement dans les données par son ID
    return logements.find((logement) => logement.id === id);
  } catch (error) {
    console.error('Error fetching logement data:', error);
    return null; // Renvoyer null en cas d'erreur
  }
};
