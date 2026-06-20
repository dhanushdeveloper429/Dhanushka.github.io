// ── REAL RESUME DATA ─────────────────────────────────────────────

const SKILLS = {
  tools: [
    { name:'Apache Spark / Scala',       pct:85, color:'#ff6b9d' },
    { name:'HBase / Hive',               pct:82, color:'#ff6b9d' },
    { name:'Apache Solr',                pct:85, color:'#ff6b9d' },
    { name:'MuleSoft / Talend ETL',      pct:75, color:'#ff6b9d' },
    { name:'Node.js / Express',          pct:80, color:'#ff6b9d' },
    { name:'Bitrock Installers',         pct:75, color:'#ff6b9d' },
    { name:'Require.js / Grunt',         pct:78, color:'#ff6b9d' },
    { name:'Google Vega / NGX Charts',   pct:88, color:'#ff6b9d' },
  ],
  backend: [
    { name:'Java / J2EE (Core Java)',  pct:98, color:'#00e5ff' },
    { name:'Spring Boot 1.5/2.0',      pct:95, color:'#00e5ff' },
    { name:'Spring MVC / AOP / ORM',   pct:93, color:'#00e5ff' },
    { name:'Microservices / REST',      pct:93, color:'#00e5ff' },
    { name:'Spring Security / SAML',   pct:88, color:'#00e5ff' },
    { name:'Apache Kafka / JMS',        pct:82, color:'#00e5ff' },
    { name:'Hibernate / JPA',           pct:90, color:'#00e5ff' },
    { name:'Struts 1.x / 2.x',         pct:80, color:'#00e5ff' },
  ],
  frontend: [
    { name:'Angular 2–10',             pct:92, color:'#9d4edd' },
    { name:'React.js',                 pct:88, color:'#9d4edd' },
    { name:'HTML5 / CSS3',             pct:95, color:'#9d4edd' },
    { name:'JavaScript / TypeScript',  pct:90, color:'#9d4edd' },
    { name:'jQuery / AJAX / JSON',     pct:92, color:'#9d4edd' },
    { name:'Bootstrap / Angular Material', pct:85, color:'#9d4edd' },
    { name:'Responsive Web Design',    pct:90, color:'#9d4edd' },
  ],
  db: [
    { name:'Oracle / DB2',             pct:90, color:'#ffb300' },
    { name:'MySQL / PostgreSQL',       pct:90, color:'#ffb300' },
    { name:'MongoDB (NoSQL)',          pct:88, color:'#ffb300' },
    { name:'MS SQL Server',            pct:82, color:'#ffb300' },
    { name:'CouchDB',                  pct:78, color:'#ffb300' },
    { name:'AWS DynamoDB',             pct:80, color:'#ffb300' },
  ],
  devops: [
    { name:'AWS (EC2, S3, RDS, SNS)',  pct:85, color:'#00ff88' },
    { name:'Docker / Kubernetes',      pct:80, color:'#00ff88' },
    { name:'Jenkins / CI-CD',          pct:88, color:'#00ff88' },
    { name:'Git / Bitbucket / Jira',   pct:92, color:'#00ff88' },
    { name:'Maven / Ant',              pct:90, color:'#00ff88' },
    { name:'WebSphere / JBoss / Tomcat', pct:85, color:'#00ff88' },
  ],
};

