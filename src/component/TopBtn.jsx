// component/TopBtn.js
import { useEffect, useState } from 'react'

function TopBtn() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-700 transition z-50"
    >
      ↑{/* 또는 SVG 아이콘 */}
    </button>
  )
}

export default TopBtn
