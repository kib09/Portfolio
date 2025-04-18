import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const navigate = useNavigate()
  const lines = ['inveloper', 'PORTPOLIO']

  return (
    <div className="h-screen w-full bg-neutral-600 flex items-center justify-center ">
      <div className="flex flex-col gap-4 cursor-pointer " onClick={() => navigate('/home')}>
        {lines.map((word, rowIndex) => (
          <div className="flex gap-1 justify-center " key={rowIndex}>
            {word.split('').map((char, i) => (
              <span
                key={i}
                className="text-white text-5xl font-bold inline-block animate-spin-once "
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '0.6s',
                  animationFillMode: 'forwards',
                  opacity: 0,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Intro
