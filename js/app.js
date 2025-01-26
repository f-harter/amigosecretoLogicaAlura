let arrayAmigos = [];
let nomeAmigo
let lista

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == '') {
        alert ('Informe o nome do amigo!');
        return;
    }
    if (arrayAmigos.includes(nomeAmigo)){
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    arrayAmigos.push(nomeAmigo.value);
    if (lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function sortear() {
    if (arrayAmigos.length <= 3) {
        alert ('Adicione, pelo menos, quatro amigos!');
        return;
    }
    embaralha(arrayAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < arrayAmigos.length; i++) {
        if (i != arrayAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + arrayAmigos[i] + ' --> ' + arrayAmigos[i + 1] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + arrayAmigos[i] + ' --> ' + arrayAmigos[0] + '<br>';
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    arrayAmigos = []
    document.getElementById('nome-amigo').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}