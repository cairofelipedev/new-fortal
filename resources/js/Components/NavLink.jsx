import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'p-3 rounded-lg w-full inline-flex items-center border-b-2 text-sm hover:text-cyan-400 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-white text-blue-900 border-gray-300 border-r-2 focus:border-indigo-100 rounded-full'
                    : 'border-transparent text-gray-200 hover:text-white hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
