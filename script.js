let xp = 0;

function ganarXP(puntos) {
    xp += puntos;
    document.getElementById('xp-points').innerText = xp;
    document.getElementById('exp-fill').style.width = (xp % 100) + "%";
    if (xp >= 100) {
        document.getElementById('rango').innerText = "Asesor Pro IAD 🌟";
    }
}

function calcularComision() {
    const precio = document.getElementById('precioVenta').value;
    document.getElementById('comision-total').innerText = (precio * 0.05).toLocaleString();
}

function calcularMedia() {
    const t1 = parseFloat(document.getElementById('testigo1').value) || 0;
    const t2 = parseFloat(document.getElementById('testigo2').value) || 0;
    const t3 = parseFloat(document.getElementById('testigo3').value) || 0;
    if (t1 && t2 && t3) {
        const media = (t1 + t2 + t3) / 3;
        document.getElementById('valor-medio').innerText = Math.round(media).toLocaleString() + " €";
    }
}

// NAVEGACIÓN LIMPIA
function mostrar(id) {
    document.querySelectorAll('.app-game').forEach(div => div.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function irAModulo1() { mostrar('modulo-1'); }
function irAModulo2() { mostrar('modulo-2'); }
function irAModulo3() { mostrar('modulo-3'); }
function irAModulo4() { mostrar('modulo-4'); }

function finalizarFormacion() {
    alert("¡ENTRENAMIENTO COMPLETADO! 🌟\n\nHas demostrado ser una gran profesional inmobiliaria.");
    location.reload();
}