import React, { useState } from 'react';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import SubscribeModal from './components/SubscribeModal';
export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <div className="relative flex flex-col items-center justify-between min-h-screen w-full text-white bg-cover bg-center" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2244&q=80')"
  }}>
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4 text-center">
        <Header />
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold">
          We Are Launching Soon
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
          Our website is currently undergoing scheduled maintenance. We should
          be back shortly. Thank you for your patience.
        </p>
        <CountdownTimer days={5} />
        <button onClick={() => setIsModalOpen(true)} className="mt-12 px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-colors">
          Subscribe Now
        </button>
      </div>
      <Footer />
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>;
}