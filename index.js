import contact from './data/contactData.js';
import skills from './data/skillsData.js';
import projects from './data/projectsData.js';
import experience from './data/experienceData.js';
import {getSectionHtml} from './utils.js';


const {email, github, location, linkedin, phoneNumber} = contact;
const headerContact = document.querySelector('.contact-info');
headerContact.innerHTML = `
    <a class="email" href="mailto:${email}">${email}</a>
    <a class="github" href=${github}>Github</a>
    <a class="linkedin" href=${linkedin}>Linkedin</a>
    <span class="location">${location}</span>
    <span class="phoneNumber">${phoneNumber}</span>
`;

const skillsSection = document.querySelector('.skills');
const projectsSection = document.querySelector('.projects');
const experienceSection = document.querySelector('.experience');
const educationSection = document.querySelector('.education');
const personalSection = document.querySelector('.personal');

skillsSection.innerHTML = `
    <h3 class='subject'>Skills</h3>
    <div class='skillCtr'>
        <div class="skill">
            <p class='skill__group'>Front End:</p>
            <p>${skills.frontend}</p>
        </div>
        <div class="skill">
            <p class='skill__group'>Back End:</p>
            <p>${skills.backend}</p>
        </div>
        <div class="skill">
            <p class='skill__group'>Principles:</p>
            <p>${skills.principles}</p>
        </div>
        <div class="skill">
            <p class='skill__group'>Others:</p>
            <p>${skills.others}</p>
        </div>
    </div>
`;


projectsSection.innerHTML = `${getSectionHtml(projects)}`;
experienceSection.innerHTML = `${getSectionHtml(experience)}`;

educationSection.innerHTML = `
    <h3 class='subject'>Education</h3>
    <ul>
        <li>Scrimba Frontend Developer Carear Path Completion</li>
        <li></li>
    </ul>
`

personalSection.innerHTML = `
    <h3 class='subject'>Personal</h3>
    <p>In 2021, I constantly went on bike rides and hiking, I made a YouTube channel with 800k views, and start learning to code.</p>
`