const ALL_TECH_TAGS = [
  { label:'Java 8/11/17', hi:true }, { label:'Spring Boot', hi:true }, { label:'Microservices', hi:true },
  { label:'Angular 10', hi:true }, { label:'React.js', hi:true }, { label:'AWS', hi:true },
  { label:'Spring MVC', hi:false }, { label:'Spring AOP', hi:false }, { label:'Spring Security', hi:false },
  { label:'Hibernate', hi:false }, { label:'JPA', hi:false }, { label:'JMS', hi:false },
  { label:'REST APIs', hi:true }, { label:'SOAP', hi:false }, { label:'GraphQL', hi:false },
  { label:'Kafka', hi:false }, { label:'JWT / OAuth2', hi:false }, { label:'SAML 2.0', hi:false },
  { label:'MongoDB', hi:false }, { label:'Oracle', hi:false }, { label:'MySQL', hi:false },
  { label:'PostgreSQL', hi:false }, { label:'DB2', hi:false }, { label:'CouchDB', hi:false },
  { label:'Docker', hi:false }, { label:'Kubernetes', hi:false }, { label:'Jenkins', hi:false },
  { label:'EC2 / S3 / RDS', hi:false }, { label:'DynamoDB', hi:false }, { label:'Git', hi:false },
  { label:'Maven', hi:false }, { label:'JUnit', hi:false }, { label:'Log4j', hi:false },
  { label:'Node.js', hi:false }, { label:'Express', hi:false }, { label:'TypeScript', hi:false },
  { label:'HTML5/CSS3', hi:false }, { label:'Bootstrap', hi:false }, { label:'jQuery', hi:false },
  { label:'AJAX', hi:false }, { label:'Angular Material', hi:false }, { label:'MuleSoft', hi:false }, 
  { label:'Talend', hi:false }, { label:'WebSphere', hi:false }, { label:'JBoss', hi:false }, 
  { label:'Tomcat', hi:false }, { label:'HBase', hi:true }, { label:'Apache Spark', hi:true }, 
  { label:'Hive', hi:true }, { label:'Apache Solr', hi:true }, { label:'Bitrock', hi:false },
  { label:'NGX Charts', hi:false }, { label:'Grunt / NPM', hi:false }, { label:'Agile / Scrum', hi:true },
  { label:'WCAG 2.1 / ADA', hi:false }, { label:'Design Patterns', hi:false }, { label:'UML', hi:false },
];

const EXPERIENCE = [
  {
    current: true,
    period: 'NOV 2019 – PRESENT',
    role: 'Lead – Full Stack Java Developer',
    company: 'Elevance Health · Remote',
    bullets: [
      'Implemented and developed NGX Charts Dashboard using Angular 10 and integrated with backend using Spring Boot Services.',
      'Implemented Google Vega charts using Angular 10 and integrated backend using Spring Boot services via MongoDB.',
      'Developed JWT Authentication to increase application security, using JWT in the back-end server and passing it to the front-end HTTP Client Service Module.',
      'Implemented fixes for accessibility barriers, ensuring compliance with WCAG 2.1 (Level A/AA) standards and ADA accessibility requirements.',
      'Developed validations in complex forms using Angular Validation and Reactive forms for enhancing user experience.',
      'Developed using Bitrock installer to create cross-platform installers for servers, with pre/post-build actions and progress tracking.',
      'Configured JENKINS Server to build, test code pushed to GitHub and configured deployment to Docker Hub.',
      'Worked on ETL tools on MuleSoft and Talend for data migration across multiple DBs and filtering specialized characters.',
    ],
    tech: ['Spring Boot','Angular 10','Microservices','JWT','MongoDB','AWS','Docker','Jenkins','Bitrock','WCAG 2.1','MuleSoft','Talend'],
  },
  {
    period: 'NOV 2018 – NOV 2019',
    role: 'Java Full Stack Developer',
    company: 'American Express · Los Angeles, CA',
    bullets: [
      'Implemented transaction management using Spring declarative transaction management with Spring AOP concepts and developed micro services using Spring Boot.',
      'Developed REST based web services using Spring web services module and consumed web services from other vendors.',
      'Developed database connectivity using CouchDB, and implemented REST APIs for data synchronization.',
      'Developed AWS notification services using SES, SNS, SQS with AWS Java SDKs.',
      'Developed a client-side layer and created components, services, modules, and routes using Angular, HTML5, CSS3, Bootstrap and TypeScript.',
      'Developed UI components for email and link sharing of documents and files for a Content Management System using React.js and jQuery.',
    ],
    tech: ['Spring Boot','Spring AOP','Angular','React.js','TypeScript','CouchDB','AWS SES/SNS/SQS','Maven','Bootstrap'],
  },
  {
    period: 'FEB 2018 – NOV 2018',
    role: 'Java Full Stack Developer',
    company: 'Molina Healthcare · Los Angeles, CA',
    bullets: [
      'Developed JS framework such as Angular JS 2x, Angular 8 (for data driven apps) and Backbone.js (for heavy DOM Manipulation).',
      'Worked with Infrastructure teams to bring Apache Phoenix as a wrapper on HBase, and wrote Hive/SQL queries into Spark transformations using Scala APIs.',
      'Implemented Apache Solr search engine for advanced full text search capabilities and real time indexing.',
      'Developed using the Node.js and Express framework and Implemented Helmet.js for security.',
      'Worked on the Bitrock installer for creating cross-platform installers for desktops.',
    ],
    tech: ['Spring Boot','Angular 2/8','Backbone.js','Apache Solr','HBase','Hive','Spark','Node.js','Bitrock'],
  },
  {
    period: 'MAR 2017 – JAN 2018',
    role: 'Java Full Stack Developer',
    company: 'Anthem · Los Angeles, CA',
    bullets: [
      'Developed JS framework such as Angular JS 2x, Angular 4 and Backbone.js for UI modernization.',
      'Implemented Node.js to run Grunt tasks and build properly the project (compile, minify, concat etc).',
      'Developed and Analyzed business requirements and cross-verified them with functionality and features of NOSQL databases like MongoDB.',
      'Designed and developed User Interface Web Forms using Flash, CSS, Adobe, Photoshop, Dreamweaver, and JavaScript.',
      'Migrated from Angular 1.4 to Angular 2x updated mobile development and UI components.',
    ],
    tech: ['Spring Boot','Angular 1.4/2/4','React.js','Node.js','Express','MongoDB','Kafka','Eureka','Bootstrap'],
  },
  {
    period: 'SEPT 2016 – MAR 2017',
    role: 'Java Full Stack Developer',
    company: "Macy's · San Francisco, CA",
    bullets: [
      'Implemented DAO using Hibernate ORM, AOP and service layer using Spring, MVC design.',
      'Developed various screens for the front end using Angular.js (2.x), React.js and various predefined components from NPM.',
      'Designed and Developed applications and writing, configurations, deploying and running applications on the Heroku platform.',
      'Worked on processing data in MongoDB (NOSQL) by designing, creating and rest services.',
      'Developed Test Cases and unit testing using JUnit and Implemented Log4j mechanism for logging.',
    ],
    tech: ['Spring Boot','Spring MVC','Hibernate','Angular.js 2.x','React.js','MongoDB','Google Cloud','Heroku','JUnit','Karma'],
  },
];

