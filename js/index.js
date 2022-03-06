quizRow = document.querySelectorAll("tbody tr");
quizRow.forEach((row) => {
  row.addEventListener("click", (e) => {
    console.log(e.target.parentNode.sectionRowIndex);
  });
});
