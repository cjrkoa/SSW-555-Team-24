import Image from "next/image"
import funrun from './image/Funrun-stock.jpg'
import concert from './image/concert-stock.jpg'

export default function Home() {
  return (
    <main className = "">
      <div class="grid gap-20 grid-cols-7 grid-rows-2 mx-16 mt-16 mb-16">
        <div className="image-container col-span-4">
          <h2>Looking to find an event?</h2>
          <p>Click here to start the search for your ideal event!</p>
        </div>
        <div className="image-container col-span-3">
          <Image src={funrun} alt="" />
        </div>
        <div className="image-container col-span-3">
          <Image src={concert} alt="" />
        </div>
        <div className="image-container col-span-4">
          <h2>Looking to post an event?</h2>
          <p>Click here to start creating you post!</p>
        </div>
      </div>
    </main>
  )
}
