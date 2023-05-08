const  storys = [
    {src:"assets/img/9gag.svg",username:  "9gag" },
    {src:"assets/img/meowed.svg",username:"meowed"},
    {src:"assets/img/barked.svg",username:"barked"}]

export default function Storys() {
    return (
    <div className="stories">
        {storys.map( (story, index = storys.indexOf(story)) =>
         <div key={index} className="story">
            <div className="imagem">
                <img src={story.src} alt={story.username} />
            </div>
            <div className="usuario">
                {story.username}
            </div>
        </div>
    )}
     
    </div>

)
}


