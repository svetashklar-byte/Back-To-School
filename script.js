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
            `Hello, ${name}! Nice to meet you! 👋`,
            `Hey there, ${name}! Welcome to our app! 🎉`,
            `Greetings, ${name}! Hope you're having a great day! ✨`,
            `Hi ${name}! Thanks for visiting our Hello World app! 🌟`,
            `Welcome, ${name}! You're awesome! 🚀`
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingDiv.textContent = randomGreeting;
        greetingDiv.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Clear the input
        nameInput.value = '';
        
        // Add some confetti effect (simple)
        createConfetti();
    } else {
        greetingDiv.textContent = 'Please enter your name first! 😊';
        greetingDiv.style.color = '#e53e3e';
        setTimeout(() => {
            greetingDiv.style.color = '#4a5568';
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
        "The first 'Hello, World!' program was written in 1972 by Brian Kernighan at Bell Labs! 📚",
        "The term 'bug' in programming comes from a real bug found in a computer in 1947! 🐛",
        "The first computer virus was created in 1983 and was called 'Elk Cloner'! 🦌",
        "The first website ever created is still online at info.cern.ch! 🌐",
        "JavaScript was created in just 10 days by Brendan Eich in 1995! ⚡",
        "The first computer mouse was made of wood! 🖱️",
        "The word 'computer' originally referred to a person who performed calculations! 👨‍💼",
        "The first email was sent in 1971 by Ray Tomlinson to himself! 📧",
        "The first domain name ever registered was symbolics.com in 1985! 🏷️",
        "The first webcam was created to monitor a coffee pot at Cambridge University! ☕"
    ];
    
    // Disable button temporarily
    factBtn.disabled = true;
    factBtn.textContent = 'Loading...';
    
    // Simulate loading time for better UX
    setTimeout(() => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        factDiv.innerHTML = `<p>${randomFact}</p>`;
        factDiv.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Re-enable button
        factBtn.disabled = false;
        factBtn.textContent = 'Get Fun Fact';
    }, 800);
}

function createConfetti() {
    // Simple confetti effect
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
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

// Add some console fun
console.log('%cHello World Web App! 🚀', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #764ba2; font-size: 14px;');
console.log('%cReady for GitHub Pages deployment! 🌐', 'color: #48bb78; font-size: 14px;');
