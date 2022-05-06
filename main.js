const colors = ["green", "red", "pink", "yellow"];
const btn = document.getElementById("btn");
const colorText = document.querySelector(".colorText");
const tb = document.querySelector(".ractangleElement");

let randomNumber;

let prevColor = -1;
let complementaryColor="";

btn.addEventListener("click",  ()=> {
    const randomColor = getRandomColor();
    while(randomColor == prevColor){
      randomColor = getRandomColor();
    }
    prevColor = randomColor;

    document.body.style.backgroundColor = randomColor;
    colorText.textContent = `${randomColor}`;
    complementaryColor=getComplementary(randomColor);
    tb.style.backgroundColor = complementaryColor;
    tb.textContent = `${complementaryColor}`;
});

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

getRandomColor = () => {
  //console.log("Alex".slice("Alex".length-1));
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

getComplementary = (x)=>{
  var color = '#';
  for(var i = 1; i<7; i++){
    switch(x.charAt(i)){
      case 'A':
        color+='5';
        break;
      case 'B':
        color+='4';
        break;
      case 'C':
        color+='3';
        break;
      case 'D':
        color+='2';
        break;
      case 'E':
        color+='1';
        break;
      case 'F':
        color+='0';
        break;
      case '0':
        color+='f';
        break;
      case '1':
          color+='e';
          break;
      case '2':
          color+='d';
          break;
      case '3':
          color+='c';
          break;
      case '4':
          color+='b';
          break;
      case '5':
          color+='a';
          break;
      case '6':
          color+='9';
          break;
      case '7':
          color+='8';
          break;
      case '8':
          color+='7';
          break;
      case '9':
          color+='8';
          break;
    }
    console.log(x.charAt(i));
  }
  console.log(color);
  return color;
}
