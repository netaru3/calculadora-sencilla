let pantalla= document.getElementById("pantalla").textContent
function mostrar9(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=9
};
}

function mostrar8(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=8
};
}

function mostrar7(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=7
};
}

function mostrar6(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=6
};
}

function mostrar5(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=5
};
}

function mostrar4(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=4
};
}

function mostrar3(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=3
};
}

function mostrar2(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=2
};
}

function mostrar1(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=1
};
}

function mostrar0(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+=0
};
}

function sumar(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+="+"
};
}
function resultado(){if(document.getElementById("pantalla").textContent.toString().length<12){
    return document.getElementById("pantalla").textContent=eval(document.getElementById("pantalla").textContent)
};
}

function restar(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+="-"
};
}

function dividir(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+="/"
};
}

function multiplicar(){if(document.getElementById("pantalla").textContent.toString().length<9){
    return document.getElementById("pantalla").textContent+="*"
};
}

function borrar(){if(document.getElementById("pantalla").textContent.toString().length<10){
    return document.getElementById("pantalla").textContent=document.getElementById("pantalla").textContent.slice(0,-1)
};
}

function reset(){document.getElementById("pantalla").textContent=""}
