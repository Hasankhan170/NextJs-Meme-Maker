import Image from "next/image";


const page = async ()=>{

  const response = await fetch('https://api.imgflip.com/get_memes')
  .then((response)=>response.json())
  .then((response)=>response.data)
  .catch((err)=>console.log(err))
  console.log(response);
  
  

  return (
    <>
    <h1>Meme Maker</h1>
    <div>
      {
        response.memes.map((item: { name: string; id: string; url: string })=>{
          return (
            <div key={item.id} style={{margin: '10px'}}>
               <Image src={item.url} height={200} width={200} alt={item.name} className='rounded-lg' />
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default page;