const ACHIEVEMENTS = [
  {
    featured: true,
    title: 'NGX Charts & Google Vega Dashboard',
    company: 'Elevance Health',
    desc: 'Built an executive analytics dashboard using Angular 10 and NGX Charts / Google Vega integrated with Spring Boot microservices and MongoDB. Delivered real-time metrics.',
    metrics: [{ label:'Charts Built', val:'15+' }, { label:'Tech', val:'Angular 10' }, { label:'API Latency', val:'<80ms' }],
    tags: ['Angular 10', 'NGX Charts', 'Google Vega', 'Spring Boot', 'MongoDB', 'REST APIs'],
  },
  {
    featured: true,
    title: 'Big Data HBase/Hive & Solr Platform',
    company: 'Molina Healthcare',
    desc: 'Built Spark SQL and Hive transformations for healthcare data processing using Scala APIs. Integrated Apache Phoenix as JDBC wrapper on HBase and implemented Apache Solr full-text search with real-time indexing.',
    metrics: [{ label:'Tech', val:'HBase+Hive' }, { label:'Search', val:'Apache Solr' }],
    tags: ['HBase', 'Hive', 'Apache Spark', 'Apache Solr', 'Apache Phoenix', 'Scala'],
  },
  {
    featured: false,
    title: 'Microservices ETL Pipeline',
    company: 'Molina Healthcare',
    desc: 'Designed and built a data migration ETL system using MuleSoft and Talend, moving data across multiple databases with specialized character filtering.',
    metrics: [{ label:'DBs Migrated', val:'5+' }, { label:'Tool', val:'MuleSoft' }],
    tags: ['MuleSoft', 'Talend', 'Spring Batch', 'Oracle'],
  },
  {
    featured: false,
    title: 'AmEx Notification Services',
    company: 'American Express',
    desc: 'Developed AWS notification infrastructure using SES, SNS, and SQS with Java SDKs. Built full Spring Security-protected API layer and CouchDB data persistence.',
    metrics: [{ label:'Channels', val:'SES/SNS/SQS' }, { label:'Platform', val:'AWS' }],
    tags: ['AWS SES', 'AWS SNS', 'AWS SQS', 'Spring Boot', 'CouchDB'],
  },
  {
    featured: false,
    title: 'Accessible React/Angular CMS',
    company: 'Elevance Health',
    desc: 'Delivered a WCAG 2.1 Level A/AA-compliant and ADA-compliant application using Angular 10 and React.js. Collaborated with legal and compliance teams to ensure ADA accessibility standards.',
    metrics: [{ label:'WCAG', val:'A/AA Level' }, { label:'ADA', val:'Compliant' }],
    tags: ['Angular 10', 'React.js', 'WCAG 2.1', 'ARIA', 'ADA Compliance'],
  },
  {
    featured: true,
    title: 'Cross-Platform Bitrock Installers',
    company: 'Elevance Health / Molina',
    desc: 'Developed and maintained cross-platform desktop and server installers using Bitrock. Implemented custom pre/post-build actions, project initialization sequences, and long-running progress indicators.',
    metrics:[{label:'Tool',val:'Bitrock'},{label:'Support',val:'Cross-Platform'}],
    tags:['Bitrock Installers','Java','Scripting','CI/CD','DevOps'],
  },
];

