import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mike Johnson',
    position: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sarah Williams',
    position: 'Head of Customer Success',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
];

const values = [
  {
    title: 'Expertise',
    description: 'Our team combines years of experience with cutting-edge knowledge to deliver exceptional IT solutions.',
    icon: '👨‍💻',
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve, constantly exploring new technologies and approaches to solve complex problems.',
    icon: '💡',
  },
  {
    title: 'Customer Focus',
    description: 'Your success is our priority. We work closely with you to understand and meet your specific needs.',
    icon: '🤝',
  },
  {
    title: 'Reliability',
    description: 'We provide consistent, dependable service you can count on, day in and day out.',
    icon: '🔒',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About TeaMo</h1>
          <p className="text-xl max-w-3xl">
            For over 20 years, TeaMo has provided excellence in IT support, advice, and service. The best technology solutions are designed for purpose.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                TeaMo was founded with a simple mission: to provide exceptional IT services that help businesses thrive in the digital age. Over the years, we've grown from a small team of passionate technologists to a leading provider of IT solutions.
              </p>
              <p className="text-gray-600">
                Our success is built on a foundation of technical expertise, customer focus, and a commitment to innovation. We believe in building long-term relationships with our clients, working together to achieve their business goals through technology.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 