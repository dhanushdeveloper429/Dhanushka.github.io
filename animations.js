/* ════════════════════════════════════════════════════════════════
   STUNNING ANIMATIONS — portfolio/animations.js
   Runs independently, enhances everything on the page
════════════════════════════════════════════════════════════════ */

// ── 1. BOOT SPLASH SCREEN ──────────────────────────────────────────
(function bootSplash() {
  const splash = document.createElement('div');
  splash.id = 'boot-splash';
  Object.assign(splash.style, {
    position:'fixed', inset:'0', zIndex:'999999',
    background:'#020b18', display:'flex', flexDirection:'column',
    alignItems:'center', justifyContent:'center', fontFamily:"'Share Tech Mono',monospace",
    color:'#00e5ff', overflow:'hidden'
  });

  const logo = document.createElement('div');
  Object.assign(logo.style, {
    fontSize:'clamp(2rem,8vw,4rem)', fontFamily:"'Orbitron',sans-serif",
    fontWeight:'900', letterSpacing:'.2em', marginBottom:'2rem',
    textShadow:'0 0 40px rgba(0,229,255,.8), 0 0 80px rgba(0,229,255,.4)',
    animation:'bootLogo .6s ease forwards'
  });
  logo.textContent = '{ DS }';

  const log = document.createElement('div');
  Object.assign(log.style, {
    fontSize:'.72rem', letterSpacing:'.08em', textAlign:'left',
    width:'min(480px, 90vw)', lineHeight:'1.9'
  });

  const bar = document.createElement('div');
  Object.assign(bar.style, {
    width:'min(480px, 90vw)', height:'2px',
    background:'rgba(0,229,255,.15)', marginTop:'1.5rem', overflow:'hidden', position:'relative'
  });
  const barFill = document.createElement('div');
  Object.assign(barFill.style, {
    position:'absolute', left:'0', top:'0', height:'100%',
    background:'linear-gradient(90deg,#00e5ff,#9d4edd)', width:'0',
    transition:'width .1s linear',
    boxShadow:'0 0 12px rgba(0,229,255,.8)'
  });
  bar.appendChild(barFill);

  splash.appendChild(logo);
  splash.appendChild(log);
  splash.appendChild(bar);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes bootLogo { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
    #boot-splash { transition: opacity .6s ease, transform .6s ease; }
    #boot-splash.hide { opacity:0; transform:scale(1.04); pointer-events:none; }
  `;
  document.head.appendChild(style);
  document.body.appendChild(splash);
  document.body.style.overflow = 'hidden';

  const lines = [
    '<span style="color:#4a82a8">// Initializing portfolio...</span>',
    '<span style="color:#00ff88">✓</span> Loading profile: Dhanushka Srinivas',
    '<span style="color:#00ff88">✓</span> Stack: Java · Spring Boot · Angular · AWS',
    '<span style="color:#00ff88">✓</span> AI modules: Ollama · LangChain · OpenAI',
    '<span style="color:#00ff88">✓</span> Experience: 10 years · 5 companies',
    '<span style="color:#ffb300">⚡</span> Booting animations engine...',
    '<span style="color:#00ff88">✓</span> Status: <span style="color:#00ff88">AVAILABLE FOR HIRE</span>',
    '<span style="color:#00e5ff">$ </span><span style="color:#fff">launching portfolio...</span>',
  ];

  let li = 0, pct = 0;
  function nextLine() {
    if (li >= lines.length) {
      setTimeout(() => {
        splash.classList.add('hide');
        document.body.style.overflow = '';
        setTimeout(() => splash.remove(), 700);
      }, 300);
      return;
    }
    const span = document.createElement('div');
    span.innerHTML = lines[li++];
    log.appendChild(span);
    pct = Math.min(100, Math.round((li / lines.length) * 100));
    barFill.style.width = pct + '%';
    setTimeout(nextLine, li === 1 ? 250 : 180);
  }
  setTimeout(nextLine, 400);
})();

// ── 2. PARTICLE NETWORK (replaces basic particles) ─────────────────
(function particleNetwork() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Remove old canvas/particles if any
  const oldCanvas = document.getElementById('matrix-canvas');
  if (oldCanvas) { oldCanvas.style.display = 'none'; }
  const oldP = document.getElementById('hero-particles');
  if (oldP) oldP.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.id = 'particle-net';
  Object.assign(canvas.style, {
    position:'absolute', inset:'0', zIndex:'1', pointerEvents:'none'
  });
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  let W, H, nodes;
  const COLS = ['#00e5ff','#9d4edd','#00ff88','#ffb300','#ff6b9d'];
  const COUNT = 80;
  const LINK_DIST = 150;

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); });

  function makeNode() {
    const col = COLS[Math.floor(Math.random() * COLS.length)];
    return {
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5,
      r: Math.random() * 2.5 + 1, col,
      pulse: Math.random() * Math.PI * 2
    };
  }
  nodes = Array.from({ length: COUNT }, makeNode);

  let mx = -9999, my = -9999;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    mx = e.clientX - r.left; my = e.clientY - r.top;
  });
  hero.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  function draw(ts) {
    ctx.clearRect(0, 0, W, H);

    nodes.forEach(n => {
      n.pulse += .015;
      // Mouse repulsion
      const dx = n.x - mx, dy = n.y - my;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 120) { n.vx += dx / d * .3; n.vy += dy / d * .3; }

      n.x += n.vx; n.y += n.vy;
      n.vx *= .98; n.vy *= .98;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * .45;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, a.col + Math.round(alpha * 255).toString(16).padStart(2,'0'));
          grad.addColorStop(1, b.col + Math.round(alpha * 255).toString(16).padStart(2,'0'));
          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = .8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      const glow = Math.sin(n.pulse) * .4 + .7;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * glow, 0, Math.PI * 2);
      ctx.fillStyle = n.col;
      ctx.shadowColor = n.col;
      ctx.shadowBlur  = 12 * glow;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ── 3. HOLOGRAPHIC CARD HOVER ──────────────────────────────────────
function initHoloCards() {
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = ((e.clientX - r.left) / r.width)  * 100;
      const y  = ((e.clientY - r.top)  / r.height) * 100;
      const rx = ((e.clientY - r.top)  / r.height - .5) * -18;
      const ry = ((e.clientX - r.left) / r.width  - .5) *  18;

      card.style.transform   = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
      card.style.boxShadow   = `0 25px 70px rgba(0,229,255,.18), 0 0 0 1px rgba(0,229,255,.3)`;
      card.style.background  = `
        radial-gradient(circle at ${x}% ${y}%,
          rgba(0,229,255,.08) 0%,
          rgba(157,78,221,.05) 40%,
          transparent 70%),
        var(--panel)`;

      // Rainbow iridescence
      const hue = Math.round(x * 3.6);
      card.style.setProperty('--holo-hue', hue + 'deg');
      const shine = card.querySelector('.holo-shine');
      if (shine) {
        shine.style.background = `
          linear-gradient(
            ${ry * 2}deg,
            hsla(${hue},100%,70%,0) 0%,
            hsla(${hue+60},100%,70%,.08) 30%,
            hsla(${hue+120},100%,70%,.12) 50%,
            hsla(${hue+180},100%,70%,.08) 70%,
            hsla(${hue+240},100%,70%,0) 100%
          )`;
        shine.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.boxShadow  = '';
      card.style.background = '';
      const shine = card.querySelector('.holo-shine');
      if (shine) shine.style.opacity = '0';
    });

    if (!card.querySelector('.holo-shine')) {
      const shine = document.createElement('div');
      shine.className = 'holo-shine';
      Object.assign(shine.style, {
        position:'absolute', inset:'0', pointerEvents:'none',
        opacity:'0', transition:'opacity .3s', borderRadius:'inherit'
      });
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(shine);
    }
  });
}
setTimeout(initHoloCards, 400);

// ── 4. MORPHING HERO ROLE TEXT ─────────────────────────────────────
(function morphingRole() {
  const el = document.querySelector('.hero-role');
  if (!el) return;
  const roles = [
    'Lead Full Stack Java Developer',
    'Spring Boot · Microservices Architect',
    'Angular · React · Frontend Engineer',
    'AWS Cloud · DevOps Practitioner',
    'AI/ML Integration Specialist',
    'Enterprise Systems Designer'
  ];
  let idx = 0;

  const roleSpan = el.querySelector('span:not(.role-tag)') || el;

  function morph() {
    idx = (idx + 1) % roles.length;
    const target = roles[idx];
    const current = roleSpan.textContent;

    // Scramble → decode
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
    let frame = 0;
    const maxFrames = 18;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / maxFrames;
      let result = '';
      for (let i = 0; i < target.length; i++) {
        if (i < target.length * progress) {
          result += target[i];
        } else {
          result += target[i] === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
        }
      }
      roleSpan.textContent = result;
      if (frame >= maxFrames) {
        clearInterval(interval);
        roleSpan.textContent = target;
      }
    }, 40);
  }

  // Extract middle text node inside hero-role
  const fullText = el.innerHTML;
  el.innerHTML = fullText.replace('Lead Full Stack Java Developer',
    '<span id="morphing-role">Lead Full Stack Java Developer</span>');
  const morphEl = document.getElementById('morphing-role');

  setInterval(() => {
    if (!morphEl) return;
    idx = (idx + 1) % roles.length;
    const target = roles[idx];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789><{}[]';
    let frame = 0;
    const maxF = 20;
    const iv = setInterval(() => {
      frame++;
      const p = frame / maxF;
      let res = '';
      for (let i = 0; i < target.length; i++) {
        res += (i < target.length * p || target[i] === ' ')
          ? target[i]
          : chars[Math.floor(Math.random() * chars.length)];
      }
      morphEl.textContent = res;
      if (frame >= maxF) { clearInterval(iv); morphEl.textContent = target; }
    }, 40);
  }, 3500);
})();

// ── 5. CIRCUIT LINE BACKGROUND ─────────────────────────────────────
(function circuitLines() {
  ['about', 'experience', 'contact'].forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'circuit-canvas';
    Object.assign(canvas.style, {
      position:'absolute', inset:'0', pointerEvents:'none',
      zIndex:'0', opacity:'.12'
    });
    section.style.position = 'relative';
    section.style.overflow  = 'hidden';
    section.insertBefore(canvas, section.firstChild);

    // Ensure inner content is above
    const inner = section.querySelector('.section-inner');
    if (inner) { inner.style.position = 'relative'; inner.style.zIndex = '1'; }

    const ctx = canvas.getContext('2d');
    let W = canvas.width  = section.offsetWidth;
    let H = canvas.height = section.offsetHeight;

    const nodes = [];
    const gw = 60;
    for (let x = 0; x < W; x += gw) for (let y = 0; y < H; y += gw) {
      if (Math.random() > .65) nodes.push({ x, y });
    }

    const connections = [];
    nodes.forEach((a, i) => {
      nodes.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < gw * 2.2 && Math.random() > .4) connections.push({ a, b, prog:0, delay: Math.random() * 200 });
      });
    });

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth   = .8;

      connections.forEach(c => {
        if (frame < c.delay) return;
        c.prog = Math.min(1, c.prog + .006);
        const ex = c.a.x + (c.b.x - c.a.x) * c.prog;
        const ey = c.a.y + (c.b.y - c.a.y) * c.prog;
        ctx.beginPath();
        ctx.moveTo(c.a.x, c.a.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      });

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00e5ff';
        ctx.fill();
      });

      frame++;
      requestAnimationFrame(draw);
    }
    draw();
  });
})();

// ── 6. SCROLL PROGRESS BAR ────────────────────────────────────────
(function scrollProgress() {
  const bar = document.createElement('div');
  Object.assign(bar.style, {
    position:'fixed', top:'0', left:'0', height:'2px', width:'0%',
    background:'linear-gradient(90deg,#00e5ff,#9d4edd,#00ff88)',
    zIndex:'99999', transition:'width .05s linear',
    boxShadow:'0 0 8px rgba(0,229,255,.8)'
  });
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / total * 100) + '%';
  });
})();

// ── 7. NEON SECTION REVEAL ────────────────────────────────────────
(function neonReveal() {
  const style = document.createElement('style');
  style.textContent = `
    .neon-reveal { 
      clip-path: inset(0 100% 0 0);
      transition: clip-path 1s cubic-bezier(.16,1,.3,1);
    }
    .neon-reveal.in { clip-path: inset(0 0% 0 0); }
    .neon-flash {
      position: relative;
    }
    .neon-flash::after {
      content: '';
      position: absolute;
      inset: -4px;
      background: transparent;
      border: 1px solid rgba(0,229,255,0);
      transition: border-color .4s, box-shadow .4s;
    }
    .neon-flash.lit::after {
      border-color: rgba(0,229,255,.4);
      box-shadow: 0 0 20px rgba(0,229,255,.2), inset 0 0 20px rgba(0,229,255,.05);
    }
  `;
  document.head.appendChild(style);

  const neoIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in', 'lit');
        neoIO.unobserve(e.target);
      }
    });
  }, { threshold: .2 });

  setTimeout(() => {
    document.querySelectorAll('.section-title').forEach(el => {
      el.classList.add('neon-reveal', 'neon-flash');
      neoIO.observe(el);
    });
  }, 100);
})();

// ── 8. SKILL BAR BOUNCE + GLOW ────────────────────────────────────
(function skillBarBounce() {
  const style = document.createElement('style');
  style.textContent = `
    .skill-bar.animated {
      animation: barBounce .6s cubic-bezier(.34,1.56,.64,1) forwards;
    }
    @keyframes barBounce {
      0%   { transform: scaleX(0); transform-origin: left; }
      80%  { transform: scaleX(1.04); transform-origin: left; }
      100% { transform: scaleX(1); transform-origin: left; }
    }
    .skill-bar-bg:hover .skill-bar {
      box-shadow: 0 0 12px currentColor;
      filter: brightness(1.3);
    }
  `;
  document.head.appendChild(style);
})();

// ── 9. FLOATING ELEMENTS (Parallax on scroll) ──────────────────────
(function parallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Create floating code snippets
  const snippets = [
    '@RestController', '@SpringBootApplication', 'extends Thread',
    'implements Runnable', 'Optional<T>', 'CompletableFuture',
    '@Autowired', 'List<String>', 'HashMap<K,V>', 'Stream.of()',
    'lambda -> {}', '@Entity', 'JpaRepository', 'Mono<T>',
  ];

  snippets.forEach((text, i) => {
    const el = document.createElement('div');
    Object.assign(el.style, {
      position:'absolute',
      fontFamily:"'Share Tech Mono',monospace",
      fontSize: (Math.random() * .35 + .55) + 'rem',
      color: ['rgba(0,229,255,.12)','rgba(157,78,221,.12)','rgba(0,255,136,.1)'][i % 3],
      top: (Math.random() * 80 + 5) + '%',
      left: (Math.random() * 85 + 5) + '%',
      pointerEvents: 'none',
      zIndex: '2',
      userSelect: 'none',
      animation: `floatCode ${(Math.random()*8+6).toFixed(1)}s ease-in-out ${(Math.random()*4).toFixed(1)}s infinite alternate`,
      whiteSpace: 'nowrap'
    });
    el.textContent = text;
    hero.appendChild(el);
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatCode {
      from { transform: translateY(0) rotate(-1deg); opacity:.6; }
      to   { transform: translateY(-18px) rotate(1deg); opacity:1; }
    }
  `;
  document.head.appendChild(style);

  // Parallax on scroll
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent && y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * .25}px)`;
      heroContent.style.opacity   = 1 - y / window.innerHeight * 1.5;
    }
  });
})();

// ── 10. PARTICLE BURST ON BUTTON CLICK ────────────────────────────
(function buttonBurst() {
  function burst(e, btn) {
    const r = btn.getBoundingClientRect();
    const cx = e.clientX; const cy = e.clientY;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      const angle = (Math.random() * Math.PI * 2);
      const speed = Math.random() * 80 + 40;
      const size  = Math.random() * 5 + 2;
      const col   = ['#00e5ff','#9d4edd','#00ff88','#ffb300'][Math.floor(Math.random()*4)];
      Object.assign(p.style, {
        position:'fixed', left:cx+'px', top:cy+'px',
        width:size+'px', height:size+'px', borderRadius:'50%',
        background:col, pointerEvents:'none', zIndex:'999998',
        transform:'translate(-50%,-50%)',
        boxShadow:`0 0 ${size*2}px ${col}`
      });
      document.body.appendChild(p);
      const tx = Math.cos(angle) * speed;
      const ty = Math.sin(angle) * speed;
      p.animate([
        { transform:`translate(-50%,-50%) translate(0,0)`, opacity:1 },
        { transform:`translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`, opacity:0 }
      ], { duration: Math.random() * 400 + 300, easing:'ease-out' })
        .onfinish = () => p.remove();
    }
  }

  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', e => burst(e, btn));
  });
})();

// ── 11. TYPEWRITER SECTION LABELS ─────────────────────────────────
(function typeSectionLabels() {
  const labelIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const original = el.dataset.text || el.textContent;
      el.dataset.text = original;
      el.textContent = '';
      let i = 0;
      const iv = setInterval(() => {
        el.textContent += original[i++];
        if (i >= original.length) clearInterval(iv);
      }, 35);
      labelIO.unobserve(el);
    });
  }, { threshold: .5 });

  setTimeout(() => {
    document.querySelectorAll('.section-label').forEach(el => labelIO.observe(el));
  }, 200);
})();

// ── 12. NAV LINK HOVER RIPPLE ─────────────────────────────────────
(function navRipple() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const r = link.getBoundingClientRect();
      const x = e.clientX - r.left;
      const ripple = document.createElement('span');
      Object.assign(ripple.style, {
        position:'absolute', left:x+'px', top:'50%',
        transform:'translate(-50%,-50%) scale(0)',
        width:'80px', height:'80px', borderRadius:'50%',
        background:'rgba(0,229,255,.2)', pointerEvents:'none'
      });
      link.style.position = 'relative'; link.style.overflow = 'hidden';
      link.appendChild(ripple);
      ripple.animate([
        { transform:'translate(-50%,-50%) scale(0)', opacity:1 },
        { transform:'translate(-50%,-50%) scale(2)', opacity:0 }
      ], { duration:500, easing:'ease-out' }).onfinish = () => ripple.remove();
    });
  });
})();
