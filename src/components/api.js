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
  