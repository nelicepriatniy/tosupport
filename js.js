let services = document.querySelectorAll(".services__list__item");
if (services.length > 0) {
  for (let i = 0; i < services.length - 1; i++) {
    services[i].onclick = () => {
      services[i].classList.toggle("active");
    };
  }
}

let question = document.querySelectorAll(".freq-ask-questions__list__item");
if (question.length > 0) {
  for (let i = 0; i < question.length - 1; i++) {
    question[i].onclick = () => {
      question[i].classList.toggle("active");
    };
  }
}
