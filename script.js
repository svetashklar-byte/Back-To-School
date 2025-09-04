// Hello World Web Application
// Interactive features and dynamic content

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize time display
    updateTime();
    
    // Set up time update interval
    setInterval(updateTime, 1000);
    
    console.log('Hello World Web App initialized!');
}

function setupEventListeners() {
    // Greeting functionality
    const greetBtn = document.getElementById('greetBtn');
    const nameInput = document.getElementById('nameInput');
    
    greetBtn.addEventListener('click', handleGreeting);
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleGreeting();
        }
    });
    
    // Time update button
    const updateTimeBtn = document.getElementById('updateTimeBtn');
    updateTimeBtn.addEventListener('click', updateTime);
    
    // Fun fact button
    const factBtn = document.getElementById('factBtn');
    factBtn.addEventListener('click', showFunFact);
}

function handleGreeting() {
    const nameInput = document.getElementById('nameInput');
    const greetingDiv = document.getElementById('greeting');
    const name = nameInput.value.trim();
    
    if (name) {
        const greetings = [
            `🦄 Hello, ${name}! Nice to meet you in our magical world! ✨`,
            `🌈 Hey there, ${name}! Welcome to our enchanted unicorn paradise! 🦄`,
            `✨ Greetings, ${name}! Hope you're having a magical day! 🦄`,
            `🦄 Hi ${name}! Thanks for visiting our Magical Unicorn World! 🌟`,
            `✨ Welcome, ${name}! You're absolutely magical! 🦄🌈`,
            `🦄 Hello beautiful ${name}! Ready for some unicorn magic? ✨`,
            `🌈 Hey magical ${name}! Let's spread some unicorn joy! 🦄✨`
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingDiv.textContent = randomGreeting;
        greetingDiv.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Clear the input
        nameInput.value = '';
        
        // Add some confetti effect (simple)
        createConfetti();
    } else {
        greetingDiv.textContent = '🦄 Please enter your magical name first! ✨';
        greetingDiv.style.color = '#e53e3e';
        setTimeout(() => {
            greetingDiv.style.color = '#d63384';
        }, 2000);
    }
}

function updateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const now = new Date();
    
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    timeDisplay.innerHTML = `
        <div style="font-size: 1.2rem; color: #718096; margin-bottom: 10px;">${dateString}</div>
        <div style="font-size: 2.5rem; color: #2d3748;">${timeString}</div>
    `;
    
    // Add a subtle animation
    timeDisplay.style.animation = 'fadeInUp 0.3s ease-out';
}

function showFunFact() {
    const factDiv = document.getElementById('funFact');
    const factBtn = document.getElementById('factBtn');
    
    const funFacts = [
        "🦄 Unicorns are said to have healing powers and can purify water with their horns! ✨",
        "🌈 The first 'Hello, World!' program was written in 1972 by Brian Kernighan at Bell Labs! 📚",
        "🦄 Unicorns are mentioned in ancient Greek natural history texts! 📜",
        "✨ The term 'bug' in programming comes from a real bug found in a computer in 1947! 🐛",
        "🦄 Unicorns are the national animal of Scotland! 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "🌈 JavaScript was created in just 10 days by Brendan Eich in 1995! ⚡",
        "🦄 Unicorns are often associated with rainbows and magical sparkles! ✨",
        "✨ The first computer mouse was made of wood! 🖱️",
        "🦄 Unicorns are believed to be the most difficult mythical creature to catch! 🎯",
        "🌈 The first email was sent in 1971 by Ray Tomlinson to himself! 📧",
        "🦄 Unicorns are said to live in enchanted forests! 🌲✨",
        "🌈 The first webcam was created to monitor a coffee pot at Cambridge University! ☕"
    ];
    
    // Disable button temporarily
    factBtn.disabled = true;
    factBtn.textContent = '🦄 Loading Magic...';
    
    // Simulate loading time for better UX
    setTimeout(() => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        factDiv.innerHTML = `<p>${randomFact}</p>`;
        factDiv.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Re-enable button
        factBtn.disabled = false;
        factBtn.textContent = '🦄 Get Magical Fact';
    }, 800);
}

function createConfetti() {
    // Magical unicorn confetti effect
    const colors = ['#ff6b9d', '#ffc3e0', '#ff9ec7', '#fecfef', '#ff9a9e', '#ffb3d1'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 20);
    }
}

// Add confetti animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some magical console fun
console.log('%c🦄 Magical Unicorn World! ✨', 'color: #ff6b9d; font-size: 20px; font-weight: bold;');
console.log('%c🌈 Built with HTML, CSS, and JavaScript magic! 🦄', 'color: #ffc3e0; font-size: 14px;');
console.log('%c✨ Ready for magical GitHub Pages deployment! 🌈', 'color: #ff9ec7; font-size: 14px;');
