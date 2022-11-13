const firebaseConfig = {
  apiKey: "AIzaSyAoJh2URSwCrxvRoiS2nV6I3hbpgwH7VZk",
  authDomain: "packs-d16a0.firebaseapp.com",
  databaseURL: "https://packs-d16a0-default-rtdb.firebaseio.com",
  projectId: "packs-d16a0",
  storageBucket: "packs-d16a0.appspot.com",
  messagingSenderId: "360026399273",
  appId: "1:360026399273:web:b67b820651b43e7d89f238",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

let timer;


$("#packsForm").on('change', function() {
    console.log('#packsForm: ', packsForm);    
    firebase.database().ref('packscollection/').set({
            one: $(".packs__one").val(),
            two: $(".packs__two").val(),
            three: $(".packs__three").val(),
            four: $(".packs__four").val(),
            five: $(".packs__five").val(),
            six: $(".packs__six").val(),
            seven: $(".packs__seven").val(),
        });
});


const getPacks = () => {
    firebase.database().ref('packscollection/').once("value").then((snapshot) => {
        Object.keys(snapshot.val()).forEach(() => {
            //console.log(`One: ${snapshot.val().one}`);
            const newOne = snapshot.val().one;
            $(".packs__one").val(newOne);
            //console.log(`Two: ${snapshot.val().two}`);
            const newTwo = snapshot.val().two;
            $(".packs__two").val(newTwo);
            //console.log(`Three: ${snapshot.val().three}`);
            const newThree = snapshot.val().three;
            $(".packs__three").val(newThree);
            //console.log(`Four: ${snapshot.val().four}`);
            const newFour = snapshot.val().four;
            $(".packs__four").val(newFour);
            //console.log(`Five: ${snapshot.val().five}`);
            const newFive = snapshot.val().five;
            $(".packs__five").val(newFive);
            //console.log(`Six: ${snapshot.val().six}`);
            const newSix = snapshot.val().six;
            $(".packs__six").val(newSix);
            //console.log(`Seven: ${snapshot.val().seven}`);
            const newSeven = snapshot.val().seven;  
            $(".packs__seven").val(newSeven);      
        });
    });
}

const updatePacks = () => {
    getPacks()
    clearTimeout(timer);
    
    timer = window.setTimeout(() => {
        updatePacks();
        console.log(timer);    
    }, 30000);
};

updatePacks();

