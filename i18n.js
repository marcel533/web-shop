// DE/EN – Texte, dynamische Karten und Sprach-Toggle
const LANGS = ['de', 'en'];
const UI = {
  de: {
    subtitle: 'PREMIUM DIGITAL ARCHITECTURE & NEXT-GEN DESIGN',
    home: 'Home', about: 'Über mich', team: 'Team', upcoming: 'Bevorstehende Pakete', impressum: 'Impressum',
    pricingTitle: 'Webseiten Preise & Pakete', pricingDesc: 'Wähle die passende Architektur für dein digitales Vorhaben.',
    extrasTitle: 'Add-ons & Upgrades fürs Web', refsTitle: 'Referenzprojekte', socialTitle: 'Digital Connect', rulesTitle: 'Rules',
    aboutTitle: 'Über mich', aboutDesc: 'Der Mensch hinter dem Code.',
    aboutRole: '// Full-Stack Developer & Digital Architect',
    aboutText: 'Ich bin ein leidenschaftlicher Entwickler mit Fokus auf modernes Web-Design, Frontend-Architektur und digitale Erlebnisse. Mein Ziel: Ideen in hochwertige, performante und ästhetische Webprojekte verwandeln.',
    statProjects: 'Projekte', statYears: 'Jahre Erfahrung', statEffort: 'Einsatz', statIdeas: 'Ideen',
    portfolioTitle: 'Mein Portfolio', portfolioDesc: 'Meine persönliche Entwickler-Seite — Skills, Fokus & Links auf einen Blick.', portfolioBtn: '↗ Portfolio ansehen',
    teamTitle: 'Das Team', teamDesc: 'Wer steckt hinter marcel533?', founderRole: '// Founder & Lead Developer',
    founderDesc: 'Frontend-Architekt, Designer, Streamer. Verantwortlich für alle Webprojekte und root-Setups.',
    openTitle: 'Offene Position', openRole: '// Du könntest hier stehen',
    openDesc: 'Wir suchen kreative Köpfe. Entwickler, Designer, Content Creator – melde dich!', apply: 'Bewerbung an:',
    inDev: 'IN ENTWICKLUNG', upTitle: 'Bevorstehende <span class="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Pakete</span>',
    upDesc: 'Neue Services werden gerade gebaut. Trag dich ein und werde als Erster benachrichtigt.',
    moreTitle: 'Mehr kommt bald', moreDesc: 'Weitere Plattformen & Services werden hier erscheinen. Join dem Discord für Updates:',
    impTitle: 'Impressum', impDesc: 'Rechtliche Informationen.', impProvider: '// Anbieter', impPrivate: 'Privates Einzelprojekt',
    impContact: '// Kontakt', impNote: '// Hinweis',
    impNoteText: 'Diese Seite ist ein privates Dienstleistungsangebot. Alle Preise verstehen sich als Nettopreise. Änderungen vorbehalten.',
    impLiab: '// Haftungsausschluss',
    impLiabText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
    siteMTitle: 'Wartungsarbeiten', siteMText: 'Das Projekt ist für <span class="font-semibold text-amber-400">unbestimmte Zeit</span> in Wartungsarbeiten.',
    mTitle: 'Kauffunktion deaktiviert', mText: 'Die Kauffunktion ist gerade <span class="font-semibold text-amber-400">temporär deaktiviert</span>.',
    mSub: 'Mehr Infos und Updates gibt es direkt auf unserem Discord-Server.', mDiscord: '⌁ Zum Discord-Server', close: '✕ Schließen',
    agbTitle: 'Fast geschafft! 🚀', agbIntro: 'Bitte lies und bestätige unsere Bedingungen, bevor du den Kauf abschließt.',
    agbNote: 'Die rechtlich verbindlichen Bedingungen sind auf Deutsch verfasst.',
    agbCheck: 'Ich habe die oben stehenden Bedingungen (insbesondere zu Inhalten und Haftung) sowie die <a href="/wiederruf" target="_blank" rel="noopener noreferrer" class="text-cyan-400 underline">Widerrufsbelehrung</a> gelesen und akzeptiere diese.',
    agbBuy: 'Zahlungspflichtig bestellen', agbCancel: 'Abbrechen',
    modalTitle: 'Projekt-Anfrage bestätigen', captcha: 'Ich bin kein Roboter', send: 'ANFRAGE ABSENDEN', modalClose: '✕ SCHLIESSEN',
    copied: '✓ E-MAIL KOPIERT!', included: 'Inklusive', free: 'gratis', rec: 'EMPFEHLUNG'
  },
  en: {
    subtitle: 'PREMIUM DIGITAL ARCHITECTURE & NEXT-GEN DESIGN',
    home: 'Home', about: 'About', team: 'Team', upcoming: 'Upcoming Packages', impressum: 'Legal Notice',
    pricingTitle: 'Website Pricing & Packages', pricingDesc: 'Choose the right architecture for your digital project.',
    extrasTitle: 'Web Add-ons & Upgrades', refsTitle: 'Reference Projects', socialTitle: 'Digital Connect', rulesTitle: 'Rules',
    aboutTitle: 'About me', aboutDesc: 'The person behind the code.',
    aboutRole: '// Full-Stack Developer & Digital Architect',
    aboutText: 'I am a passionate developer focused on modern web design, frontend architecture and digital experiences. My goal: turning ideas into high-quality, fast and beautiful web projects.',
    statProjects: 'Projects', statYears: 'Years of experience', statEffort: 'Commitment', statIdeas: 'Ideas',
    portfolioTitle: 'My Portfolio', portfolioDesc: 'My personal developer page — skills, focus & links at a glance.', portfolioBtn: '↗ View portfolio',
    teamTitle: 'The Team', teamDesc: 'Who is behind marcel533?', founderRole: '// Founder & Lead Developer',
    founderDesc: 'Frontend architect, designer, streamer. Responsible for all web projects and root setups.',
    openTitle: 'Open position', openRole: '// You could be here',
    openDesc: 'We are looking for creative minds. Developers, designers, content creators – get in touch!', apply: 'Apply at:',
    inDev: 'IN DEVELOPMENT', upTitle: 'Upcoming <span class="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Packages</span>',
    upDesc: 'New services are being built right now. Sign up and be the first to know.',
    moreTitle: 'More coming soon', moreDesc: 'More platforms & services will appear here. Join the Discord for updates:',
    impTitle: 'Legal Notice', impDesc: 'Legal information.', impProvider: '// Provider', impPrivate: 'Private individual project',
    impContact: '// Contact', impNote: '// Note',
    impNoteText: 'This site is a private service offering. All prices are net prices. Subject to change.',
    impLiab: '// Disclaimer',
    impLiabText: 'Despite careful content control, we accept no liability for the content of external links. The operators of the linked pages are solely responsible for their content.',
    siteMTitle: 'Maintenance', siteMText: 'The project is under maintenance for an <span class="font-semibold text-amber-400">indefinite time</span>.',
    mTitle: 'Purchasing disabled', mText: 'Purchasing is currently <span class="font-semibold text-amber-400">temporarily disabled</span>.',
    mSub: 'More info and updates are available on our Discord server.', mDiscord: '⌁ Go to Discord server', close: '✕ Close',
    agbTitle: 'Almost done! 🚀', agbIntro: 'Please read and confirm our terms before completing your purchase.',
    agbNote: 'The legally binding terms are written in German.',
    agbCheck: 'I have read and accept the terms above (especially regarding content and liability) and the <a href="/wiederruf" target="_blank" rel="noopener noreferrer" class="text-cyan-400 underline">right of withdrawal notice</a>.',
    agbBuy: 'Order with obligation to pay', agbCancel: 'Cancel',
    modalTitle: 'Confirm project request', captcha: "I'm not a robot", send: 'SEND REQUEST', modalClose: '✕ CLOSE',
    copied: '✓ EMAIL COPIED!', included: 'Included', free: 'free', rec: 'RECOMMENDED'
  }
};

