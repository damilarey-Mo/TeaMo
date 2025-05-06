import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    title: 'AI Policies at TeaMo: Shaping Security and Ethical AI Usage',
    date: 'March 21, 2025',
    excerpt: 'Why Microsoft Copilot Leads Our AI Strategy for Client Environments In today\'s rapidly evolving digital landscape...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The Power of Scheduling Polls: Transforming How You Organise Meetings',
    date: 'March 21, 2025',
    excerpt: 'In our daily interactions with clients at TeaMo, we\'ve noticed something surprising: many organisations are still unaware of how...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Enhancing Cybersecurity in the Modern Workplace',
    date: 'March 20, 2025',
    excerpt: 'As remote work becomes increasingly common, organizations must adapt their cybersecurity strategies to protect...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cloud Migration Best Practices for 2025',
    date: 'March 19, 2025',
    excerpt: 'The cloud computing landscape continues to evolve, and organizations must stay ahead of the curve to maximize...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Latest News</h1>
          <p className="text-xl max-w-3xl">
            Stay updated with the latest trends, insights, and announcements from TeaMo.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="text-xl font-bold mb-2 mt-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay informed about the latest technology trends, company news, and special offers.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 