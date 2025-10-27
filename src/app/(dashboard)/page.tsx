import DashboardCard from '@/components/DashboardCard'

export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard
                    title="Total Users"
                    value="1,234"
                    icon="ri-user-line"
                    trend="+12% from last month"
                    trendUp={true}
                />
                <DashboardCard
                    title="Total Orders"
                    value="567"
                    icon="ri-shopping-cart-line"
                    trend="+8% from last month"
                    trendUp={true}
                />
                <DashboardCard
                    title="Revenue"
                    value="$12,345"
                    icon="ri-money-dollar-circle-line"
                    trend="-3% from last month"
                    trendUp={false}
                />
                <DashboardCard
                    title="Growth"
                    value="23%"
                    icon="ri-line-chart-line"
                    trend="+5% from last month"
                    trendUp={true}
                />
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-medium">New user registered</p>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                            <span className="text-sm text-blue-600">View</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}