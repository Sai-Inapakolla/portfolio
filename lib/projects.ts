export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: string;
  features: string[];
  role: string;
  status: string;
  links: {
    github?: string;
    live?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "teamx",
    name: "TeamX - A Multi-Tenant SaaS Platform",
    description:
      "Production-grade multi-tenant SaaS platform built with secure tenant isolation, RBAC-based access control, JWT authentication, and scalable tenant-aware architecture. Developed using Java, Spring Boot, React.js, MySQL, and REST APIs.",
    longDescription:
      "TeamX is a comprehensive multi-tenant SaaS platform engineered from the ground up for enterprise-grade scalability and security. The platform implements robust tenant isolation at both the application and database layers, ensuring complete data segregation between organizations.\n\nThe system features a sophisticated Role-Based Access Control (RBAC) engine that supports hierarchical permission models, enabling fine-grained control over user capabilities within each tenant. Authentication is handled through JWT tokens with refresh token rotation for maximum security.\n\nThe architecture follows a modular monolith pattern with clear domain boundaries, making it straightforward to extract microservices as the platform scales. The React.js frontend provides a responsive, intuitive dashboard for tenant management, user administration, and real-time analytics.",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "MongoDB",
      "Rest API's",
      "Spring Security",
    ],
    accent: "#00d9ff",
    features: [
      "Secure multi-tenant data isolation with tenant-aware middleware",
      "RBAC engine with hierarchical permission models",
      "JWT authentication with refresh token rotation",
      "Scalable tenant-aware architecture with domain-driven design",
      "Real-time analytics dashboard for tenant management",
      "RESTful API design with comprehensive documentation",
    ],
    role: "Full-Stack Developer",
    status: "Completed",
    links: {
      github: "#",
    },
  },
  {
    slug: "tai",
    name: "TAI - Team Approval Intelligence",
    description:
      "AI-powered loan prediction and approval platform built using the MEAN stack with a Python ML microservice for real-time eligibility analysis. Features role-based approval workflows, REST APIs, and scalable microservice-based architecture.",
    longDescription:
      "TAI (Team Approval Intelligence) bridges the gap between traditional financial workflows and modern AI capabilities. The platform leverages machine learning to provide real-time loan eligibility predictions, dramatically reducing manual assessment time while maintaining accuracy.\n\nThe core ML engine is built as an independent Python microservice using scikit-learn for model training and Flask for serving predictions. The model processes multiple financial indicators — credit score, income, employment history, and debt-to-income ratio — to generate eligibility scores with confidence intervals.\n\nThe MEAN stack powers the main application, with Angular providing a polished frontend for loan officers and applicants alike. The role-based approval workflow supports multi-tier review processes, ensuring compliance with institutional lending policies. MongoDB handles the document-heavy nature of loan applications efficiently.",
    tags: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Python",
      "Express.js",
      "Rest API's",
    ],
    accent: "#f59e0b",
    features: [
      "Real-time ML-powered loan eligibility prediction engine",
      "Multi-tier role-based approval workflow system",
      "Python microservice with scikit-learn model pipeline",
      "Comprehensive REST API with Express.js middleware",
      "Angular dashboard with real-time status tracking",
      "MongoDB document store optimized for financial data",
    ],
    role: "Full-Stack Developer",
    status: "Completed",
    links: {
      github: "#",
    },
  },
  {
    slug: "foodie-genie",
    name: "Foodie Genie",
    description:
      "Foodie Genie is an AI-powered kitchen assistant that helps you turn leftover ingredients into 5-star meals. Using a Content-Based Recommendation System (TF-IDF & Cosine Similarity), it suggests the best recipes based on what you currently have in your fridge.",
    longDescription:
      "Foodie Genie reimagines how people interact with their kitchen by transforming leftover ingredients into culinary inspiration. The platform uses advanced NLP techniques to understand ingredient relationships and match them with a curated recipe database.\n\nAt its core, the recommendation engine employs TF-IDF (Term Frequency–Inverse Document Frequency) vectorization combined with Cosine Similarity to find the most relevant recipes for any combination of ingredients. The model processes over 10,000 recipes, considering not just ingredient matches but also cooking style compatibility and nutritional balance.\n\nThe React.js frontend provides an intuitive ingredient input experience with autocomplete and visual feedback. Users can filter results by cuisine type, cooking time, and difficulty level. The Flask backend handles model inference efficiently, with response times under 200ms for typical queries.",
    tags: ["Python", "Flask", "Machine Learning", "React.js", "Rest API's"],
    accent: "#a78bfa",
    features: [
      "TF-IDF & Cosine Similarity recommendation engine",
      "10,000+ recipe database with intelligent matching",
      "Autocomplete ingredient input with fuzzy search",
      "Cuisine, time, and difficulty-based filtering",
      "Flask API with sub-200ms inference response time",
      "Responsive React.js UI with real-time suggestions",
    ],
    role: "ML & Full-Stack Developer",
    status: "Completed",
    links: {
      github: "#",
    },
  },
  {
    slug: "astroml",
    name: "AstroML",
    description:
      "A Machine Learning based project for Stellar Object Classification and Cosmological Distance Estimation.",
    longDescription:
      "AstroML applies modern machine learning techniques to astronomical data, enabling automated classification of stellar objects and estimation of cosmological distances. The project processes spectral and photometric data from astronomical surveys to categorize celestial bodies into stars, galaxies, and quasars with high accuracy.\n\nThe classification pipeline leverages TensorFlow and Keras for deep learning model development, with scikit-learn providing baseline models for comparison. Feature engineering extracts meaningful patterns from multi-band photometric observations, while dimensionality reduction techniques like PCA help visualize the high-dimensional feature space.\n\nThe React frontend provides an interactive dashboard for exploring classification results, visualizing stellar distributions, and analyzing model performance metrics. Matplotlib-generated visualizations are embedded for detailed spectral analysis and confusion matrix displays.",
    tags: [
      "Python",
      "React",
      "Tensorflow",
      "Keras",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
    ],
    accent: "#ff66b2",
    features: [
      "Deep learning stellar object classification with TensorFlow/Keras",
      "Cosmological distance estimation from photometric data",
      "Multi-band photometric feature engineering pipeline",
      "Interactive React dashboard for result exploration",
      "Comprehensive model evaluation with confusion matrices",
      "PCA-based dimensionality reduction for data visualization",
    ],
    role: "ML Engineer",
    status: "Completed",
    links: {
      github: "#",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
