'use client';

import { motion } from 'framer-motion';
import { 
  BoltIcon, 
  UserGroupIcon, 
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Speed',
    description: 'Quick response times and efficient solutions.',
    icon: BoltIcon,
  },
  {
    title: 'Trust',
    description: 'Building long-term relationships based on reliability.',
    icon: UserGroupIcon,
  },
  {
    title: 'Expertise',
    description: 'Years of experience in tech solutions.',
    icon: ClockIcon,
  },
  {
    title: 'Affordability',
    description: 'Competitive pricing without compromising quality.',
    icon: CurrencyDollarIcon,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-primary">TeaMo</span>
            </h2>
            <p className="text-gray-600">
              Founded with a vision to provide exceptional IT solutions, TeaMo has grown from a family-run 
              business into a trusted name in Lagos's tech industry. Our journey is built on a foundation 
              of trust, innovation, and a commitment to excellence.
            </p>
            <p className="text-gray-600">
              We understand that technology is more than just tools—it's about enabling businesses and 
              individuals to achieve their goals. That's why we combine technical expertise with a 
              personal touch, ensuring every client receives solutions tailored to their unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 