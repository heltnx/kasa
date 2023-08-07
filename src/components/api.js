// api.js

export const fetchLogementsData = () => {
    return fetch('/logements.json')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching logements data:', error);
        return []; // En cas d'erreur, renvoyer une liste vide ou gérer l'erreur comme souhaité
      });
  };
  