// ── PARTICLES ────────────────────────────────────────────────────
function initParticles() {
  const c = document.getElementById('hero-particles');
  if (!c) return;
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    const x    = Math.random() * 100;
    const dur  = Math.random() * 12 + 8;
    const del  = Math.random() * 10;
    const col  = ['#00e5ff','#9d4edd','#00ff88','#ffb300'][Math.floor(Math.random()*4)];
    p.style.cssText = `width:${size}px;height:${size}px;left:${x}%;bottom:-10px;background:${col};
      animation-duration:${dur}s;animation-delay:${del}s;box-shadow:0 0 4px ${col}`;
    c.appendChild(p);
  }
}
initParticles();

// ── TYPEWRITER ─────────────────────────────────────────────────────
function typeWriter(el, text, speed, cb) {
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) { clearInterval(t); cb && cb(); }
  }, speed);
}
window.addEventListener('load', () => {
  const cmd1  = document.getElementById('t-cmd1');
  const line2 = document.getElementById('t-line2');
  const out2  = document.getElementById('t-out2');
  const line3 = document.getElementById('t-line3');
  const out3  = document.getElementById('t-out3');
  const line4 = document.getElementById('t-line4');
  setTimeout(() => {
    typeWriter(cmd1, 'load-profile --user=dhanushka', 45, () => {
      setTimeout(() => {
        line2.style.display = '';
        typeWriter(out2, 'Loading: Lead Full Stack Java Developer...', 28, () => {
          setTimeout(() => {
            line3.style.display = '';
            typeWriter(out3, 'Ready. 10 yrs · Enterprise Java · Available ✓', 26, () => {
              setTimeout(() => { line4.style.display = ''; }, 300);
            });
          }, 200);
        });
      }, 300);
    });
  }, 600);
});

// ── RENDER SKILLS ─────────────────────────────────────────────────
function renderSkills() {
  const map = { tools:'sk-tools', backend:'sk-backend', frontend:'sk-frontend', db:'sk-db', devops:'sk-devops' };
  for (const [cat, id] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.innerHTML = (SKILLS[cat] || []).map(s => `
      <div class="skill-item reveal">
        <div class="skill-name"><span>${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
        <div class="skill-bar-bg">
          <div class="skill-bar" data-pct="${s.pct}" style="background:${s.color}"></div>
        </div>
      </div>`).join('');
  }
}
renderSkills();

