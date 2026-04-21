<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Motor Academy — Motor de Tiempo</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&family=Space+Mono&display=swap" rel="stylesheet">
<style>
:root {
  --bg:      #08080f;
  --bg2:     #0e0e1a;
  --bg3:     #13131f;
  --border:  rgba(255,255,255,0.07);
  --fg:      #f0f0ff;
  --fg-dim:  rgba(240,240,255,0.5);
  --fg-muted:rgba(240,240,255,0.25);
  --accent:  #f97316;
  --accent2: #fb923c;
  --green:   #4ade80;
  --glow:    rgba(249,115,22,0.35);
  --sans:    'Space Grotesk', system-ui, sans-serif;
  --body:    'Inter', system-ui, sans-serif;
  --mono:    'Space Mono', monospace;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--body);
  font-weight: 400;
  line-height: 1.6;
  overflow-x: hidden;
}
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 40px; height: 64px;
  border-bottom: 1px solid var(--border);
  background: rgba(8,8,15,0.85);
  backdrop-filter: blur(20px);
}
.nav-logo {
  font-family: var(--sans); font-weight: 700; font-size: 1rem;
  color: var(--fg); text-decoration: none;
  display: flex; align-items: center; gap: 10px;
}
.nav-logo-icon {
  width: 28px; height: 28px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a {
  color: var(--fg-dim); text-decoration: none;
  font-size: 0.875rem; font-family: var(--sans);
  transition: color 0.2s;
}
.nav-links a:hover, .nav-links a.active { color: var(--fg); }
.nav-right { display: flex; align-items: center; gap: 16px; }
.nav-badge {
  display: flex; align-items: center; gap: 7px;
  font-size: 0.75rem; color: var(--green); font-family: var(--mono);
  background: rgba(74,222,128,0.08);
  border: 1px solid rgba(74,222,128,0.2);
  padding: 4px 12px; border-radius: 999px;
}
.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); animation: blink 2s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
.nav-cta {
  background: var(--accent); color: #fff;
  font-family: var(--sans); font-weight: 600; font-size: 0.82rem;
  text-decoration: none; padding: 9px 20px; border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative; overflow: hidden;
  animation: nav-pulse 3s 2s infinite;
}
.nav-cta::before {
  content: '';
  position: absolute; top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transform: skewX(-15deg);
  animation: shimmer 3s 1s infinite;
}
.nav-cta:hover { transform: translateY(-2px); box-shadow: 0 0 24px var(--glow); }
@keyframes shimmer { 0%{left:-100%} 60%,100%{left:160%} }
@keyframes nav-pulse { 0%,80%,100%{box-shadow:0 0 0 0 var(--glow)} 40%{box-shadow:0 0 0 6px transparent} }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  padding: 120px 40px 80px;
  position: relative; overflow: hidden;
}
.hero-glow {
  position: absolute; top: -10%; left: 50%; transform: translateX(-50%);
  width: 800px; height: 600px;
  background: radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.hero-inner { position: relative; z-index: 1; max-width: 820px; }
.hero-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(249,115,22,0.1);
  border: 1px solid rgba(249,115,22,0.25);
  border-radius: 999px; padding: 6px 16px;
  font-size: 0.78rem; font-family: var(--sans); color: var(--accent2);
  margin-bottom: 40px;
  animation: fadeUp 0.7s 0.1s both;
}
h1 {
  font-family: var(--sans); font-weight: 700;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1.07; letter-spacing: -0.03em;
  margin-bottom: 28px;
  animation: fadeUp 0.8s 0.2s both;
}
.grad {
  background: linear-gradient(135deg, #fff 0%, var(--accent2) 60%, var(--accent) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-sub {
  font-size: 1.1rem; color: var(--fg-dim);
  max-width: 540px; margin: 0 auto 48px; line-height: 1.75;
  animation: fadeUp 0.8s 0.3s both;
}
.hero-actions {
  display: flex; gap: 14px; justify-content: center; align-items: center;
  animation: fadeUp 0.8s 0.45s both;
}
.btn-primary {
  background: linear-gradient(135deg, var(--accent), color-mix(in oklch, var(--accent) 70%, black));
  color: #fff; font-family: var(--sans); font-weight: 600;
  font-size: 0.9rem; text-decoration: none;
  padding: 14px 28px; border-radius: 10px;
  box-shadow: 0 0 32px color-mix(in oklch, var(--accent) 50%, transparent);
  transition: box-shadow 0.25s, transform 0.2s;
  position: relative; overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute; top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
  transform: skewX(-15deg);
  animation: shimmer 2.4s infinite;
}
.btn-primary:hover { box-shadow: 0 0 52px color-mix(in oklch, var(--accent) 70%, transparent); transform: translateY(-3px) scale(1.02); }
.btn-primary:active { transform: scale(0.98); }
@keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }

