function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="flex justify-center">
        <Searchbar />
      </div>

      <div className="flex justify-center my-3 gap-3">
        <FilterButton text="Sequels: enabled" color="red-600"/>
        <FilterButton text="Dropdowns: collapsed" color="orange-400"/>
        <div className="flex-col overflow-hidden">
          <h5 className="text-white text-sm font-semibold">Filter by year/season: </h5>
          <input type="text" name="" placeholder="e.g. 2011" className="bg-[#27374D] border-b-4 border-blue-700 text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-colors duration-200"/>
        </div>
      </div>
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <nav className="bg-[#5454C5] flex justify-center gap-4 py-2.5">
      <h2><a href="#" className="hover:border-solid hover:border-b-1 hover:border-green-400 bg-red-300">Home</a></h2>
      <h2><a href="#" className="hover:border-solid hover:border-b-1 hover:border-green-400">About</a></h2>
      <h2 className="border-b-1 border-red">Theme</h2>
    </nav>
  );
}

function NavbarButton({text}) {
  return (
    <h2>
      <a href="">{text}</a>
    </h2>
  )
}

function Searchbar() {
  return (
    <input type="text" name="" placeholder="🔍 Find a title..." className="mt-3 focus:outline-none bg-[#27374D] border-b-4 border-blue-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-2/4 lg:max-w-[500px] text-white focus:bg-white focus:text-black transition-colors duration-300"/>
  )
}

function FilterButton({text, color}) {
  return (
    <h2 className={`bg-${color} my-auto text-white font-semibold lg:text-lg p-0.5 rounded-lg border-${color} border-4 hover:border-white hover:border-4 hover:cursor-pointer select-none bg-orange`}>{text}</h2>
  )
}