// ── TAG CLOUD ─────────────────────────────────────────────────────
function renderTagCloud() {
  const el = document.getElementById('tag-cloud');
  if (!el) return;
  el.innerHTML = ALL_TECH_TAGS.map(t =>
    `<span class="tag-chip${t.hi?' hi':''}">${t.label}</span>`
  ).join('');
}
renderTagCloud();

// ── TIMELINE ──────────────────────────────────────────────────────
function renderTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  tl.innerHTML = EXPERIENCE.map(e => {
    const bullets = e.bullets.map(b => `<div class="tl-bullet">${b}</div>`).join('');
    const tech    = e.tech.map(t => `<span class="tl-tech-tag">${t}</span>`).join('');
    return `
      <div class="tl-item${e.current?' current':''} reveal">
        <div class="tl-period">${e.period}${e.current?' <span style="color:var(--green);margin-left:.5rem">● CURRENT</span>':''}</div>
        <div class="tl-role">${e.role}</div>
        <div class="tl-company">◈ ${e.company}</div>
        <div class="tl-bullets">${bullets}</div>
        <div class="tl-tech">${tech}</div>
      </div>`;
  }).join('');
}
renderTimeline();

// ── ACHIEVEMENTS ──────────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(p => {
    const metrics = p.metrics.map(m => `<div class="proj-metric"><span>${m.val}</span>${m.label}</div>`).join('');
    const tags    = p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');
    return `
      <div class="proj-card${p.featured?' featured':''} reveal">
        ${p.featured ? '<div class="proj-featured-badge">★ FEATURED</div>' : ''}
        <div class="proj-title">${p.title}</div>
        <div style="font-family:var(--mono);font-size:.6rem;color:var(--amber);margin-bottom:.6rem;letter-spacing:.05em">@ ${p.company}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-metrics">${metrics}</div>
        <div class="proj-tags">${tags}</div>
      </div>`;
  }).join('');
}
renderProjects();

// ── NAV SCROLL ─────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  const sections = ['hero','about','skills','experience','projects','contact'];
  let current = 'hero';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
});

document.getElementById('nav-menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// ── INTERSECTION OBSERVER ─────────────────────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.querySelectorAll('.skill-bar').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
    io.unobserve(entry.target);
  });
}, { threshold: 0.12 });

setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}, 150);

// ── CONTACT FORM ───────────────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.getElementById('cf-submit');
  const fb  = document.getElementById('form-feedback');
  const name  = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const subj  = document.getElementById('cf-subject').value.trim();
  const msg   = document.getElementById('cf-msg').value.trim();
  if (!name || !email || !subj || !msg) {
    fb.className = 'form-feedback err'; fb.textContent = '⚠ All fields are required.'; return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fb.className = 'form-feedback err'; fb.textContent = '⚠ Please enter a valid email.'; return;
  }
  btn.textContent = 'SENDING...'; btn.disabled = true;
  fetch('https://formspree.io/f/dhanushdeveloper429', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject: subj, message: msg })
  }).then(res => {
    if (res.ok) {
      fb.className = 'form-feedback ok';
      fb.textContent = '✓ Message sent! Dhanushka will respond within 24 hours.';
      e.target.reset();
    } else {
      fb.className = 'form-feedback err';
      fb.textContent = '⚠ Oops! There was a problem sending your message.';
    }
  }).catch(err => {
    fb.className = 'form-feedback err';
    fb.textContent = '⚠ Network error. Please try again.';
  }).finally(() => {
    btn.textContent = 'SEND MESSAGE ▶'; btn.disabled = false;
  });
});

// ── THEME TOGGLE ──────────────────────────────────────
(function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ds-theme', theme);
  }

  // Ripple burst on toggle
  function themeRipple(e) {
    const x = e.clientX, y = e.clientY;
    const overlay = document.createElement('div');
    const isDark  = getTheme() === 'dark';
    Object.assign(overlay.style, {
      position:'fixed', left:x+'px', top:y+'px',
      width:'4px', height:'4px', borderRadius:'50%',
      background: isDark ? '#eef2f8' : '#020b18',
      transform:'translate(-50%,-50%) scale(0)',
      zIndex:'999997', pointerEvents:'none',
      transition:'transform .7s cubic-bezier(.4,0,.2,1), opacity .7s ease'
    });
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.transform = 'translate(-50%,-50%) scale(600)';
      overlay.style.opacity   = '0';
    });
    setTimeout(() => overlay.remove(), 750);
  }

  btn.addEventListener('click', e => {
    themeRipple(e);
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
})();

