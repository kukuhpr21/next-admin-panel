'use client'

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Search Bar */}
                <div className="flex items-center flex-1 max-w-md">
                    <div className="relative w-full">
                        <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-4">
                    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                        <i className="ri-notification-3-line text-2xl"></i>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <button className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <i className="ri-user-line text-2xl"></i>
                        <span className="font-medium">Admin</span>
                    </button>
                </div>
            </div>
        </header>
    )
}