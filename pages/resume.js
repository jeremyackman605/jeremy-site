import Layout from '../components/layout'
import Link from 'next/link'

export default function Resume() {
  return (
    <Layout>
      <main className="min-h-screen px-6 py-16 md:px-24 lg:px-48 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <section className="max-w-3xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl font-bold">Resume</h1>
          <p className="text-lg leading-relaxed">
            I’m a strategic, people-first IT Manager with 15+ years of experience leading infrastructure,
            security, and operations across fast-paced environments—from FinTech to education. I thrive at
            the intersection of technology and leadership, where clarity, efficiency, and impact matter most.
          </p>
          <p className="text-lg leading-relaxed">
            Whether modernizing global cloud infrastructure, driving cost-saving initiatives, or mentoring
            high-performing teams, I bring a proactive mindset and a calm, solutions-focused approach to every challenge.
            I’ve helped organizations streamline IT operations, secure systems, and scale intelligently—all while
            keeping people at the center of the process.
          </p>
          <p className="text-lg font-semibold">
            Curious how I’ve reduced expenses by 66%, cleared massive security backlogs, and led technical transformations across complex environments?
          </p>

          <Link
            href="/ackman-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-4 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            📄 Download My Resume
          </Link>
        </section>
      </main>
    </Layout>
  )
}