// [Name, Preis, Stil, CTA(de,en), Features [[de,en],...], Paket-ID]
const PACKAGES = [
  ['Basic HTML', '15€', '', ['PROJEKT STARTEN', 'START PROJECT'], [['Statische Single-Page Architektur', 'Static single-page architecture'], ['Optimierte Informations-Hierarchie', 'Optimized information hierarchy'], ['W3C-konformer Clean Code', 'W3C-compliant clean code']], 'Basic'],
  ['Standard Web', '30€', '', ['ANFRAGE', 'REQUEST'], [['Exklusives UI/UX Design', 'Exclusive UI/UX design'], ['Full Asset Integration (Bilder, Icons)', 'Full asset integration (images, icons)'], ['Adaptive Responsive Engine', 'Adaptive responsive engine']], 'Standard'],
  ['Pro Web', '50€', 'premium', ['JETZT BUCHEN', 'BOOK NOW'], [['Next-Gen Web-Animationen', 'Next-gen web animations'], ['Mobile-First Performance-Optimierung', 'Mobile-first performance optimization'], ['Strategische SEO Foundation', 'Strategic SEO foundation']], 'Pro', true],
  ['Premium Web', '80€', 'premium', ['JETZT BUCHEN', 'BOOK NOW'], [['High-End UX/UI Framework', 'High-end UX/UI framework'], ['Kuratierte Premium Assets', 'Curated premium assets'], ['Core Web Vitals Maximierung', 'Core Web Vitals maximization']], 'Premium'],
  ['Ultimate', '180€', '', ['SYSTEM BAUEN', 'BUILD SYSTEM'], [['Skalierbare Backend-Architektur', 'Scalable backend architecture'], ['Komplexe dynamische Formularsysteme', 'Complex dynamic form systems'], ['Full Stack Deployment', 'Full stack deployment']], 'Ultimate'],
  ['Custom', '$$$', 'custom', ['KONTAKT AUFNEHMEN', 'GET IN TOUCH'], [['Bespoke Solutions (Maßarbeit)', 'Bespoke solutions (tailor-made)'], ['Dedizierter VIP-Prioritäts-Support', 'Dedicated VIP priority support'], ['Inklusive Strategieberatung', 'Strategy consulting included']], 'Custom']
];
const EXTRAS = [
  ['Eine Woche für jedes Projekt (auch weniger/mehr)', 'One week for every project (shorter/longer possible)', 'inc'],
  ['Digitaler Projekt-Versand (E-Mail)', 'Digital project delivery (email)', 'inc'],
  ['Erweiterte Animations-Layer', 'Extended animation layers', '+11€'],
  ['Zusätzliche Unterseite integrieren', 'Additional subpage', '+10€'],
  ['Captcha-Sicherheits-Integration', 'Captcha security integration', 'free'],
  ['Erweitertes Kontakt-Formular-Modul', 'Extended contact form module', '+5€'],
  ['Kein Wasserzeichen', 'No watermark', '+4€']
];
const RULES = [
  ['Keine komischen Anforderungen', 'No weird requirements'],
  ['Keine illegalen Anforderungen (einschließlich Darknet)', 'No illegal requirements (including darknet)'],
  ['Ohne Geldübergabe keine Webseite', 'No payment, no website']
];
const REFS = [
  ['https://marcel533.github.io/online-code-editor/', 'online-code-editor', ['Code editor (projekt von mir und freunden)', 'Code editor (project by me and friends)']],
  ['https://marcel533.github.io/passwort-genarator-und-benutzername/', 'SafeGen', ['Security Utility (Frontend)', 'Security utility (frontend)']]
];
const SOCIAL = [
  ['https://mastodon.social/@diamond8sniper', 'Mastodon Main', ['Official mastodon', 'Official Mastodon']],
  ['https://twitch.tv/diamond8sniper', 'Twitch', ['Live-Entwicklung & Gaming', 'Live development & gaming']],
  ['https://open.spotify.com/user/312d7whucgluvn3gek2amylytr4m?si=_sPmQXujQiidpIKIMqA8YA', 'Spotify Profile', ['Meine Playlists', 'My playlists']]
];

