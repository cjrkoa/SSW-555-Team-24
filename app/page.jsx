import Image from "next/image"
import funrun from './image/Funrun-stock.jpg'
import concert from './image/concert-stock.jpg'

export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-12 p-10">
        {/* Box 1 - Top Left */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="bg-gray-200 rounded-lg p-8 text-center w-full h-full">
            <h2 className="text-lg font-bold mb-4">
              <a href="/findevent">Click here to start searching </a>
            </h2>
            {/* Additional content if needed */}
          </div>
        </div>

        {/* Box 2 - Top Right */}
        <div className="lg:col-span-3 flex justify-center items-center">
          <div className="bg-gray-200 rounded-lg p-8 text-center w-full h-full">
            {/* Stock image component or placeholder */}
            <Image src={funrun} alt="Fun run" layout="responsive" width={700} height={525} />
          </div>
        </div>

        {/* Box 3 - Bottom Left */}
        <div className="lg:col-span-3 flex justify-center items-center">
          <div className="bg-gray-200 rounded-lg p-8 text-center w-full h-full">
            {/* Stock image component or placeholder */}
            {<Image src={concert} alt="Concert" layout="responsive" width={700} height={525} />}
          </div>
        </div>

        {/* Box 4 - Bottom Right */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="bg-gray-200 rounded-lg p-8 text-center w-full h-full">
            <h2 className="text-lg font-bold mb-4">
            <a href="/createvent">Looking to post your own event</a>
            </h2>
            {/* Additional content if needed */}
          </div>
        </div>
      </div>
    </main>
  )
}
