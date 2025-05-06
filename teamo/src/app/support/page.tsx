import Image from 'next/image';
import Link from 'next/link';

const supportServices = [
  {
    title: '24/7 Technical Support',
    description: 'Round-the-clock assistance for all your IT needs',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Remote Support',
    description: 'Quick and efficient remote assistance for immediate issues',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'On-Site Support',
    description: 'Expert technicians available for on-site assistance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Managed Services',
    description: 'Comprehensive IT management and monitoring',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
];

export default function SupportPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Support Services</h1>
          <p className="text-xl max-w-3xl">
            Our expert support team is here to help you with all your IT needs, ensuring your business runs smoothly and efficiently.
          </p>
        </div>
      </section>

      {/* Support Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Support?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our support team is available 24/7 to assist you with any technical issues or questions you may have.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="tel:+2341234567890"
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
              >
                Call Support: +234 123 456 7890
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium border border-blue-600 hover:bg-blue-50"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 