let currentLang = 'de';
function t(key) { return (UI[currentLang] && UI[currentLang][key]) || UI.de[key] || key; }

const LI = (txt) => `<li class="flex gap-2 text-sm text-slate-300"><span class="text-cyan-400" aria-hidden="true">✔</span>${txt}</li>`;
const CARD = 'relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40';
const LINK = 'group block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-400/50 hover:bg-white/[0.07]';

function renderDynamic() {
  const i = LANGS.indexOf(currentLang);
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  set('pkgGrid', PACKAGES.map(([name, price, style, cta, feats, id, badge]) => {
    const prem = style === 'premium', cust = style === 'custom';
    const btn = prem ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950'
      : cust ? 'border border-dashed border-white/30 text-slate-200 hover:border-cyan-400'
      : 'bg-white/10 text-white hover:bg-cyan-400 hover:text-slate-950';
    return `<article class="${CARD} ${prem ? 'border-cyan-400/40 shadow-[0_0_40px_-12px_rgba(34,211,238,.5)]' : ''} ${cust ? 'border-dashed' : ''}">
      ${badge ? `<span class="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-0.5 font-head text-[10px] font-bold tracking-widest text-slate-950">${t('rec')}</span>` : ''}
      <div class="mb-5 flex items-baseline justify-between gap-3"><h3 class="font-head text-lg font-bold text-white">${name}</h3><div class="font-head text-2xl font-black text-cyan-300">${price}</div></div>
      <ul class="mb-6 flex-1 space-y-2">${feats.map(f => LI(f[i])).join('')}</ul>
      <button onclick="openRequest('${id}')" class="w-full rounded-xl px-4 py-3 text-xs font-bold tracking-widest transition ${btn}">${cta[i]}</button></article>`;
  }).join(''));

  set('extrasGrid', EXTRAS.map(([de, en, b]) => {
    const free = b === 'inc' || b === 'free';
    const label = b === 'inc' ? t('included') : b === 'free' ? t('free') : b;
    return `<div class="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"><span>${i ? en : de}</span><span class="shrink-0 rounded-full px-3 py-1 text-xs font-bold ${free ? 'bg-emerald-400/15 text-emerald-300' : 'bg-fuchsia-500/15 text-fuchsia-300'}">${label}</span></div>`;
  }).join(''));

  const links = (arr) => arr.map(([href, title, sub]) => `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${LINK}"><span class="block font-head text-sm font-bold text-white group-hover:text-cyan-300">${title}</span><span class="mt-1 block text-xs text-slate-400">${sub[i]}</span></a>`).join('');
  set('refsGrid', links(REFS));
  set('socialGrid', links(SOCIAL));
  set('rulesList', RULES.map(r => LI(r[i])).join(''));
}

function applyLang(lang) {
  currentLang = LANGS.includes(lang) ? lang : 'de';
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-lang-opt]').forEach(el => {
    const on = el.dataset.langOpt === currentLang;
    el.classList.toggle('bg-cyan-400', on); el.classList.toggle('text-slate-950', on);
    el.classList.toggle('text-slate-400', !on);
  });
  renderDynamic();
}

function toggleLang() { applyLang(currentLang === 'de' ? 'en' : 'de'); }

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'de';
  try { saved = localStorage.getItem('lang') || 'de'; } catch (e) {}
  applyLang(saved);
});
