import contact from './data/contactData.js';
import skills from './data/skillsData.js';

console.log(skills.frontend)
console.log(contact.email)

const {email, github, location, linkedin, phoneNumber} = contact;
const headerContact = document.querySelector('.header__contact');
headerContact.innerHTML = `
    <a class="email" href="mailto:${email}">${email}</a>
    <a class="github" href=${github}>${github}</a>
    <p class="location">${location}</p>
    <p class="linkedin">${linkedin}</p>
    <p class="phoneNumber">${phoneNumber}</p>
`;

const section = document.getElementsByClassName('section');