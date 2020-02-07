function ocultaMenu(){
    
    if(document.getElementById("menu").classList.contains('leftC')){
            document.getElementById("menu").style.left ="-300px";
            document.getElementById("iframeMenuExterno").style.left ="-300px";
            document.getElementById("contenido").style.left = "30px";
            document.getElementById("mMenuBoton").innerHTML = "> > >";
            document.getElementById("menu").classList.remove('leftC');
       }else{
            document.getElementById("menu").style.left = "15px";
            document.getElementById("iframeMenuExterno").style.left ="15px";
            document.getElementById("contenido").style.left = "300px";
            document.getElementById("mMenuBoton").innerHTML = "< < <";
            document.getElementById("menu").classList.add('leftC');
       }
    
}