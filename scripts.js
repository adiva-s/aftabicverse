window.addEventListener('load', function() {
    document.querySelector('.fade-in').classList.add('active');
});

/*
document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    var typed = new Typed('#typing', {
        strings: [
          'Welcome<br>to the<br>Aftab-verse'
        ],
        typeSpeed: 100,
        showCursor: false
    });
});
*/


document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization for h1 element
    var typed1 = new Typed('#typing', {
      strings: [
        'Welcome<br>to the<br>Aftab-verse'
      ],
      typeSpeed: 100,
      showCursor: false,
      onComplete: function() {
        var h2Element = document.querySelector('.fade-up');
        h2Element.classList.add('fade-up-active');
      }
    });
  });

  var typed = new Typed('#typed-text', {
    strings: ['Welcome to the Aftab-verse!  '], // Set the strings you want to type
    typeSpeed: 80, // Adjust the typing speed as needed
    loop: true // Enable looping of the typed text
  });