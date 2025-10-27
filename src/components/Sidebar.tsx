'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
    { name: 'Dashboard', href: '/', icon: 'ri-dashboard-line' },
    { name: 'Users', href: '/users', icon: 'ri-user-line' },
    { name: 'Reports', href: '/reports', icon: 'ri-file-list-line' },
    { name: 'Analytics', href: '/analytics', icon: 'ri-bar-chart-line' },
    { name: 'Settings', href: '/settings', icon: 'ri-settings-3-line' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-gray-800 text-white">
            <div className="p-6">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>

            <nav className="mt-6">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-6 py-3 hover:bg-gray-700 transition-colors ${isActive ? 'bg-gray-700 border-l-4 border-blue-500' : ''
                                }`}
                        >
                            <i className={`${item.icon} text-xl mr-3`}></i>
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}