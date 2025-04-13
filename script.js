const friendName = "Tabassum";
document.getElementById('name').textContent = friendName;


const photos = [
    {
        url: 'photos/photo3.png',
        date: "August 2020",
        caption: "Happy 30th Birthaday...🤣",
        heart: "😂"
    },
    {
        url: 'photos/photo 2.png',
        date: "August 2020",
        caption: "Sry Typo...🙄",
        heart: "🫠"
    },
    {
        url: 'photos/photo4.png',
        date: "December 2020",
        caption: "Happy 18th Birthday...🤐",
        heart: "🎄"
    },
    
    {
        url: 'photos/photo5.png',
        date: "June 2021",
        caption: "Sry my bad....🫥",
        heart: "😬"
    },
    {
        url: 'photos/photo1.jpeg',
        date: "Today",
        caption: "Wishing you 365 days of happiness starting today! Happy 27th 🌟",
        heart: "🎂"
    }
];


let progress = 3;
const loadingInterval = setInterval(() => {
    progress += Math.random() * 7;
    if(progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);
        
        // Fade out loading screen
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('main').style.display = 'block';
            startInteractiveExperience();
        }, 1000);
    }
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('loading-text').textContent = getRandomLoadingText();
}, 300);

function getRandomLoadingText() {
    const texts = [
        "Gathering Fun particles...",
        "Preparing birthday magic...",
        "Loading sweet memories...",
        "Wrapping virtual gifts...",
        "Baking digital cake...",
        "Writing some notes...",
        "Charging happiness meter..."
    ];
    return texts[Math.floor(Math.random() * texts.length)];
}

function startInteractiveExperience() {
    
    const collage = document.getElementById('photo-collage');
    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `
            <div class="photo-front">
                <img src="${photo.url}" alt="Memory ${index + 1}" class="photo">
            </div>
            <div class="photo-back">
                <div class="photo-date">${photo.date}</div>
                <div class="photo-caption">${photo.caption}</div>
                <div class="photo-heart">${photo.heart}</div>
            </div>
        `;
        collage.appendChild(card);
    });
    
    
    setTimeout(() => {
        collage.style.opacity = '1';
    }, 500);
    
    
    const realBtn = document.createElement('button');
    realBtn.className = 'annoying-btn';
    realBtn.textContent = 'Click for Magic! ✨';
    realBtn.style.left = '40%';
    realBtn.style.top = '60%';
    
    realBtn.addEventListener('mouseover', () => {
        realBtn.style.left = `${Math.random() * 70 + 10}%`;
        realBtn.style.top = `${Math.random() * 60 + 20}%`;
        createHearts(5);
    });
    
    realBtn.addEventListener('click', () => {
        document.querySelectorAll('.annoying-btn').forEach(btn => btn.remove());
        revealFinalMessage();
    });
    
    document.body.appendChild(realBtn);
    
    const decoyTexts = [
        'Click Me Instead!',
        'No, Click Here!',
        'Real Button Here!',
        'Birthday Surprise!',
        'Open Your Gift!'
    ];
    
    for(let i = 0; i < 5; i++) {
        const decoy = document.createElement('button');
        decoy.className = 'annoying-btn';
        decoy.textContent = decoyTexts[i];
        decoy.style.left = `${Math.random() * 70 + 10}%`;
        decoy.style.top = `${Math.random() * 60 + 20}%`;
        
        decoy.addEventListener('mouseover', () => {
            decoy.style.left = `${Math.random() * 70 + 10}%`;
            decoy.style.top = `${Math.random() * 60 + 20}%`;
            createHearts(3);
        });
        
        decoy.addEventListener('click', () => {
            decoy.textContent = 'Oops! The birthday cake got eaten… by me...😂';
            decoy.style.background = '#ff4757';
            setTimeout(() => {
                decoy.style.left = `${Math.random() * 70 + 10}%`;
                decoy.style.top = `${Math.random() * 60 + 20}%`;
                decoy.style.background = 'linear-gradient(45deg, var(--primary), var(--accent))';
                decoy.textContent = decoyTexts[Math.floor(Math.random() * decoyTexts.length)];
            }, 1000);
        });
        
        document.body.appendChild(decoy);
    }
    
  
document.getElementById('cake').addEventListener('click', function() {
    
    const cakeMessage = document.createElement('div');
    cakeMessage.textContent = "Oops! The birthday cake got eaten… by me..😂";
    cakeMessage.style.position = 'fixed';
    cakeMessage.style.top = '50%';
    cakeMessage.style.left = '50%';
    cakeMessage.style.transform = 'translate(-50%, -50%)';
    cakeMessage.style.backgroundColor = 'white';
    cakeMessage.style.padding = '15px 25px';
    cakeMessage.style.borderRadius = '50px';
    cakeMessage.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    cakeMessage.style.zIndex = '1000';
    cakeMessage.style.fontWeight = 'bold';
    cakeMessage.style.fontSize = '1.2rem';
    cakeMessage.style.textAlign = 'center';
    cakeMessage.style.animation = 'fadeInOut 2.5s forwards';
    
   
    document.body.appendChild(cakeMessage);
 
    setTimeout(() => {
        cakeMessage.remove();
    }, 2500);
    
   
    document.getElementById('finalMessage').style.transform = 'scale(1)';
    createConfetti(150);
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'float 4s ease-in-out infinite, pulse 2s infinite alternate';
    }, 100);
});


    
    document.addEventListener('click', function() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            const widget = SC.Widget(iframe);
            widget.play();
        }
    }, { once: true });
    
    document.getElementById('music-control').addEventListener('click', function() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            const widget = SC.Widget(iframe);
            widget.isPlaying(function(playing) {
                if (playing) {
                    widget.pause();
                    this.textContent = '🔇';
                } else {
                    widget.play();
                    this.textContent = '🎵';
                }
            }.bind(this));
        }
    });
}

function revealFinalMessage() {
    document.getElementById('finalMessage').style.transform = 'scale(1)';
    createConfetti(150);
}

function createConfetti(count) {
    for(let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.width = Math.random() * 15 + 5 + 'px';
        confetti.style.height = Math.random() * 15 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        
        if(Math.random() > 0.7) {
            confetti.style.background = 'transparent';
            confetti.style.border = `3px solid hsl(${Math.random() * 360}, 70%, 60%)`;
        }
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function createHearts(count) {
    for(let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-trail';
        heart.textContent = ['🎇', '✨', '🛍️', '🕯️', '🎁'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}


document.addEventListener('mousemove', (e) => {
    if(Math.random() > 0.7) {
        const heart = document.createElement('div');
        heart.className = 'heart-trail';
        heart.textContent = '💐';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});