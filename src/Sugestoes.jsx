const lsuggestions = [
  { nome: "bad.vibes.memes", razão: "segue você", img:"assets/img/bad.vibes.memes.svg"},
  { nome: "chibirdart", razão: "segue você", img:"assets/img/chibirdart.svg"},
  { nome: "razoesparaacreditar", razão: "Novo no Instagram", img:"assets/img/razoesparaacreditar.svg"}
]


export default function Sugestoes() {
  return (
    <div>
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        { lsuggestions.map((suggestion,index = lsuggestions.indexOf(suggestion)) => 
          <div key={index} className="sugestao">
            <div className="usuario">
              <img src={suggestion.img} alt="bad.vibes.memes.svg" />
              <div className="texto">
                <div className="nome">{suggestion.nome}</div>
                <div className="razao">{suggestion.razão}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
        )}
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}

