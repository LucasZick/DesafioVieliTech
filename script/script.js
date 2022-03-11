let saudacao = document.getElementById('saudacao');
const url = `http://127.0.0.1:5000/saudacao`;

function getTexto(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

str = getTexto(url)
if (str == 'BOM DIA!'){
    document.body.style.backgroundColor = '#F0DD9C';
}
if (str == 'BOA TARDE!'){
    document.body.style.backgroundColor = '#FCBEA4';
}
if (str == 'BOA NOITE!'){
    document.body.style.backgroundColor = '#10111E';
}
saudacao.innerHTML = str;