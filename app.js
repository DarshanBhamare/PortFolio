const { useState, useEffect, useRef } = React;
// Navigation Component
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">Portfolio</div>
                <ul className="nav-links">
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                    <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                    <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
                    <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                </ul>
                <button
                    className="mobile-menu"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {isMobileMenuOpen && (
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                    <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                    <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
                    <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

// Hero Section Component
const Hero = () => {
  const words = ["Dsa Enthusiast", "Full Stack Developer", "Problem Solver"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // typing speed

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      // Change speed for deleting
      let typingSpeed = isDeleting ? 50 : 100;

      // If word is completely typed
      if (!isDeleting && text === currentWord) {
        typingSpeed = 500; // Wait before deleting
        setIsDeleting(true);
      }

      // If word is completely deleted
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      setSpeed(typingSpeed);
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, speed]);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                    <h1>Hi There I'm <span className="copy">Darshan Bhamare</span></h1>
                    <div className="subtitle"> 
                        A <span className="copy1">{text}</span><span className="cursor">|</span>
                    </div>
                    <br>
                    </br>
                    <br></br>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="https://drive.google.com/file/d/13iIFQsNXAfnVHIUfmDZH1ZkLW0DZrTqY/view?usp=sharing" className="btn btn-secondary">Resume</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img 
                        image src="./public/My_Photo.jpg" 
                        alt="Profile" 
                        className="profile-img"
                    />
                </div>
            </div>
        </section>
    );
};

// About Section Component
const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know me better</p>
                <div className={`about-content ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={aboutRef}>
                    <div className="about-image">
                        <img 
                            image src="./public/My_Photo.jpg" 
                            alt="About Me" 
                        />
                    </div>
                    <div className="about-text">
                        <h3>I'm a Creative Developer</h3>
                        <p>
                            With over 1 years of experience in web development, I specialize in creating 
                            responsive, user-friendly websites and applications. I love turning complex 
                            problems into simple, beautiful designs.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing 
                            to open source projects, or enjoying a good cup of coffee while reading about 
                            the latest trends in web development.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <div className="stat-number">4+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section Component
const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = {
        frontend: [
            { name: 'HTML/CSS', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'React', level: 85 }
        ],
        backend: [
            { name: 'Node.js', level: 85 },
            { name: 'Express.js', level: 85 },
            { name: 'MongoDB', level: 80 }

        ],
        tools: [
            { name: 'Git', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Postman', level: 80 }
        ],
        Programming_Languages: [
            { name: 'Java', level: 95 },
            { name: 'Python', level: 80 },
            { name: 'C++', level: 70 },
        ]
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">What I can do</p>
                <div className={`skills-grid ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={skillsRef}>
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skill-category">
                            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                            {skillList.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-name">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            style={{ 
                                                width: isVisible ? `${skill.level}%` : '0%',
                                                transitionDelay: `${index * 0.1}s`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Section Component
const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const projectsRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "E-Commerce Course Selling Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication,and admin dashboard.",
            image: "./public/E_Commerce.png",
            tech: ["React", "Node.js", "MongoDB"],
            liveUrl: "https://course-selling-e-commerce.vercel.app/",
            githubUrl: "https://github.com/DarshanBhamare/Course-Selling-E_Commerce"
        },
        {
            title: "ChatBot ",
            description: "chatbot web application using react for frontend and node.js for backend  with tailwind css for styling.",
            image: "./public/ChatBot.png",
            tech: ["React", "Node.js", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/DarshanBhamare/ChapApp"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website with smooth animations, contact form, and project showcase.",
            image: "./public/portfolio.png",
            tech: ["HTML5", "CSS3", "JavaScript", "React"],
            // liveUrl: "#",
            // githubUrl: "#"
        }
    ];

    return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        <div
          className={`projects-grid ${isVisible ? "fade-in visible" : "fade-in"}`}
          ref={projectsRef}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Buttons here */}
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    title="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

// Experience Section Component
const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const experienceRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            date: "august 2024 - june 2025",
            title: "Gunner",
            company: "Competitive programming and mentorship club",
            description: "Conducted weekly coding sessions and workshops to help members improve their problem-solving skills and prepare for coding competitions."
        },
        {
            date: "july 2025-present",
            title: "Open Source Contributor",
            company: "Various Projects",
            description: "Contributed to several open-source projects on GitHub, focusing on bug fixes, feature enhancements, and documentation improvements."
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>
                <div className={`timeline ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={experienceRef}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="timeline-date">{exp.date}</div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <div className="timeline-company">{exp.company}</div>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Education Section Component
const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const educationRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const education = [
        {
            date: "2023 - 2027",
            title: "Bachelor of Computer Science",
            company: "Savitribai Phule Pune University",
            description: "Specialized in software engineering and web development. Graduated with honors and completed several projects in web technologies."
        },
        {
            date: "2021 - 2023",
            title: "HSC - Science",
            company: "Maharashtra State Board",
            description: "grade:82.33%"
        },
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">My learning journey</p>
                <div className={`timeline ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={educationRef}>
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="timeline-date">{edu.date}</div>
                                <h3 className="timeline-title">{edu.title}</h3>
                                <div className="timeline-company">{edu.company}</div>
                                <p className="timeline-description">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",   // matches {{title}} in EmailJS subject
    message: ""
  });

  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

function handleSubmit(e) {
  e.preventDefault();

  emailjs.send(
    "service_y4jufn6",   // your Service ID
    "template_16gibdv",  // your Template ID
    {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("title").value, // ✅ match with your form field
      message: document.getElementById("message").value,
    }
  ).then(
    function(response) {
      alert("✅ Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
      
      // 🔹 Clear the form after success
      setFormData({
        name: "",
        email: "",
        title: "",
        message: ""
      });
    },
    function(error) {
      alert("❌ Failed to send message. Try again.");
      console.log("FAILED...", error);
    }
  );
}


  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's work together</p>

        <div
          className={`contact-content ${isVisible ? "fade-in visible" : "fade-in"}`}
          ref={contactRef}
        >
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <br />
                bhamaredarshan023@gmail.com
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <br />
                +91 7972636540
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location</strong>
                <br />
                Pune (Maharashtra), India
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Subject</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-links">
                    <a href="https://github.com/DarshanBhamare" title="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/darshan-bhamare-881aa02a3" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
                <p>&copy; 2025 Darshan Bhamare. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    useEffect(() => {
        // Add smooth scrolling behavior
        const handleSmoothScroll = (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <div className="App">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));

