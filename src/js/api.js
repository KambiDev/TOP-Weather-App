export async function fetchData(city, country) {
  try {
    const apikey = 'LASSZRQNTEG4YHBTAQHPUN8QM';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?unitGroup=metric&key=${apikey}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Error en la peticion.');
    }

    const data = await res.json();

    const temperature = data.currentConditions.temp;

    return temperature;
  } catch (error) {
    console.error(error);
  }
}
