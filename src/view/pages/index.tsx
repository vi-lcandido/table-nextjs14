"use client"
import { useState } from 'react';
import {Modal} from '../components/Modal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal () { 
    setIsModalOpen(!isModalOpen)
  }  

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen overflow-y-hidden'>
      <h1>My table</h1>
      <button 
      type='button' 
      className=' py-3 px-8 bg-amber-700 border-none rounded-md max-w-xs hover:brightness-95 3dev tema font-semibold'
      onClick={handleOpenModal}
      >
        Add new user
      </button>
    </div>
    <Modal 
    isOpen={isModalOpen} handleClose={handleOpenModal}>
      <div className='flex flex-col'>
      <h2 className='font-bold text-2xl'>teste de título do conteúdo</h2>
      <div className='flex flex-col justify-between gap-4'>
        <input 
        type="text" placeholder='Digite aqui 'className='bg-slate-100 rounded-md border py-3 px-4'/>
        <input 
        type="text" placeholder='Digite aqui 'className='bg-slate-100 rounded-md border py-3 px-4'/>
        <input 
        type="text" placeholder='Digite aqui 'className='bg-slate-100 rounded-md border py-3 px-4'/>
        <input 
        type="text" placeholder='Digite aqui 'className='bg-slate-100 rounded-md border py-3 px-4'/>
        <input 
        type="text" placeholder='Digite aqui 'className='bg-slate-100 rounded-md border py-3 px-4'/>
      </div>
      </div>
    </Modal>
    </>
  );
}
