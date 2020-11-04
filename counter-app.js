var ptx = document.getElementsByClassName("ptx");
function numup(a){
    var serial = ptx[a];
    var num = parseInt(serial.innerHTML);
    if(num <= 33){
        serial.innerHTML = num + 1;
    if(num == 33){
        serial.innerHTML = "complete";
    }
    }
};
//var ptx = document.getElementsByClassName("ptx");
//
//function numup(number){
//    var serial = ptx[number];
//    var num = parseInt(serial.innerHTML);
//    if(num<=33){
//        serial.innerHTML = num+1;
//    }
//    if(num==33){
//       circle.innerHTML = "complete";
//    }
//}
