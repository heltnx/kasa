// api.js

export const fetchLogementsData = async () => {
  try {
    const response = await fetch('/logements.json');
    return await response.json();
  } catch (error) {
    alert('Error fetching logements data:', error);
    return [];
  }
};

export const fetchLogementData = async (id) => {
  try {
    const response = await fetch('/logements.json');
    return response.json().then(
      (data) => {
        return data.find((logement) => logement.id === id);
      }
    );

  } catch (error) {
    alert('Error fetching logement data:', error);
    return [];
  }
};
