import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ben',
  title: "Hello, I'm Jerlin",
  description:
    "My Facination towards Cyber Security was sparked when I was 16, I began programming and soon developed a Captivation with Cyber Security, leading me to explore its multiple dimensions.",
  resumeLink:
    "https://docs.google.com/document/d/1oWvftMEFmCv8rMbjcYbwYsUT8j5fxubL6h7E-iRWkZ8/edit",
};

export const openSource = {
  githubUserName: 'JerlinJR',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://jerlin.me/',
  linkedin: 'https://www.linkedin.com/in/jerlin-j-r-aa969b238/',
  github: 'https://github.com/JerlinJR',
  instagram: 'https://jerlin.me/',
  facebook: 'https://jerlin.me/',
  twitter: 'https://jerlin.me/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY CYBER SECURITY RESEARCHER WHO WANTS TO EXPLORE MULTIPLE TECHNOLOGIES',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building complex web applications using PHP & Laravel'),
        emoji('⚡ Building RESTful APIs and REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'ReactJs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Php',
          fontAwesomeClassName: 'vscode-icons:file-type-php',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'MariDb',
          fontAwesomeClassName: 'vscode-icons:file-type-mysql',
        },

        {
          skillName: 'MongoDb',
          fontAwesomeClassName: 'logos:mongodb',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'GitLab',
          fontAwesomeClassName: 'logos:gitlab',
        },
        {
          skillName: 'Apache',
          fontAwesomeClassName: 'logos:apache',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       fontAwesomeClassName: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [

  {
    Stack: 'C , C++', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'PHP',
    progressPercentage: '80',
  },
  {
    Stack: 'Python',
    progressPercentage: '60',
  },
];
export const SkillBars1: SkillBarsType[] = [

  {
    Stack: 'CLI Apps', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Web Apps',
    progressPercentage: '90',
  },
  {
    Stack: 'Linux',
    progressPercentage: '75',
  },
];
export const SkillBars2: SkillBarsType[] = [

  {
    Stack: 'Mysql , MariaDb', //Insert stack or technology you have experience in
    progressPercentage: '85', //Insert relative proficiency in percentage
  },
  {
    Stack: 'MongoDb',
    progressPercentage: '70',
  },
  {
    Stack: 'Redis',
    progressPercentage: '60',
  },
];export const SkillBars3: SkillBarsType[] = [

  {
    Stack: 'Burp Suite', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Arp Spoofing',
    progressPercentage: '60',
  },
  {
    Stack: 'WireShark',
    progressPercentage: '50',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'St Xavier\'s Catholic College of Engineering',
    subHeader: 'Bachelor of Technology in Computer Science Engineering',
    duration: '2020 - 2024 (Expected)',
    desc: 'Make sense with common sense',
    grade: 'GPA: !Cared About',
    descBullets: [
      'No exceptation unless and untill you see the college curiculum',
      'Teach yourself to SelfLearn',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Building RESTful APIs',
    desc: 'A raw code framework for Notes App(Create, Read, Update, Delete)',
    github: 'https://github.com/JerlinJR/Building-Restapi-PHP',
    link: 'https://apitest.jerlin.space',
  },
  {
    name: 'Multithreaded Chat Server',
    desc: 'Chat Application using Socket Programming in Python for Local Area Network',
    github: 'https://github.com/JerlinJR/Multithreaded-Chat-Server',
  },
  {
    name: 'Social Media App - In Dev',
    desc: 'A Scalable WebApp using PHP.',
    github: 'https://github.com/JerlinJR/Social-Media',
  },
  {
    name: 'Portfolio',
    desc: 'My Portfolio Website',
    github: 'https://github.com/JerlinJR/Portfolio',
    link: 'https://jerlin.me',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ben',
  description:
    'A passionate CyberSecurity Researcher 🚀 ',
  author: 'Jerlin',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://jerlin.me',
  keywords: [
    'Jerlin',
    'Jerlin JR',
    '@JerlinJR',
    '@Jerlin',
    'Jerlin Ben',
    'Jerlin Ben JR',
    'Jerlin Portfolio ',
    'Jerlin JR Portfolio',
  ],
};
