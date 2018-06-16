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
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().firstTrainTime);
        console.log(childSnapshot.val().frequency);

        $("#train-table").append("<tr> <td> " + childSnapshot.val().name +
        " </td> <td> " + childSnapshot.val().destination +
        " </td> <td> " + childSnapshot.val().frequency +
        " </td> <td> " + "THIS" + " </td> </tr>");
    })
  

