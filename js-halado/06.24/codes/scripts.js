function welcomeMessage(name){
    alert(`welcome ${name}`);
}

const welcomeMessage2 = function(name){
    alert(`welcome ${name}`);
}
welcomeMessage("Ödön");
welcomeMessage2("Ödönke");

let welcomeMessage3 = welcomeMessage2;

welcomeMessage3("Ödönke3");