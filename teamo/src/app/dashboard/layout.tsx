import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon, 
  QuestionMarkCircleIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <Link href="/dashboard" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="TeaMo Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <Link href="/dashboard" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-600 bg-blue-50">
                <HomeIcon className="mr-3 h-6 w-6" aria-hidden="true" />
                Dashboard
              </Link>
              <Link href="/dashboard/projects" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <UserGroupIcon className="mr-3 h-6 w-6" aria-hidden="true" />
                Projects
              </Link>
              <Link href="/dashboard/analytics" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <ChartBarIcon className="mr-3 h-6 w-6" aria-hidden="true" />
                Analytics
              </Link>
              <Link href="/dashboard/settings" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <CogIcon className="mr-3 h-6 w-6" aria-hidden="true" />
                Settings
              </Link>
              <Link href="/dashboard/support" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <QuestionMarkCircleIcon className="mr-3 h-6 w-6" aria-hidden="true" />
                Support
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <header className="w-full">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <div className="flex-1 flex justify-between px-4 sm:px-6">
              <div className="flex-1 flex"></div>
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <button type="button" className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="flex items-center">
                  <div className="ml-3">
                    <Link href="/dashboard/profile" className="group flex items-center">
                      <UserCircleIcon className="h-8 w-8 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">User Name</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 