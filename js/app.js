const storeName = "G's";
document.title = `${storeName} Grocery Store`;
console.log('What is in the document:', document.all);

console.log('tag element: ',document.getElementsByTagName('p'));

let h1_OfHeader = document.getElementById('mainIntro');
//console.log(h1_OfHeader); //checking method
h1_OfHeader.innerHTML = 'Welcome';

const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
console.log('headers: ', getAllNavListClasses);

const getIconCredit = document.querySelector('#iconsCredit');
const testDifference = document.getElementById('iconsCredit');
console.log('get the id: ', getIconCredit);
console.log(testDifference);

const example = document.querySelector('nav_list_item');
console.log(example);

const getExClasses = document.getElementsByClassName('nav_list_item');
console.log(getExClasses);

const imageExample = document.querySelector('img[alt="cherry icon]');
console.log(imageExample);

const magicButton = document.getElementById('magic');
console.log(magicButton);

magicButton.addEventListener('mouseover', () => {
    magicButton.className = 'myPoint';
    
    magicButton.style.backgroundColor = '#000';

    console.log('enter',magicButton);
});

magicButton.addEventListener('mouseleave', () => {  
magicButton.className = '';
console.log('leaving: ', magicButton);
});

document.addEventListener('keydown', () => {
    console.log(event.keyCode);
})

