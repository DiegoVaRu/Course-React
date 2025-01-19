import { useEffect, useState } from 'react'

export const FollowMouse = () => {
const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const isEnable = enable? 'Desactivar' : 'Activar'

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) 
      window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <main>
      <div className="circle" style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnable(!enable)}>
        {isEnable} Seguimiento
      </button>
    </main>
  )
}