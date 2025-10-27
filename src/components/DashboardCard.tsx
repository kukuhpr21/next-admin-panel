interface DashboardCardProps {
    title: string
    value: string | number
    icon: string
    trend?: string
    trendUp?: boolean
}

export default function DashboardCard({
    title,
    value,
    icon,
    trend,
    trendUp
}: DashboardCardProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>
                    <p className="text-3xl font-bold mt-2">{value}</p>
                    {trend && (
                        <p className={`text-sm mt-2 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                            {trend}
                        </p>
                    )}
                </div>
                <div className="bg-blue-100 p-4 rounded-full">
                    <i className={`${icon} text-4xl text-blue-600`}></i>
                </div>
            </div>
        </div>
    )
}