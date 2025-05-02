document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContent Fully loaded and parsed')
})

const addItemButton = document.getElementById('add-item');
const itemsPageButton = document.querySelector('button');
const mousePosition = document.getElementById('mouse-position');

const shows = ['pantheon', 'simpsons', 'regular show']

const ul = document.createElement('ul')

const lis = shows.map(s => {
  const li = document.createElement('li')
  li.textContent = s
  return li
}) // lis is a list of HTML elements (<li>) with text content

ul.append(...lis)
document.body.appendChild(ul)

itemsPageButton.addEventListener('click', () => {
    console.log('go to items page');
    const greeting = document.body.appendChild(document.createElement('h1'))
    greeting.textContent = 'hello!'
})

addItemButton.addEventListener('click', () => {
    console.log('item added');
})

const ele = document.querySelector('input[type="text"]');
ele.addEventListener('input', function(evt) {
	const d = document.body.appendChild(document.createElement('div'));
	d.textContent = this.value;
});

mousePosition.addEventListener('click', mousePositionFn);

function mousePositionFn(event) {
    console.log('mouse position');
    this.textContent = event.x + ',' + event.y;
}