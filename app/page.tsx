


const page = async ()=>{

  const response = await fetch('https://api.imgflip.com/get_memes')
  .then((response)=>response.json())
  .then((response)=>response.data)
  .catch((err)=>console.log(err))
  console.log(response);
  
  
 
  

  return (
    <>
    <h1>Meme Maker</h1>
    </>
  )
}

export default page;