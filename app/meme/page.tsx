"use client"

import Image from "next/image";
import { useRef } from "react";


interface SingleMeme {
    id: string;
    url: string;
}

const Meme = async({searchParams} : {searchParams : SingleMeme}) => {

  const text1 = useRef<HTMLInputElement>(null)
  const text2 = useRef<HTMLInputElement>(null)
  const text3 = useRef<HTMLInputElement>(null)
  const text4 = useRef<HTMLInputElement>(null)


  const memeForm = async(event:React.SyntheticEvent)=>{
    event.preventDefault()
    console.log(text1.current?.value);
    console.log(text2.current?.value);
    console.log(text3.current?.value);
    console.log(text4.current?.value);
    
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Image 
          src={searchParams.url} 
          alt="meme" 
          width={400} 
          height={200} 
          className="rounded-lg shadow-lg"
        />
      </div>
      <form onSubmit={memeForm} className="flex flex-col gap-4 w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <input 
          type="text" 
          placeholder="Enter Text 1" 
          ref={text1}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
        />
        <input 
          type="text" 
          placeholder="Enter Text 2" 
          ref={text2}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
        />
        <input 
          type="text" 
          placeholder="Enter Text 3" 
          ref={text3}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
        />
        <input 
          type="text" 
          placeholder="Enter Text 4" 
          ref={text4}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Generate
        </button>
      </form>
    </div>
    </>
  )
}

export default Meme
