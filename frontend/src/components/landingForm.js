import React from 'react'
import { AiOutlineSend } from "react-icons/ai";


const landingForm = () => {
    return (
        <>
            <div className='w-full relative h-[100vh] bg-white flex flex-col'>
                    <h1 className='text-center text-7xl font-semibold absolute top-[15%] left-[50%] -translate-x-[50%]'>Kuchh Banaoge Kya? </h1>
                <div className='w-full h- h[23.34%] flex items-start justify-end px-15'>
                    <img src="food1.png" className='h-[300px] -rotate-10' />
                </div>
                <div className='w-full h-1/3 flex flex-col items-center justify-center'>
                    <div>
                        <p className='text-xl text-slate-500'>search your recipe here:</p>
                        <from className='flex items-center mt-1 relative'>
                            <input type="text" id="txtSearch" placeholder="Jaisa Mood, Vaisa Food..." className='w-[400px]  h-[50px] border rounded px-4 py-2' />
                            <button type='submit' className='w-[40px] h-[40px] absolute pl-1 bg-slate-100 rounded-full flex items-center justify-center right-1 hover:scale-[1.08] cursor-pointer' ><AiOutlineSend size={28} /></button>
                        </from>
                    </div>
                </div>
                <div className='w-full h-1/3 flex px-15 items-end justify-start'>
                    <img src="food2.png" className='h-[300px]' />
                </div>
            </div>
        </>
    )
}

export default landingForm