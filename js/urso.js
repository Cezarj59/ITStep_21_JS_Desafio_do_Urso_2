const quadroUrsos = [
    "./img/urso1.png",
    "./img/urso2.png",
    "./img/urso3.png"
];
const imgUrso = document.getElementById("img-urso");
let quadroAtual = 1;


let ursoBoneco = document.getElementById('img-urso');

const largura = document.getElementById('escada').clientWidth;
console.log(largura);



let andar = 40;
let timmer;
let direcao = 1;

let cima = 570;


setTimeout(function () {

    timmer = setInterval(function () {
        if (quadroAtual % 2 == 0) {
            imgUrso.src = quadroUrsos[1];
            quadroAtual++;
        } else {
            imgUrso.src = quadroUrsos[2];
            quadroAtual++;
        }

        if (andar >= largura - 120) {
            direcao = 2;
        }

        if (direcao == 1) {
            andar += 100;
            cima -= 56;

        } else {
            andar -= 100;
            cima += 56;
            if (andar <= 200) {
                direcao = 1;
            }
        }

        ursoBoneco.style.left = andar + "px";
        ursoBoneco.style.top = cima + "px";

    }, 300);

}, 3000);