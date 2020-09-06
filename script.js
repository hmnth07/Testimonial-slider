var previousButton = document.getElementById('previousButton');
var nextButton = document.getElementById('nextButton');

var review = document.getElementById("review");
var personName = document.getElementById("personName");
var position = document.getElementById("position");
var profileImage = document.getElementById("profileImage");

nextButton.addEventListener('click', function() {
    review.innerHTML = '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."';
    personName.innerHTML = "John Tarkpor";
    position.innerHTML = " Junior Front-end Developer";
    profileImage.src = "images/image-john.jpg";
});

previousButton.addEventListener('click', function() {
    review.innerHTML = '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough I’m now in the job of my dreams and so excited about the future."';
    personName.innerHTML = "Tanya Sinclair";
    position.innerHTML = " UX Engineer";
    profileImage.src = "images/image-tanya.jpg";
});



// <!-- “ If you want to lay the best foundation possible I’d recommend taking this course. 
//   The depth the instructors go into is incredible. I now feel so confident about 
//   starting up as a professional developer. ”

//   John Tarkpor
//   Junior Front-end Developer -->