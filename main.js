const colors = ["green", "red", "pink", "yellow"];
const btn = document.getElementById("btn");
const colorText = document.querySelector(".colorText");
const tb = document.querySelector(".complementaryElement");

let nr = 0;

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

    let shadeHEX = randomColor;

    for(var i = 0; i<5; i++){
      console.log(i);

      appendFunction("shades");
      const el = document.getElementById(i);
      console.log(el);
      let shadeRGB = differentShades(shadeHEX);
      shadeHEX = rgbToHex(shadeRGB.r, shadeRGB.g, shadeRGB.b);
      console.log(el.id);
      el.style.backgroundColor = shadeHEX;
      el.textContent = shadeHEX;
    }


});


getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

getRandomColor = () => {
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
  }
  //console.log(hexToRgb(x));
  //console.log(hexToRgb(color));
  return color;
}

hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

componentToHex = (c) => {
  if(!isNaN(c)){
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
}

rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


appendFunction = (ulElement) =>{

  var ul = document.querySelector(`.${ulElement}`);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(`${nr}`));
  li.setAttribute("id", `${nr}`); // added 
  nr++;
  li.className = "shadesElement";
  ul.appendChild(li);
}


differentShades = (randomColor) =>{
  const rgbValue = hexToRgb(randomColor);
  console.log(rgbValue);
  for(var i in rgbValue){
    rgbValue[i]+=10;
  }
  return rgbValue;
}