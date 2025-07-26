import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password,setPassword] = useState("");
  const [isNumber,setIsNumber] = useState(false);
  const [isChar,setIsChar] = useState(false);
  const [length,setLength] = useState(8);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumber){
      str+="0123456789"
    }
    if(isChar){
      str+="!@#$%^&*()-_{}[]"
    }
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[isNumber,isChar,length,setPassword])

  const passRef = useRef(null);

  const copyPass = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password,length])

  useEffect(()=>{
    passwordGenerator();
  },[isNumber,isChar,length,setPassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 py-3 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center mb-2 text-2xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-xl'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white '
          placeholder='Password' 
          ref={passRef}
          readOnly
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
        onClick={copyPass}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          className='cursor-pointer'
          min={7}
          max={20}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          className='cursor-pointer'
          id='numberInput'
          defaultChecked={isNumber}
          onChange={()=>{
            setIsNumber((prev)=>!prev)
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          className='cursor-pointer'
          id='charInput'
          defaultChecked={isChar}
          onChange={()=>{
            setIsChar((prev)=>!prev)
          }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
