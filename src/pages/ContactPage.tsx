import  { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  CheckCircleIcon,
} from 'lucide-react'
import LocationMap from '../components/map/LocationMap'
const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const handleChange = (
      e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }
  return (
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24">
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Have questions or ready to start your next project? Get in touch
              with our team.
            </p>
          </div>
        </section>
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionTitle
                    title="Get In Touch"
                    subtitle="We're here to answer your questions and discuss your project needs."
                />
                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPinIcon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">
                        Our Location
                      </h3>
                      <p className="text-gray-600">
                        3G Consultants (Pvt) Ltd<br/>
                        No. 19/B, Jeswell Place<br/>
                        Nugegoda 10107<br/>
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <PhoneIcon size={24} className="text-blue-900"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        Support: (+94) 11 283 5074
                    {/*    Main: 0115 925 015*/}
                        <br />

                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MailIcon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        info@3gconsultants.lk



                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <ClockIcon size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00AM - 6:00PM
                        <br />
                        Saturday: 8:00AM - 1:00PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircleIcon size={32} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been received. We'll get back to you
                        shortly.
                      </p>
                      <Button
                          onClick={() => setFormSubmitted(false)}
                          variant="secondary"
                      >
                        Send Another Message
                      </Button>
                    </div>
                ) : (
                    <>
                      <h2 className="text-2xl font-bold text-blue-900 mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 mb-2"
                            >
                              Your Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2"
                            >
                              Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                                htmlFor="phone"
                                className="block text-gray-700 mb-2"
                            >
                              Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label
                                htmlFor="subject"
                                className="block text-gray-700 mb-2"
                            >
                              Subject *
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select a subject</option>
                              <option value="General Inquiry">
                                General Inquiry
                              </option>
                              <option value="Project Consultation">
                                Project Consultation
                              </option>
                              <option value="Career Information">
                                Career Information
                              </option>
                              <option value="Support">Support</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-6">
                          <label
                              htmlFor="message"
                              className="block text-gray-700 mb-2"
                          >
                            Your Message *
                          </label>
                          <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          ></textarea>
                        </div>
                        <Button type="submit" variant="primary" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    </>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
                title="Our Location"
                subtitle="Visit our headquarters or reach out to our regional offices."
                centered={true}
            />
            <div className="mt-8 h-[500px] rounded-lg overflow-hidden shadow-lg">
              <LocationMap />
            </div>
          </div>
        </section>
      </div>
  )
}
export default ContactPage
