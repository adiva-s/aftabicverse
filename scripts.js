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
    strings: ['Welcome to the Aftab-verse 🖊️'], // Set the strings you want to type
    typeSpeed: 100, // Adjust the typing speed as needed
    loop: true // Enable looping of the typed text
});


var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}
