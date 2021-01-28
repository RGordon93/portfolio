import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1rzsN_gN_FU95p5u-kBEWRt3tLyVqoW6I5B5Iqn3k2P8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Space Man',
    info: '',
    info2: '',
    url: 'https://rgordon93.github.io/spaceman-project-1/',
    repo: 'https://github.com/RGordon93/spaceman-project-1',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Curatr',
    info:
      'Fully responsive full-stack MERN web application with authentication for game tracking. Users can successfully signup, login and logout of their accounts. Users can also create, update, or delete lists of their favorite games, showcasing their tastes. Make sure you sign up and log in!',
    info2: '',
    url: 'https://curatrp3ga.herokuapp.com/',
    repo: 'https://github.com/Davinki-Coders',
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rashawn-isaac-gordon/',
    },
    // {
    //   id: nanoid(),
    //   name: 'instagram',
    //   url: 'https://www.instagram.com/rashawnisaacgordon/',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: 'https://codepen.io/Rgordon93',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RGordon93',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
