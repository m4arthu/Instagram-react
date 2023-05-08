import Sugestoes from './Sugestoes.jsx'
import React from 'react'




export default function SlideBar() {
  const [name, changename] = React.useState("catanacomics")
  const [photo,changeimg] = React.useState("assets/img/meowed.svg")
  return (
    <div className="sidebar">
      <div className="usuario">
        <img onClick={() => changeimg(() =>{  // funcão que retorna o nome s e ele não for vazio
              var endereco = prompt("Endereço  da nova imagem:")
              while(!endereco){
                endereco = prompt("Endereço da nova imagem")
              }
              return endereco
            })} src={photo} alt="imagem de perfil" />
        <div className="texto">
          <span>
            <strong>{name}</strong>
            <ion-icon onClick={() => changename(() =>{  // funcão que retorna o nome s e ele não for vazio
              var nome = prompt("Qual o seu nome?")
              while(!nome){
                nome = prompt("Qual o seu nome?")
              }
              return nome
            })} name="pencil"></ion-icon>
          </span>
        </div>
      </div>

      <Sugestoes />
    </div>
  )
}

