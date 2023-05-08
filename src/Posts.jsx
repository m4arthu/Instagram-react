import { useState } from "react"


const lposts = [
  {
    username: "meowed", photo: "assets/img/meowed.svg", post: "assets/img/gato-telefone.svg", curtidas: {
      img: "assets/img/barked.svg",
      mainname: "barked",
      outras: "101000"
    }
  },
  {
    username: "barked", photo: "assets/img/barked.svg", post: "assets/img/adorable_animals.svg", curtidas: {
      img: "assets/img/dog.svg",
      mainname: "adorable_animals",
      outras: "99159"
    }
  },
  {
    username: "meowed", photo: "assets/img/meowed.svg", post: "assets/img/gato-telefone.svg", curtidas: {
      img: "assets/img/meowed.svg",
      mainname: "meowed",
      outras: "606999"
    }
  }
]






export default function Posts() {
  var [likes, changeLikes] = useState(1000)

  function ChangeHeart(index) {
    if (index.target.classList.length === 3) {
      index.target.classList.remove("selecionado")
      changeLikes(likes - 1)
      index.target.name = "heart-outline"
    } else {
      index.target.classList.add("selecionado")
      index.target.name = "heart"
      changeLikes(likes + 1)
    }
  }

  function ChangeHeartimg(index) {
  const likeIcon = index.target.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[0].childNodes[0]
    if (likeIcon.classList.length === 2){
      changeLikes(likes + 1)
  }
  likeIcon.classList.add("selecionado")
  likeIcon.name = "heart"
}
  function changeBookMark(index) {
    if (index.target.classList.length === 3) {
      index.target.classList.remove("selecionado")

      index.target.name = "bookmark-outline"
    } else {
      index.target.classList.add("selecionado")
      index.target.name = "bookmark"
    }
  }
  return (
    <div className="posts">
      {
        lposts.map((post, index = lposts.indexOf(post)) =>
          <div key={index} className="post">
            <div className="topo">
              <div className="usuario">
                <img src={post.photo} alt={post.username} />
                {post.username}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img onClick={(index) => { ChangeHeartimg(index) }} src={post.post} alt={`user${post.username}post`} />
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon onClick={(index) => {
                    ChangeHeart(index)
                  }} name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick={(index) => {
                    changeBookMark(index)
                  }} name="bookmark-outline"></ion-icon> </div>
              </div>

              <div className="curtidas">
                <img src={post.curtidas.img} alt={post.curtidas.mainname} />
                <div className="texto">
                  Curtido por <strong>{post.curtidas.mainname}</strong> e <strong>outras {likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}