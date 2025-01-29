const Navigasi = () => {
  return (
    <nav className="bg-gray-800 p-4 border-b-2 border-green-600">
      <div className="container mx-auto flex items-center justify-between ">

      <div className="text-xl font-bold text-white">NAMA Website</div>

        <ul className="hidden md:flex space-x-6 text-white">
          {/* Menu 1: desain halaman */}
          <li className="relative group">
            <button className="hover:text-green-400 flex items-center">
              Desain Halaman
              <i className="ri-triangle-fill ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
            </button>
            <ul className="absolute left-0 top-full hidden w-40 bg-gray-700 group-hover:block">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Halaman 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Halaman 2</a></li>
            </ul>
          </li>
          
          {/* Menu 2: desain element */}
          <li className="relative group">
            <button className="hover:text-green-400 flex items-center">
              Desain Element
              <i className="ri-triangle-fill ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
            </button>
            <ul className="absolute left-0 top-full hidden w-40 bg-gray-700 group-hover:block">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Element 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Element 2</a></li>
            </ul>
          </li>

          {/* Menu 3: tips and trick */}
          <li className="relative group">
            <button className="hover:text-green-400 flex items-center">
              Tips and Trick
              <i className="ri-triangle-fill ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
            </button>
            <ul className="absolute left-0 top-full hidden w-40 bg-gray-700 group-hover:block">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Tip 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Tip 2</a></li>
            </ul>
          </li>
        </ul>

        <div>
  <a href="#" className="bg-green-400 hover:bg-red-600 px-6 py-2 rounded text-white flex items-center group">
    <i className="ri-add-line mr-2 transition-transform duration-300 group-hover:rotate-180"></i>
    SIGN IN
    </a>
  </div>
      </div>
    </nav>
  );
}

export default Navigasi;
