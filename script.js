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
        capWidget: 'cap-widget',
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
        const modal = document.querySelector(CONFIG.SELECTORS.modal);
        const packageInfo = document.querySelector(CONFIG.SELECTORS.packageInfo);
        const finalBtn = document.querySelector(CONFIG.SELECTORS.finalButton);
        const capWidget = document.querySelector(CONFIG.SELECTORS.capWidget);

        if (!modal || !packageInfo || !finalBtn) return;

        packageInfo.textContent = `Gewähltes Paket: ${packageName}`;

        // Require the captcha to be solved again for every new request
        finalBtn.classList.add('disabled');
        if (capWidget && typeof capWidget.reset === 'function') {
            capWidget.reset();
        }

        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    } catch (error) {
        console.error('Error opening request modal:', error);
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
// Event Listeners - Captcha (cap-widget)
// ════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
    const capWidget = document.querySelector(CONFIG.SELECTORS.capWidget);
    const finalBtn = document.querySelector(CONFIG.SELECTORS.finalButton);

    if (!capWidget || !finalBtn) {
        console.warn('Captcha widget or final button not found');
        return;
    }

    // Enable the final button once the captcha challenge is solved
    capWidget.addEventListener('solve', function () {
        finalBtn.classList.remove('disabled');
    });

    // Re-disable the final button if the captcha is reset or expires
    capWidget.addEventListener('reset', function () {
        finalBtn.classList.add('disabled');
    });

    capWidget.addEventListener('error', function () {
        finalBtn.classList.add('disabled');
    });
});

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
    }
});
