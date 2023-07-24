const executiveBoard = [
  {
    name: "PRATINAV SETH",
    post: "CO-PRESIDENT",
    researchArea:
      "Trustworthy AI, Uncertainity Quantification, Medical Imagery and Computer Vision",
    message:
      "Life is Uncertain! So, let's make the world better by quantifying it's uncertainity and making AI trustworthy!",
    image: "Pratinav_Seth.jpg",
  },
  {
    name: "SANSKRUTI CHOUDHARI",
    post: "CO-PRESIDENT",
    researchArea: "Drug delivery systems, adsorption, metal-organic frameworks",
    message:
      "You'll always find her with a cup of coffee in her hand (yes, even in class). If she isn't working in a lab, she's probably watching Gilmore Girls (again!)",
    image: "Sanskruti_RSM.jpeg",
  },
  {
    name: "AYUSH KUMAR",
    post: "TECHNICAL HEAD, EXPERTISE HEAD - MATHEMATICS",
    researchArea:
      "Computational mathematics, machine learning, applied graph theory",
    message:
      "I'm interested in studying algorithmic techniques to solve problems. I listen to classic rock, play the piano and enjoy a good round of tennis",
    image: "AYUSH_KUMAR.jpg",
  },
  {
    name: "SAURABH CHAUGHULE",
    post: "TECHNICAL SECRETARY",
    researchArea:
      "UAVs and UGV modelling, Mechanical Structures and Simulation studies.",
    message:
      "He is someone who can easily get lost in his crazy little projects. One moment he'll be building a drone, and the very next moment, he'll be 3D printing a lightsaber. He loves to spend his time in his blue LED-flashed room surrounded by all sorts of gadgets, always searching for cool stuff to grab everyone's attention. Additionally, he is a big fan of F1.",
    image: "Saurabh_Chaughule.jpeg",
  },
  {
    name: "ANANYA GUPTA",
    post: "GENERAL SECRETARY",
    researchArea: "Artificial Intelligence, Computer Vision",
    message:
      "Meet Ananya, a passionate individual dedicated to making a meaningful impact on human health through research. Ananya is known for her organization and focus, but she is also the go-to person for spontaneous plans, bringing excitement and spontaneity to any situation. In her free time, Ananya loves to indulge in her passion for Spanish music. Ananya brings a unique blend of expertise and creativity to the table.",
    image: "Ananya_Gupta.jpeg",
  },
];
const technicalTeam = [
  {
    name: "PRATHAM JOSHI",
    post: "CO-EXPERTISE HEAD OF BIOTECHNOLOGY",
    researchArea:
      "Genetic Engineering, Downstream processes, Ecology and Evolution",
    message:
      "Charms his way into the hearts of people with his kind and comforting aura. He is well-organized and reliable. Cracks a lot of lame jokes. Loves Dogs. Enjoys music and singing. Loves cycling. Enjoys watching, and analyzing movies and shows. Dreams of becoming a top researcher in Biotechnology.",
    image: "Pratham_Joshi.jpg",
  },
  {
    name: "SHREYA SIVARAM",
    post: "CO-EXPERTISE HEAD - BIOTECHNOLOGY",
    researchArea: "Environmental biology, ecology and sustainability",
    message:
      "Can talk about any topic under the sun as long as there is an unlimited supply of coffee. Wants to create an impact on this world by helping tackle issues of climate change and environment degradation.",
    image: "shreya_sivaram.jpg",
  },
  {
    name: "ANWAY DAS",
    post: "EXPERTISE HEAD - ELECTRONICS",
    researchArea: "Signal Processing and Embedded System Design",
    message: "Interested in Electronics and aligned technical fields",
    image: "Anway_Das.jpeg",
  },
  {
    name: "ADITHI BHAT",
    post: "EXPERTISE HEAD - CYBERSECURITY",
    researchArea: "Quantum Computing, Ad-hoc networks, Cryptography",
    message:
      "An over-optimistic, slightly introverted wannabe researcher with a zest for learning and life. She is also a believer that quantum [insert any tech] is magical and swears to remain a fervent feminist forever.",
    image: "Adithi_Bhat.PNG",
  },
  {
    name: "AKHILESH JHAWAR",
    post: "CO-EXPERTISE HEAD - AEROSPACE AND AERONAUTICS",
    researchArea:
      "Space Structures, Aircraft Engineering, Machine Design, Space Robotics",
    message:
      "If you have a problem, he definitely has a solution. A resourceful individual, Akhilesh is the oldest board member we have at a whopping 102 years old! He enjoys roasting people at any given chance. He is also a foodie who is not afraid of trying new things and firmly believes that he is a great chef because he can make french fries in a sandwich-maker. He is a pyromaniac who will flame test anything flammable (volini really burns) in sight and then try to write a paper on it.",
    image: "Akhilesh_Jhawar.jpg",
  },
  {
    name: "SHUBHAKRITI GUPTA",
    post: "CO-EXPERTISE HEAD - AEROSPACE & AERONAUTICS",
    researchArea:
      "Spacecraft dynamics and control, satellite systems, orbital mechanics",
    message:
      "If you ever find someone randomly taking pictures of the stars or the sky, it is probably her. She can act like a crazy kid when it comes to all things space. If you ever wanna look for her in a crowd of people, probably go for the shortest one. Always hungry for a pizza but will also pick out any veggies.",
    image: "Shubhakriti_Gupta.jpeg",
  },
  {
    name: "MAANVI SINGH",
    post: "EXPERTISE HEAD - ROBOTICS",
    researchArea:
      "Path Planning and Navigation, Multi-Robot Systems, Autonomous Robots",
    message:
      "As a former robotics aficionado with an unwavering love for technology, she believes in pursuing diverse interests with equal enthusiasm. When she's not deliberating on the latest sneaker drops or streetwear trends, you can find her strumming her guitar or soaking up the sun at the beach. She's always thrilled to connect with others to share her passion!",
    image: "Maanvi_Singh.JPG",
  },
  {
    name: "KUSHAAN CHOKSI",
    post: "EXPERTISE HEAD - CHEMICAL ENGINEERING",
    researchArea: "Sustainable energy, carbon-capture systems, economics",
    message:
      "He loves to listen more than he loves to talk (he talks a lot). Probably the only person still obsessed with House M.D. and Fallen Angels 1995",
    image: "Kushaan_Choksi.png",
  },
  {
    name: "SHISHIR SEN",
    post: "EXPERTISE HEAD - GRAPHICS AND WEB DEVELOPMENT",
    researchArea: "Product Development, Satellite Tech, Aerospace",
    message:
      "Shishir is a designer with a talent for creating clean and innovative designs. Alongside his design expertise, he also specializes in web development and aspires to become a successful product manager. Beyond his professional pursuits, Shishir has a diverse range of interests including a fascination with the aerospace industry, a love for basketball, and a passion for alt-rock music. Shishir's fiery enthusiasm drives him both on the court and at his screen, whether he's dribbling the ball or bringing his creative ideas to life",
    image: "Shishir_Sen.jpg",
  },
  {
    name: "NEETIGYA PODDAR",
    post: "EXPERTISE HEAD - ARTIFICIAL INTELLIGENCE",
    researchArea: "Machine learning, Computer vision",
    message:
      "He loves talking to you about pop culture and history of scientific discoveries. You can approach him for anything ML related especially if it's for computer vision or something novel.",
    image: "Neetigya_Poddar.jpg",
  },
  {
    name: "TANMAY GOSWAMI",
    post: "EXPERTISE HEAD - HUMANITIES AND PSYCHOLOGY",
    researchArea:
      "Psychology, History, Policy Research, Psychometry, Aerodynamics, Art, Literature, Humanities",
    message:
      "`Time is an illusion, lunchtime doubly so` You can either find him working on something, romanticizing life, or questing for 42. With a love for complexes and structures, Tanmay aims to gift the world a piece of itself",
    image: "TANMAY_GOSWAMI.jpg",
  },
  {
    name: "UJJWAL SHARMA",
    post: "EXPERTISE HEAD - MATERIAL SCIENCES",
    researchArea: "Structural Engineering and Concrete Technology",
    message:
      "A civil engineering student who is not your average academic, Having a unique blend of interests that make him stand out in a crowd. With a love for all genres of music and a passion for the Harry Potter series. A quirky personality and full of weird set of experiences.",
    image: "Ujjwal_Sharma.jpg",
  },
  {
    name: "SHRUTI",
    post: "CO-EXPERTISE HEAD - RENEWABLE ENERGY AND HEAT TRANSFER",
    researchArea:
      "Renewable Energy, Sustainable Development, Hydrogen as an alternative energy source",
    message:
      "A social butterfly, an Italian cuisine lover, a novice cook and a Big Bang Theory addict.",
    image: "SHRUTI.jpeg",
  },
  {
    name: "SANA SHETTY",
    post: "CO-EXPERTISE HEAD - RENEWABLE ENERGY AND HEAT TRANSFER",
    researchArea: "Renewable Energy, Sustainable Development, Solar Energy",
    message: "Interested in Renewable Energy and aligned technical fields",
    image: "sana_shetty.jpeg",
  },
  {
    name: "UDEET MITTAL",
    post: "EXPERTISE HEAD - PHYSICS",
    researchArea: "Quantum optics, Quantum computing, Astrophysics",
    message:
      "`A tech enthusiast and a nerd over all things Physics. A die-hard Nolan simp— in his free time you can probably find him watching 'The Dark Knight' for the 27th time. Finds writing self descriptions in the third person to be quite an ego boost`",
    image: "Udeet_Mittal.png",
  },
];
export { executiveBoard, technicalTeam };
