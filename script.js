// ══ FOOTER NAVIGATION – Seitenwechsel ══
function showPage(pageId, btn) {
    // Alle Seiten verstecken
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Ziel-Seite anzeigen
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.add('active');

    // Aktiven Button markieren
    document.querySelectorAll('.footer-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Sanft nach oben scrollen
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══ MODAL – Anfrage öffnen ══
function openRequest(packageName) {
    const modal = document.getElementById('modalOverlay');
    const packageInfo = document.getElementById('packageInfo');
    const finalBtn = document.getElementById('finalCopyBtn');
    const captchaBox = document.getElementById('captchaClick');

    packageInfo.innerText = "Gewähltes Paket: " + packageName;
    captchaBox.querySelector('.checkbox').classList.remove('checked');
    captchaBox.classList.remove('checked');
    finalBtn.classList.add('disabled');

    modal.style.display = 'flex';
}

// ══ MODAL – Schließen ══
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// ══ CAPTCHA Klick-Logik ══
document.getElementById('captchaClick').addEventListener('click', function () {
    const checkbox = this.querySelector('.checkbox');
    checkbox.classList.toggle('checked');
    this.classList.toggle('checked');

    const finalBtn = document.getElementById('finalCopyBtn');
    if (checkbox.classList.contains('checked')) {
        finalBtn.classList.remove('disabled');
    } else {
        finalBtn.classList.add('disabled');
    }
});

// ══ E-Mail kopieren (wird nach AGB-Akzeptanz ausgeführt) ══
function doCopyEmail() {
    const email = "marcel@pixelcity.top";
    const popup = document.getElementById('agb-popup');

    navigator.clipboard.writeText(email).then(() => {
        // Popup schließen
        popup.style.display = 'none';

        // Modal: Button-Feedback anzeigen
        const finalBtn = document.getElementById('finalCopyBtn');
        const originalText = finalBtn.innerText;
        finalBtn.innerText = "E-MAIL KOPIERT!";
        finalBtn.style.background = "#00ff88";
        finalBtn.style.color = "#000";

        setTimeout(() => {
            finalBtn.innerText = originalText;
            finalBtn.style.background = "";
            finalBtn.style.color = "";
            closeModal();
        }, 2000);
    }).catch(() => {
        alert("E-Mail: " + email);
    });
}

// ══ CAPTCHA → AGB Popup öffnen ══
function copyEmail() {
    const finalBtn = document.getElementById('finalCopyBtn');
    if (!finalBtn.classList.contains('disabled')) {
        openAgbPopup();
    }
}

// ══ Modal schließen bei Klick außerhalb ══
window.onclick = function (event) {
    const modal = document.getElementById('modalOverlay');
    if (event.target === modal) closeModal();
};

// ══ AGB POPUP LOGIK ══
document.addEventListener('DOMContentLoaded', function () {
    const agbCheckbox = document.getElementById('agb-checkbox');
    const buyButton = document.getElementById('buy-submit-button');
    const closeBtn = document.getElementById('close-popup-btn');
    const popup = document.getElementById('agb-popup');

    // Checkbox aktiviert/deaktiviert den Kauf-Button
    agbCheckbox.addEventListener('change', function () {
        buyButton.disabled = !this.checked;
    });

    // Kauf-Button → E-Mail kopieren nach AGB-Akzeptanz
    buyButton.addEventListener('click', function () {
        doCopyEmail();
    });

    // Popup schließen (Abbrechen)
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        agbCheckbox.checked = false;
        buyButton.disabled = true;
    });

    // Popup schließen bei Klick auf den Hintergrund
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            agbCheckbox.checked = false;
            buyButton.disabled = true;
        }
    });
});

// ══ AGB POPUP öffnen ══
function openAgbPopup() {
    const popup = document.getElementById('agb-popup');
    const agbCheckbox = document.getElementById('agb-checkbox');
    const buyButton = document.getElementById('buy-submit-button');
    agbCheckbox.checked = false;
    buyButton.disabled = true;
    popup.style.display = 'flex';
}
