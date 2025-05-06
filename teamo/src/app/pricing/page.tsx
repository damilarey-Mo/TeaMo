'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

// Define pricing tiers
const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: { monthly: '$29', annually: '$290' },
    description: 'Everything necessary to get started with small projects.',
    features: [
      '5 active projects',
      'Up to 3 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start your trial',
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: { monthly: '$79', annually: '$790' },
    description: 'Perfect for growing teams and professional agencies.',
    features: [
      '15 active projects',
      'Up to 10 team members',
      '25GB storage',
      'Advanced analytics',
      'Priority email support',
      'API access',
      'Custom integrations',
    ],
    cta: 'Start your trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: { monthly: '$199', annually: '$1,990' },
    description: 'Dedicated support and enterprise features for large teams.',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      '100GB storage',
      'Advanced analytics with custom reports',
      '24/7 phone and email support',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Single sign-on (SSO)',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a plan to go live. Account plans unlock additional features.
          </p>
          <div className="relative mt-6 bg-white rounded-lg p-0.5 flex self-center sm:mt-8">
            <button
              type="button"
              className={`${
                !annual ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'
              } relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setAnnual(false)}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`${
                annual ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'
              } relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setAnnual(true)}
            >
              Annual billing
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`${
                tier.mostPopular
                  ? 'border-2 border-blue-500 shadow-xl'
                  : 'border border-gray-200'
              } rounded-lg shadow-sm divide-y divide-gray-200 bg-white`}
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                {tier.mostPopular && (
                  <p className="absolute top-0 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full">
                    Most popular
                  </p>
                )}
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {annual ? tier.price.annually : tier.price.monthly}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {annual ? '/year' : '/month'}
                  </span>
                </p>
                <Link href={tier.mostPopular ? '/auth/register' : tier.name === 'Enterprise' ? '/contact' : '/auth/register'}>
                  <button
                    className={`${
                      tier.mostPopular
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                  >
                    {tier.cta}
                  </button>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Can't find the answer you're looking for? Contact our{' '}
            <Link href="/contact" className="font-medium text-blue-600 hover:text-blue-500">
              customer support
            </Link>{' '}
            team.
          </p>
        </div>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {[
              {
                question: 'How do I upgrade my plan?',
                answer:
                  'You can upgrade your plan at any time from your account settings. Changes will be reflected immediately and you will be charged the prorated difference.',
              },
              {
                question: 'Can I cancel my subscription?',
                answer:
                  'Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period.',
              },
              {
                question: 'Do you offer discounts for non-profits?',
                answer:
                  'Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information.',
              },
              {
                question: 'Is there a free trial?',
                answer:
                  'Yes, all plans come with a 14-day free trial. No credit card required.',
              },
              {
                question: 'Can I change plans later?',
                answer:
                  'Yes, you can upgrade or downgrade your plan at any time. Changes to your billing will be prorated.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major credit cards including Visa, Mastercard, and American Express. We also support payment via PayPal and bank transfer for annual plans.',
              },
            ].map((faq, index) => (
              <div key={index}>
                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 