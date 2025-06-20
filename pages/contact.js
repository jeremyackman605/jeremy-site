import Layout from '../components/layout'


export default function Contact() {
  return (
    <Layout>
      <main className="min-h-screen px-6 py-16 md:px-24 lg:px-48 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
        <div className="max-w-xl mx-auto text-lg leading-relaxed space-y-6 text-center">
          <p>If you’d like to get in touch, I’d love to hear from you. I’m open to full-time opportunities, consulting, or collaborative projects in IT leadership, infrastructure strategy, or digital transformation.</p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:jeremy.ackman@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              jeremy.ackman@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong><br />
            <a href="https://www.linkedin.com/in/jeremy-ackman" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              linkedin.com/in/jeremy-ackman
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
