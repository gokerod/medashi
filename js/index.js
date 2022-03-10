quizList = document.querySelector("#quizList");
addNewQuiz = document.querySelector("#addQuizButton");
closeQuizAddingWindow = document.querySelector("#closeQuizAddingWindow");
quizName = document.querySelector("#quizName");
quizDescription = document.querySelector("#quizDescription");

closeQuizAddingWindow.addEventListener("click", () => {
  quizName.value = "";
  quizDescription.value = "";
});

CreateNewQuiz = (title, description) => {
  quiz = document.createElement("tr");
  quiz.innerHTML = `
  <td class="col-2">${title}</td>
  <td class="col-2">0</td>
  <td>${description}</td>`;
  return quiz;
};

addNewQuiz.addEventListener("click", () => {
  quizList.appendChild(CreateNewQuiz(quizName.value, quizDescription.value));
  closeQuizAddingWindow.click();
});
