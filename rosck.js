function main(){
var pengguna = prompt("Anda pilih jempol, telunjuk or kelingking?");


var lawan = Math.random();
if (lawan > 0 && lawan < 0.33) {
    lawan = "jempol";
} else if (lawan > 0.33 && lawan < 0.66) {
    lawan = "telunjuk";
} else if (lawan > 0.67 && lawan < 1) {
    lawan = "kelingking";
}



var bertarung = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "Pemenangnya adalah: Imbang";
    } else if (choice1 === "jempol") {
        if (choice2 === "kelingking") {
            return "Pemenangnya adalah: Komputer";
        } else {
            return "Pemenangnya adalah: Pengguna";
        }

    } else if (choice1 === "telunjuk") {
        if (choice2 === "jempol") {
            return "Pemenangnya adalah: Komputer";
        } else {
            return "Pemenangnya adalah: Pengguna";
        }
    } else if (choice1 === "kelingking") {
        if (choice2 === "telunjuk") {
            return "Pemenangnya adalah: Komputer";
        } else {
            return "Pemenangnya adalah: Pengguna";
        }
    }
};

var game = bertarung(pengguna, lawan);
console.log( game);
var nilai = document.getElementById("nilai").innerHTML = game;

}