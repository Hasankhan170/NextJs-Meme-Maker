import Image from "next/image";
import Link from "next/link";



const page = async ()=>{

  const response = await fetch('https://api.imgflip.com/get_memes')
  .then((response)=>response.json())
  .then((response)=>response.data)
  .catch((err)=>console.log(err))
  console.log(response);
  
  
  
 
  

  return (
    <>
      <h1 className="text-center text-3xl font-bold m-5">Meme Maker</h1>
      <div className="p-3 flex flex-wrap justify-center gap-5">
        {
          response ? response.memes.map((item: { name: string; id: string; url: string }) => {
            return (
              <div key={item.id} className="flex flex-col items-center">
                <Image 
                  className="w-48 h-48 object-cover border" 
                  src={item.url} 
                  alt={item.name} 
                  width={200} 
                  height={200} 
                />
                <button 
                  className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"><Link href={}>Meme Generate</Link></button>
              </div>
            );
          }) : <p>No data Found...</p>
        }
      </div>
    </>
  );
  
  
}

export default page;