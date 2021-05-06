let x =0;
  let textEffect = "Typwriter";
  let container = document.getElementById("effect");

  function animate(){
    if(x < textEffect.length){
      container.innerHTML += textEffect.charAt(x);
    x++;
    setTimeout(animate, 80);
    }
  }
  animate();
