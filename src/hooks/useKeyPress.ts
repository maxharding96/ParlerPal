import { useEffect, useState } from 'react'

export function useKeyPress(targetKey: string, targetAction?: () => void) {
  const [keyPressed, setKeyPressed] = useState(false)

  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(true)
        targetAction?.()
      }
    }

    const upHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(false)
      }
    }

    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [targetKey, targetAction])

  return keyPressed
}
