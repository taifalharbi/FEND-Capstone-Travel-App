import { fetchData } from './js/app';
import { handleSubmit } from './js/formHandler';
import './styles/style.scss';

// Event listener for form submission
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('travel-form');
  form.addEventListener('submit', handleSubmit);
});
