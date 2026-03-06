export function render(data) {
  const result = document.querySelector('.result');

  result.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.classList.add('temperature');
  h2.textContent = `${data}°C`;

  result.appendChild(h2);
}

export function showLoading() {
  const result = document.querySelector('.result');
  result.innerHTML = '';

  const p = document.createElement('p');
  p.textContent = 'Cargando clima...';
  p.classList.add('loading-text');

  result.appendChild(p);
}
