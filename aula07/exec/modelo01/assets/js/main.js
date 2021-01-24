const elementos = [
    {tag: 'p', content: 'frase 1'},
    {tag: 'div', content: 'frase 2'},
    {tag: 'footer', content: 'frase 3'},
    {tag: 'section', content: 'frase 4'},
];

const div = document.querySelector('.result');

for (let i = 0; i < elementos.length; i++) {
    const {tag, content} = elementos[i];
    let createdTag = document.createElement(tag);
    // createdTag.innerText = content;
    let createdContent = document.createTextNode(content);
    createdTag.appendChild(createdContent);
    div.appendChild(createdTag);
}
// elementos.forEach((v) => {
//     div.innerHTML += `<${v.tag}>${v.content}</${v.tag}>`
// })