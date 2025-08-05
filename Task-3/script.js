document.addEventListener("DOMContentLoaded", function () {
    // Quiz
    const quizData = [
      "What is the capital of France?",
      "What is 2 + 2?",
      "What is the color of the sky?"
    ];
    let quizIndex = 0;
  
    // Carousel
    const images = [
      "https://images.unsplash.com/photo-1601758123927-196e9be13b1c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ];
    let imageIndex = 0;
  
    // DOM Elements
    const btnQuiz = document.getElementById("btn-quiz");
    const btnCarousel = document.getElementById("btn-carousel");
    const quizContainer = document.getElementById("quiz-container");
    const carouselContainer = document.getElementById("carousel-container");
    const questionEl = document.getElementById("question");
    const btnNextQuestion = document.getElementById("btn-next-question");
    const carouselImage = document.getElementById("carousel-image");
    const btnNextImage = document.getElementById("btn-next-image");
    const btnJoke = document.getElementById("btn-joke");
    const jokeText = document.getElementById("joke-text");
  
    // Show Quiz
    btnQuiz.addEventListener("click", function () {
      quizContainer.classList.remove("hidden");
      carouselContainer.classList.add("hidden");
      questionEl.textContent = quizData[quizIndex];
    });
  
    // Show Carousel
    btnCarousel.addEventListener("click", function () {
      carouselContainer.classList.remove("hidden");
      quizContainer.classList.add("hidden");
      carouselImage.src = images[imageIndex];
    });
  
    // Next Question
    btnNextQuestion.addEventListener("click", function () {
      quizIndex = (quizIndex + 1) % quizData.length;
      questionEl.textContent = quizData[quizIndex];
    });
  
    // Next Image
    btnNextImage.addEventListener("click", function () {
      imageIndex = (imageIndex + 1) % images.length;
      carouselImage.src = images[imageIndex];
    });
  
    // Fetch Joke
    btnJoke.addEventListener("click", function () {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
          jokeText.textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(() => {
          jokeText.textContent = "Oops! Couldn't fetch a joke.";
        });
    });
  });