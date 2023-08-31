import { useState, useEffect, useRef } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  const [apod, setApod] = useState(null);
  const [earthThumbnail, setEarthThumbnail] = useState(null);
  const [marsThumbnail, setMarsThumbnail] = useState(null);
  
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((apod) => setApod(apod.url));
  }, []);

  return (

    

    <div 
      name="bg-holder"
      style={{'--image-url':`url(${apod})`}} 
      className='bg-fixed bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center w-full h-full min-h-screen z-[-30]'
    >
      <Navbar/>

      <div
        name="content-holder"
        className='
          flex 
          w-full 
          h-full 
          min-h-full 
          sm:justify-center 
          sm:items-center 
          relative 
          z-0
        '
      >
        <div
          name="card-grid"
          className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full h-fit p-4 max-w-6xl'
        >
          <Card
            title="Earth"
            text="The pale blue dot"
          />
          <Card
            title="Mars"
            text="The red planet"
          />
          <Card
            title="People In Space"
            text="The red planet"
            extraStyle="col-span-2"
          />
          
        </div>
      </div>
    </div>
  )
}

export default App
