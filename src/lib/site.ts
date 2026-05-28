export const siteConfig = {
  name: "Saya School",
  domain: "https://saya.edu.pk",
  email: "info@saya.edu.pk",
  phone: "+92 321 5135876",
  address: "SAYA trust school F/12 Islamabad, Pakistan",
  description:
    "Saya School provides affordable, quality education for underprivileged children in Islamabad through inclusive learning, trained teachers, and community support.",
  foundingYear: "2008",
  logoPath: "/logo.jpg",
  ogImagePath: "/og-image.jpg",
  phones: [
    { display: "+92 321 5135876", href: "tel:+923215135876" },
    { display: "+92 371 548 1462", href: "tel:+923715481462" },
  ],
  emails: [
    { display: "info@saya.edu.pk", href: "mailto:info@saya.edu.pk" },
    { display: "tyamin57@hotmail.com", href: "mailto:tyamin57@hotmail.com" },
    { display: "sayaschool786@gmail.com", href: "mailto:sayaschool786@gmail.com" },
  ],
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=SAYA+trust+school+F%2F12+Islamabad+Pakistan",
  social: {
    facebook: "https://www.facebook.com/SayaSchoolIslamabad",
    instagram: "https://www.instagram.com/sayaschool786",
    twitter: null as string | null,
  },
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export const impactStats = [
  { value: "800+", label: "Students enrolled" },
  { value: "2008", label: "Founded with a class under a tree" },
  { value: "3", label: "Purpose-built school buildings" },
  { value: "26M", label: "Out-of-school children in Pakistan" },
];

export const courses = [
  {
    title: "Primary School Program",
    level: "Grades 1-5",
    detail:
      "Strong foundations in literacy, numeracy, science, and character development with activity-based learning.",
  },
  {
    title: "Middle School Program",
    level: "Grades 6-8",
    detail:
      "Structured curriculum focused on conceptual understanding, communication, and digital confidence.",
  },
  {
    title: "Secondary School Program",
    level: "Grades 9-10",
    detail:
      "Board-aligned preparation, exam strategy, and mentorship for successful matriculation outcomes.",
  },
];

export const galleryItems = [
  {
    src: "/childrens.jpg",
    alt: "SAYA School students gathered outdoors",
    title: "Students together",
    caption: "More than 800 boys and girls learning in a safe, inclusive environment.",
    category: "Campus life",
  },
  {
    src: "/school_building.jpg",
    alt: "SAYA School building in Islamabad",
    title: "Our school building",
    caption: "Purpose-built classrooms supporting quality education on the outskirts of Islamabad.",
    category: "Campus",
  },
  {
    src: "/saya-tree-silhouette.png",
    alt: "Tree silhouette representing SAYA's origins",
    title: "Where it began",
    caption: "From a dozen children under a tree in 2008 to a full high school today.",
    category: "Our story",
  },
  {
    src: "/Tughral.jpg",
    alt: "Dr. Tughral Yamin, founder of SAYA School",
    title: "Founder's vision",
    caption: "Dr. Tughral Yamin established SAYA to bring education to out-of-school children.",
    category: "Leadership",
  },
  {
    src: "/Asma.jpg",
    alt: "Asma Tughral Yamin, CEO of SAYA School",
    title: "Leading with purpose",
    caption: "Dedicated leadership guiding teachers, students, and community programs.",
    category: "Leadership",
  },
  {
    src: "/Safia.jpg",
    alt: "Safia Yamin, patron of SAYA School",
    title: "Patron and inspiration",
    caption: "A guiding presence behind SAYA's mission of compassion and lasting impact.",
    category: "Leadership",
  },
];

export const newsPosts = [
  {
    slug: "new-computer-lab-upgrade",
    title: "New Computer Lab Upgrade for Digital Skills",
    excerpt:
      "Students now have access to updated systems and guided coding sessions to improve digital literacy.",
    publishedAt: "2026-05-15",
    image: "/news-computer-lab.jpg",
    imageAlt: "SAYA School students using the computer lab",
  },
  {
    slug: "annual-sports-week-highlights",
    title: "Annual Sports Week Highlights",
    excerpt:
      "Our students showcased teamwork and confidence during a full week of sports and co-curricular events.",
    publishedAt: "2026-04-10",
    image: "/news-sports-week.jpg",
    imageAlt: "Students participating in sports week at SAYA School",
  },
  {
    slug: "teacher-training-workshop",
    title: "Teacher Training Workshop on Interactive Learning",
    excerpt:
      "Teachers completed a workshop on classroom engagement, active learning, and student-centered instruction.",
    publishedAt: "2026-03-08",
    image: "/news-teacher-workshop.jpg",
    imageAlt: "Teachers at a professional development workshop",
  },
];

/** Shared placeholder image until real alumni photos are provided */
export const alumniPlaceholderImage = "/childrens.jpg";
export const alumniPlaceholderAlt = "Placeholder — SAYA School students (demo profile)";

export const successStoriesDemoNotice =
  "Demo profiles below use sample names, roles, and photos. Real alumni stories will be published here with permission.";

export const successStories = [
  {
    id: "demo-alumni-1",
    name: "Alumni Profile 1 (Demo)",
    role: "Software & web development",
    story:
      "Demo text: Completed matriculation at SAYA, pursued computer studies, and moved toward technology work. Replace with verified alumni details.",
    image: alumniPlaceholderImage,
    imageAlt: alumniPlaceholderAlt,
  },
  {
    id: "demo-alumni-2",
    name: "Alumni Profile 2 (Demo)",
    role: "Healthcare & sciences",
    story:
      "Demo text: Built strong science foundations at SAYA and prepared for further health-related education. Replace with verified alumni details.",
    image: alumniPlaceholderImage,
    imageAlt: alumniPlaceholderAlt,
  },
  {
    id: "demo-alumni-3",
    name: "Alumni Profile 3 (Demo)",
    role: "Skilled trades & entrepreneurship",
    story:
      "Demo text: Gained confidence and practical skills at SAYA before entering vocational training and work. Replace with verified alumni details.",
    image: alumniPlaceholderImage,
    imageAlt: alumniPlaceholderAlt,
  },
  {
    id: "demo-alumni-4",
    name: "Alumni Profile 4 (Demo)",
    role: "Design & creative media",
    story:
      "Demo text: Explored arts and digital tools at SAYA and continued into creative projects. Replace with verified alumni details.",
    image: alumniPlaceholderImage,
    imageAlt: alumniPlaceholderAlt,
  },
  {
    id: "demo-alumni-5",
    name: "Alumni Profile 5 (Demo)",
    role: "Teaching & community service",
    story:
      "Demo text: Returned to education as a path to serve the community after graduating from SAYA. Replace with verified alumni details.",
    image: alumniPlaceholderImage,
    imageAlt: alumniPlaceholderAlt,
  },
  {
    id: "demo-alumni-6",
    name: "Alumni Profile 6 (Demo)",
    role: "Higher education · Demo",
    story:
      "Demo text: Continued to college-level study with discipline formed at SAYA. Replace with verified alumni details.",
    image: alumniPlaceholderImage,
    imageAlt: alumniPlaceholderAlt,
  },
];

export const leadership = [
  {
    name: "Safia Yamin",
    title: "Patron",
    bio: "Safia Yamin has been a source of inspiration for SAYA.",
    image: "/Safia.jpg",
  },
  {
    name: "Dr. Tughral Yamin",
    title: "Founder",
    bio: "Dr. Tughral Yamin is the visionary behind our organization, dedicated to innovation and excellence in all areas of operation.",
    image: "/Tughral.jpg",
  },
  {
    name: "Asma Tughral Yamin",
    title: "CEO",
    bio: "Asma Tughral Yamin leads our team with unparalleled expertise and a commitment to achieving organizational goals.",
    image: "/Asma.jpg",
  },
];

export const donationImpactTiers = [
  {
    amount: "Rs. 500",
    detail: "Buys a full set of textbooks",
    mailtoSubject: "Donation inquiry — Rs. 500 (textbooks)",
  },
  {
    amount: "Rs. 2,000",
    detail: "Sponsors a child for a month",
    mailtoSubject: "Donation inquiry — Rs. 2,000 (monthly sponsorship)",
  },
  {
    amount: "Rs. 24,000",
    detail: "Fully sponsors a child for a year",
    mailtoSubject: "Donation inquiry — Rs. 24,000 (annual sponsorship)",
  },
];

export const donationConfig = {
  accountTitle: "SAYA Welfare Society",
  bankName: "Allied Bank Limited (Islamabad)",
  accountNumber: "Contact info@saya.edu.pk for verified account details",
  iban: "Contact info@saya.edu.pk for IBAN",
  mobileWallets: [
    {
      name: "JazzCash / EasyPaisa",
      detail: "Registered numbers available on request — email the donation team.",
    },
  ],
  transparencyNote:
    "SAYA operates under strict transparency guidelines. Email us with your transfer reference and we will confirm receipt and issue acknowledgment where applicable.",
  receiptContact: siteConfig.email,
};

export function donationMailto(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) {
    params.set(
      "body",
      `${body}\n\n---\nPlease include your name and contact number so our team can follow up.`,
    );
  }
  return `mailto:${siteConfig.email}?${params.toString()}`;
}

