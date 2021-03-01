function prayerTimes(latitude, longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    .then(response => response.json())
    .then(function(response){
        console.log(response.data[0]);
    });
}

function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    alert('Maaf anda posisi tidak dapat kami lacak');
}

function userLocation() {

    if(!navigator.geolocation){
        alert('Geolocation tidak didukung oleh browser anda, silahkan gunakan browser lain');
    }else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){ 

let app = document.getElementById('app');
let h3 = document.createElement('h3');
h3.innerHTML = 'Prayer Times';

app.appendChild(h3);

userLocation();
}

index();