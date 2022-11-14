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


$(".packs__input").each(function() {
    $(this).on('change', function() {
        num = $(this).attr('id');
        firebase.database().ref('packscollection/' + num).set({
            num : $(this).val(),
            time: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }),
        });
    });

    $(this).on('input', function() {
        console.log($(this).val())
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        } else {
            this.value = this.value.substr(0, 3)
        }
    });
});

// $("#packsForm").on('change', function() {
//     firebase.database().ref('packscollection/').set({
//             one: $(".packs__one").val(),
//             two: $(".packs__two").val(),
//             three: $(".packs__three").val(),
//             four: $(".packs__four").val(),
//             five: $(".packs__five").val(),
//             six: $(".packs__six").val(),
//             seven: $(".packs__seven").val(),
//         });
// });


const getPacks = () => {
    firebase.database().ref('packscollection/').once("value").then((snapshot) => {
        const obj = Object(snapshot.val());
            
            $(".packs__one").val(obj.one.num);
            $(".packs__time-one").text(obj.one.time)

            $(".packs__two").val(obj.two.num);
            $(".packs__time-two").text(obj.two.time)

            $(".packs__three").val(obj.three.num);
            $(".packs__time-three").text(obj.three.time);

            $(".packs__four").val(obj.four.num);
            $(".packs__time-four").text(obj.four.time);
   
            $(".packs__five").val(obj.five.num);
            $(".packs__time-five").text(obj.five.time);

            $(".packs__six").val(obj.six.num);
            $(".packs__time-six").text(obj.six.time);

            $(".packs__seven").val(obj.seven.num);
            $(".packs__time-seven").text(obj.seven.time);   
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

