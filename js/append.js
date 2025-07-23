//where to add 
const placesList = document.getElementById('places-list');
//what to be added
const li = document.createElement('li');
li.innerText= 'pahartoli bon';

//3. add the child
placesList.appendChild(li);

//1.where to add

const mainContainer = document.getElementById('main-container');

const section1 = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section1.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText= 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText= 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText= 'salad';
ul.appendChild(li3);

section1.appendChild(ul);
mainContainer.appendChild(section1);


//set inner HTML directly;
const sectionDress= document.createElement('section');
sectionDress.innerHTML = `
<h1> My dress section</h1>
<ul>
<li>shirt</li>
<li> lungi</li>
<li>sando gengi </li>
</ul>
`
mainContainer.appendChild(sectionDress);