/* ── SECTIONS ── */
.section { padding: 100px 40px; border-top: 1px solid var(--border); position: relative; }
.section-eyebrow {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 20px; display: block;
}
h2 {
  font-family: var(--sans); font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1; letter-spacing: -0.025em;
}
h3 { font-family: var(--sans); font-weight: 600; font-size: 1.1rem; }
.section-inner { max-width: 1100px; margin: 0 auto; }

/* ── PARA QUIÉN ── */
.paraquien-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: start; margin-top: 0;
}
.paraquien-copy p { color: var(--fg-dim); font-size: 1rem; line-height: 1.8; margin-top: 16px; }
.paraquien-bullets { display: flex; flex-direction: column; gap: 16px; padding-top: 8px; }
.bullet-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px; padding: 20px 22px;
  display: flex; gap: 14px; align-items: flex-start;
  transition: border-color 0.3s, transform 0.25s;
}
.bullet-card:hover { border-color: rgba(249,115,22,0.3); transform: translateX(4px); }
.bullet-num {
  font-family: var(--mono); font-size: 0.72rem; color: var(--accent);
  background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.2);
  width: 28px; height: 28px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.bullet-card p { color: rgba(240,240,255,0.75); font-size: 0.9rem; line-height: 1.6; }

/* ── QUÉ INCLUYE ── */
.incluye-section { background: var(--bg2); }
.incluye-header {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: end; margin-bottom: 56px;
}
.incluye-header p { color: var(--fg-dim); line-height: 1.8; }
.incluye-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
}
.incluye-card {
  background: var(--bg); border: 1px solid var(--border);
  border-radius: 12px; padding: 24px 22px;
  transition: border-color 0.3s, transform 0.25s;
  position: relative; overflow: hidden;
}
.incluye-card:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-3px); }
.incluye-card::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity: 0; transition: opacity 0.3s;
}
.incluye-card:hover::after { opacity: 1; }
.incluye-icon { font-size: 1.4rem; margin-bottom: 14px; display: block; }
.incluye-card h3 { font-size: 0.95rem; margin-bottom: 8px; }
.incluye-card p { color: var(--fg-dim); font-size: 0.83rem; line-height: 1.6; }

/* ── CÓMO FUNCIONA ── */
.steps-header { margin-bottom: 56px; }
.steps-flow {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 2px;
}
.step-card {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 16px; padding: 40px 36px;
  position: relative; overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
}
.step-card:hover { border-color: rgba(249,115,22,0.3); transform: translateY(-4px); }
.step-card::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(249,115,22,0.05) 0%, transparent 50%);
  opacity: 0; transition: opacity 0.3s;
}
.step-card:hover::before { opacity: 1; }
.step-num-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.25);
  border-radius: 9px; font-family: var(--mono); font-size: 0.8rem;
  color: var(--accent); margin-bottom: 24px;
}
.step-card h3 { font-size: 1.15rem; margin-bottom: 12px; }
.step-card p { color: var(--fg-dim); font-size: 0.9rem; line-height: 1.7; }

/* ── DIFERENCIAL ── */
.diferencial-section {
  background: var(--bg2);
}
.diferencial-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
}
.diferencial-copy p { color: var(--fg-dim); font-size: 1rem; line-height: 1.85; margin-top: 20px; }
.diferencial-quote {
  background: var(--bg); border: 1px solid rgba(249,115,22,0.2);
  border-radius: 16px; padding: 40px;
  border-left: 3px solid var(--accent);
  position: relative;
}
.diferencial-quote::before {
  content: '"';
  font-family: var(--sans); font-size: 5rem; line-height: 1;
  color: rgba(249,115,22,0.15);
  position: absolute; top: 16px; left: 24px;
}
.diferencial-quote p {
  font-family: var(--sans); font-size: 1.1rem; font-weight: 500;
  line-height: 1.7; color: var(--fg); position: relative; z-index: 1;
  padding-top: 16px;
}
.diferencial-quote cite {
  display: block; margin-top: 16px;
  font-style: normal; font-size: 0.8rem;
  color: var(--accent); font-family: var(--mono);
}

