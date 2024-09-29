import './style.css';

const getMarkupPartials = async (path) => {
  const data = await fetch(path);

  return data.text();
};

const concatMarkupPartials = async () => {
  const markup = [];

  markup.push(await getMarkupPartials('/vite-practice/src/partials/html/partial1'));
  markup.push(await getMarkupPartials('/src/partials/html/partial2'));
  markup.push(await getMarkupPartials('/src/partials/html/partial3'));

  return markup.join('');
};

console.log(await concatMarkupPartials())

document.querySelector('#app').innerHTML = await concatMarkupPartials();
