'use client'
import { AnimatePresence, motion } from "framer-motion"
import { Star, ChevronRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import AppointmentCalendar from "../components/AppointmentCalendar"


export default function LuxuryNailSpaLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'services', 'testimonials', 'calendar', 'contact']
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    const navItems = [
      { id: 'home', label: 'Inicio' },
      { id: 'services', label: 'Servicios' },
      { id: 'testimonials', label: 'Testimonios' },
      { id: 'calendar', label: 'Agenda' },
      { id: 'contact', label: 'Contacto' },
    ]
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-yellow-500">
                Elegancia Dorada
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === item.id ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'
                    } transition duration-300`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === item.id ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'
                    } transition duration-300`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            Elegancia Dorada
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Descubre el lujo en cada detalle. Tu experiencia de spa de uñas elevada a la perfección.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Reserva Ahora
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Nuestros Servicios de Lujo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Manicura de Oro", "Pedicura Real", "Diseños Exclusivos"].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-yellow-900 to-yellow-700 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{service}</h3>
              <p className="text-yellow-200 mb-4">Experimenta el pináculo del cuidado de uñas con nuestro servicio de {service.toLowerCase()}.</p>
              <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300">
                Saber más <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-black to-yellow-900">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            { name: "María L.", comment: "¡Una experiencia verdaderamente lujosa! Mis uñas nunca se han visto mejor." },
            { name: "Carlos R.", comment: "El ambiente y el servicio son incomparables. Volveré sin duda." },
            { name: "Ana S.", comment: "Cada visita es un tratamiento de realeza. ¡Altamente recomendado!" }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-yellow-800 p-6 rounded-xl shadow-lg max-w-sm"
            >
              <p className="text-yellow-200 mb-4">{testimonial.comment}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{testimonial.name}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Calendar Section */}
      <section id="calendar" >
        <AppointmentCalendar />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Elegancia Dorada
            </h3>
            <p className="text-yellow-200">Elevando el arte del cuidado de uñas a nuevas alturas de lujo.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Contáctanos</h4>
            <p className="text-yellow-200">123 Calle Dorada, Ciudad Lujo</p>
            <p className="text-yellow-200">Tel: (555) 123-4567</p>
            <p className="text-yellow-200">Email: info@eleganciadorada.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Síguenos</h4>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-yellow-200 hover:text-yellow-400 transition duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-yellow-200">
          <p>&copy; 2024 Elegancia Dorada. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}