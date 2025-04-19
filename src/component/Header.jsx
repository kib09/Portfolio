import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="p-4 bg-neutral-600 text-white flex justify-between items-center fixed w-full z-50">
        {/* 로고 */}
        <h1 className="text-xl font-bold hover:text-yellow-400">
          <a href="/home">Inveloper</a>
        </h1>

        {/* 메뉴 */}
        <div className="flex items-center font-bold">
          <div className="hidden md:flex space-x-4 ">
            <a href="/home" className="m-1 hover:text-yellow-400">
              Home
            </a>
            <a href="/Projects" className="m-1 hover:text-yellow-400">
              Projects
            </a>
            <a href="/Contact" className="m-1 hover:text-yellow-400">
              Contact
            </a>
          </div>
          {/* 햄버거 메뉴 */}
          <div className="md:hidden w-8 h-8 ">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-yellow-400 focus:outline-none cursor-pointer"
            >
              {/* 햄버거 아이콘 */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 전체 화면 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-8 z-40 transition-opacity duration-300">
          <button className="absolute top-6 right-6 text-yellow-400" onClick={closeMenu}>
            {/* 닫기 아이콘 */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <a href="#projects" onClick={closeMenu} className="text-2xl hover:text-yellow-400">
            Home
          </a>
          <a href="#contact" onClick={closeMenu} className="text-2xl hover:text-yellow-400">
            Projects
          </a>
          <a href="" onClick={closeMenu} className="text-2xl hover:text-yellow-400">
            Contact
          </a>
        </div>
      )}
    </>
  )
}

export default Header
