var config = {
    apiKey: "AIzaSyAPBpHqUXpd4M4G-RlDe6bNMJNlwhls-Bg",
    authDomain: "train-times-u-of-r.firebaseapp.com",
    databaseURL: "https://train-times-u-of-r.firebaseio.com",
    projectId: "train-times-u-of-r",
    storageBucket: "train-times-u-of-r.appspot.com",
    messagingSenderId: "600844800956"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  var trainName = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = "";


  $("#add-Train-btn").on("click", function(event){
      event.preventDefault();

      name = $("#train-name-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainTime = $("#time-input").val().trim();
      frequency = $("#rate-input").val().trim();

      database.ref().push({
        name: name,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
      });
    });    
  

