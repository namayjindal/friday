document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContent Fully loaded and parsed')
})

const addItemButton = document.getElementById('add-item');
const itemsPageButton = document.querySelector('button');

itemsPageButton.addEventListener('click', () => {
    console.log('go to items page');
})

addItemButton.addEventListener('click', () => {
    console.log('item added');
})