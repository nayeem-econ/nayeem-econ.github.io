/* =====================================================================
   SITE CONTENT — edit this file to update the website.
   ---------------------------------------------------------------------
   How to update (on github.com):
   1. Open this file (data.js) in your repository and click the pencil icon.
   2. Change text inside the quotes "...". Keep the commas and brackets.
   3. To ADD an item (a news line, a paper, a talk), copy an existing block
      { ... }, paste it above the first one in that list, and change the text.
   4. Click "Commit changes". The live site updates in 1–2 minutes.
   Tip: newest items go FIRST in every list.
   ===================================================================== */

window.SITE = {

  profile: {
    name: "Md. Nayeem Hasan Pramanik",
    title: "PhD Researcher in Agricultural Economics",
    role: "Research Assistant, SPIA-funded MIXTAPE Project",
    badges: ["PhD Researcher", "Applied Economist"],
    affiliation: "Department of Agricultural Economics, Bangladesh Agricultural University",
    location: "Bangladesh Agricultural University, Mymensingh, Bangladesh",
    email: "nayeem.econ@gmail.com",
    /* footer copyright line: "© year Nayeem Hasan. All rights reserved." with the name linked */
    /* contact form: messages are delivered to this email through FormSubmit (free, no account).
       The first message triggers an activation email from FormSubmit — click "Activate" once. */
    formEndpoint: "https://formsubmit.co/ajax/nayeem.econ@gmail.com",
    copyrightName: "Nayeem Hasan",
    copyrightLink: "https://www.facebook.com/f.nhrahat",
    photo: "assets/img/profile.jpg",
    cv: "assets/cv/Nayeem_Pramanik_CV.pdf",
    bio: [
      "I am an applied economist working on agricultural technology adoption, household welfare and the environment in Bangladesh. I am a PhD researcher in the Department of Agricultural Economics at Bangladesh Agricultural University and a Research Assistant on the SPIA-funded MIXTAPE project, jointly led by Cornell University and Bangladesh Agricultural University, which studies how farmers adopt CGIAR innovations in rice and aquaculture.",
      "My research combines primary household surveys with econometric methods to measure how technologies, environmental pressures and household behaviour shape incomes, health spending, poverty and wellbeing. I earned my BSS (Honours) and MSS in Economics from Pabna University of Science and Technology, securing first position in both."
    ]
  },

  /* PROFILE LINKS — shown on the left card and in the footer.
     A button appears only when url is filled in. footer: false keeps it off the footer. */
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=mv0qyiMAAAAJ&hl=en" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Md-Nayeem-Hasan-Pramanik" },
    { label: "ORCID",          url: "https://orcid.org/0000-0001-8731-4042" },
    { label: "Scopus",         url: "https://www.scopus.com/authid/detail.uri?authorId=57989605000" },
    { label: "Web of Science", url: "https://www.webofscience.com/wos/author/record/QTU-4509-2026" },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/nhrahat/" },
    { label: "GitHub",         url: "https://github.com/nayeem-econ", footer: false }
  ],

  interests: [
    "Agricultural economics",
    "Technology adoption and impact evaluation",
    "Environmental economics",
    "Household welfare, poverty and health",
    "Applied and panel-data econometrics",
    "Macroeconomics"
  ],

  /* NEWS — add the newest line at the top */
  news: [
    { date: "Nov 2026", text: "Paper on maize income and rural poverty published in <em>Discover Sustainability</em>." },
    { date: "Sep 2026", text: "Paper on financial vulnerability, diet and student mental health published in <em>Scientific Reports</em>." },
    { date: "Jun 2026", text: "Paper on the hidden healthcare costs of brickfields published in the <em>Journal of Humanities and Social Science, PUST</em>." },
    { date: "Sep 2025", text: "Joined the SPIA-funded MIXTAPE project (Cornell University and Bangladesh Agricultural University) as a Research Assistant." },
    { date: "Jul 2025", text: "MSS in Economics result published: first position, CGPA 3.96 out of 4.00." },
    { date: "Jun 2025", text: "Presented two papers at the 1st National Conference “Towards a Sustainable Future”, Pabna University of Science and Technology." },
    { date: "May 2025", text: "Paper on environmental degradation and living standards published in <em>PLOS Climate</em>." }
  ],

  education: [
    {
      degree: "PhD in Agricultural Economics (ongoing)",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "In progress",
      details: "Dissertation: Innovation–Wellbeing Nexus: Adoption Dynamics, Productivity, Efficiency and Household Welfare in the Aquaculture Sector of Bangladesh. Supervisor: Prof. Dr. A. H. M. Saiful Islam."
    },
    {
      degree: "Master of Social Science (MSS) in Economics, Thesis Group",
      institution: "Pabna University of Science and Technology",
      period: "2021 – 2022",
      grade: "CGPA 3.96 / 4.00 · First position",
      details: "Thesis: Economic Analysis of Brickfields Activities on Agricultural Production and Public Health: A Cross-Sectional Study of Pabna District in Bangladesh. Supervisor: Redwan Ahmed, Associate Professor."
    },
    {
      degree: "Bachelor of Social Science (BSS) Honours in Economics",
      institution: "Pabna University of Science and Technology",
      period: "2017 – 2021",
      grade: "CGPA 3.84 / 4.00 · First position",
      details: "Final-year project: Exploring the Nexus between Environmental Degradation and Living Standard in Bangladesh: Evidence from ARDL and ECM Technique. Supervisor: Md. Nehal Hasnain."
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Rangpur Government College",
      period: "2016",
      grade: "GPA 4.92 / 5.00"
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Katgara High School",
      period: "2014",
      grade: "GPA 5.00 / 5.00"
    }
  ],

  experience: [
    {
      role: "Research Assistant",
      tag: "Current appointment",
      org: "MIXTAPE project (Monitoring Impacts for Technology Adoption and Program Engagement in Bangladesh)",
      period: "Sep 2025 – present",
      link: { label: "MIXTAPE project", url: "https://www.elm-lab.org/mixtape" },
      details: "SPIA-funded project jointly led by Cornell University and Bangladesh Agricultural University on the adoption dynamics of CGIAR innovations in rice and aquaculture. I support household data collection in the field, including survey work in Melandaha Upazila, Jamalpur."
    },
    {
      role: "Research Associate",
      tag: "Research project",
      org: "Assessing Farmers' Climate Change Vulnerability and Adaptation Strategy in Bangladesh — Department of Economics, PUST",
      period: "FY 2024–25",
      details: "Funded by the Call for Research and Evaluation Committee, Pabna University of Science and Technology (UGC). Reviewed literature, prepared the interview schedule, and took part in data collection, data processing, analysis and report writing."
    },
    {
      role: "Research Associate",
      tag: "Research project",
      org: "Analyzing Economic and Environmental Efficiency of Onion Production in Pabna District, Bangladesh: A Data Envelopment Analysis Approach — Department of Economics, PUST",
      period: "FY 2023–24",
      details: "Funded by the Call for Research and Evaluation Committee, Pabna University of Science and Technology (UGC). Same responsibilities across the project cycle, from questionnaire design to reporting."
    },
    {
      role: "MSS Thesis",
      tag: "Master's thesis",
      org: "Economic Analysis of Brickfields Activities on Agricultural Production and Public Health: A Cross-Sectional Study of Pabna District in Bangladesh",
      period: "2021 – 2022 · Department of Economics, PUST",
      details: "Studied how brickfield activities affect nearby farms and households in Pabna District, combining household survey data on crop production, healthcare spending and socio-economic wellbeing. The work led to a conference paper on the value of farm losses (2025) and a journal article on the hidden healthcare costs of brickfields (2026).",
      supervisor: "Redwan Ahmed, Associate Professor, Department of Economics, Pabna University of Science and Technology"
    },
    {
      role: "BSS Project",
      tag: "Undergraduate project",
      org: "Exploring the Nexus between Environmental Degradation and Living Standard in Bangladesh: Evidence from ARDL and ECM Technique",
      period: "2017 – 2021 · Department of Economics, PUST",
      details: "Time-series analysis of Bangladesh for 1990–2021 using ARDL bounds testing and an error-correction model to examine how energy consumption and living standards relate to CO₂ emissions. The project was published in PLOS Climate (2025).",
      supervisor: "Md. Nehal Hasnain, Assistant Professor, Department of Economics, Pabna University of Science and Technology"
    }
  ],

  /* PUBLICATIONS — newest first.
     status: "Published" or "In press" or "Under review"
     Your own name is made bold automatically if written exactly "Pramanik, M. N. H." */
  publications: [
    {
      year: "2026",
      status: "Published",
      authors: "Ahmed, R., Tithi, R. H., Pramanik, M. N. H., Rana, M. S., & Fariha, J.",
      title: "Contribution of maize production to household income and poverty measures among smallholder farmers in Pabna Sadar Upazila, Bangladesh",
      journal: "Discover Sustainability",
      date: "17 Nov",
      details: "Published online 17 November 2026",
      badge: "Scopus Q1",
      doi: "10.1007/s43621-026-05237-8",
      pdf: "",
      summary: "Using records from 300 maize-farming households, net maize income makes up about a fifth of household income. Counting it lowers the poverty headcount from 62.0% to 46.7%, and the poverty gap and severity indices fall as well."
    },
    {
      year: "2026",
      status: "Published",
      authors: "Pramanik, M. N. H., Aktar, M. S., & Ahmed, R.",
      title: "Financial vulnerability and dietary diversity are associated with mental health and academic performance among Bangladeshi university students",
      journal: "Scientific Reports",
      date: "15 Sep",
      details: "Published online 15 September 2026",
      badge: "Scopus Q1",
      doi: "10.1038/s41598-026-71891-7",
      pdf: "",
      summary: "A survey of 400 undergraduates at four public universities in northern Bangladesh finds 48.8% screening positive for probable major depression. Greater financial vulnerability is linked to more severe depression and lower CGPA, while higher dietary diversity is linked to better outcomes."
    },
    {
      year: "2026",
      status: "Published",
      authors: "Pramanik, M. N. H., & Ahmed, R.",
      title: "The hidden costs of brickfields: Healthcare expenditure and socio-economic dissatisfaction in rural Bangladesh",
      journal: "Journal of Humanities and Social Science, PUST",
      date: "Jun",
      details: "2(2), 1–23. ISSN 2959-1503",
      badge: "",
      doi: "",
      pdf: "assets/papers/Pramanik_Ahmed_2026_Brickfields_JHSS.pdf",
      summary: "Comparing 300 households in Pabna District, families living near brickfields spend about Tk 2,900 more each month on healthcare and have 2.11 times the adjusted odds of reporting socio-economic dissatisfaction."
    },
    {
      year: "2025",
      status: "Published",
      authors: "Pramanik, M. N. H., Al-Amin, M., & Hasnain, M. N.",
      title: "Assessing the impact of household smoking habits on children's education spending: A case study of Pabna District in Bangladesh",
      journal: "Journal of Humanities and Social Science, PUST",
      date: "Jun",
      details: "2(1), 129–148. ISSN 2959-1503",
      badge: "",
      doi: "",
      pdf: "assets/papers/Pramanik_2025_Smoking_Education_Spending_JHSS.pdf",
      summary: "In a survey of 302 households, smoking households spend Tk 422.71 less per month on their children's education than non-smoking households, about 7.3% of income against 8.8%."
    },
    {
      year: "2025",
      status: "Published",
      authors: "Pramanik, M. N. H., & Hasnain, M. N.",
      title: "Exploring the nexus between environmental degradation and living standard in Bangladesh: Evidence from ARDL and ECM technique",
      journal: "PLOS Climate",
      date: "9 May",
      details: "4(5), e0000421",
      badge: "Scopus Q1",
      doi: "10.1371/journal.pclm.0000421",
      pdf: "",
      summary: "ARDL bounds testing and an error-correction model on 1990–2021 data show that energy consumption raises per-capita CO₂ emissions while GDP per capita lowers them in the long run, with about 67% of any disequilibrium corrected each period."
    },
    {
      year: "2022",
      status: "Published",
      authors: "Alam, M., Al-Mamun, M., Pramanik, M. N. H., et al.",
      title: "Paradigm shifting of education system during COVID-19 pandemic: A qualitative study on education components",
      journal: "Heliyon",
      date: "",
      details: "8, e11927",
      badge: "Scopus Q1",
      doi: "10.1016/j.heliyon.2022.e11927",
      pdf: "",
      summary: "A phenomenological study based on in-depth and key-informant interviews documents how the pandemic changed curricula, syllabi, assessment and teaching methods in Bangladesh as education moved online."
    }
  ],

  /* UNDER REVIEW / ONGOING — add your submitted or ongoing manuscripts here.
     status: "Under review", "Revise & resubmit", "Submitted" or "Ongoing". Example:
     { title: "Paper title", authors: "Pramanik, M. N. H., & Islam, A. H. M. S.", journal: "Journal name", status: "Under review", year: "2026" },
  */
  manuscripts: [
  ],

  conferences: [
    {
      title: "Valuing the Harm Brickfields Cause to Agricultural Production: Evidence from Pabna District, Bangladesh",
      cert: "assets/img/certificates/conference-brickfields-2025.jpg",
      event: "1st National Conference “Towards a Sustainable Future: Economic Stability, Political Reforms and Socio-cultural Transformations in Bangladesh”, Faculty of Humanities and Social Science, Pabna University of Science and Technology",
      date: "28 June 2025"
    },
    {
      title: "Analyzing Environmental Efficiency of Onion Production in Pabna District of Bangladesh: A Data Envelopment Analysis Approach",
      cert: "assets/img/certificates/conference-onion-dea-2025.jpg",
      event: "1st National Conference “Towards a Sustainable Future: Economic Stability, Political Reforms and Socio-cultural Transformations in Bangladesh”, Faculty of Humanities and Social Science, Pabna University of Science and Technology",
      date: "28 June 2025"
    }
  ],

  /* FIELDWORK — add photos later as: photos: ["assets/img/field/pabna-1.jpg", "..."] */
  fieldwork: [
    {
      title: "MIXTAPE household survey",
      place: "Melandaha Upazila, Jamalpur",
      details: "Field data collection on the adoption of CGIAR rice and aquaculture innovations for the MIXTAPE project.",
      photos: []
    },
    {
      title: "Riverbank erosion and farm losses survey",
      place: "Padma and Jamuna riverbanks, Pabna District",
      details: "Supervised a five-day survey of 300 rice and banana farming households to quantify erosion-related production losses and study farmers' risk behaviour and perceptions.",
      photos: []
    }
  ],

  awards: [
    { title: "First position, MSS in Economics", org: "Pabna University of Science and Technology", year: "2025" },
    { title: "Mushtaq Rahman Scholarship (2022 and 2023)", org: "Department of Economics, PUST — for academic merit, leadership and extracurricular involvement", year: "2022–23" },
    { title: "First position, BSS (Honours) in Economics", org: "Pabna University of Science and Technology", year: "2023" },
    { title: "University Merit Scholarship, every year of the BSS programme", org: "Scholarship Section, Pabna University of Science and Technology (session 2017–18)", year: "" }
  ],

  /* TRAINING — cert: path to the certificate image (shows a "View certificate" button) */
  training: [
    { date: "Nov 2024 – Jan 2025", title: "Microsoft Word & Excel (60 hours)", org: "Department of CSE, PUST · EDGE Project, Bangladesh Computer Council", type: "Training", text: "60-hour training conducted by the CSE Department, PUST, under the Enhancing Digital Government and Economy (EDGE) project, ICT Division.", cert: "assets/img/certificates/edge-word-excel-2025.jpg" },
    { date: "Jul – Dec 2023", title: "Diploma in Software Application Course", org: "Postal Academy, Rajshahi", type: "Diploma", text: "Six-month diploma course, July–December 2023." },
    { date: "Apr 2022", title: "R Essentials (R programming)", org: "Statistical Research Consultants Bangladesh (SRCBD)", type: "Training", text: "12-hour training on R programming (2, 8 and 9 April 2022).", cert: "assets/img/certificates/srcbd-r-essentials-2022.jpg" },
    { date: "May 2021", title: "Enjoy Publishing Your Research with Ease", org: "Statistical Research Consultants Bangladesh (SRCBD)", type: "Workshop", text: "Day-long workshop on preparing and publishing research articles.", cert: "assets/img/certificates/srcbd-publishing-workshop-2021.jpg" },
    { date: "Apr – Jun 2021", title: "SPSS & Data Analysis", org: "Dhaka University Research Society (DURS)", type: "Training", text: "Training on SPSS and data analysis, 20 April – 11 June 2021.", cert: "assets/img/certificates/durs-spss-2021.jpg" },
    { date: "Feb – Apr 2021", title: "Research Course: Basic to Advance", org: "Research Help Bangladesh", type: "Course", text: "30 lectures with research software: Zotero, Mendeley, SPSS, NVivo, KoBoToolbox and LaTeX.", cert: "assets/img/certificates/research-help-course-2021.jpg" },
    { date: "Sep 2019", title: "Writing, Presenting, and Publishing Academic Papers", org: "South Asian Network on Economic Modeling (SANEM) · The World Bank", type: "Workshop", text: "Workshop on writing, presenting and publishing academic papers, held at SANEM, Dhaka.", cert: "assets/img/certificates/sanem-workshop-2019.jpg" }
  ],

  /* STATS — the numbers in the counter strip */
  stats: [
    { value: 6, suffix: "",  label: "Journal articles" },
    { value: 4, suffix: "",  label: "Scopus Q1 papers" },
    { value: 2, suffix: "",  label: "Conference talks" },
    { value: 3, suffix: "",  label: "Research projects" }
  ],

  /* EXPERTISE — icon can be: "chart", "field", "code" or "book" */
  expertise: [
    {
      icon: "chart", title: "Econometrics and impact analysis", sub: "Cross-section, time-series and panel data",
      items: [
        "<b>Panel and causal methods:</b> panel-data models for technology adoption and household welfare.",
        "<b>Time series:</b> ARDL bounds testing, error-correction models, Granger causality.",
        "<b>Microeconometrics:</b> logit, probit and ordered probit, OLS with robust standard errors.",
        "<b>Welfare and efficiency:</b> FGT poverty indices, bootstrap inference, data envelopment analysis."
      ]
    },
    {
      icon: "field", title: "Survey design and fieldwork", sub: "Primary household data in rural Bangladesh",
      items: [
        "<b>Instruments:</b> questionnaire and interview-schedule design for farm households.",
        "<b>Digital collection:</b> KoboToolbox and SurveyCTO forms, field-team supervision.",
        "<b>Field experience:</b> surveys with rice, banana, maize and onion farmers in Pabna and Jamalpur.",
        "<b>Data quality:</b> cleaning, coding and processing of field data for analysis."
      ]
    },
    {
      icon: "code", title: "Software", sub: "Statistical and research tools",
      items: [
        "<b>Statistics:</b> Stata, SPSS, R, EViews, Excel.",
        "<b>Writing and references:</b> LaTeX, Zotero, Mendeley.",
        "<b>Qualitative:</b> NVivo (trained)."
      ]
    }
  ],

  /* GALLERY — add photos here after uploading them to assets/img/gallery/
     category: "Fieldwork", "Conference", "Award" or anything you like */
  gallery: [
    /* { src: "assets/img/gallery/jamalpur-1.jpg", title: "MIXTAPE survey", caption: "Household interview in Melandaha, Jamalpur", category: "Fieldwork" }, */
    { src: "assets/img/gallery/pust-conference-2025.jpg", title: "1st National Conference, PUST", caption: "Presenting research at the 1st National Conference, Faculty of Humanities and Social Science, Pabna University of Science and Technology (28 June 2025)", category: "Conference" }
  ],

  /* REFERENCES — contact details are left out on purpose; add an email only with the person's permission */
  references: [
    { name: "Prof. Dr. A. H. M. Saiful Islam", title: "Professor, Department of Agricultural Economics", org: "Bangladesh Agricultural University, Mymensingh", email: "saifulislam.econ@bau.edu.bd", photo: "assets/img/references/saiful-islam.jpg", relation: "PhD supervisor" },
    { name: "Redwan Ahmed", title: "Associate Professor, Department of Economics", org: "Pabna University of Science and Technology", email: "red1eco@yahoo.com", photo: "assets/img/references/redwan-ahmed.jpg", relation: "MSS thesis supervisor" },
    { name: "Md. Nehal Hasnain", title: "Assistant Professor, Department of Economics", org: "Pabna University of Science and Technology", email: "nehalecon@pust.ac.bd", photo: "assets/img/references/nehal-hasnain.jpg", relation: "BSS project supervisor" }
  ],

  /* EXTRA-CURRICULAR — grouped by organisation */
  leadership: [
    {
      org: "Economics Association, Department of Economics, Pabna University of Science and Technology",
      roles: [
        { period: "Nov 2024 – Jul 2025", role: "Vice President", text: "Organised departmental programmes, meetings and events for the association." },
        { period: "Feb 2022 – Oct 2024", role: "Joint Secretary", text: "Organised departmental programmes, meetings and events, working closely with fellow members." }
      ]
    }
  ],

  blog: {
    name: "Econbeats",
    url: "https://econbeats.blogspot.com",
    text: "An economics blog I wrote earlier, with short pieces explaining economic ideas for a general audience."
  }
};
