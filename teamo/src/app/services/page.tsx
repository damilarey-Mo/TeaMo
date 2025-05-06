import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Storage',
    description: 'IT Storage Solutions using on-site, off-site & cloud technologies',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Continuity',
    description: 'Comprehensive Continuity Processes for Rapid Disaster Recovery',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Security',
    description: 'We provide Secure Networks to protect you against cyber threats',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Networks',
    description: 'Connecting your team and devices together with the outside world',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Communication',
    description: 'Collaborative work spaces connecting your team & clients with each other',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cloud Computing',
    description: 'You can leverage the commercial value of the Cloud today',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            We are experts in data & network management, IT infrastructure management, backup and disaster recovery, communication systems, and security management.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link
                    href={`/services/${service.title.toLowerCase()}`}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Care Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Expert Care Plans provide IT Solutions for your business</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              If you are embarking on a new service, upgrading your network, or rolling out new computers, communication systems or mobile devices, TeaMo can manage it all for you.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 