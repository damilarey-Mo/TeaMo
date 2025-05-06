import { 
  UsersIcon, 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Sample data for the dashboard
const stats = [
  { name: 'Total Projects', stat: '12', icon: UsersIcon, change: '+8%', changeType: 'increase' },
  { name: 'Monthly Revenue', stat: '$3,200', icon: CurrencyDollarIcon, change: '+5.4%', changeType: 'increase' },
  { name: 'Conversion Rate', stat: '24.3%', icon: ArrowTrendingUpIcon, change: '+2.1%', changeType: 'increase' },
  { name: 'Avg. Response Time', stat: '1.2h', icon: ClockIcon, change: '-0.5h', changeType: 'decrease' },
];

// Sample recent activities
const activities = [
  { id: 1, user: 'Alex Johnson', action: 'created a new project', time: '2 hours ago', project: 'Cloud Migration' },
  { id: 2, user: 'Sarah Williams', action: 'completed a task', time: '4 hours ago', project: 'Website Redesign' },
  { id: 3, user: 'Michael Brown', action: 'added a comment', time: '6 hours ago', project: 'Database Optimization' },
  { id: 4, user: 'Emily Davis', action: 'uploaded a file', time: '8 hours ago', project: 'Network Security' },
];

// Sample upcoming tasks
const tasks = [
  { id: 1, title: 'Review project proposal', due: 'Today', priority: 'High', project: 'Cloud Migration' },
  { id: 2, title: 'Finalize design mockups', due: 'Tomorrow', priority: 'Medium', project: 'Website Redesign' },
  { id: 3, title: 'Update server configurations', due: 'In 2 days', priority: 'High', project: 'Database Optimization' },
  { id: 4, title: 'Security audit', due: 'Next week', priority: 'Low', project: 'Network Security' },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.stat}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span
                  className={
                    item.changeType === 'increase'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {item.change}
                </span>{' '}
                <span className="text-gray-500">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity and Tasks */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-5">
            <ul className="divide-y divide-gray-200">
              {activities.map((activity) => (
                <li key={activity.id} className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{activity.user}</h3>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {activity.action} on <span className="font-medium text-gray-900">{activity.project}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/dashboard/activity" 
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View all
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Tasks</h2>
          </div>
          <div className="p-5">
            <ul className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <li key={task.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Due: {task.due} • {task.project}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${task.priority === 'High' ? 'bg-red-100 text-red-800' : 
                            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/dashboard/tasks" 
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 