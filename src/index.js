import './css/styles.css';
import { fetchData } from './js/api.js';
import { render, showLoading } from './js/ui.js';

const btnSearch = document.querySelector('#btn-search');

btnSearch.addEventListener('click', async () => {
  const inputSearch = document.querySelector('#city-input').value;

  if (inputSearch.trim() === '') {
    alert('campo vacio!');
    return;
  }

  const [city, country] = inputSearch.split(',');

  const cityClean = city.trim();
  const countryClean = country ? country.trim() : '';

  showLoading();

  const tempData = await fetchData(cityClean, countryClean);

  render(tempData);
});
