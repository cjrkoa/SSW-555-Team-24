export default function Home() {
  return (
    <main className = "">
      <div className="w-[1065px] h-[715px] justify-center items-center gap-[15px] inline-flex">
        <div className="w-[615px] h-[350px] relative">
          <div className="w-[615px] h-[350px] left-0 top-0 absolute bg-yellow-200 bg-opacity-80" />
          <div className="w-[529px] h-[114px] left-[43px] top-[15px] absolute text-black text-[42px] font-semibold font-['Outfit'] capitalize tracking-widest">Looking for an event near you?</div>
        </div>
        <img className="w-[435px] h-[350px] rounded-[40px]" src="https://via.placeholder.com/435x350" />
        <div className="w-[615px] h-[350px] relative">
          <div className="w-[615px] h-[350px] left-0 top-0 absolute bg-yellow-200 bg-opacity-80" />
          <div className="w-[529px] h-[70px] left-[43px] top-[15px] absolute text-black text-[42px] font-semibold font-['Outfit'] capitalize tracking-widest">Hosting an Event?</div>
        </div>
        <img className="w-[435px] h-[350px] rounded-[40px]" src="https://via.placeholder.com/435x350" />
    </div>
    </main>
  )
}
