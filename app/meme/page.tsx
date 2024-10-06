"user client"

import Image from "next/image";


interface SingleMeme {
    id: string;
    url: string;
}

const Meme = async({searchParams} : {searchParams : SingleMeme}) => {
  return (
    <>
    <div>
        <Image src={searchParams.url} alt="meme" width={200} height={200} />
    </div>
    </>
  )
}

export default Meme
