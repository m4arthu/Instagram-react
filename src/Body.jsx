import SlideBar from './SlideBar'
import Posts from './Posts'
import Storys from './Storys'
export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Storys />
        <Posts />
      </div>
      <SlideBar />
    </div>)
}