import './style.css';

const getMarkupPartials = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.text();
  } catch (error) {
    console.log(error.message);
  }
};

const concatMarkupPartials = async () => {
  try {
    const markup = [];

    markup.push(await getMarkupPartials('./src/partials/html/partial1.html'));
    markup.push(await getMarkupPartials('./src/partials/html/partial2.html'));
    markup.push(await getMarkupPartials('./src/partials/html/partial3.html'));

    return markup.join('');
  } catch (error) {
    console.log(error.message);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('#app').innerHTML = await concatMarkupPartials();
});
