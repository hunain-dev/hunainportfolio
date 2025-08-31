import { useEffect, useRef } from "react"
import plane from "../../../../public/Assets/images/3dplane.gif"

const Updating = () => {
  const audioRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Function to play audio
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3 // Set volume to 30%
        audioRef.current.loop = false // Don't loop the audio
        
        audioRef.current.play().catch(error => {
          console.log("Audio autoplay was prevented:", error)
        })
      }
    }

    // Function to start the audio cycle
    const startAudioCycle = () => {
      // Play audio immediately
      playAudio()
      
      // Set up interval to play audio every 3 minutes (180000 milliseconds)
      intervalRef.current = setInterval(() => {
        playAudio()
      }, 180000) // 3 minutes = 180000 milliseconds
    }

    // Add event listener for when audio is loaded
    if (audioRef.current) {
      audioRef.current.addEventListener('canplaythrough', () => {
        startAudioCycle()
      })

      // Add error handling
      audioRef.current.addEventListener('error', (e) => {
        console.error("Audio loading error:", e)
      })
    }

    // Cleanup function to clear interval and pause audio when component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  return (
  <div className="Updateing" >
        <audio ref={audioRef} src="/public/Assets/Audio/pilot.mp3" preload="auto" />
        
        <div className="plane3d" >
        <img src={plane} alt="3D Plane"/>
        </div>

        <div className="frontupdating">
        {/* <h2 >🛠️ Working on improvements... Please wait</h2>  */}
        </div>
  </div>
  )
}

export default Updating
