export const projects = [
  {
    title: "Resume-JD Alignment Scorer",
    domain: "MS Project · Natural Language Processing",
    stack: ["Python", "NLP", "Scikit-learn", "Pandas"],
    problem: "Recruiters and job seekers lack a systematic, objective way to assess how well a resume aligns with a job description - leading to missed opportunities and inefficient screening.",
    objective: "Build an automated system that computes a quantitative match score between a resume and a job description, and surfaces ranked interview questions based on identified skill gaps.",
    approach: "Designed a text processing pipeline using classical NLP techniques (TF-IDF, tokenization, named entity recognition) to extract and compare skill signals from both documents. Developed a custom skill-ranking algorithm to prioritize gaps by relevance.",
    implementation: "Implemented in Python using Scikit-learn and NLTK. The system parsed structured and unstructured text from resumes and JDs, computed cosine similarity for match scoring, and generated a ranked list of likely interview questions weighted by skill gap severity.",
    outcome: "Produced a working end-to-end system that demonstrated measurable accuracy in skill extraction and gap identification. Reinforced practical NLP implementation skills and the intersection of data systems with human decision-making workflows.",
    skills: ["NLP", "Python", "Algorithm Design", "Text Processing", "Data-Driven Decision Making", "Product Thinking"]
  },
  {    
    title: "Comparative Population Dynamics Analysis",
    domain: "MS Project · Statistical Modeling & Predictive Analytics",
    stack: ["R", "Multiple Linear Regression", "Logistic Regression", "Data Visualization"],
    problem: "Population growth patterns across US states are influenced by a complex web of socio-economic factors that are difficult to isolate and quantify using surface-level demographic data alone, limiting the ability to make evidence-based regional planning decisions.",
    objective: "Conduct a rigorous comparative study of population trends across two US states, identify key growth drivers and demographic correlations, and build predictive models capable of forecasting specific population outcomes.",
    approach: "Selected Multiple Linear Regression and Logistic Regression as complementary modeling techniques - linear regression to quantify relationships between socio-economic variables and population growth, and logistic regression to determine the probability of specific demographic outcomes. Variable selection and hypothesis testing were used to ensure only high-impact factors were retained in the final models.",
    implementation: "Managed the full analytical lifecycle in R - from data acquisition and cleaning through variable selection, model development, validation, and visualization. Translated complex statistical outputs into actionable insights by identifying the highest-impact variables influencing regional population trends across both states.",
    outcome: "Produced validated predictive models with measurable accuracy, providing a replicable framework for evidence-based demographic decision-making. Demonstrated ability to manage end-to-end data analysis under academic rigor - from raw data to executive-ready insight.",
    skills: ["Statistical Modeling", "Predictive Analytics", "R", "Data Visualization", "Hypothesis Testing", "Evidence-Based Decision Making", "Analytical Lifecycle Management"]
  },
  {
    title: "Fantasy Web-Series Fan Page",
    domain: "MS Project · Distributed Systems & Full-Stack Web Development",
    stack: ["C#", "ASP.NET MVC", "HTML5", "CSS3", "JavaScript"],
    problem: "As part of a Distributed Systems course, the challenge was to apply full-stack web development principles to a real-world inspired use case - designing and delivering a themed, content-rich website that demonstrated both technical implementation and cohesive front-end presentation.",
    objective: "Design and build a fully functional, heavily themed fan page for Game of Thrones - featuring trivia, popular quotes, and lesser-known facts - while applying distributed systems concepts and full-stack development practices across a three-person team.",
    approach: "Led the development effort across a team of three, structuring the project around the MVC architecture pattern using ASP.NET. Divided responsibilities across the team while maintaining ownership of overall technical direction and delivery. Prioritized thematic consistency in the front-end design, using CSS3 extensively to align the visual experience with the fantasy genre.",
    implementation: "Built the application using C# and ASP.NET MVC for the application layer, with HTML5 and JavaScript handling structure and interactivity. Applied advanced CSS3 styling to create a visually immersive theme appropriate to the Game of Thrones universe. Delivered the fully functional website as a locally hosted application, with all content statically served through the MVC framework.",
    outcome: "Delivered a fully functional, thematically cohesive web application within the course timeline - demonstrating practical application of distributed systems concepts through full-stack implementation. Led a three-person team from architecture through delivery, reinforcing cross-functional coordination and technical leadership skills that directly parallel professional TPM work.",
    skills: ["Full-Stack Web Development", "ASP.NET MVC", "C#", "CSS3", "JavaScript", "Team Leadership", "MVC Architecture", "Front-End Design"]
  },
  {
    title: "Sales Forecasting: Rossmann Store",
    domain: "MS Project · Machine Learning & Predictive Analytics",
    stack: ["SAS Enterprise Miner", "Neural Networks", "Ensemble Models", "Data Preprocessing"],
    problem: "Retail operations face significant financial risk from inaccurate sales forecasting - overstocking ties up capital and increases waste, while stock-outs directly impact revenue and customer satisfaction. Historical sales data alone is insufficient without a model capable of capturing non-linear demand patterns.",
    objective: "Develop a high-accuracy predictive model to forecast retail sales volume for Rossmann stores, and translate model outputs into actionable inventory management strategies that reduce both overstocking and stock-out risk.",
    approach: "Evaluated multiple model architectures - Neural Networks and Ensemble Models - within SAS Enterprise Miner to identify the approach best suited to capturing non-linear patterns in historical sales data. A comparative performance analysis across architectures drove the final model selection, prioritizing accuracy and generalizability over complexity.",
    implementation: "Engineered a data sampling and cleaning pipeline to reduce noise and ensure high-fidelity model inputs. Trained and validated Neural Network and Ensemble Models, iterating on architecture and hyperparameters to optimize forecasting accuracy. Translated final model inferences into strategic inventory recommendations directly addressing overstocking and stock-out scenarios.",
    outcome: "Delivered a validated ensemble forecasting model selected through rigorous comparative analysis. Produced inventory management insights directly applicable to operational decision-making - demonstrating the ability to bridge advanced ML outputs with tangible business strategy.",
    skills: ["Machine Learning", "Neural Networks", "Ensemble Modeling", "SAS Enterprise Miner", "Data Preprocessing", "Predictive Analytics", "Operational Strategy", "Comparative Model Evaluation"]
  },
  {
    title: "Traffic Violation & Compliance Data Architecture",
    domain: "MS Project · Database Engineering & Business Intelligence",
    stack: ["Oracle", "SQL", "Microsoft Visio", "ERD", "ETL"],
    problem: "Multi-county traffic violation data was unstructured and siloed, making it difficult for regional authorities to track compliance trends, analyze enforcement patterns, and generate reliable reporting across jurisdictions.",
    objective: "Design and deploy a normalized relational database system capable of ingesting, structuring, and querying large-scale multi-county traffic violation data - providing a reliable foundation for regional compliance reporting and business intelligence.",
    approach: "Began with a comprehensive Entity Relationship Diagram in Microsoft Visio to map the complex relationships between counties, violation types, and enforcement data before a single line of schema was written. This architecture-first approach ensured normalization standards were embedded by design rather than retrofitted, minimizing data integrity risk downstream.",
    implementation: "Developed and deployed the physical schema in Oracle, adhering strictly to normalization standards across thousands of records. Led the end-to-end ETL process - importing large-scale datasets, resolving schema mismatches, and fine-tuning storage structure for query performance. Authored advanced SQL queries to extract violation trends and county-level compliance metrics, translating raw enforcement data into actionable business intelligence.",
    outcome: "Delivered a fully normalized, query-ready relational database system with validated data integrity across multiple counties. Demonstrated end-to-end data architecture capability - from conceptual ERD through physical deployment to BI reporting - directly applicable to enterprise data infrastructure roles.",
    skills: ["Database Architecture", "Entity Relationship Modeling", "Oracle", "SQL", "ETL Pipeline Management", "Data Normalization", "Business Intelligence", "Compliance Reporting"]
  },
  {
    title: "Indoor Automated Security & Energy Management System",
    domain: "B.Tech Project · Embedded Systems & Hardware Automation",
    stack: ["IR Sensors", "Microcontroller", "IC Board", "7-Segment Display", "Low-Level Logic Programming"],
    problem: "Closed premises face two simultaneous and often unaddressed challenges - unauthorized access going undetected and unnecessary energy consumption from appliances left running in unoccupied spaces. Existing solutions addressed these independently rather than as an integrated system.",
    objective: "Design and implement a single embedded system capable of managing both real-time occupancy-based energy automation and motion-triggered security alerting - operating reliably under continuous conditions with minimal external dependency.",
    approach: "Architected a centralized controller to manage two parallel workstreams from a single hardware platform - an occupancy tracking module driving appliance automation logic, and a motion detection circuit driving security alerts. Designed the system logic so both workstreams operated independently without interference, ensuring neither compromised the reliability of the other.",
    implementation: "Managed the full hardware lifecycle - from circuit design and component selection through soldering, low-level logic programming, and system testing. IR sensors fed real-time people count data to the microcontroller, which automated non-essential appliance control based on occupancy thresholds. A separate IR-based motion detector circuit triggered an integrated alarm system upon detecting unauthorized entry, with a 7-segment display providing real-time occupancy readout.",
    outcome: "Successfully demonstrated a proof-of-concept validating sensor-driven occupancy logic and motion-triggered security alerting under controlled conditions. Demonstrated end-to-end ownership of a hardware-software build from concept through physical assembly - an early application of embedded automation and energy sustainability thinking that directly foreshadowed later work in industrial IoT and hardware-software integration.",
    skills: ["Embedded Systems", "Hardware-Software Integration", "Sensor-Driven Automation", "Circuit Design", "Low-Level Programming", "Systems Integration", "Energy Management", "End-to-End Hardware Lifecycle"]
  },
  {
    id: "optical-theremin",
    title: "Optical Theremin",
    domain: "B.Tech Project · Analog Circuit Design & Prototyping",
    stack: ["Proteus", "LDR / Photoresistor", "Buzzer", "Resistors & Capacitors", "Breadboard / PCB"],
    problem: "Traditional musical instruments require direct physical contact to produce sound, limiting interaction modality and accessibility. Exploring light as a control medium offered an opportunity to build a contactless instrument using fundamental analog circuit principles.",
    objective: "Design and build a fully functional photosensitive circuit that produces sound output with pitch varying in response to light intensity - functioning as a contactless optical musical instrument.",
    approach: "Designed the full circuit in Proteus to validate component behavior and signal flow before physical construction. Used an LDR as the primary sensing element, leveraging its variable resistance under different light intensities to modulate the frequency of the buzzer output - translating light into sound through analog circuit logic.",
    implementation: "Built the circuit on a standard breadboard using an LDR, buzzer, and passive components (resistors and capacitors). Validated simulation results from Proteus against physical prototype behavior, iterating on component values to achieve consistent and responsive pitch variation across a range of light intensities.",
    outcome: "Successfully demonstrated a proof-of-concept producing audible, light-responsive sound output through analog circuit design - validating the core hypothesis of contactless optical instrument interaction. This project directly inspired a subsequent experiment: rebuilding the same circuit without conventional construction materials. <span class='modal-link' data-target='paper-theremin'>See: Paper Theremin →</span>",
    skills: ["Analog Circuit Design", "Proteus Simulation", "Hardware Prototyping", "Sensor Integration", "Signal Modulation", "Iterative Engineering"]
  },
  {
    id: "paper-theremin",
    title: "Paper Theremin",
    domain: "B.Tech Project · Analog Circuit Design & Prototyping",
    stack: ["Proteus", "LDR / Photoresistor", "Copper Tape", "Buzzer", "Resistors & Capacitors"],
    problem: "Having successfully built a functional Optical Theremin on a breadboard, a natural question emerged: could the same circuit be rebuilt without any conventional construction materials - no breadboard, no PCB, no wires? This was a self-initiated challenge to test whether paper and copper tape could serve as a viable conductive medium. <span class='modal-link' data-target='optical-theremin'>See: Optical Theremin →</span>",
    objective: "Rebuild the Optical Theremin circuit using plain paper and copper tape as the sole conductive medium - proving that functional analog circuits can be realized through unconventional materials without compromising core behavior.",
    approach: "Reused the validated Proteus circuit design from the Optical Theremin as the blueprint, isolating the construction medium as the only variable. This allowed a clean comparison between conventional and non-conventional builds, with component behavior and circuit logic held constant.",
    implementation: "Replaced breadboard and wiring entirely with paper and copper tape to route electrical current across the circuit. Integrated the same LDR, buzzer, and passive components into the paper-based layout, producing audible light-responsive sound output consistent with the original Optical Theremin prototype.",
    outcome: "Successfully demonstrated a working proof-of-concept that replicated the core behavior of the Optical Theremin through an entirely non-traditional construction medium - validating the hypothesis that circuit functionality is independent of construction convention. A direct expression of curiosity-driven, first-principles engineering thinking.",
    skills: ["Analog Circuit Design", "Proteus Simulation", "Hardware Prototyping", "First-Principles Thinking", "Non-conventional Materials Engineering", "Iterative Engineering"]
  },
];