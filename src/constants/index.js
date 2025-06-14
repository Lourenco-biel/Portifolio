const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 40, suffix: '+', label: 'Completed Projects' },
  { value: 15, suffix: '+', label: 'Mastered Technologies' },
  { value: 5, suffix: '+', label: 'Market Sectors Served' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
];

const abilities = [
  {
    imgPath: '/images/ideia.png',
    title: 'Problem Solver',
    desc: 'Transforming complex challenges into efficient and elegant solutions.',
  },
  {
    imgPath: '/images/raio.png',
    title: 'Performance Optimization',
    desc: 'Enhancing application speed and efficiency for superior user experience.',
  },
  {
    imgPath: '/images/inteligencia-artificial.png',
    title: 'Technical Adaptability',
    desc: 'Quickly adapting to new technologies and evolving project requirements.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Gabriel's exceptional code quality and process-oriented mindset transformed our development workflow. His technical solutions not only improved performance but also established sustainable practices that continue to benefit the entire team.",
    imgPath: '/images/rappi_logo.png',
    logoPath: '/images/rappi_logo.png',
    title: 'Frontend Engineer',
    date: 'October 2023 - February 2025',
    responsibilities: [
      'Responsible for code quality control by reviewing code written on the frontend.',
      'Actively participated in the maintenance of the products offered.',
      'Actively participated in the creation of new products and features.',
      'Guided the team in applying best practices for front-end development.',
      'Developed solutions to reduce costs with third-party services.',
    ],
    achievements: [
      'Increased efficiency by 89% by developing an advanced data capture system for sharing and interactive viewing of reports.',
      'Reduced the total number of new payment issues by 100%.',
    ],
    context:
      'Rappi has established itself as the leading and most complete superapp in Latin America, offering delivery services for restaurants, supermarkets, pharmacies and more. The Smart Menu Project significantly improves restaurant management through advanced data intelligence with metrics from its competitors and also provides essential tools for menu management, allowing seamless integration with the Rappi platform.',
  },
  {
    review:
      "Gabriel's creativity and proactive approach made him stand out immediately. His excellent communication skills bridged gaps between teams, while his innovative solutions consistently exceeded our expectations.",
    imgPath: '/images/rappi_logo.png',
    logoPath: '/images/rappi_logo.png',
    title: 'Junior Frontend Engineer',
    date: 'July 2023 - October 2023',
    responsibilities: [
      'Actively participated in code quality control by reviewing written code.',
      'Actively participated in the maintenance of products offered.',
      'Actively participated in the creation of new products and features.',
    ],
    achievements: [
      'Optimized financial expenditure by 70% through developing an AI chatbot dedicated to company FAQs.',
      'Achieved a remarkable 40% increase in product productivity.',
    ],
    context:
      'I worked as a junior software engineer, actively participating with the team to improve the project. Creating new products and maintaining existing ones in the Smart Menu project, which significantly improves restaurant management through advanced data intelligence with metrics from competitors and also provides essential tools for menu management, allowing seamless integration with the Rappi platform.',
  },
  {
    review:
      'Gabriel is the definition of speed! His learning curve was extremely fast, and he developed key features in just weeks. The code quality and security he delivers brings peace of mind to the entire team.',
    imgPath: '/images/Box-Delivery-Branco.png',
    logoPath: '/images/Box-Delivery-Branco.png',
    title: 'Junior Frontend Engineer',
    date: 'August 2022 - July 2023',
    responsibilities: [
      'Decreased the application bundle size by 3x by rewriting the frontend web application codebase.',
      'Actively participated in code quality control by reviewing code written.',
      'Actively participated in the creation and maintenance of features.',
    ],
    achievements: [
      'Reduced the application bundle size by 3x.',
      'Successfully increased system performance by 10x.',
    ],
    context:
      'Box Delivery is a startup, created in 2016, specializing in instant delivery of food and goods, as well as same-day-delivery and next-day-delivery of medium-weight items for industry and retail. I worked on 5 projects creating and maintaining them as a front-end developer, including restaurant management systems, shopping carts and orders, order and order management systems for stadiums, and order allocation management system for motorcycle couriers.',
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Ariel Paixão',
    mentions: {
      name: 'arielpaixao',
      url: 'https://www.linkedin.com/in/arielpaixao/',
      imgPath: '/images/linkedin.png',
    },
    review:
      'Gabriel, as a technology enthusiast, has always been very proactive in learning how to overcome technological obstacles. Always looking not only for how to do things, but also for why they are done in such a way, in this way Gabriel always advances towards an even greater and deeper knowledge in the area of ​​technology. It is great to exchange technical and software development experiences with him.',
    imgPath: '/images/ariel.jpeg',
  },
  {
    name: 'Barbara Figueiredo',
    mentions: {
      name: 'barbarafigueiredosantos',
      url: 'https://www.linkedin.com/in/barbarafigueiredosantos/',
      imgPath: '/images/linkedin.png',
    },
    review: `Gabriel is the definition of speed! The learning curve for a new technology was extremely fast, and he developed important points for a new product in just a few weeks.

In addition, he integrates well with our team, always available and open to suggestions.

One of the best things about building with him is the peace of mind in knowing that the code is being developed with quality, being readjusted whenever necessary - and this validation is done by him outside of sprints - with all possible security.`,
    imgPath: '/images/barbara.jpeg',
  },
  {
    name: 'Felipe Stefanelli',
    mentions: {
      name: 'felipe-stefanelli',
      url: 'https://www.linkedin.com/in/felipe-stefanelli/',
      imgPath: '/images/linkedin.png',
    },
    review:
      'Gabriel was one of the best developers I have ever worked with. His quick problem-solving, practical way of thinking and great communication made the job much easier. He always delivered on time and helped the rest of the team when we needed it. I highly recommend working with him.',
    imgPath: '/images/felipe-pipo.jpeg',
  },
  {
    name: 'Filipe Costa',
    mentions: {
      name: 'dev-nascimento',
      url: 'https://www.linkedin.com/in/dev-nascimento/',
      imgPath: '/images/linkedin.png',
    },
    review: `Gabriel, é um colega muito dedicado, bem disposto, sempre buscando formas de evoluir na carreira e se tornar um profissional melhor. 
Tem bastante conhecimentos em JavaScript, onde já fez vários projetos interessantes com essa linguagem. Com certeza um ótimo profissional mas também um excelente ser humano.`,
    imgPath: '/images/felipe-costa.jpeg',
  },
];

// change icon fb
const socialImgs = [
  {
    name: 'insta',
    url: 'https://www.instagram.com/lourenco.mp4',
    imgPath: '/images/insta.png',
  },
  {
    name: 'github',
    url: 'https://github.com/Lourenco-biel',
    imgPath: '/images/icons8-github-64.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gabriel-ibiapino-749b78198/',
    imgPath: '/images/linkedin.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
