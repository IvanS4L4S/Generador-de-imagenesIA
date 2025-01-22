"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';

const Hero = () => {
  const [promt,setPromt]=useState('');
  const [image,setImage]=useState('');
  const [loading,setLoading]=useState(false);
  const handleImageGeneration=async () => {
    setLoading(true)
    const options = {
      method: 'POST',
      url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
      headers: {
        'x-rapidapi-key': 'f7ee30b2fcmsh7475546bdbf008fp164767jsna8b4839a1284',
        'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        inputs: promt,
      }
    };
    try {
      const response = await axios.request(options);
      setImage(response?.data.url);
      toast.success('La imagen se genero de manera exitosa..');
      console.log(response.data);
    } catch (error:unknown) {
      if(axios.isAxiosError(error)&& error.response){
        toast.error(error.response.data.message);
      }else{
        toast.error('Lo siento a ocurrido un error inesperado');
      }
     // console.error(error);
    }finally{
      setLoading(false);
    }
  };
  const handleDescargaImagen =() =>{
    const link = document.createElement("a");
    link.target="_blank";
    link.href=image;
    link.download="generated-img.jpg";
    link.click();
  };
  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
        {/* contenido */}
        <div className='relative z-10 text-white flex flex-col items-center justify-center'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center
            bg-gradient-to-r from-orange-500 to-cyan-200 bg-clip-text text-transparent'>
            Crea tu imagen  <br /> IA </h1>
            <p>Empieza a generar tu imagen con inteligencia artificial.</p>
            {/* Promp input box*/}
            <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white
            rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between" >
              <input 
                type="text" 
                placeholder="Genera tu imagen"
                className="h-full rounded-lg outline-none w-full text-black block flex-1
                placeholder:text-xs sm:placeholder:text-base"
                value={promt}
                onChange={(e)=> setPromt(e.target.value)}
              />
              <Button 
                onClick={handleImageGeneration} 
                variant={"default"} size={"lg"} 
                >Generar
              </Button>
            </div>
            {/* tags */}
            <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
              <p>elecciones mas populares</p>
              <Button variant={"secondary"}>Oppais</Button>
              <Button variant={"secondary"}>Rias</Button>
              <Button variant={"secondary"}>Akeno</Button>
            </div>
            {/* mostrar y cargar la imagen */}
            {loading &&(
              <div>
                <Loader className="animate-spin mt-6" />
              </div>
            )}
            {image && <div className="mt-8 flex flex-col items-center">
              <img src={image} alt="ai image" className="max-w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy" />
              <Button onClick={handleDescargaImagen} className="mt-4 mb-4 bg-sky-800 hover:bg_orange-800">
                Descargar
              </Button>
              </div>}
        </div>
    </div>
  )
}

export default Hero