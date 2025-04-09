import { useState } from 'react';
import { XIcon, CheckCircleIcon, MailIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  if (!isOpen) return null;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: email,
        to_name: email.split('@')[0],
        message: "We're currently working hard to create something amazing. Once we're back, you'll be the first to know!"
      }, EMAILJS_PUBLIC_KEY);
      if (result.status === 200) {
        setStatus('success');
        setEmail('');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send email. Please try again later.');
      console.error('Email sending failed:', error);
    }
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700" aria-label="Close modal">
          <XIcon size={20} />
        </button>
        {status === 'success' ? <div className="text-center py-8">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thanks for Subscribing!
            </h2>
            <p className="text-gray-600">
              We've sent you a welcome email. We'll notify you as soon as we're
              back online!
            </p>
          </div> : <>
            <div className="flex items-center gap-3 mb-4">
              <MailIcon className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-800">
                Subscribe to Updates
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-500" placeholder="Enter your email" required disabled={status === 'loading'} />
                {status === 'error' && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors disabled:bg-red-300 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {status === 'loading' ? <>
                    <span className="animate-pulse">Sending...</span>
                  </> : 'Subscribe'}
              </button>
            </form>
          </>}
      </div>
    </div>;
};
export default SubscribeModal;