// ══════════════════════════════════════════════════════
//  STUNNING ANIMATIONS
// ══════════════════════════════════════════════════════


// ── MATRIX RAIN ───────────────────────────────────────
(function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  const chars = 'JAVA SPRING BOOT MICROSERVICES ANGULAR REACT AWS DOCKER KAFKA OAUTH JWT LLM AI'.split('');
  const fontSize = 13;
  let cols = Math.floor(canvas.width / fontSize);
  let drops = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(2,11,24,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00e5ff';
    ctx.font = fontSize + 'px Share Tech Mono,monospace';
    cols = Math.floor(canvas.width / fontSize);
    if (drops.length !== cols) drops = Array(cols).fill(1);
    drops.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.globalAlpha = Math.random() * 0.6 + 0.1;
      ctx.fillText(ch, i * fontSize, y * fontSize);
      ctx.globalAlpha = 1;
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 55);
})();

// ── CUSTOM CURSOR ─────────────────────────────────────
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  dot.style.left = '0'; dot.style.top = '0';
  ring.style.left = '0'; ring.style.top = '0';

  function animCursor() {
    dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
    rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a,button,.proj-card,.skill-cat,.tag-chip,.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

// ── 3D CARD TILT ──────────────────────────────────────
function initTilt() {
  document.querySelectorAll('.proj-card').forEach(card => {
    card.classList.add('tilt-card');
    // inject shine layer if not there
    if (!card.querySelector('.card-shine')) {
      const shine = document.createElement('div');
      shine.className = 'card-shine';
      card.appendChild(shine);
    }
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = e.clientX - r.left;
      const y  = e.clientY - r.top;
      const cx = r.width  / 2;
      const cy = r.height / 2;
      const rx = ((y - cy) / cy) * -10;
      const ry = ((x - cx) / cx) *  10;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.025)`;
      const shine = card.querySelector('.card-shine');
      if (shine) shine.style.background =
        `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,.1) 0%, transparent 65%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}
// Delay tilt init until cards are rendered
setTimeout(initTilt, 300);

// ── MAGNETIC BUTTONS ──────────────────────────────────
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r  = btn.getBoundingClientRect();
    const x  = e.clientX - r.left - r.width  / 2;
    const y  = e.clientY - r.top  - r.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ── ANIMATED STAT COUNTERS ────────────────────────────
function animateCounter(el, target, suffix, duration) {
  const isNum = /^\d+/.test(target);
  if (!isNum) return; // skip non-numeric like "OPEN"
  const num  = parseInt(target);
  const step = Math.ceil(duration / num);
  let cur = 0;
  const t = setInterval(() => {
    cur = Math.min(cur + 1, num);
    el.textContent = cur + suffix;
    if (cur >= num) clearInterval(t);
  }, step);
}

const statTargets = [
  { sel:'.hs:nth-child(1) .hs-val', val:'10', suffix:'+' },
  { sel:'.hs:nth-child(3) .hs-val', val:'5',  suffix:''  },
  { sel:'.hs:nth-child(5) .hs-val', val:'20', suffix:'+' },
];

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    statTargets.forEach(({ sel, val, suffix }) => {
      const el = document.querySelector(sel);
      if (el) animateCounter(el, val, suffix, 900);
    });
    statsObserver.disconnect();
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ── TYPING GLOW ON TERMINAL ───────────────────────────
const termBody = document.querySelector('.terminal-body');
if (termBody) {
  termBody.style.textShadow = '0 0 8px rgba(0,229,255,.25)';
}

// ── AURORA Z-INDEX FIX ────────────────────────────────
// Ensure section-inner sits above aurora pseudo-element
document.querySelectorAll('.aurora .section-inner').forEach(el => {
  el.style.position = 'relative';
  el.style.zIndex   = '1';
});

