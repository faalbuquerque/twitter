
/*function createElement(){

    let newElement= document.createElement("textarea")
    let textoNovo= document.createTextNode("Teste funcionou!")
    newElement.appendChild(textoNovo);

    let formAtual= document.getElementById("print-twit")

    document.body.insertBefore(textoNovo, formAtual)

    console.log("Foi!")

}

function twittar(){

    let textTwitter= document.querySelector(".write-twit").value

    let getText = document.querySelector(".print-twit")

    return getText.innerHTML = textTwitter

}


let textTwitter= document.getElementById("write-twit").value
let getText = document.getElementById("print-twit")

getText.innerHTML = textTwitter

document.body.onload = adcElemento;

<div id="div1">O texto acima foi criado dinamicamente.</div>

function adcElemento () {
  // cria um novo elemento div
  // e dá à ele conteúdo
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}

var $wrapper = document.querySelector('.wrapper'),
    // Pega a string do conteúdo atual
    HTMLTemporario = $wrapper.innerHTML,
    // Novo HTML que será inserido
    HTMLNovo = 'Teste prepend com innerHTML </br>';

// Concatena as strings colocando o novoHTML antes do HTMLTemporario
HTMLTemporario = HTMLNovo + HTMLTemporario;

// Coloca a nova string(que é o HTML) no DOM
$wrapper.innerHTML = HTMLTemporario;



criando elemento com createElement:

    let  elementoMae= document.body;

    let elementoNovo = document.createElement("h3");

    elementoMae.appendChild(elementoNovo);

    let texto= document.createTextNode("Testando!");

    elementoNovo.appendChild(texto);



        <header class="title-twitter">
        <h1>Twitter</h1>
    </header>

    <section class= "box-twitter">

        <form class= "form-tweettar" method="get">
            <textarea id= "write-twit"  placeholder="Digite o seu texto"  maxlength="150"></textarea>
            <input type="button" value= "Tweet" onclick="createElement()"/>
        </form>

        <form class="form-printar" method= "post">
            <textarea id= "print-twit"></textarea>
        </form>
    </section>

function teste(){

let twit1 = criaElemento("li", twittar());

let lista = document.getElementsByTagName("ol")[1];

var textos = document.getElementsByTagName("li");


lista.insertBefore(twit1, textos[1]);



}

*/
