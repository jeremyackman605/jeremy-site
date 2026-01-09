// pages/resume-review.js
import Head from "next/head";
import Link from "next/link";
const PAYMENT_URL =
 process.env.NEXT_PUBLIC_RESUME_REVIEW_PAYMENT_URL || "https://buy.stripe.com/REPLACE_ME";
const INTAKE_URL =
 process.env.NEXT_PUBLIC_RESUME_REVIEW_INTAKE_URL || "https://forms.gle/REPLACE_ME";
export default function ResumeReviewPage() {
 return (
<>
<Head>
<title>AI-Enhanced Resume & Job Alignment Review | TurtleSound</title>
<meta
         name="description"
         content="Actionable resume feedback tailored to your target role—powered by AI and validated by real IT leadership experience."
       />
<meta name="robots" content="index,follow" />
</Head>
<main style={styles.page}>
<header style={styles.header}>
<div style={styles.topRow}>
<Link href="/" style={styles.backLink}>
             ← Back to Home
</Link>
<span style={styles.badge}>Early Access</span>
</div>
<h1 style={styles.h1}>AI-Enhanced Resume &amp; Job Alignment Review</h1>
<p style={styles.subhead}>
           Get clear, actionable feedback on your resume—aligned to the job you want—using AI plus real-world IT
           leadership experience.
</p>
<section style={styles.heroCard}>
<div style={styles.priceBlock}>
<div style={styles.price}>$99</div>
<div style={styles.priceNote}>One-time • limited slots</div>
</div>
<div style={styles.ctaBlock}>
<a href={PAYMENT_URL} style={{ ...styles.button, ...styles.primary }}>
               Book My Review
</a>
<p style={styles.microcopy}>
               After payment, click the confirmation-page button to submit your resume + job posting.
</p>
<a href={INTAKE_URL} style={styles.altLink}>
               Already paid? Submit your resume →
</a>
</div>
</section>
</header>
<section style={styles.section}>
<h2 style={styles.h2}>What you get</h2>
<ul style={styles.list}>
<li style={styles.li}>ATS + human readability review</li>
<li style={styles.li}>
             Job description alignment for <b>1 target role</b>
</li>
<li style={styles.li}>Keyword/skills gap list + recommended fixes</li>
<li style={styles.li}>
             Rewritten bullet examples using <b>Problem → Action → Impact</b>
</li>
<li style={styles.li}>Optional 5–10 minute Loom walkthrough (upon request)</li>
</ul>
</section>
<section style={styles.section}>
<h2 style={styles.h2}>How it works</h2>
<ol style={styles.list}>
<li style={styles.li}>Purchase the review using Stripe</li>
<li style={styles.li}>On the Stripe confirmation page, click “Submit My Resume”</li>
<li style={styles.li}>
             You’ll receive your deliverables in <b>2–3 business days</b>
</li>
</ol>
<div style={styles.callout}>
<b>Tip:</b> If you don’t have a job link yet, submit a role title + 2–3 sample postings and I’ll align to
           the closest match.
</div>
</section>
<section style={styles.section}>
<h2 style={styles.h2}>FAQ</h2>
<details style={styles.details}>
<summary style={styles.summary}>Do you rewrite my entire resume?</summary>
<p style={styles.p}>
             Not in this package. You’ll get specific rewrite examples, targeted recommendations, and a clear plan. If
             you want a full rewrite, I can quote that after the review.
</p>
</details>
<details style={styles.details}>
<summary style={styles.summary}>What roles is this best for?</summary>
<p style={styles.p}>
             Best for IT and technical roles—leadership, infrastructure, service delivery, sysadmin, and
             security-adjacent positions.
</p>
</details>
<details style={styles.details}>
<summary style={styles.summary}>Can you align my resume to multiple jobs?</summary>
<p style={styles.p}>
             Yes. Start with one role for clarity, then add additional job alignments after your first delivery.
</p>
</details>
<details style={styles.details}>
<summary style={styles.summary}>What file types do you accept?</summary>
<p style={styles.p}>PDF or DOCX are ideal. If you only have a Google Doc, export to PDF or DOCX first.</p>
</details>
<details style={styles.details}>
<summary style={styles.summary}>How do I submit my resume after paying?</summary>
<p style={styles.p}>
             Stripe will show a confirmation page after payment. Add a button there that links to your intake form. If
             you ever need it, the intake form link is also on this page.
</p>
</details>
</section>
<footer style={styles.footer}>
<div style={styles.footerCard}>
<h3 style={styles.h3}>Ready to start?</h3>
<p style={styles.p}>
             Book the review, then submit your resume and job posting. I’ll take it from there.
</p>
<div style={styles.footerButtons}>
<a href={PAYMENT_URL} style={{ ...styles.button, ...styles.primary }}>
               Book My Review
</a>
<a href={INTAKE_URL} style={{ ...styles.button, ...styles.secondary }}>
               Submit Resume (after payment)
</a>
</div>
<p style={styles.tinyNote}>
             Questions? Email me via the Contact page on TurtleSound and include “Resume Review” in the subject.
</p>
</div>
</footer>
</main>
</>
 );
}
const styles = {
page: {
 maxWidth: 980,
 margin: "0 auto",
 padding: "44px 20px 70px",
 fontFamily:
   'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
 lineHeight: 1.55,
 color: "#e5e7eb", // light text
},
 header: { marginBottom: 26 },
 topRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" },
 backLink: { color: "#111", opacity: 0.85, textDecoration: "underline" },
 badge: {
   fontSize: 12,
   fontWeight: 800,
   letterSpacing: 0.6,
   textTransform: "uppercase",
   border: "1px solid rgba(0,0,0,0.16)",
   borderRadius: 999,
   padding: "6px 10px",
   background: "rgba(255,255,255,0.04)",
 },
 h1: { margin: "14px 0 10px", fontSize: 40, lineHeight: 1.12 },
 subhead: { margin: 0, fontSize: 18, opacity: 0.9, maxWidth: 820 },
 heroCard: {
   marginTop: 18,
   border: "1px solid rgba(0,0,0,0.14)",
   borderRadius: 14,
   padding: 18,
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   gap: 18,
   flexWrap: "wrap",
   background: "rgba(255,255,255,0.04)",
 },
 priceBlock: { minWidth: 180 },
 price: { fontSize: 34, fontWeight: 900, lineHeight: 1 },
 priceNote: { fontSize: 13, opacity: 0.75, marginTop: 6 },
 ctaBlock: { display: "flex", flexDirection: "column", gap: 10, minWidth: 300, flex: 1 },
 button: {
   display: "inline-block",
   padding: "12px 16px",
   borderRadius: 12,
   fontWeight: 800,
   textDecoration: "none",
   textAlign: "center",
 },
 primary: { background: "#111", color: "#fff" },
 secondary: { background: "transparent", color: "#111", border: "1px solid rgba(0,0,0,0.22)" },
 microcopy: { margin: 0, fontSize: 13, opacity: 0.75 },
 altLink: { color: "#111", opacity: 0.9, textDecoration: "underline", fontSize: 14 },
 section: { marginTop: 28 },
 h2: { margin: "0 0 10px", fontSize: 22 },
 h3: { margin: "0 0 8px", fontSize: 18 },
 list: { margin: 0, paddingLeft: 20 },
 li: { marginBottom: 8 },
 p: { margin: "8px 0 0", maxWidth: 880 },
 callout: {
   marginTop: 14,
   borderLeft: "4px solid rgba(0,0,0,0.25)",
   padding: "10px 12px",
   borderRadius: 12,
   background: "rgba(255,255,255,0.04)",
 },
 details: {
   border: "1px solid rgba(0,0,0,0.14)",
   borderRadius: 14,
   padding: 12,
   marginBottom: 10,
   background: "#fff",
 },
 summary: { cursor: "pointer", fontWeight: 800 },
 footer: { marginTop: 34 },
 footerCard: {
   border: "1px solid rgba(0,0,0,0.14)",
   borderRadius: 14,
   padding: 18,
   background: "rgba(255,255,255,0.04)",
 },
 footerButtons: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 },
 tinyNote: { marginTop: 14, fontSize: 12.5, opacity: 0.75 },
};