export const volunteerAnnouncement = {
  message:
    "No matter your profession — teach children how careers and success in life really work. Coders, doctors, trades, designers, and AI mentors welcome.",
  cta: "Volunteer now",
  href: "/volunteer",
};

export const volunteerPageNav = [
  { id: "quick-guide", label: "Quick guide" },
  { id: "how-it-works", label: "How it works" },
  { id: "why-volunteer", label: "Why volunteer" },
  { id: "career-paths", label: "Your profession" },
  { id: "ai-program", label: "AI volunteers" },
  { id: "faq", label: "FAQ" },
  { id: "get-started", label: "Join" },
];

export const volunteerAtAGlance = [
  {
    title: "Who can join?",
    answer: "Anyone — coder, doctor, electrician, designer, AI user, student, or retiree.",
  },
  {
    title: "Must I be a teacher?",
    answer: "No. You share your real job in simple words. Our staff support you in class.",
  },
  {
    title: "How much time?",
    answer: "From one hour to regular visits. We match your schedule to our students.",
  },
];

export const volunteerFaq = [
  {
    question: "What will I actually do?",
    answer:
      "Most volunteers give a short talk, run a demo, help in the computer lab, or mentor students about careers. We agree the format before your first visit.",
  },
  {
    question: "Which ages are the students?",
    answer: "Grades 1–10 (roughly ages 6–16). We match your session to the right age group.",
  },
  {
    question: "Is it safe to work with children?",
    answer:
      "Yes — with rules. Every volunteer completes a safeguarding orientation and follows staff guidance on campus.",
  },
  {
    question: "Can I volunteer online?",
    answer:
      "Some sessions can be remote (for example AI or coding). Many volunteers prefer in-person visits at our Islamabad campus.",
  },
  {
    question: "What should I include in my email?",
    answer:
      "Your name, profession, how you want to help, and your available days. Use the volunteer button on this page — it opens a ready-made email.",
  },
];

