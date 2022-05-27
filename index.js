import contact from './data/contactData.js';
import skills from './data/skillsData.js';
import projects from './data/projectsData.js';
import experience from './data/experienceData.js';
import {getProjectHtml, getExpHtml} from './utils.js';


const {email, github, location, linkedin, phoneNumber} = contact;
const headerContact = document.querySelector('.header__right');
headerContact.innerHTML = `
    <a class="email" href="mailto:${email}">${email}</a>
    <a class="github" href=${github}>${github}</a>
    <p class="location">${location}</p>
    <p class="linkedin">${linkedin}</p>
    <p class="phoneNumber">${phoneNumber}</p>
`;

const skillsSection = document.querySelector('.skills');
const projectsSection = document.querySelector('.projects');
const experienceSection = document.querySelector('.experience');
const educationSection = document.querySelector('.education');
const personalSection = document.querySelector('.personal');

projectsSection.innerHTML = `${getProjectHtml(projects)}`;
experienceSection.innerHTML = `${getExpHtml(experience)}`