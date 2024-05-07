'use client';
import { useState } from 'react';
import { Modal } from '../components/Modal';

const users = [
  {
    id: 1,
    first_name: 'Trudi',
    last_name: 'Smithers',
    email: 'tsmithers0@msn.com',
    age: 48,
  },
  {
    id: 2,
    first_name: 'Rockwell',
    last_name: 'Neasham',
    email: 'rneasham1@cnbc.com',
    age: 23,
  },
  {
    id: 3,
    first_name: 'Sampson',
    last_name: 'Adam',
    email: 'sadam2@prweb.com',
    age: 44,
  },
  {
    id: 4,
    first_name: 'Kristopher',
    last_name: 'Greenrod',
    email: 'kgreenrod3@shutterfly.com',
    age: 30,
  },
  {
    id: 5,
    first_name: 'Vitia',
    last_name: 'Olensby',
    email: 'volensby4@github.io',
    age: 19,
  },
  {
    id: 6,
    first_name: 'Kristal',
    last_name: 'Breznovic',
    email: 'kbreznovic5@yale.edu',
    age: 68,
  },
  {
    id: 7,
    first_name: 'Min',
    last_name: 'Warder',
    email: 'mwarder6@scribd.com',
    age: 57,
  },
  {
    id: 8,
    first_name: 'Jerald',
    last_name: 'Dudenie',
    email: 'jdudenie7@t.co',
    age: 46,
  },
  {
    id: 9,
    first_name: 'Krystle',
    last_name: 'Liles',
    email: 'kliles8@fc2.com',
    age: 42,
  },
  {
    id: 10,
    first_name: 'Mar',
    last_name: 'Knewstub',
    email: 'mknewstub9@webmd.com',
    age: 70,
  },
];

const columns = ['id', 'First name', 'Last name', 'Email', 'Age'];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen overflow-y-hidden">
        <h1>Users table</h1>
        <table className="w-full max-w-6xl border border-gray-400 py-6">
          <thead className="w-full border">
            <tr className="w-full border">
              {columns.map((column) => (
                  <th className="py-3 px-8 border-b-amber-700">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="">
                <td className="border-b text-center py-3 px-4">{user.id}</td>
                <td className="border-b text-center py-3 px-4">
                  {user.first_name}
                </td>
                <td className="border-b text-center py-3 px-4">
                  {user.last_name}
                </td>
                <td className="border-b text-center py-3 px-4">{user.email}</td>
                <td className="border-b text-center py-3 px-4">{user.age}</td>
                <td><button>blabla</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} handleClose={handleOpenModal}>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">teste de título do conteúdo</h2>
          <div className="flex flex-col justify-between gap-4">
            <input
              type="text"
              placeholder="Digite aqui "
              className="bg-amber-100 rounded-md border-none py-3 px-4"
            />
            <input
              type="text"
              placeholder="Digite aqui "
              className="bg-amber-100  rounded-md border-none py-3 px-4"
            />
            <input
              type="text"
              placeholder="Digite aqui "
              className="bg-amber-100  rounded-md border-none py-3 px-4"
            />
            <input
              type="text"
              placeholder="Digite aqui "
              className="bg-amber-100  rounded-md border-none py-3 px-4"
            />
            <input
              type="text"
              placeholder="Digite aqui "
              className="bg-amber-100  rounded-md border-none py-3 px-4"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
