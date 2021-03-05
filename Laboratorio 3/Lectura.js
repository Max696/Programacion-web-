const readline = require('readline');

let Stack = [];
let errores = 0;

function push(a){
    Stack.push(a);
};

function isEmpty(){
    return Stack.length === 0;
}

function pop(){
    try {
        return Stack.pop();
    }

    catch(error)
    {
        console.error(error);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  
  rl.question('Ingrese el txt ', (txt) => {
    for(var i = 0;i<txt.length;i++){
        if(txt.charAt(i) === "[" || txt.charAt(i) === "{"){
            push(txt.charAt(i));
        }
        else if(txt.charAt(i) === "}"){
                     
             if(pop() === "]"){
                console.log("No se ha encontrado {");
                errores += 1;
            }
        }
        else if(txt.charAt(i) === "]"){
         
             if(pop() === "}"){
                console.log("No se ha encontrado [");
                errores +=  1;
            }
        }
    }
    if( errores > 0){
        console.log("Los cierres no coinciden")
    }else{
        console.log("El texto es valido.")
    }
    rl.close();
  });