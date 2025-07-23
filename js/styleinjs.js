const section = document.querySelectorAll('section');
// console.log(section);
for(const sections of section){
sections.style.border= '2px solid steelblue';
sections.style.marginBottom= '5px';
sections.style.borderRadius='15px';
sections.style.paddingLeft = '7px';
sections.style.backgroundColor = 'lightgray';
}

// const placesContainer  = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

//spacefic kao k nibo

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor= 'yellow';

const placesContainer = document.getElementsByClassName('.yellow-bg');
// placesContainer.classlist.add('yellow-bg');
// placesContainer.classlist.remove('yellow-bg');