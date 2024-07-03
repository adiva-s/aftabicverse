window.addEventListener('load', function() {
    document.querySelector('.fade-in').classList.add('active');
});

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
    strings: ['Welcome to the Aftab-verse 🖊️'], 
    typeSpeed: 100, 
    loop: true 
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
function searchIssues() {
  var input, filter, issues, issue, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  issues = document.getElementsByClassName('issues-cover');
  
  for (i = 0; i < issues.length; i++) {
      issue = issues[i].getElementsByTagName('a');
      var match = false;

      for (var j = 0; j < issue.length; j++) {
          a = issue[j].getElementsByTagName('img')[0];
          txtValue = a.alt || a.getAttribute('data-title') || "";
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              issue[j].style.display = "";
              match = true;
          } else {
              issue[j].style.display = "none";
          }
      }

      if (match) {
          issues[i].style.display = "";
      } else {
          issues[i].style.display = "none";
      }
  }
}