export const volunteerHowItWorks = [
  {
    step: "1",
    title: "You share what you know",
    detail:
      "Visit campus or join a session online. Explain your work in simple words — one hour can open a door a child did not know existed.",
  },
  {
    step: "2",
    title: "Students learn by seeing real paths",
    detail:
      "They hear how a coder, nurse, electrician, or designer actually works — not only from books, but from a person in front of them.",
  },
  {
    step: "3",
    title: "Curiosity becomes a plan",
    detail:
      "With teachers and volunteers, students connect school subjects to careers: which skills to build, which habits matter, what to try next.",
  },
  {
    step: "4",
    title: "Confidence grows for life",
    detail:
      "Many alumni from SAYA have moved into technology, further study, and skilled trades. Your story can be the reason someone believes it is possible.",
  },
];

export const volunteerFramework = [
  {
    label: "Why it is",
    summary: "Children need to see real careers — not only textbooks.",
    title: "Because talent is everywhere — opportunity is not",
    points: [
      "Millions of children in Pakistan are out of school or lack mentors who look like their future selves.",
      "SAYA offers free education, but real-world exposure needs people from many professions.",
      "One honest conversation can matter more than months of guessing what jobs exist.",
    ],
  },
  {
    label: "How it works",
    summary: "You visit, share your story, staff guide the session.",
    title: "Simple sessions, real impact",
    points: [
      "You volunteer for a talk, workshop, lab visit, or weekly support — we match your time to our schedule.",
      "Staff help with age-appropriate language, classroom safety, and student groups (grades 1–10).",
      "No need to be a trained teacher — you need patience, respect, and willingness to explain clearly.",
    ],
  },
  {
    label: "Why do it",
    summary: "You help students — and grow your own purpose and skills.",
    title: "For them — and for you",
    points: [
      "Students gain role models; you gain purpose and community connection.",
      "Sharing your path sharpens your own communication and leadership.",
      "You help break cycles of poverty by showing practical routes to success.",
    ],
  },
  {
    label: "Success in life",
    summary: "School becomes a path to work they can picture and reach.",
    title: "Turn knowledge into a direction",
    points: [
      "Children learn that school is not abstract — it connects to coding, medicine, trades, design, and more.",
      "They practice asking questions, trying tools, and believing they can learn hard things.",
      "That mindset — curiosity plus discipline — is what carries into matric, college, and work.",
    ],
  },
];

