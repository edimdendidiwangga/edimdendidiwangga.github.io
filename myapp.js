confirm("Permainan Batu Kertas Gunting, Mau Main lawan Komputer!");
var pengguna = prompt("Anda pilih Batu, Kertas atau Gunting?");


var lawan = Math.random();
if (lawan > 0 && lawan < 0.33) {
    lawan = "Batu";
} else if (lawan > 0.33 && lawan < 0.66) {
    lawan = "Kertas";
} else if (lawan > 0.67 && lawan < 1) {
    lawan = "Gunting";
}
document.write("Pengguna: " + pengguna);
document.write("Komputer: " + lawan);

var bertarung = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "Pemenangnya adalah: Imbang";
    } else if (choice1 === "Batu") {
        if (choice2 === "Gunting") {
            return "Pemenangnya adalah: Pengguna";
        } else {
            return "Pemenangnya adalah: Komputer";
        }

    } else if (choice1 === "Kertas") {
        if (choice2 === "Batu") {
            return "Pemenangnya adalah: Pengguna";
        } else {
            return "Pemenangnya adalah: Komputer";
        }
    } else if (choice1 === "Gunting") {
        if (choice2 === "Kertas") {
            return "Pemenangnya adalah: Pengguna";
        } else {
            return "Pemenangnya adalah: Komputer";
        }
    }
};

bertarung(pengguna, lawan);