/* ── CTA ── */
.cta-section {
  text-align: center; padding: 120px 40px;
  border-top: 1px solid var(--border); position: relative; overflow: hidden;
}
.cta-glow {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 700px; height: 500px;
  background: radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 65%);
  pointer-events: none;
}
.cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
.cta-inner h2 { margin-bottom: 20px; }
.cta-inner p { color: var(--fg-dim); margin-bottom: 44px; font-size: 1rem; }
.cta-actions { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.cta-email { color: var(--fg-muted); font-size: 0.85rem; text-decoration: none; font-family: var(--mono); transition: color 0.2s; }
.cta-email:hover { color: var(--accent2); }

/* ── FOOTER ── */
footer {
  padding: 28px 40px; border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.footer-logo { font-family: var(--sans); font-weight: 700; font-size: 0.9rem; color: var(--fg-dim); text-decoration: none; }
.footer-links { display: flex; gap: 24px; list-style: none; }
.footer-links a { color: var(--fg-muted); font-size: 0.8rem; text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: var(--fg-dim); }
.footer-copy { font-size: 0.75rem; color: var(--fg-muted); font-family: var(--mono); }

/* ── SCROLL REVEAL ── */
.reveal { opacity:0; transform:translateY(28px); transition:opacity 0.75s, transform 0.75s; }
.reveal.visible { opacity:1; transform:none; }
.reveal-d1 { transition-delay:0.1s; }
.reveal-d2 { transition-delay:0.2s; }
.reveal-d3 { transition-delay:0.3s; }

/* ── MOBILE ── */
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links, .nav-badge { display: none; }
  .hero, .section, .cta-section { padding: 100px 20px 60px; }
  .section { padding: 72px 20px; }
  .paraquien-grid, .incluye-header, .diferencial-inner { grid-template-columns: 1fr; gap: 32px; }
  .incluye-grid, .steps-flow { grid-template-columns: 1fr; gap: 12px; }
  footer { flex-direction: column; gap: 16px; text-align: center; padding: 24px 20px; }
  .footer-links { flex-wrap: wrap; justify-content: center; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">⚡</div>
    Motor de Tiempo
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Soluciones</a></li>
    <li><a href="academy.html" class="active">Motor Academy</a></li>
    <li><a href="index.html#nosotros">Nosotros</a></li>
  </ul>
  <div class="nav-right">
    <div class="nav-badge"><span class="dot"></span>Disponible</div>
    <a href="https://calendly.com/hola-motordetiempo/30min" class="nav-cta" target="_blank">Agendar reunión</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-inner">
    <div class="hero-pill">✦ Formación en IA para empresas</div>
    <h1>Tu equipo aprende.<br><span class="grad">Tu empresa avanza.</span></h1>
    <p class="hero-sub">Motor Academy acompaña a empresas en sus primeros pasos con IA — para que después lo puedan hacer solos.</p>
    <div class="hero-actions">
      <a href="https://calendly.com/hola-motordetiempo/30min" class="btn-primary" target="_blank">Hablemos de tu empresa →</a>
    </div>
  </div>
</section>

<!-- PARA QUIÉN -->
<section class="section" id="para-quien">
  <div class="section-inner">
    <div class="paraquien-grid">
      <div class="paraquien-copy">
        <span class="section-eyebrow reveal">// para quién es</span>
        <h2 class="reveal">No es<br>para todos.</h2>
        <p class="reveal">Es para empresas que quieren desarrollar capacidad propia en IA — sin depender de un proveedor para siempre.</p>
      </div>
      <div class="paraquien-bullets">
        <div class="bullet-card reveal reveal-d1">
          <div class="bullet-num">01</div>
          <p>Equipos de IT o Scrum que quieren incorporar IA a sus procesos</p>
        </div>
        <div class="bullet-card reveal reveal-d2">
          <div class="bullet-num">02</div>
          <p>Managers que necesitan entender qué es posible y por dónde empezar</p>
        </div>
        <div class="bullet-card reveal reveal-d3">
          <div class="bullet-num">03</div>
          <p>Empresas que quieren una hoja de ruta clara antes de invertir fuerte</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- QUÉ INCLUYE -->
<section class="section incluye-section" id="incluye">
  <div class="section-inner">
    <div class="incluye-header">
      <div>
        <span class="section-eyebrow reveal">// qué incluye</span>
        <h2 class="reveal">Un programa hecho<br>para tu empresa.</h2>
      </div>
      <p class="reveal">No es teoría genérica. Cada módulo se adapta a los procesos y herramientas reales de tu organización.</p>
    </div>
    <div class="incluye-grid">
      <div class="incluye-card reveal reveal-d1">
        <span class="incluye-icon">🔍</span>
        <h3>Diagnóstico inicial</h3>
        <p>Qué procesos automatizar y con qué herramientas, según tu realidad.</p>
      </div>
      <div class="incluye-card reveal reveal-d2">
        <span class="incluye-icon">🎯</span>
        <h3>Sesiones a medida</h3>
        <p>Individuales, grupales o combinadas — adaptadas a tu equipo.</p>
      </div>
      <div class="incluye-card reveal reveal-d3">
        <span class="incluye-icon">🏭</span>
        <h3>Casos de tu industria</h3>
        <p>Ejemplos y ejercicios basados en problemas reales de tu sector.</p>
      </div>
      <div class="incluye-card reveal reveal-d1">
        <span class="incluye-icon">🤖</span>
        <h3>Herramientas de IA</h3>
        <p>Introducción práctica a Claude y automatizaciones concretas.</p>
      </div>
      <div class="incluye-card reveal reveal-d2">
        <span class="incluye-icon">🛠️</span>
        <h3>Práctica supervisada</h3>
        <p>Construís cosas reales. Revisamos juntos. Sin teoría vacía.</p>
      </div>
      <div class="incluye-card reveal reveal-d3">
        <span class="incluye-icon">📋</span>
        <h3>Materiales para seguir solos</h3>
        <p>Guías, templates y checklists para aplicar después de cada sesión.</p>
      </div>
    </div>
  </div>
</section>

<!-- CÓMO FUNCIONA -->
<section class="section" id="como-funciona">
  <div class="section-inner">
    <div class="steps-header">
      <span class="section-eyebrow reveal">// cómo funciona</span>
      <h2 class="reveal">Tres pasos, sin vueltas.</h2>
    </div>
    <div class="steps-flow">
      <div class="step-card reveal reveal-d1">
        <div class="step-num-badge">01</div>
        <h3>Diagnóstico</h3>
        <p>Entendemos tu empresa, tus procesos y dónde la IA puede generar más impacto.</p>
      </div>
      <div class="step-card reveal reveal-d2">
        <div class="step-num-badge">02</div>
        <h3>Programa a medida</h3>
        <p>Diseñamos el recorrido: qué aprender, en qué orden y con qué herramientas.</p>
      </div>
      <div class="step-card reveal reveal-d3">
        <div class="step-num-badge">03</div>
        <h3>Práctica con tu equipo</h3>
        <p>Sesiones en vivo, dudas reales, casos de tu negocio. Sin teoría vacía.</p>
      </div>
    </div>
  </div>
</section>

<!-- DIFERENCIAL -->
<section class="section diferencial-section" id="diferencial">
  <div class="diferencial-inner">
    <div class="diferencial-copy">
      <span class="section-eyebrow reveal">// diferencial</span>
      <h2 class="reveal">No es un curso.<br><span class="grad">Es acompañamiento.</span></h2>
      <p class="reveal">La mayoría de los cursos de IA enseñan herramientas genéricas. Motor Academy trabaja sobre los problemas reales de tu empresa. Cuando terminamos, tu equipo sabe qué hacer — y sabe por qué.</p>
    </div>
    <div class="diferencial-quote reveal">
      <p>Cuando terminamos, tu equipo sabe qué hacer — y sabe por qué.</p>
      <cite>— Motor Academy</cite>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" id="contacto">
  <div class="cta-glow"></div>
  <div class="cta-inner">
    <span class="section-eyebrow reveal" style="display:block;">// empezá hoy</span>
    <h2 class="reveal">¿Querés que tu equipo lidere<br>la IA en tu industria?</h2>
    <p class="reveal">La primera charla es gratis.</p>
    <div class="cta-actions reveal">
      <a href="https://calendly.com/hola-motordetiempo/30min" class="btn-primary" target="_blank" style="font-size:0.95rem;padding:16px 36px;">Agendá una charla →</a>
      <a href="mailto:hola@motordetiempo.com" class="cta-email">hola@motordetiempo.com</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <a href="index.html" class="footer-logo">Motor de Tiempo</a>
  <ul class="footer-links">
    <li><a href="index.html">Soluciones</a></li>
    <li><a href="academy.html">Motor Academy</a></li>
    <li><a href="index.html#nosotros">Nosotros</a></li>
    <li><a href="mailto:hola@motordetiempo.com">Contacto</a></li>
  </ul>
  <span class="footer-copy">© 2025 Motor de Tiempo</span>
</footer>

<script>
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
</script>
</body>
</html>