export const volunteerCareerPaths = [
  {
    profession: "Coding & computer lab",
    tag: "Technology",
    whatYouTeach:
      "How websites and apps are built, basic logic, safe internet use, and careers in software.",
    whyItMatters:
      "Digital skills open remote work and higher study. Our lab needs mentors who make technology feel reachable.",
    lifeSuccess:
      "Students see a path from school keyboard to developer, tester, or IT support — roles our alumni have pursued.",
  },
  {
    profession: "Medicine & health",
    tag: "Healthcare",
    whatYouTeach:
      "What doctors, nurses, and community health workers do; hygiene, first aid basics, and how to prepare for science streams.",
    whyItMatters:
      "Many families lack access to health information. You show that caring for others can be a respected career.",
    lifeSuccess:
      "Students understand matric science choices, FSc pre-medical routes, and the discipline required in healthcare.",
  },
  {
    profession: "Electrician & skilled trades",
    tag: "Trades",
    whatYouTeach:
      "Safety with tools, how electrical systems work at a simple level, apprenticeships, and earning with certified skills.",
    whyItMatters:
      "Not every success requires a desk job. Trades offer stable income and pride in craft.",
    lifeSuccess:
      "Students learn that technical diplomas and hard work can support a family — a honest, valued path.",
  },
  {
    profession: "Product manager & business",
    tag: "Leadership",
    whatYouTeach:
      "How teams plan products, listen to users, solve problems, and ship ideas — in language students can picture.",
    whyItMatters:
      "Problem-solving and teamwork apply in every field. You connect classroom projects to real coordination skills.",
    lifeSuccess:
      "Students see leadership as planning, communication, and responsibility — not only authority.",
  },
  {
    profession: "Designer & creative work",
    tag: "Creative",
    whatYouTeach:
      "How design shapes apps, posters, and brands; creativity plus practice; portfolios and freelance possibilities.",
    whyItMatters:
      "Arts and design build confidence and visual thinking — skills useful in marketing, UX, and media.",
    lifeSuccess:
      "Students learn that creativity can be a career when paired with tools and consistency.",
  },
  {
    profession: "Engineering & science",
    tag: "STEM",
    whatYouTeach:
      "How engineers solve daily problems — bridges, machines, energy — and how science exhibitions connect to real jobs.",
    whyItMatters:
      "SAYA runs science and IoT activities. Hands-on demos make physics and math feel useful.",
    lifeSuccess:
      "Students link curiosity in science fair projects to engineering, labs, and invention.",
  },
  {
    profession: "Teacher & education",
    tag: "Education",
    whatYouTeach:
      "Why teaching matters, how to explain ideas simply, and how educators change communities over decades.",
    whyItMatters:
      "Some students will become teachers themselves. Your example dignifies the profession.",
    lifeSuccess:
      "Students respect education as service — not only as something done to them.",
  },
  {
    profession: "Your profession",
    tag: "Open",
    whatYouTeach:
      "Whatever you do day to day — law, farming, finance, media, government, crafts — if you can explain it simply, students need to hear it.",
    whyItMatters:
      "Diversity of role models prevents narrow dreams. Every field widens what children believe is possible.",
    lifeSuccess:
      "The goal is not one career for everyone — it is informed choice and the courage to pursue it.",
  },
];

