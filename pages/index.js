
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen px-6 py-16 md:px-24 lg:px-48 bg-white dark:bg-gray-900 text-gray-800 dark:text-white space-y-24">

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left space-y-6 md:w-2/3">
            <h1 className="text-5xl font-bold leading-tight">Jeremy Ackman</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              IT Leader • Strategic Thinker • Infrastructure Optimizer
            </p>
            <p className="text-lg max-w-xl">
              I bring over 15 years of experience leading infrastructure, security, and IT operations in fast-paced industries.
              My approach is people-first, outcome-focused, and grounded in practical strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/resume"
                className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
              >
                View Resume
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md font-medium transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="/headshot.jpg"
                alt="Jeremy Ackman"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Core Competencies</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-600 dark:text-gray-300">
            I bring deep expertise across leadership, infrastructure, and modern IT strategy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-4xl mx-auto text-sm text-gray-800 dark:text-white">
            <div>• Cloud Infrastructure</div>
            <div>• Team Leadership</div>
            <div>• Security & Compliance</div>
            <div>• Cost Optimization</div>
            <div>• IT Strategy</div>
            <div>• Infrastructure as Code</div>
            <div>• Vendor Management</div>
            <div>• Automation & Monitoring</div>
          </div>
        </section>

      </main>
    </Layout>
  )
}
