import React from 'react'

const Landing = (props) => {
   const { foregroundImage, backgroundImage, midgroundImage, bearImage, frameImage } = { ...props }


   return (
      <div className="mx-auto bg-gray-200 overflow-x-scroll relative h-screen w-screen" >
         <h1 className="text-4xl py-2">Scroll down for a walk in nature...</h1>

         <div className="flex flex-wrap justify-between">

            {/* FOREGROUND */}
            <div className="flex flex-col my-4">
               <span>
                  <label className="text-2xl font-semibold mr-4" htmlFor="foreground-image">Foreground</label>
                  <input type="checkbox" onChange={(e) => foregroundImage.setShow(e.target.checked)} checked={foregroundImage.show} />
               </span>
               <input type="file" name="foreground-image"
                  onChange={(e) => foregroundImage.set(URL.createObjectURL(e.target.files[0]))}
               />
               <div className="w-full bg-contain bg-no-repeat bg-center"
                  style={{ minHeight: '10rem', backgroundImage: `url(${foregroundImage.get})` }} />
            </div>

            {/* BACKGROUND */}
            <div className="flex flex-col my-4">
               <span>
                  <label className="text-2xl font-semibold mr-4" htmlFor="background-image">Background</label>
                  <input type="checkbox" onChange={(e) => backgroundImage.setShow(e.target.checked)} checked={backgroundImage.show} />
               </span>
               <input type="file" name="background-image"
                  onChange={(e) => backgroundImage.set(URL.createObjectURL(e.target.files[0]))}
               />
               <div className="w-full bg-contain bg-no-repeat bg-center"
                  style={{ minHeight: '10rem', backgroundImage: `url(${backgroundImage.get})` }} />
            </div>

            {/* MIDGROUND */}
            <div className="flex flex-col my-4">
               <span>
                  <label className="text-2xl font-semibold mr-4" htmlFor="midground-image">Midground</label>
                  <input type="checkbox" onChange={(e) => midgroundImage.setShow(e.target.checked)} checked={midgroundImage.show} />
               </span>
               <input type="file" name="midground-image"
                  onChange={(e) => midgroundImage.set(URL.createObjectURL(e.target.files[0]))}
               />
               <div className="w-full bg-contain bg-no-repeat bg-center"
                  style={{ minHeight: '10rem', backgroundImage: `url(${midgroundImage.get})` }} />
            </div>

            {/* BEAR */}
            <div className="flex flex-col my-4">
               <span>
                  <label className="text-2xl font-semibold mr-4" htmlFor="bear-image">Bear</label>
                  <input type="checkbox" onChange={(e) => bearImage.setShow(e.target.checked)} checked={bearImage.show} />
               </span>
               <input type="file" name="bear-image"
                  onChange={(e) => bearImage.set(URL.createObjectURL(e.target.files[0]))}
               />
               <div className="w-full bg-contain bg-no-repeat bg-center"
                  style={{ minHeight: '10rem', backgroundImage: `url(${bearImage.get})` }} />
            </div>

            {/* FRAME */}
            <div className="flex flex-col my-4">
               <span>
                  <label className="text-2xl font-semibold mr-4" htmlFor="frame-image">Frame</label>
                  <input type="checkbox" onChange={(e) => frameImage.setShow(e.target.checked)} checked={frameImage.show} />
               </span>
               <input type="file" name="frame-image"
                  onChange={(e) => frameImage.set(URL.createObjectURL(e.target.files[0]))}
               />
               <div className="w-full bg-contain bg-no-repeat bg-center"
                  style={{ minHeight: '10rem', backgroundImage: `url(${frameImage.get})` }} />
            </div>
         </div>



      </div>
   )
}

export default Landing