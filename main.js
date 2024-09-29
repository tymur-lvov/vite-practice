import './style.css';

const getMarkupPartials = async (path) => {
  try {
    const data = await fetch(path);
  
    return data.text();
  } catch (error) {
    console.log(error.message);
  }
};

const concatMarkupPartials = async () => {
  try {
    const markup = [];
  
    markup.push(await getMarkupPartials('/vite-practice/src/partials/html/partial1'));
    markup.push(await getMarkupPartials('/src/partials/html/partial2'));
    markup.push(await getMarkupPartials('/src/partials/html/partial3'));
  
    return markup.join('');    
  } catch (error) {
    console.log(error.message);
  }
};

document.querySelector('#app').innerHTML = await concatMarkupPartials();
