
const Navigasi = () => {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">

          <div className="text-xl font-bold text-white">
            <h1>NAMA Website</h1>
            <hr />
          </div>
          <hr className="line"/>
          
          <ul className="hidden md:flex space-x-6 text-white">
            <li className="relative group">
              <button className="btn-aja hover:text-green-400">desain halaman <i className="rotate">▼</i></button>
              <ul className="absolute left-0 top-full hidden w-40 bg-gray-700 group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Halaman 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Halaman 2</a></li>
              </ul>
            </li>
            <li className="relative group">
              <button className="btn-aja hover:text-green-400">desain element <i className="rotate">▼</i></button>
              <ul className="absolute left-0 top-full hidden w-40 bg-gray-700 group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Element 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Element 2</a></li>
              </ul>
            </li>
            <li className="relative group">
              <button className="btn-aja hover:text-green-400 ">tips and trick <i className="rotate">▼</i></button>
              <ul className="absolute left-0 top-full hidden w-40 bg-gray-700 group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Tip 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Tip 2</a></li>
              </ul>
            </li>
          </ul>

          <div>
            <a href="#" className="btn-collor px-4 py-2 rounded-full text-black font-bold text-center">+ create</a>
            <a href="#" className="px-4 py-2 color-black-00 font-bold text-center">SIGN IN</a>
          </div>
        </div>
    </nav>
  );
}

export default Navigasi;
