import Image from 'next/image';

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
    description: 'Global technology leader in software and cloud services',
  },
  {
    name: 'Fortinet',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
    description: 'Leading provider of cybersecurity solutions',
  },
  {
    name: 'Druva',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
    description: 'Cloud data protection and management solutions',
  },
  {
    name: 'CodeTwo',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
    description: 'Email migration and management solutions',
  },
  {
    name: 'KnowBe4',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
    description: 'Security awareness training platform',
  },
];

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl max-w-3xl">
            We partner with industry leaders to provide you with the best technology solutions and services.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Are you a technology provider interested in partnering with TeaMo? We're always looking for innovative solutions to offer our clients.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 