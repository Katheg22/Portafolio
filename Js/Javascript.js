let MenuVisible = false;

function Menu_MostrarOcultar(){
   
   if(MenuVisible){

        document.getElementById("nav").classList = "";
        MenuVisible = false;

   } else{

        document.getElementById("nav").classList = "responsive";
        MenuVisible = true;

   }
}

function Seleccionar(){

    document.getElementById("nav").classList = "";  
    MenuVisible = false;

}

function Descargar(){

      window.open('../Document/CV_Katherine_Garcia.pdf');

}


function Mensaje_error(){   

   alert("Sistema en construccion");

}


