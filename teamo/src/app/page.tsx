import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowPathIcon, 
  CloudArrowUpIcon, 
  LockClosedIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Cloud Storage',
    description: 'Store your files securely in the cloud with advanced encryption and easy access from anywhere.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Data Backup',
    description: 'Automatic backups ensure your important data is never lost and can be quickly restored when needed.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Security Management',
    description: 'Enterprise-grade security protocols protect your information from unauthorized access and threats.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'API Integration',
    description: 'Connect seamlessly with your existing tools and workflows through our comprehensive API.',
    icon: ServerIcon,
  },
  {
    name: 'Access Control',
    description: 'Fine-grained permissions allow you to control exactly who can access your resources and when.',
    icon: LockClosedIcon,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain insights into your data and usage patterns with detailed analytics and reporting tools.',
    icon: ChartBarIcon,
  },
];

const testimonials = [
  {
    content: "TeaMo has completely transformed how our team manages projects. The intuitive interface and powerful features have made collaboration seamless.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
  },
  {
    content: "We've tried dozens of platforms before finding TeaMo. Nothing else comes close to its combination of ease of use and powerful capabilities.",
    author: "Michael Chen",
    role: "Product Manager at Innovate Inc.",
  },
  {
    content: "The customer support at TeaMo is exceptional. Any time we've had questions, their team has been quick to respond with helpful solutions.",
    author: "Jessica Williams",
    role: "Operations Director at GlobalFirm",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Cloud Management Made Simple
              </h1>
              <p className="text-xl mb-8">
                TeaMo provides powerful IT solutions that help businesses manage their data, networks, and security effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/register"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/pricing"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Powerful Features for Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools you need to manage your IT infrastructure efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md text-blue-600 mb-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about TeaMo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <span className="text-lg font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that use TeaMo to streamline their IT operations and enhance productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-12 text-center text-gray-900">Trusted by Leading Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {['Microsoft', 'Fortinet', 'Druva', 'CodeTwo'].map((partner, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="relative w-32 h-32">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80"
                    alt={partner}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
                    <p className="font-bold text-gray-800">{partner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
