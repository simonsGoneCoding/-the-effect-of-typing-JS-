const span = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam saepe eveniet obcaecati impedit quo. Temporibus, minima dolores voluptates aliquam impedit facere explicabo omnis ipsam tenetur molestias iusto sapiente nulla! Nihil!'

//parameters
let indexText = 0;
const time = 40;

//implementation
const addLetter = () => {
  span.textContent += txt[indexText]
  indexText++
  if (indexText === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, 50);