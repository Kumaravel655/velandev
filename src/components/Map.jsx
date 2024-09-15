import React from 'react'

function Map() {
  return (
        <div className='map-section w-full h-min-screen'>
          <div className='gmap-frame' style={{ width: '100%'}}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src=""
            >
            </iframe>
          </div>
        </div>
  )
}

export default Map
