"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    if (!/gmail\.com$/.test(formData.email)) {
      toast('Gmail uniquement', {
        duration: 3000,
        position: 'top-center',
        icon: '❌',
        iconTheme: {
          primary: '#f00',
          secondary: '#fff',
        },
        removeDelay: 1000,
      });
    } else if (formData.name.length < 10) {
      toast('Nom trop court, 10 minimum', {
        duration: 3000,
        position: 'top-center',
        icon: '❌',
        iconTheme: {
          primary: '#f00',
          secondary: '#fff',
        },
        removeDelay: 1000,
      });
    } else if (!/svp/i.test(formData.message)) {
      toast('Politesse ! dites "svp"', {
        duration: 3000,
        position: 'top-center',
        icon: '❌',
        iconTheme: {
          primary: '#f00',
          secondary: '#fff',
        },
        removeDelay: 1000,
      });
    } else {
      console.log("lel")
      toast('Merci !', {
        duration: 3000,
        position: 'top-center',
        icon: '👏',
        iconTheme: {
          primary: '#0f0',
          secondary: '#fff',
        },
        removeDelay: 1000,
      });
  
      setTimeout(() => {
        redirect("/")
      }, 3500)
    }

    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded-lg">
      <Toaster/>
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Envoyer
        </button>
      </form>
    </div>
  );
}
