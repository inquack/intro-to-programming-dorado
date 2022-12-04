
//Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = "Inhauck Choi " + thisYear;

footer.appendChild(copyright);

//Create a list of skills
const skills = ["Python", "C", "SPSS", "Qualtrics", "Javascript", "Microsoft Office Suite", "Google Workspace", "fMRI data analysis"];

const skillsSection = document.querySelector('#skills')
const skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++){
    var skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}