questionList = document.querySelector(".questionList");
numberOfQuestions = document.querySelectorAll(".questionList td").length;
incrementQuizDuration = document.querySelector("#incrementDurationButton");
decrementQuizDuration = document.querySelector("#decrementDurationButton");
quizDurationValue = document.querySelector(".quizDurationValue");

createNewQuestion = () => {
  question = document.createElement("tr");
  question.className = "question";
  question.id = new Date().getTime();
  numberOfQuestions++;
  question.innerHTML = `<td>
  <div class="input-group mb-3">
      <input type="text" class="form-control form-control-lg"
          placeholder="Question">
      <button type="button" id="addOptionButton"
          class="btn btn-secondary ms-1">Add Option</button>
      <button type="button" id="saveQuestionButton"
          class="btn btn-secondary ms-1"><img src="Assets/Icons/save_25px.png"
              alt=""></button>
      <button type="button" id="deleteQuestionButton"
          class="btn btn-secondary ms-1"><img src="Assets/Icons/delete_25px.png"
          id="deleteQuestionImage" alt=""></button>
  </div>
  <div class="input-group input-group-sm mb-2">
      <div class="input-group-prepend">
          <span class="input-group-text h-100">
              <input type="radio" name= ${question.id}>
          </span>
      </div>
      <input type="text" class="form-control" value="" placeholder="Option">
      <button type="button" id="deleteOptionButton"
          class="btn btn-secondary ms-1"><img src="Assets/Icons/delete_25px.png"
             id="deleteOptionImage" alt=""></button>
  </div>
  <div class="input-group input-group-sm mb-2">
      <div class="input-group-prepend">
          <span class="input-group-text h-100">
              <input type="radio" name= ${question.id}>
          </span>
      </div>
      <input type="text" class="form-control" value="" placeholder="Option">
      <button type="button" id="deleteOptionButton"
          class="btn btn-secondary ms-1"><img src="Assets/Icons/delete_25px.png"
             id="deleteOptionImage" alt=""></button>
  </div>
  <div class="input-group input-group-sm mb-2">
      <div class="input-group-prepend">
          <span class="input-group-text h-100">
              <input type="radio" name= ${question.id}>
          </span>
      </div>
      <input type="text" class="form-control" value="" placeholder="Option">
      <button type="button" id="deleteOptionButton"
          class="btn btn-secondary ms-1"><img src="Assets/Icons/delete_25px.png"
             id="deleteOptionImage" alt=""></button>
  </div>
  <div class="input-group input-group-sm mb-2">
      <div class="input-group-prepend">
          <span class="input-group-text h-100">
              <input type="radio" name= ${question.id}>
          </span>
      </div>
      <input type="text" class="form-control" value="" placeholder="Option">
      <button type="button" id="deleteOptionButton"
          class="btn btn-secondary ms-1"><img src="Assets/Icons/delete_25px.png"
             id="deleteOptionImage" alt=""></button>
  </div>
  <div class="input-group input-group-sm mb-2">

</td>`;
  questionList.appendChild(question);
};
createNewOption = (questionId) => {
  option = document.createElement("div");
  option.className = "input-group input-group-sm mb-2";
  option.innerHTML = `<div class="input-group-prepend">
    <span class="input-group-text h-100">
        <input type="radio" name= ${questionId}>
    </span>
</div>
<input type="text" class="form-control" value="" placeholder="Option">
<button type="button" id="deleteOptionButton"
    class="btn btn-secondary ms-1"><img src="Assets/Icons/delete_25px.png"
       id="deleteOptionImage" alt=""></button>`;
  return option;
};

// Adding Question
addNewQuestionButton.addEventListener("click", () => {
  createNewQuestion();
});

questionList.addEventListener("click", (e) => {
  // Deleting Function
  if (e.target.matches("#deleteQuestionButton")) {
    e.target.parentNode.parentNode.parentNode.remove();
  } else if (e.target.matches("#deleteQuestionImage")) {
    e.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
  // Deleting Option
  else if (e.target.matches("#deleteOptionButton")) {
    e.target.parentNode.remove();
  } else if (e.target.matches("#deleteOptionImage")) {
    e.target.parentNode.parentNode.remove();
  }
  // Adding Option
  else if (e.target.matches("#addOptionButton")) {
    questionId = e.target.parentNode.parentNode.parentNode.id;
    e.target.parentNode.parentNode.appendChild(createNewOption(questionId));
  }
});

// Incrementing Quiz Duration
incrementQuizDuration.addEventListener("click", () => {
  quizDurationValue.value = parseInt(quizDurationValue.value) + 5;
});
// Decrementing Quiz Duration
decrementQuizDuration.addEventListener("click", () => {
  if (parseInt(quizDurationValue.value) > 0)
    quizDurationValue.value = parseInt(quizDurationValue.value) - 5;
});
