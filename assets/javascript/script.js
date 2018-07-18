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

  var name = "";
  var destination = "";
  var givenTrainTime = "";
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
    
    database.ref().on("child_added", function(childSnapshot){

      var currentTrainTime = childSnapshot.val().firstTrainTime;
      var timeFormat = "HH:mm";
      var convertedTime = moment(currentTrainTime, timeFormat);
      var displayedTime = moment(convertedTime).format("hh:mm A");

      var frequencyRate = childSnapshot.val().frequency;

      var firstTimeConverted = moment(currentTrainTime, "HH:mm").subtract(1, "years");
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      var tRemainder = diffTime % frequencyRate;
      var tMinutesTillTrain = frequencyRate - tRemainder;
        
        $("#train-table").append("<tr> <td> " + childSnapshot.val().name +
        " </td> <td> " + childSnapshot.val().destination +
        " </td> <td> " + childSnapshot.val().frequency +
        " </td> <td> " + displayedTime + " </td> <td> " + tMinutesTillTrain + " </td> </tr> "
    );
  
  });
