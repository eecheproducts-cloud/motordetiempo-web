/* ============================================================
   Motor de Tiempo — Cookie Banner
   Incluir este archivo en index.html y academy.html:
   <script src="cookie-banner.js"></script>
   ============================================================ */
(function() {
  const STORAGE_KEY = 'mdt_cookie_consent';

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e) { return null; }
  }
  function saveConsent(obj) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  /* ── Inject styles ── */
  const style = document.createElement('style');
  style.textContent = `
    #mdt-cookie-banner {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      z-index: 9000; width: min(640px, calc(100vw - 32px));
      background: #0e0e1a;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      padding: 24px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(249,115,22,0.1);
      font-family: 'Inter', system-ui, sans-serif;
      color: #f0f0ff;
      animation: cookieSlideUp 0.35s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes cookieSlideUp {
      from { opacity:0; transform: translateX(-50%) translateY(20px); }
      to   { opacity:1; transform: translateX(-50%) translateY(0); }
    }
    #mdt-cookie-banner.hidden { display: none; }
    .mdt-cookie-header {
      display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
    }
    .mdt-cookie-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.2);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      font-size: 15px;
    }
    .mdt-cookie-title {
      font-family: 'Space Grotesk', system-ui, sans-serif;
      font-weight: 600; font-size: 0.92rem; color: #f0f0ff;
    }
    .mdt-cookie-body {
      font-size: 0.83rem; color: rgba(240,240,255,0.55);
      line-height: 1.65; margin-bottom: 16px;
    }
    .mdt-cookie-actions {
      display: flex; gap: 8px; flex-wrap: wrap;
    }
    .mdt-cookie-btn {
      flex: 1; min-width: 120px;
      font-family: 'Space Grotesk', system-ui, sans-serif;
      font-weight: 600; font-size: 0.8rem;
      padding: 10px 16px; border-radius: 8px; border: none; cursor: pointer;
      transition: all 0.15s;
    }
    .mdt-cookie-btn-primary {
      background: linear-gradient(135deg, #f97316, #c2520a);
      color: #fff; box-shadow: 0 0 16px rgba(249,115,22,0.3);
    }
    .mdt-cookie-btn-primary:hover { box-shadow: 0 0 28px rgba(249,115,22,0.45); transform: translateY(-1px); }
    .mdt-cookie-btn-secondary {
      background: rgba(255,255,255,0.05); color: rgba(240,240,255,0.7);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .mdt-cookie-btn-secondary:hover { background: rgba(255,255,255,0.09); color: #f0f0ff; }
    .mdt-cookie-btn-ghost {
      background: transparent; color: rgba(240,240,255,0.4);
      border: 1px solid rgba(255,255,255,0.06);
    }
    .mdt-cookie-btn-ghost:hover { color: rgba(240,240,255,0.7); border-color: rgba(255,255,255,0.12); }

    /* Config panel */
    #mdt-cookie-config {
      margin-top: 16px; padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.07);
      display: none;
    }
    #mdt-cookie-config.open { display: block; }
    .mdt-config-row {
      display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
      padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .mdt-config-row:last-of-type { border-bottom: none; }
    .mdt-config-label {
      font-family: 'Space Grotesk', system-ui, sans-serif;
      font-size: 0.82rem; font-weight: 600; color: #f0f0ff; margin-bottom: 3px;
    }
    .mdt-config-desc {
      font-size: 0.76rem; color: rgba(240,240,255,0.4); line-height: 1.55;
    }
    .mdt-toggle-wrap { flex-shrink: 0; padding-top: 2px; }
    .mdt-toggle {
      appearance: none; -webkit-appearance: none;
      width: 40px; height: 22px; border-radius: 999px; cursor: pointer;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.12);
      position: relative; transition: background 0.2s;
    }
    .mdt-toggle:checked { background: #f97316; border-color: #f97316; }
    .mdt-toggle::after {
      content: ''; position: absolute; top: 3px; left: 3px;
      width: 14px; height: 14px; border-radius: 50%;
      background: rgba(255,255,255,0.5); transition: left 0.2s, background 0.2s;
    }
    .mdt-toggle:checked::after { left: 21px; background: #fff; }
    .mdt-toggle:disabled { opacity: 0.4; cursor: not-allowed; }
    .mdt-always-on {
      font-family: 'Space Mono', monospace; font-size: 0.68rem;
      color: #4ade80; background: rgba(74,222,128,0.1);
      border: 1px solid rgba(74,222,128,0.2);
      padding: 3px 8px; border-radius: 999px; white-space: nowrap; margin-top: 2px;
    }
    .mdt-cookie-save {
      width: 100%; margin-top: 14px;
    }
  `;
  document.head.appendChild(style);

  /* ── Build banner HTML ── */
  function createBanner() {
    const el = document.createElement('div');
    el.id = 'mdt-cookie-banner';
    el.innerHTML = `
      <div class="mdt-cookie-header">
        <div class="mdt-cookie-icon">🍪</div>
        <div class="mdt-cookie-title">Cookies</div>
      </div>
      <p class="mdt-cookie-body">Usamos cookies para el funcionamiento del sitio y para el widget de agendamiento (Calendly). Podés aceptarlas, rechazar las opcionales o configurar tus preferencias.</p>
      <div class="mdt-cookie-actions">
        <button class="mdt-cookie-btn mdt-cookie-btn-primary" id="mdt-accept-all">Aceptar todo</button>
        <button class="mdt-cookie-btn mdt-cookie-btn-secondary" id="mdt-accept-necessary">Solo necesarias</button>
        <button class="mdt-cookie-btn mdt-cookie-btn-ghost" id="mdt-configure">Configurar</button>
      </div>
      <div id="mdt-cookie-config">
        <div class="mdt-config-row">
          <div>
            <div class="mdt-config-label">Cookies necesarias</div>
            <div class="mdt-config-desc">Necesarias para el funcionamiento básico del sitio. No pueden desactivarse.</div>
          </div>
          <div class="mdt-toggle-wrap">
            <span class="mdt-always-on">Siempre activas</span>
          </div>
        </div>
        <div class="mdt-config-row">
          <div>
            <div class="mdt-config-label">Cookies de Calendly (terceros)</div>
            <div class="mdt-config-desc">Calendly coloca cookies al cargar el widget de agendamiento. Si las rechazás, los botones "Agendar reunión" abrirán Calendly en una nueva pestaña sin cookies embebidas.</div>
          </div>
          <div class="mdt-toggle-wrap">
            <input type="checkbox" class="mdt-toggle" id="mdt-toggle-calendly">
          </div>
        </div>
        <button class="mdt-cookie-btn mdt-cookie-btn-primary mdt-cookie-save" id="mdt-save-prefs">Guardar preferencias</button>
      </div>
    `;
    document.body.appendChild(el);

    el.querySelector('#mdt-accept-all').addEventListener('click', function() {
      saveConsent({ necessary: true, calendly: true });
      hideBanner();
      applyConsent({ calendly: true });
    });
    el.querySelector('#mdt-accept-necessary').addEventListener('click', function() {
      saveConsent({ necessary: true, calendly: false });
      hideBanner();
      applyConsent({ calendly: false });
    });
    el.querySelector('#mdt-configure').addEventListener('click', function() {
      const panel = el.querySelector('#mdt-cookie-config');
      panel.classList.toggle('open');
      this.textContent = panel.classList.contains('open') ? 'Cerrar' : 'Configurar';
    });
    el.querySelector('#mdt-save-prefs').addEventListener('click', function() {
      const calendlyOn = el.querySelector('#mdt-toggle-calendly').checked;
      saveConsent({ necessary: true, calendly: calendlyOn });
      hideBanner();
      applyConsent({ calendly: calendlyOn });
    });
  }

  function hideBanner() {
    const b = document.getElementById('mdt-cookie-banner');
    if (b) b.classList.add('hidden');
  }

  function showBanner() {
    const existing = document.getElementById('mdt-cookie-banner');
    if (existing) { existing.classList.remove('hidden'); return; }
    createBanner();
  }

  /* ── Apply consent to Calendly links ── */
  function applyConsent(consent) {
    // All Calendly links already open in _blank; no embedded widget on this site
    // This hook is here for future widget integration
    if (!consent.calendly) {
      document.querySelectorAll('a[href*="calendly.com"]').forEach(function(a) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      });
    }
  }

  /* ── Wire "Gestionar cookies" links ── */
  function wireManageLinks() {
    document.querySelectorAll('.mdt-manage-cookies').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        showBanner();
        const panel = document.getElementById('mdt-cookie-config');
        if (panel) { panel.classList.add('open'); }
      });
    });
  }

  /* ── Init ── */
  function init() {
    wireManageLinks();
    const consent = getConsent();
    if (!consent) {
      showBanner();
    } else {
      applyConsent(consent);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
