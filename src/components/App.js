import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger);
import Landing from './Landing'

const App = (props) => {
   // foreground
   const [foregroundImage, setForegroundImage] = useState('/images/foreground.png')
   const [showForeground, setShowForeground] = useState(true)
   // background
   const [backgroundImage, setBackgroundImage] = useState('/images/forest.png')
   const [showBackground, setShowBackground] = useState(true)
   // bear
   const [bearImage, setBearImage] = useState('/images/bear.png')
   const [showBear, setShowBear] = useState(true)
   // midground
   const [midgroundImage, setMidGroundImage] = useState('/images/boulder2.png')
   const [showMidground, setShowMidground] = useState(true)
   // frame
   const [frameImage, setFrameImage] = useState('/images/frame.png')
   const [showFrame, setShowFrame] = useState(true)

   const container = useRef()
   const birds = useRef()
   const foreground = useRef()
   const forest = useRef()
   const bear = useRef()
   const boulder = useRef()
   const cloudA = useRef()
   const cloudB = useRef()
   const cloudC = useRef()

   useEffect(() => {
      // BIRD ANIMATION
      gsap.to(birds.current, {
         x: '100vw',
         y: '-100px',
         duration: 75,
         scale: 0.01
      })
      //CLOUDS
      gsap.to(cloudA.current, {
         x: '-380px',
         y: '-150px',
         duration: 80
      })
      gsap.to(cloudB.current, {
         x: '-400px',
         y: '-180px',
         duration: 60
      })
      gsap.to(cloudC.current, {
         x: '-420px',
         y: '-120px',
         duration: 40
      })

      // FOREGROUND ANIMATION
      gsap.to(foreground.current, {
         scrollTrigger: {
            trigger: container.current,
            start: "top top",
            toggleActions: "restart pause resume pause",
            pin: true,
            scrub: true,
            // markers: true
         },
         x: '-5vw',
      })
      // FOREST ANIMATION
      gsap.to(forest.current, {
         scrollTrigger: {
            trigger: container.current,
            start: "top top",
            toggleActions: "restart pause resume pause",
            pin: true,
            scrub: 5,
            // markers: true
         },
         x: '-100vw',
      })
      // BEAR ANIMATION
      gsap.to(bear.current, {
         scrollTrigger: {
            trigger: container.current,
            start: "top top",
            toggleActions: "restart pause resume pause",
            pin: true,
            scrub: 6,
            // markers: true
         },
         x: '-100vw',
      })
      // BOULDER ANIMATION
      gsap.to(boulder.current, {
         scrollTrigger: {
            trigger: container.current,
            start: "top top",
            toggleActions: "restart pause resume pause",
            pin: true,
            scrub: 5,
            // markers: true
         },
         x: '-100vw',
      })

   }, [])

   return (
      <>

         <Landing
            foregroundImage={{ get: foregroundImage, set: setForegroundImage, show: showForeground, setShow: setShowForeground }}
            backgroundImage={{ get: backgroundImage, set: setBackgroundImage, show: showBackground, setShow: setShowBackground }}
            midgroundImage={{ get: midgroundImage, set: setMidGroundImage, show: showMidground, setShow: setShowMidground }}
            bearImage={{ get: bearImage, set: setBearImage, show: showBear, setShow: setShowBear }}
            frameImage={{ get: frameImage, set: setFrameImage, show: showFrame, setShow: setShowFrame }}
         />

         <div ref={container} className="mx-auto bg-gray-200 overflow-x-scroll relative h-screen bg-cover" >

            {/* FRAME */}
            <div className={showFrame ? '' : 'hidden'}>
               <img src={frameImage} className="absolute top-0 left-0  min-h-screen z-40"
                  style={{ height: '108vh', width: '108vw', maxWidth: '108vw', left: '-4vw', top: '-8vh' }}
               />
            </div>

            {/* BG */}
            <div className={showBackground ? '' : 'hidden'}>
               <div ref={forest}
                  className="h-full absolute inset-0 bg-contain bg-center"
                  style={{
                     width: '200vw',
                     minWidth: '200vw',
                     right: '-100vw',
                     backgroundImage: `url(${backgroundImage})`,

                  }}
               />
            </div>

            {/* FOREGROUND */}
            <div className={showForeground ? '' : 'hidden'}>
               <img ref={foreground} src={foregroundImage} className="h-auto absolute bottom-0 z-30" style={{ width: '110vw', minWidth: '110vw', left: '0' }} />
            </div>

            {/* CLOUDS */}
            <img ref={cloudA} src="/images/cloud.png" className="absolute w-60 h-auto" />
            <img ref={cloudB} src="/images/cloud.png" className="absolute w-40 h-auto" style={{ top: '100px', left: '300px' }} />
            <img ref={cloudC} src="/images/cloud.png" className="absolute w-72 h-auto" style={{ top: '60px', left: '600px' }} />

            {/* BIRDS */}
            <img ref={birds} src="/images/birds.png" className="absolute w-60 h-auto" style={{ bottom: '600px', left: '0' }} />

            {/* BEAR */}
            <div className={showBear ? '' : 'hidden'}>
               <img ref={bear} src={bearImage} className="absolute h-60 w-auto z-10" style={{ bottom: '50px', right: '-30%' }} />
            </div>

            {/* MIDGROUND */}
            <div className={showMidground ? '' : 'hidden'}>
               <img ref={boulder} src={midgroundImage} className="absolute h-72 w-auto z-20" style={{ bottom: '0', right: '-50%' }} />
            </div>
         </div >
      </>
   )
}

export default App