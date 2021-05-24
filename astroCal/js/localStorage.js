var localStorage = Window.localStorage;

function saveEvent() {
    var newEvent = new Object();

    newEvent.id = CreateGuid();
    newEvent.name = document.getElementById("name").value;
    newEvent.short_descripton = document.getElementById("short_descripton").value;
    newEvent.data_event = document.getElementById("data_event").value;
    newEvent.location = document.getElementById("location").value;
    newEvent.tag = document.getElementById("tag").value;
    newEvent.photo = document.getElementById("photo").value;
    newEvent.full_descripton = document.getElementById("full_descripton").value;

    var stageLocalStorage = JSON.stringify(newEvent);

    localStorage.setItem(newEvent.id, stageLocalStorage);
}



function CreateGuid(){
    function _p8(s) {  
        var p = (Math.random().toString(16)+"000000000").substr(2,8);  
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
     }  
     return _p8() + _p8(true) + _p8(true) + _p8();
}