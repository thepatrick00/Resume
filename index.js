import contact from './data/contactData.js';
import skills from './data/skillsData.js';
import projects from './data/projectsData.js';
import experience from './data/experienceData.js';
import {getSectionHtml} from './utils.js';

const skillsSection = document.querySelector('.skills');
const projectsSection = document.querySelector('.projects');
const experienceSection = document.querySelector('.experience');
const educationSection = document.querySelector('.education');
const personalSection = document.querySelector('.personal');

skillsSection.innerHTML = `
    <h3 class='headline'><span>Skills<span></h3>
    <div class='skills__ctr'>
        <div class="skills__ctr--skill">
            <p class='skill__group'>Front End:</p>
            <p>${skills.frontend}</p>
        </div>
        <div class="skills__ctr--skill">
            <p class='skill__group'>Back End:</p>
            <p>${skills.backend}</p>
        </div>
        <div class="skills__ctr--skill">
            <p class='skill__group'>Principles:</p>
            <p>${skills.principles}</p>
        </div>
        <div class="skills__ctr--skill">
            <p class='skill__group'>Others:</p>
            <p>${skills.others}</p>
        </div>
    </div>
`;


projectsSection.innerHTML = `${getSectionHtml(projects)}`;
experienceSection.innerHTML = `${getSectionHtml(experience)}`;

educationSection.innerHTML = `
    <h3 class='headline'><span>Education</span></h3>
    <ul class="education__ul">
        <li>Scrimba Frontend Developer Carear Path Completion</li>
    </ul>
`

personalSection.innerHTML = `
    <h3 class='headline'><span>Personal</span></h3>
    <p>In 2021, I constantly went on bike rides and hiking, I made a YouTube channel with 800k views, and start learning to code.</p>
`