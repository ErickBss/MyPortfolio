var time= 3000;
var currentImage = 0;
var images = document.querySelectorAll("#slider img");
var images2 = document.querySelectorAll("#slider2 img");
var max= images.length;
function nextImage(){
    
}
function start(){
    setInterval(()=> { //aqui a função ira definir de quanto em quanto tempo a imagem irá rotacionar

      images[currentImage].classList.remove("selected");//classlist manipula as classes o proximo argumento 
      images2[currentImage].classList.remove("selected");
      //define o que será feito
      currentImage ++;//é necessário este incremento para a rotatividade funcionar
      if(currentImage >= max)
       currentImage =0;   
      images[currentImage].classList.add("selected");
      images2[currentImage].classList.add("selected");
    },time)
}

window.addEventListener("load", start);//here i setted when the code will start