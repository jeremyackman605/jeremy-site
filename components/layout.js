import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/headshot.jpg"
                alt="Jeremy Ackman"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Jeremy Ackman</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:underline">Who I Am</Link>
            <Link href="/experience" className="text-gray-700 dark:text-gray-200 hover:underline">Experience</Link>
            <Link href="/resume" className="text-gray-700 dark:text-gray-200 hover:underline">Resume</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
