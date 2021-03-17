function geradorSenha(tamanho) {
  var resultado = '';
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
  var caracteresTamanho = caracteres.length;
    for (let i = 0; i < tamanho ; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteresTamanho));
    }
    return resultado;
 }

function Resultado() {
  var senha = "";
  var tamanho = window.prompt("digite quantos caracteres(de 8 para cima), sua senha deve ter:","8");
  if(tamanho == ""){
      window.alert("Você não digitou nada!");
  } else if(tamanho > 0){
      var senha = geradorSenha(tamanho);
      window.alert(senha);
      document.getElementById("teste").innerHTML = senha;
  }else if(tamanho < 8){
      window.alert("Você digitou um número inferior a 8")
  } else {
      window.alert("Você digitou letras!");
  }
}