export const volunteerAiProgram = {
  headline: "Know AI? We need you.",
  intro:
    "Artificial intelligence is changing how we learn, work, and create. Many of our students will use AI tools in school and careers — but only if someone teaches them what it is, how it works, and how to use it responsibly.",
  topics: [
    {
      question: "What is AI?",
      answer:
        "Explain in plain language: software that learns patterns from data — not magic, not a person — and where students already meet it (recommendations, chat tools, phone features).",
    },
    {
      question: "How does it work?",
      answer:
        "Simple picture of data → training → answers; honesty about mistakes and limits; why human judgment still matters.",
    },
    {
      question: "Why does it matter?",
      answer:
        "Future jobs will expect AI literacy. Students in Islamabad deserve the same awareness as privileged schools.",
    },
    {
      question: "How do you build with it?",
      answer:
        "Introduce basics: prompts, small projects, coding connections, or no-code tools — matched to grade level in our computer lab.",
    },
    {
      question: "How do you use it well?",
      answer:
        "Ethics, privacy, cheating vs learning, checking facts, and using AI as a helper — not a replacement for thinking.",
    },
  ],
  callToAction:
    "If you work with AI, study it, or teach it — please volunteer. Help us run workshops, mentor projects, and guide teachers so SAYA stays ahead for our students.",
};

export const volunteerSteps = [
  {
    step: "01",
    title: "Tell us who you are",
    detail: `Email ${siteConfig.email} with your profession, how you want to help, and your available days or hours.`,
  },
  {
    step: "02",
    title: "Short conversation",
    detail:
      "We discuss age groups, session length, and whether you prefer classroom talks, lab support, or mentoring.",
  },
  {
    step: "03",
    title: "Orientation & safety",
    detail:
      "Every volunteer completes safeguarding orientation before working with students — we keep sessions safe and structured.",
  },
  {
    step: "04",
    title: "Teach, mentor, repeat",
    detail:
      "Start with one session. Many volunteers return monthly because students ask when you are coming back.",
  },
];

export const volunteerExpectations = [
  "Use simple language and encourage questions — there are no silly questions.",
  "Follow staff guidance and safeguarding rules at all times.",
  "Respect children, families, and culture; patience is essential.",
  "Share real stories — including struggles — so success feels achievable, not perfect.",
];

export function volunteerMailto(role?: string): string {
  const subject = role ? `Volunteer inquiry — ${role}` : "Volunteer inquiry — SAYA School";
  const body = role
    ? `I am interested in volunteering as: ${role}\n\nMy profession / skills:\n\nMy availability:\n\nWhat I would like to teach or share:`
    : "I would like to volunteer at SAYA School.\n\nMy profession / skills:\n\nMy availability:\n\nWhat I would like to teach or share:";
  return donationMailto(subject, body);
}

export const socialLinks = [
  siteConfig.social.facebook && {
    label: "Facebook",
    href: siteConfig.social.facebook,
    short: "FB",
  },
  siteConfig.social.instagram && {
    label: "Instagram",
    href: siteConfig.social.instagram,
    short: "IG",
  },
  siteConfig.social.twitter && {
    label: "Twitter",
    href: siteConfig.social.twitter,
    short: "X",
  },
].filter(Boolean) as { label: string; href: string; short: string }[];
