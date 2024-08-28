// Utilidades para animaciones
const easing = {
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
};

// Función mejorada de carga de contenido
function loadContent(section, showProgress) {
    const loadDiv = document.getElementById(section + '-load');
    const progressBar = loadDiv.querySelector('.progress-bar');
    progressBar.style.width = '0%';
    progressBar.style.transition = 'none';

    if (showProgress) {
        animateProgress(progressBar, 2000, () => showCompletionMessage(section));
    } else {
        setTimeout(() => {
            progressBar.style.transition = 'width 10s cubic-bezier(0.65, 0, 0.35, 1)';
            progressBar.style.width = '100%';
            setTimeout(() => showCompletionMessage(section), 10000);
        }, 10000);
    }
}

function animateProgress(element, duration, callback) {
    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easedPercentage = easing.easeInOutCubic(percentage) * 100;

        element.style.width = `${easedPercentage}%`;
        element.style.backgroundColor = `hsl(${easedPercentage * 1.2}, 100%, 50%)`;

        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.transition = 'all 0.3s ease';
            element.style.backgroundColor = '#4CAF50';
            callback();
        }
    };
    requestAnimationFrame(animate);
}

function showCompletionMessage(section) {
    const loadDiv = document.getElementById(section + '-load');
    const message = document.createElement('div');
    message.textContent = '¡Carga completada!';
    message.className = 'completion-message';
    loadDiv.appendChild(message);

    anime({
        targets: message,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutElastic(1, .8)',
        complete: () => {
            setTimeout(() => {
                anime({
                    targets: message,
                    opacity: 0,
                    translateY: -20,
                    duration: 600,
                    easing: 'easeInBack',
                    complete: () => message.remove()
                });
            }, 2000);
        }
    });
}

function validateEmail() {
    const emailInput = document.getElementById('email-yes');
    const email = emailInput.value;
    const errorMessage = document.getElementById('error-message') || createErrorMessage(emailInput);
    
    if (!email || !email.includes('@')) {
        shakeElement(emailInput);
        showErrorMessage(errorMessage, 'Por favor, introduce un email válido.');
        return false;
    }
    
    hideErrorMessage(errorMessage);
    successAnimation(emailInput);
    return true;
}

function createErrorMessage(element) {
    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.className = 'error-message';
    element.parentNode.insertBefore(errorMessage, element.nextSibling);
    return errorMessage;
}

function showErrorMessage(element, text) {
    element.textContent = text;
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

function hideErrorMessage(element) {
    anime({
        targets: element,
        opacity: 0,
        translateY: 10,
        duration: 300,
        easing: 'easeInQuad'
    });
}

function shakeElement(element) {
    anime({
        targets: element,
        translateX: [
            { value: -10, duration: 100, easing: 'easeInOutQuad' },
            { value: 10, duration: 100, easing: 'easeInOutQuad' },
            { value: -10, duration: 100, easing: 'easeInOutQuad' },
            { value: 10, duration: 100, easing: 'easeInOutQuad' },
            { value: 0, duration: 100, easing: 'easeInOutQuad' }
        ],
        backgroundColor: [
            { value: '#ffcccc', duration: 200 },
            { value: '#ffffff', duration: 200 }
        ]
    });
}

function successAnimation(element) {
    anime({
        targets: element,
        backgroundColor: [
            { value: '#4CAF50', duration: 300 },
            { value: '#ffffff', duration: 800 }
        ],
        scale: [
            { value: 1.05, duration: 150, easing: 'easeOutQuad' },
            { value: 1, duration: 150, easing: 'easeInQuad' }
        ],
        color: [
            { value: '#ffffff', duration: 300 },
            { value: '#000000', duration: 800 }
        ]
    });
}

// Inicialización y eventos
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutElastic(1, .8)'
            });
        });
        button.addEventListener('mouseout', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 200,
                easing: 'easeInElastic(1, .8)'
            });
        });
    });
});

// Estilos adicionales
const style = document.createElement('style');
style.textContent = `
    .completion-message {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -100%);
        background-color: #4CAF50;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        opacity: 0;
    }
    .error-message {
        color: red;
        font-size: 0.8em;
        margin-top: 5px;
        opacity: 0;
    }
`;
document.head.appendChild(style);