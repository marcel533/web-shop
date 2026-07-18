// ════════════════════════════════════
// Configuration
// ════════════════════════════════════

const CONFIG = {
    EMAIL: 'marcel@pixelcity.top',
    SELECTORS: {
        pages: '.page',
        footerButtons: '.footer-btn',
        modal: '#modalOverlay',
        packageInfo: '#packageInfo',
        finalButton: '#finalCopyBtn',
        captchaWidget: '#captchaWidget',
        agbPopup: '#agb-popup',
        agbCheckbox: '#agb-checkbox',
        buyButton: '#buy-submit-button',
        closePopupBtn: '#close-popup-btn',
    }
};

// ════════════════════════════════════
// Utilities
// ════════════════════════════════════

/**
 * Shows a page and hides others
 * @param {string} pageId - The page ID without 'page-' prefix
 * @param {HTMLElement} button - The button element that was clicked
 */
function showPage(pageId, button) {
    try {
        // Hide all pages
        document.querySelectorAll(CONFIG.SELECTORS.pages).forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (!targetPage) {
            console.warn(`Page not found: page-${pageId}`);
            return;
        }
        targetPage.classList.add('active');

        // Update active button
        document.querySelectorAll(CONFIG.SELECTORS.footerButtons).forEach(btn => {
            btn.classList.remove('active');
        });
        if (button) button.classList.add('active');

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error showing page:', error);
    }
}

/**
 * Opens the request modal for a package
 * @param {string} packageName - The package name
 */
function openRequest(packageName) {
    try {
        const popup = document.getElementById('maintenance-popup');
        if (popup) {
            popup.style.display = 'flex';
            popup.setAttribute('aria-hidden', 'false');
        }
    } catch (error) {
        console.error('Error opening maintenance popup:', error);
    }
}

/**
 * Closes the maintenance popup
 */
function closeMaintenance() {
    try {
        const popup = document.getElementById('maintenance-popup');
        if (popup) {
            popup.style.display = 'none';
            popup.setAttribute('aria-hidden', 'true');
        }
    } catch (error) {
        console.error('Error closing maintenance popup:', error);
    }
}

/**
 * Closes the modal
 */
function closeModal() {
    try {
        const modal = document.querySelector(CONFIG.SELECTORS.modal);
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    } catch (error) {
        console.error('Error closing modal:', error);
    }
}

/**
 * Copies email to clipboard and opens AGB popup
 */
function copyEmail() {
    try {
        const finalBtn = document.querySelector(CONFIG.SELECTORS.finalButton);
        if (finalBtn && !finalBtn.classList.contains('disabled')) {
            openAgbPopup();
        }
    } catch (error) {
        console.error('Error in copyEmail:', error);
    }
}

/**
 * Handles the actual email copy after AGB acceptance
 */
function doCopyEmail() {
    try {
        const popup = document.querySelector(CONFIG.SELECTORS.agbPopup);
        const finalBtn = document.querySelector(CONFIG.SELECTORS.finalButton);

        navigator.clipboard.writeText(CONFIG.EMAIL).then(() => {
            // Close popup
            if (popup) popup.style.display = 'none';

            // Show feedback
            if (finalBtn) {
                const originalText = finalBtn.innerText;
                finalBtn.innerText = '✓ E-MAIL KOPIERT!';
                finalBtn.style.background = '#00ff88';
                finalBtn.style.color = '#000';

                setTimeout(() => {
                    finalBtn.innerText = originalText;
                    finalBtn.style.background = '';
                    finalBtn.style.color = '';
                    closeModal();
                }, 2000);
            }
        }).catch(() => {
            alert(`E-Mail: ${CONFIG.EMAIL}`);
        });
    } catch (error) {
        console.error('Error copying email:', error);
        alert(`E-Mail: ${CONFIG.EMAIL}`);
    }
}

/**
 * Opens the AGB popup
 */
function openAgbPopup() {
    try {
        const popup = document.querySelector(CONFIG.SELECTORS.agbPopup);
        const agbCheckbox = document.querySelector(CONFIG.SELECTORS.agbCheckbox);
        const buyButton = document.querySelector(CONFIG.SELECTORS.buyButton);

        if (popup && agbCheckbox && buyButton) {
            agbCheckbox.checked = false;
            buyButton.disabled = true;
            popup.style.display = 'flex';
            popup.setAttribute('aria-hidden', 'false');
        }
    } catch (error) {
        console.error('Error opening AGB popup:', error);
    }
}

// ════════════════════════════════════
// Custom Captcha Logic
// ════════════════════════════════════

function captchaClick() {
    const widget = document.getElementById('captchaWidget');
    const spinner = document.getElementById('captchaSpinner');
    if (!widget || widget.classList.contains('solved') || widget.classList.contains('checking')) return;

    // Checking state
    widget.classList.add('checking');
    spinner.style.display = 'block';

    // Simulate brief verification delay (300–700ms)
    const delay = 300 + Math.random() * 400;
    setTimeout(() => {
        widget.classList.remove('checking');
        spinner.style.display = 'none';
        widget.classList.add('solved');

        const finalBtn = document.querySelector(CONFIG.SELECTORS.finalButton);
        if (finalBtn) finalBtn.classList.remove('disabled');
    }, delay);
}

function captchaReset() {
    const widget = document.getElementById('captchaWidget');
    const spinner = document.getElementById('captchaSpinner');
    if (!widget) return;
    widget.classList.remove('solved', 'checking');
    if (spinner) spinner.style.display = 'none';
}

// ════════════════════════════════════
// Event Listeners - AGB Popup
// ════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
    const agbCheckbox = document.querySelector(CONFIG.SELECTORS.agbCheckbox);
    const buyButton = document.querySelector(CONFIG.SELECTORS.buyButton);
    const closeBtn = document.querySelector(CONFIG.SELECTORS.closePopupBtn);
    const popup = document.querySelector(CONFIG.SELECTORS.agbPopup);

    if (!agbCheckbox || !buyButton || !closeBtn || !popup) {
        console.warn('AGB popup elements not found');
        return;
    }

    // Toggle buy button based on checkbox
    agbCheckbox.addEventListener('change', function () {
        buyButton.disabled = !this.checked;
    });

    // Buy button triggers email copy
    buyButton.addEventListener('click', function () {
        doCopyEmail();
    });

    // Close popup button
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
        agbCheckbox.checked = false;
        buyButton.disabled = true;
    });

    // Close popup on background click
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            popup.setAttribute('aria-hidden', 'true');
            agbCheckbox.checked = false;
            buyButton.disabled = true;
        }
    });

    // Close maintenance popup on background click
    const maintenancePopup = document.getElementById('maintenance-popup');
    if (maintenancePopup) {
        maintenancePopup.addEventListener('click', function (e) {
            if (e.target === maintenancePopup) closeMaintenance();
        });
    }
});

// ════════════════════════════════════
// Keyboard Navigation
// ════════════════════════════════════

document.addEventListener('keydown', function (e) {
    const modal = document.querySelector(CONFIG.SELECTORS.modal);
    const popup = document.querySelector(CONFIG.SELECTORS.agbPopup);

    // Close modals with Escape key
    if (e.key === 'Escape') {
        if (modal && modal.style.display === 'flex') {
            closeModal();
        }
        if (popup && popup.style.display === 'flex') {
            popup.style.display = 'none';
            popup.setAttribute('aria-hidden', 'true');
        }
        const maintenance = document.getElementById('maintenance-popup');
        if (maintenance && maintenance.style.display === 'flex') {
            closeMaintenance();
        }
    }
});
