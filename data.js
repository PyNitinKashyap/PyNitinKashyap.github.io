// ============================================================
//  EDIT ONLY THIS FILE to update your whole portfolio.
//  Everything on the page is rendered from this object.
// ============================================================
const PORTFOLIO = {
  name: "Nitin Kashyap",
  roles: ["Data Engineer", "Python Developer", "ETL & Automation", "FastAPI Backend Dev"],
  location: "Delhi, India",
  email: "nitinpowerkashyap121@gmail.com",
  phone: "+91-9599826394",

  // >>> CHANGE THESE <<<
  github: "PyNitinKashyap",        // used to load your live repositories
  linkedin: "www.linkedin.com/in/nitin-kashyap-324366280",

  // Resume holder: put your PDF at this path inside the repo
  resumeFile: "resume/Nitin_Kashyap_Resume.pdf",

  summary:
    "Data Engineer with 2 years 9 months of experience (including a 1-year internship) designing, " +
    "developing and maintaining data pipelines. I automate ETL workflows, work with structured and " +
    "unstructured data, and build scalable APIs using Python, SQL, MongoDB and FastAPI. Strong background " +
    "in web scraping, OCR integration and data automation for analytics and decision-making.",

  stats: [
    { value: "2.9+", label: "Years experience" },
    { value: "4",    label: "Projects built" },
    { value: "80%",  label: "Data accuracy gain" },
    { value: "7+",   label: "Databases & search tools" }
  ],

  skills: {
    "Languages":        ["Python", "HTML/CSS", "Shell scripting"],
    "Databases":        ["MongoDB", "MySQL", "SQL Server", "NoSQL", "Elasticsearch"],
    "Frameworks & APIs":["FastAPI", "REST API", "Django", "Flask"],
    "ML & Data":        ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "SciPy", "LangChain", "OpenAI API", "Prompt Engineering"],
    "Scraping & OCR":   ["BeautifulSoup", "Selenium", "EasyOCR", "pytesseract", "Whisper AI", "RegEx"],
    "Cloud & Tools":    ["AWS S3", "Google Cloud Platform", "Docker", "Git", "Linux"]
  },

  experience: [
    {
      role: "Software Developer / Data Engineer",
      company: "Legit Quest",
      place: "New Delhi, India",
      period: "Nov 2023 – Present",
      points: [
        "Developed FastAPI-based microservices for serving and processing ingested data.",
        "Optimized MongoDB queries and ETL performance to meet daily SLAs.",
        "Conducted data validation, debugging and version control using Git and Linux.",
        "Designed custom ETL pipelines using Python, Selenium and Beautiful Soup for retail datasets.",
        "Built OCR-based extraction workflows with EasyOCR and PyTesseract for scanned documents.",
        "Automated dataset updates, integrated time-series data for analytics dashboards, and implemented monitoring scripts for error handling and anomaly detection."
      ]
    }
  ],

  projects: [
    {
      title: "AI Chatbot",
      period: "Mar 2026 – Apr 2026",
      tech: ["Python", "FastAPI", "OpenAI API", "LangChain", "MongoDB", "Elasticsearch", "Web Scraping"],
      points: [
        "AI-powered chatbot for intelligent query handling and conversational responses.",
        "LLM integration for natural-language understanding and context-aware replies.",
        "Document retrieval and search pipelines on Elasticsearch and MongoDB.",
        "Web scraping + OCR extraction feeding the chatbot knowledge base; conversation history and prompt optimization."
      ],
      repo: ""   // e.g. "https://github.com/you/ai-chatbot"
    },
    {
      title: "SciCalculator",
      period: "Oct 2026 – Oct 2026",
      tech: ["Python","Tkinter","Math","AST-based expression evaluation"],
      points: [
        "Standard Calculator: Addition, subtraction, multiplication, division, percentages, and powers.",
        "Scientific Calculator: Trigonometric functions, inverse trigonometry, logarithms, square roots, factorials, and mathematical constants.",
        "Unit Converter: Length, weight, temperature, time, data storage, area, volume, speed, energy, pressure, power, angle.",
        "Calculation History: Review, reuse, and clear previous calculations.",
        "Keyboard Support: Perform calculations using your keyboard.",
        "Memory Support: Store and recall calculator values.",
        "Graphical Interface: Built using Python's Tkinter library."
      ],
      repo: "https://github.com/PyNitinKashyap/SciCalculator"
    },
    {
      title: "Weather-Forecasting-Smart-Recommendation-System",
      period: "Jan 2026 – Mar 2026",
      tech: ["Python", "Scikit-learn", "NumPy", "Pandas", "Django", "MongoDB"],
      points: [
        "ML-based system predicting next-day temperature and humidity.",
        "Real-time data via OpenWeatherMap API with preprocessing and feature engineering.",
        "Django frontend showing live weather and 1-day forecast; automated prediction pipeline.",
        "Generate clothing and essential-item recommendations."
      ],
      repo: "https://github.com/PyNitinKashyap/Weather-Forecasting-Smart-Recommendation-System"
    },
    {
      title: "Electronics Scraper",
      period: "Feb 2022 – Aug 2022",
      tech: ["Python", "MongoDB", "Django", "AWS"],
      points: [
        "Time-series data scraper with dynamic schema detection and a Django front/back-end.",
        "Raised data accuracy by 80% through logging and error-handling layers.",
        "Modular architecture supporting ingestion from multiple sources."
      ],
      repo: ""
    }
  ],

  education: [
    { degree: "Bachelor of Computer Application (BCA)", school: "IGNOU, New Delhi", period: "Jun 2021 – Jun 2024" }
  ],

  certifications: ["Legit Quest: Data Ingestion & Automation / Software Development Internship"],
  languages: [{ name: "Hindi", level: "Native" }, { name: "English", level: "Working proficiency" }]
};
