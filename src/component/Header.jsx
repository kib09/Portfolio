function Header() {
  return (
    <header className="p-4 px-10 bg-black text-white flex justify-between fixed w-full">
      <h1 className="text-xl font-bold">Inveloper</h1>
      <nav className="flex items-center font-bold">
        <button
          type="button"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:opacity-80 cursor-pointer"
        />
        <span className="sr-only">다크모드 토글</span>
        <a href="#projects" className="mx-2">
          Home
        </a>
        <a href="#contact" className="mx-2">
          projects
        </a>
      </nav>
    </header>
  )
}
export default Header
