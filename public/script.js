document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContent Fully loaded and parsed')
})

const addItemButton = document.getElementById('add-item');

addItemButton.addEventListener('click', () => {
    console.log('item added')
})