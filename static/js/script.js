function pega() {
    var arquivo = document.getElementById("entrada").value;
    var exibe = document.getElementById("desk");

    exibe.innerHTML = `
    <img src="`+arquivo+`" width="300px" heigth="100px"></img>
    `;
}