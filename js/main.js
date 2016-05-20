exercisesTypes = ['push', 'sit', 'squats'];

function showExercise(exerciseType) {
  $("#home").hide();

  $("#exercise").show();

  $("#startExercise").show();

  $("#stopExercise").hide();

  $("#score").hide();

  $("#savesScore").hide();

  this.currentExercise = exerciseType;

  document.getElementById("exerciseTitle").innerHTML = exerciseType.charAt(0).toUpperCase() + exerciseType.slice(1);

  show();
}

function startExercise() {
  $("#startExercise").hide();

  $("#stopExercise").show();

  $("#score").hide();

  $('#score').val('');

  reset();

  start();
}

function stopExercise() {
  $("#startExercise").show();

  $("#stopExercise").hide();

  stop();

  $("#score").show();

  $("#savesScore").show();
}

function saveScore(newScore, exerciseType){

  var oldScore = parseInt(localStorage.getItem(exerciseType));

  if(isNaN(oldScore) || (parseInt(newScore) > oldScore)){
    localStorage.setItem(exerciseType, newScore);
    // alert dialog
    alertify.alert("New record!");
  }
}
function goHome(){

  getScores();

  $("#home").show();

  $("#exercise").hide();

}

function getScores() {
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Retrieve
    document.getElementById("push").innerHTML = localStorage.getItem("push");
    document.getElementById("sit").innerHTML = localStorage.getItem("sit");
    document.getElementById("squats").innerHTML = localStorage.getItem("squats");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

