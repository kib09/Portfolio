// src/pages/Intro.js
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const navigate = useNavigate()
  const text = 'inveloper  portpolio'.split('')

  return (
    <div
      className="h-screen w-full bg-black flex items-center justify-center cursor-pointer"
      onClick={() => navigate('/home')}
    >
      <div className="flex gap-1">
        {text.map((char, i) => (
          <span
            key={i}
            className={`text-white text-5xl font-bold inline-block animate-spin-delay`}
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: '0.6s',
              animationFillMode: 'forwards',
              opacity: 1,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Intro
