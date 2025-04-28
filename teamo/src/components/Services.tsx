'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ShieldCheckIcon, 
  ComputerDesktopIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Web Management & SEO',
    description: 'Comprehensive website management, optimization, and search engine visibility enhancement.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Hosting & Security',
    description: 'Reliable hosting solutions and robust security measures to protect your digital assets.',
    icon: ServerIcon,
  },
  {
    title: 'IT & Tech Support',
    description: 'Professional technical support and troubleshooting for all your IT needs.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Workstation Setup',
    description: 'Professional workstation design and setup for optimal productivity.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Gadget Sales',
    description: 'Quality gadgets and tech equipment procurement services.',
    icon: ShoppingCartIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 