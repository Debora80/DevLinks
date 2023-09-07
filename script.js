function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#perfil")

  if(html.classList.contains("light")){ 
    img.setAttribute("src","./assets/avatarr.png")
    img.setAttribute( "alt", "Imagem de Elisa Guimarães light")
  }else{ 
    img.setAttribute("src","./assets/avatar.png")
    img.setAttribute( "alt", "Imagem de Elisa Guimarães")
  } 
}