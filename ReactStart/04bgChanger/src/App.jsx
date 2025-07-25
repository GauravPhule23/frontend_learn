import { useState } from 'react'

function App() {
  const [color, setColor] = useState("orange");

  return (
    <div className='w-full h-screen duration-500' 
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap p-3 left-12 inset-x-0 px-2'>
        <div className='flex flex-col flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl p-2'>
          <button className='outline-none px-4 rounded-full text-white shadow-lg py-1'
          onClick={()=>setColor('red')}
          style={{backgroundColor:'red'}}
          >Red</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg py-1'
          onClick={()=>setColor('blue')}
          style={{backgroundColor:'blue'}}
          >Blue</button>
          <button className='outline-none px-4 rounded-full text-black shadow-lg py-1'
          onClick={()=>setColor('gold')}
          style={{backgroundColor:'gold'}}
          >gold</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg py-1'
          onClick={()=>setColor('olive')}
          style={{backgroundColor:'olive'}}
          >Olive</button>
          <button className='outline-none px-4 rounded-full text-white shadow-lg py-1'
          onClick={()=>setColor('green')}
          style={{backgroundColor:'green'}}
          >Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
