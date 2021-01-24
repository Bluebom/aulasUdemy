const article = document.querySelector('article');
const paragrafos = article.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let v of paragrafos) {
    v.style.backgroundColor = backgroundColorBody;
    v.style.color = '#fff'
    v.style.borderRadius = '.5rem'
    v.style.padding = '.3rem'
}