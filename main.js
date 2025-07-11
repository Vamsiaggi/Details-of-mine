import './style.css'

// Education data - you can modify this with your actual details
const educationData = [
  {
    degree: "Your Degree Name",
    institution: "Your University/College Name",
    location: "City, State/Country",
    duration: "Start Year - End Year",
    gpa: "Your GPA/4.0",
    achievements: [
      "Your achievement 1",
      "Your achievement 2",
      "Your achievement 3"
    ],
    coursework: ["Course 1", "Course 2", "Course 3", "Course 4"]
  },
  {
    degree: "Your Previous Degree",
    institution: "Previous Institution",
    location: "City, State/Country",
    duration: "Start Year - End Year",
    gpa: "Your GPA/4.0",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    coursework: ["Course 1", "Course 2", "Course 3", "Course 4"]
  }
  // Add more education entries as needed, or remove entries you don't want
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CSA-2023-001"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-2022-456"
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "AZ-900-2021-789"
  }
];

function createEducationCard(education) {
  return `
    <div class="education-card">
      <div class="education-header">
        <div class="degree-info">
          <h3 class="degree">${education.degree}</h3>
          <p class="institution">${education.institution}</p>
          <p class="location">${education.location}</p>
        </div>
        <div class="duration-gpa">
          <span class="duration">${education.duration}</span>
          <span class="gpa">GPA: ${education.gpa}</span>
        </div>
      </div>
      
      <div class="education-details">
        <div class="achievements">
          <h4>Key Achievements</h4>
          <ul>
            ${education.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
        
        <div class="coursework">
          <h4>Relevant Coursework</h4>
          <div class="course-tags">
            ${education.coursework.map(course => `<span class="course-tag">${course}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function createCertificationCard(cert) {
  return `
    <div class="cert-card">
      <div class="cert-header">
        <h4 class="cert-name">${cert.name}</h4>
        <span class="cert-date">${cert.date}</span>
      </div>
      <p class="cert-issuer">${cert.issuer}</p>
      <p class="cert-id">ID: ${cert.credentialId}</p>
    </div>
  `;
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="hero">
      <div class="hero-content">
        <div class="profile-section">
          <div class="profile-image">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
              <path d="M12 16L13.09 22.26L22 23L13.09 23.74L12 30L10.91 23.74L2 23L10.91 22.26L12 16Z" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          <div class="profile-info">
            <h1 class="name">Your Name</h1>
            <p class="title">Software Developer & Lifelong Learner</p>
            <p class="bio">Passionate about technology and continuous learning. Here's my educational journey that has shaped my career.</p>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <section class="education-section">
        <div class="section-header">
          <h2>Educational Background</h2>
          <p>My academic journey and formal education</p>
        </div>
        
        <div class="education-timeline">
          ${educationData.map(education => createEducationCard(education)).join('')}
        </div>
      </section>

      <section class="certifications-section">
        <div class="section-header">
          <h2>Professional Certifications</h2>
          <p>Industry-recognized credentials and continuous learning</p>
        </div>
        
        <div class="certifications-grid">
          ${certifications.map(cert => createCertificationCard(cert)).join('')}
        </div>
      </section>

      <section class="skills-section">
        <div class="section-header">
          <h2>Technical Skills</h2>
          <p>Skills acquired through education and hands-on experience</p>
        </div>
        
        <div class="skills-categories">
          <div class="skill-category">
            <h4>Programming Languages</h4>
            <div class="skill-tags">
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Java</span>
              <span class="skill-tag">C++</span>
              <span class="skill-tag">TypeScript</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>Frameworks & Technologies</h4>
            <div class="skill-tags">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">PostgreSQL</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>Cloud & DevOps</h4>
            <div class="skill-tags">
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">Google Cloud</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Kubernetes</span>
              <span class="skill-tag">CI/CD</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
        <div class="contact-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          <a href="https://github.com/yourusername">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
`;

// Add smooth scrolling animation
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.education-card, .cert-card, .skill-category').forEach(el => {
    observer.observe(el);
  });
});