import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Sample project data
const projects = [
  {
    id: 1,
    name: 'Cloud Migration',
    description: 'Migrate on-premise infrastructure to cloud services',
    status: 'In Progress',
    progress: 65,
    members: 4,
    tasks: { completed: 18, total: 28 },
    deadline: 'Sep 30, 2023',
  },
  {
    id: 2,
    name: 'Website Redesign',
    description: 'Redesign corporate website with modern UI/UX',
    status: 'Planning',
    progress: 20,
    members: 3,
    tasks: { completed: 5, total: 24 },
    deadline: 'Oct 15, 2023',
  },
  {
    id: 3,
    name: 'Network Security',
    description: 'Implement advanced security measures across network',
    status: 'Completed',
    progress: 100,
    members: 2,
    tasks: { completed: 12, total: 12 },
    deadline: 'Aug 10, 2023',
  },
  {
    id: 4,
    name: 'Database Optimization',
    description: 'Optimize database performance and infrastructure',
    status: 'In Progress',
    progress: 45,
    members: 3,
    tasks: { completed: 9, total: 20 },
    deadline: 'Sep 20, 2023',
  },
  {
    id: 5,
    name: 'Mobile App Development',
    description: 'Develop cross-platform mobile application',
    status: 'Planning',
    progress: 10,
    members: 5,
    tasks: { completed: 2, total: 35 },
    deadline: 'Nov 30, 2023',
  },
];

// Helper function to get background color based on status
function getStatusColor(status: string) {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Planning':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function Projects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>

      {/* Project filters */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative rounded-md w-full sm:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="block w-full pr-10 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <select
            className="block w-full sm:w-48 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            defaultValue="all"
          >
            <option value="all">All Statuses</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="planning">Planning</option>
          </select>
          <select
            className="block w-full sm:w-48 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            defaultValue="newest"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="deadline">Deadline</option>
            <option value="progress">Progress</option>
          </select>
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">{project.description}</p>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Team Members</p>
                  <p className="font-medium">{project.members} members</p>
                </div>
                <div>
                  <p className="text-gray-500">Tasks</p>
                  <p className="font-medium">
                    {project.tasks.completed}/{project.tasks.total} completed
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Deadline</p>
                  <p className="font-medium">{project.deadline}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-5 py-3">
              <Link
                href={`/dashboard/projects/${project.id}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 