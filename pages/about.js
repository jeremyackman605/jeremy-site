
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <main className="min-h-screen px-6 py-16 md:px-24 lg:px-48 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Who I Am</h1>
        <div className="flex justify-center mb-10">
  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-md">
    <img
      src="/headshot.jpg"
      alt="Jeremy Ackman"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>Throughout my career, I’ve been recognized as an innovative, adaptable, and strategic IT Manager with over a decade of experience delivering high-impact technology solutions that align IT with business goals.</p>
          <p>I specialize in optimizing cloud infrastructure, streamlining complex IT operations, and implementing cost-saving initiatives that drive efficiency without compromising performance or security. My leadership has contributed to measurable wins across industries including FinTech, education, and enterprise environments.</p>
          <p>I’ve led multi-site network operations, integrated IAM and SSO platforms, deployed automation through tools like PDQ and Rundeck, and architected cloud-first solutions to support global teams. I’ve also driven initiatives that reduced telecom and infrastructure costs by over 60%, improved cybersecurity posture, and eliminated technical debt through proactive planning and execution.</p>
          <p>Beyond the technical scope, I believe in creating environments where IT professionals feel trusted, supported, and empowered to grow. I lead with clarity and empathy, fostering team cultures built on accountability, innovation, and continuous learning.</p>
          <p>I’m passionate about building IT teams that don’t just “keep the lights on,” but actively drive value, efficiency, and transformation across the business. I’m currently exploring new leadership opportunities where I can bridge technology and strategy while mentoring the next generation of IT talent.</p>
        </div>
      </main>
    </Layout>
  );
}
