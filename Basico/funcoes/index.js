var a = 10;
let b = 20;

function exibirMensagemLocal(msg) {
    console.log(msg);
}
function exibirMensagemGlobal() {
    console.log(msgGlobal);
}

var msgGlobal = "Ola Mundo Global!!!!!"
var msgLocal = "Ola Mundo Local!!!!!"
exibirMensagemGlobal();
exibirMensagemLocal(msgLocal);



