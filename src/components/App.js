import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger);
import Landing from './Landing'

const App = (props) => {
   const container = useRef()
   const birds = useRef()
   const foreground = useRef()
   const forest = useRef()
   const bear = useRef()
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
            scrub: 5,
            // markers: true
         },
         x: '-100vw',
      })

   }, [])

   return (
      <>

         <Landing />

         <div ref={container} className="mx-auto bg-gray-200 overflow-x-scroll relative h-screen" >

            {/* <img src="/images/frame.png" className="absolute top-0 left-0  min-h-screen z-20"
               style={{ height: '108vh', width: '108vw', maxWidth: '108vw', left: '-4vw', top: '-8vh' }}
            /> */}

            {/* BG */}
            <img ref={forest} src="/images/forest.png" className="h-full absolute inset-0" style={{ width: '200vw', minWidth: '200vw', right: '-100vw' }} />

            {/* FOREGROUND */}
            <img ref={foreground} src="/images/foreground.png" className="h-auto absolute bottom-0 z-10" style={{ width: '110vw', minWidth: '110vw', left: '0' }} />

            {/* CLOUDS */}
            <img ref={cloudA} src="/images/cloud.png" className="absolute w-60 h-auto" />
            <img ref={cloudB} src="/images/cloud.png" className="absolute w-40 h-auto" style={{ top: '100px', left: '300px' }} />
            <img ref={cloudC} src="/images/cloud.png" className="absolute w-72 h-auto" style={{ top: '60px', left: '600px' }} />

            {/* BIRDS */}
            <img ref={birds} src="/images/birds.png" className="absolute w-60 h-auto" style={{ bottom: '600px', left: '0' }} />

            {/* BEAR */}
            <img ref={bear} src="/images/bear.png" className="absolute h-60 w-auto" style={{ bottom: '50px', right: '-50%' }} />
         </div >
      </>
   )
}

export default App