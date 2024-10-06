"use client"

import Image from "next/image";
import { useRef, useState } from "react";


interface SingleMeme {
    id: string;
    url: string;
}

const Meme = ({searchParams} : {searchParams : SingleMeme}) => {

  const text1 = useRef<HTMLInputElement>(null)
  const text2 = useRef<HTMLInputElement>(null)
  const text3 = useRef<HTMLInputElement>(null)
  const text4 = useRef<HTMLInputElement>(null)
  const [submit,setSubmit] = useState('submit')
  const [memeUrl, setMemeUrl] = useState<string | null>(null); 


  const memeForm = async(event:React.SyntheticEvent)=>{
    event.preventDefault()
    if (!text1.current?.value || !text2.current?.value || !text3.current?.value || !text4.current?.value) {
      alert('Please enter all the text fields');
      return;
    }
    setSubmit('loading...')
    
    const response = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=Hasankhan170 &password=Hasan123.&text0=${text1.current?.value}&text1=${text2.current?.value}&text2=${text3.current?.value}&text3=${text4.current?.value}`,{
       method:'POST'
      })

      const data = await response.json()
      if(data.success){
        setMemeUrl(data.data.url);
      }else{
        alert('Failed to generate meme');
        setMemeUrl(null);
      }
      console.log(data);
      setSubmit('Generate');
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
      {memeUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Generated Meme:</h2>
            <Image 
              src={memeUrl} 
              alt="Generated meme" 
              width={400} 
              height={200} 
              className="rounded-lg shadow-lg mt-2"
            />
          </div>
        )}
    </div>
    </>
  )
}

export default Meme
