// Everything about David that is not a post or a project lives here.
// Edit this file to change work history, achievements, links or the CRT boot program.

export const site = {
  name: 'David Malutan',
  description:
    'David Malutan: Computer Science student in Cluj-Napoca building full-stack apps, interpreters and the occasional robot.',
  github: 'https://github.com/David-Mal',
  linkedin: 'https://www.linkedin.com/in/david-mal/',
  // Stored reversed so the address never appears as plain text in the HTML.
  mailReversed: 'moc.liamg@32natulam.divad',
  cv: '/cv/David_Malutan_CV.pdf',
};

export const skills = [
  { label: 'Languages', items: 'Java, Python, C/C++, JavaScript, SQL' },
  { label: 'Frameworks', items: 'Spring Boot, Angular, React, Express, Qt, JavaFX' },
  { label: 'Tools', items: 'Git, Gradle, Flyway, PostgreSQL, Mockito, Vitest' },
];

export const work = [
  {
    year: '2026',
    title: 'Cloudflight & Integra',
    subtitle: 'Practical Web Development Training Program · Remote · Sep–Nov 2026',
    text:
      'Worked in a mentored team on Momentifly, a full-stack time-management and wellness app. Built the Angular UI for daily calorie and macro goals and contributed to the Java 25 / Spring Boot API with PostgreSQL, Flyway, OpenAPI docs and Mockito tests, through issues, pull requests and code review.',
  },
  {
    year: '2024–now',
    title: 'Babeș-Bolyai University',
    subtitle: 'BSc Computer Science, taught in English · Cluj-Napoca',
    text: 'Third year. Favourite parts so far: building interpreters, concurrency and anything that ends up as a working app.',
  },
  {
    year: '2020–2024',
    title: 'Petru Rareș National College',
    subtitle: 'Mathematics and Computer Science · Beclean',
    text: 'Where the robotics team, the olympiads and most of my late nights with code started.',
  },
];

export const achievements = [
  {
    year: '2026',
    title: 'Cluj Hackathon',
    text: 'Co-built and pitched CityPass, a smart-city app for mobility and parking, under hackathon pressure. 25th of 60 teams.',
  },
  {
    year: '2021, 2022',
    title: 'FTC National Stage, twice',
    text: 'Engineering team at Esentza Robotics, my high school robotics team.',
  },
  {
    year: '',
    title: 'County Informatics Olympiad',
    text: 'Honorable mention, Bistrița-Năsăud: algorithm design against the clock.',
  },
  {
    year: '',
    title: 'National Robotics Camp',
    text: 'Referee and volunteer: event logistics, helping teams, refereeing matches.',
  },
];

// The program the CRT "runs" on load. It is written in the style of the Toy Language
// from the interpreter project. Adjust it to match your interpreter's real syntax.
export const bootProgram = [
  { text: '> run demo.toy', kind: 'cmd' },
  { text: 'int v; v = 10;', kind: 'code' },
  { text: 'Ref int a; new(a, 22);', kind: 'code' },
  { text: 'fork(wH(a, 30); v = 32;', kind: 'code' },
  { text: '     print(v); print(rH(a)));', kind: 'code' },
  { text: 'print(v); print(rH(a));', kind: 'code' },
  { text: 'out: 10 30 32 30', kind: 'out' },
  { text: '2 threads · heap ok · 0 errors', kind: 'out' },
  { text: 'READY.', kind: 'ready' },
];
