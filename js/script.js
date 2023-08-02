// Add custom JavaScript here

function runTypingEffect(){
  const text = 'This is Hamza Ali';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 200;

  typeText(text,typingElement,typingDelay);
}

function typeText(text, typingElement, delay){
  
  for(let i = 0; i< text.length; i++){
    setTimeout(() => { 
      typingElement.textContent += text.charAt(i); //append each letter at index i of text to the typingelement after the delay
    }, delay*i) //delay*i time multiplied by index number gives the charcter its time when it appears
  };
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

//smooth scroll

ScrollReveal().reveal('.work'  ,{
  distance: '20px',      // Distance the element moves while animating
  origin: 'left',      // Starting point of the animation ('bottom' means the element will come from below)
  duration: 1000,        // Animation duration in milliseconds
  delay: 800,            // Delay before the animation starts in milliseconds
  interval: 3,
  reset: true,          // Elements will animate only once on scrolling up
});


ScrollReveal().reveal('.progress'  ,{
  distance: '20px',      // Distance the element moves while animating
  origin: 'bottom',      // Starting point of the animation ('bottom' means the element will come from below)
  duration: 1000,        // Animation duration in milliseconds
  delay: 500,            // Delay before the animation starts in milliseconds
  reset: true,          // Elements will animate only once on scrolling up
});

    ScrollReveal().reveal('.about'  ,{
  distance: '20px',      // Distance the element moves while animating
  origin: 'bottom',      // Starting point of the animation ('bottom' means the element will come from below)
  duration: 1000,        // Animation duration in milliseconds
  delay: 500,            // Delay before the animation starts in milliseconds
  reset: true,          // Elements will animate only once on scrolling up
});
    ScrollReveal().reveal('.project ' ,{
  distance: '20px',      // Distance the element moves while animating
  origin: 'bottom',      // Starting point of the animation ('bottom' means the element will come from below)
  duration: 1000,        // Animation duration in milliseconds
  delay: 400,            // Delay before the animation starts in milliseconds
  reset: true,          // Elements will animate only once on scrolling up
});

ScrollReveal().reveal('.prof ' ,{
  distance: '20px',      // Distance the element moves while animating
  origin: 'bottom',      // Starting point of the animation ('bottom' means the element will come from below)
  duration: 1000,        // Animation duration in milliseconds
  delay: 400,            // Delay before the animation starts in milliseconds
  reset: true,          // Elements will animate only once on scrolling up
});