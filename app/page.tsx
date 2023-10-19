export default function Home() {
  return (
    <main className = "">
      <div className = "flex items-baseline mt-4 mb-4 pb-6 border-b border-slate-200">
        <div className = "w-2/5 h-96 bg-white shadow rounded">
          Map Box
        </div>
        <div className = "w-2/5 min-w-max grid grid-cols-3 auto-rows-auto gap-2">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
          <span>06</span>
        </div>
        <div className = "w-1/5 grid">
          <input type="Range" className = "mt-4 mb-4 border" />
          <input type="Date" />
          <input type="Cost" />
        </div>
      </div>
    </main>
  )
}
