import Image from "next/image"
import funrun from './image/Funrun-stock.jpg'
import concert from './image/concert-stock.jpg'

export default function Home() {
  return (
    <main className = "">
      <div className="body-container">
        <div className="image-container">
          <h2>Looking to find an event?</h2>
          <p>Click here to start the search for your ideal event!</p>
        </div>
        <div className="image-container">
          <Image src={funrun} alt="" />
        </div>
        <div className="image-container">
          <Image src={concert} alt="" />
        </div>
        <div className="image-container">
          <h2>Looking to post an event?</h2>
          <p>Click here to start creating you post!</p>
        </div>
      </div>
    </main>
  )
}
