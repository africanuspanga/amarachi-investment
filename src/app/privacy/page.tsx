import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Amarachi Investment Company Ltd",
  description: "Privacy policy for Amarachi Investment Company Ltd. Learn how we protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-dark mb-8 font-heading">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <p className="mb-6">
            Amarachi Investment Company Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting 
            your privacy. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Fill out our contact form</li>
            <li>Request a quote</li>
            <li>Contact us via email or phone</li>
            <li>Subscribe to our communications</li>
          </ul>
          <p className="mb-6">
            This information may include your name, email address, phone number, company name, 
            and project details.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process your quote requests</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            3. Information Sharing
          </h2>
          <p className="mb-6">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information with trusted service providers who assist us 
            in operating our website and conducting our business, subject to confidentiality 
            agreements.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            4. Data Security
          </h2>
          <p className="mb-6">
            We implement appropriate technical and organizational security measures to 
            protect your personal information against unauthorized access, alteration, 
            disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            5. Your Rights
          </h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request restriction of processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            6. Contact Us
          </h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-2">
            <strong>Amarachi Investment Company Ltd</strong><br />
            Mbezi Beach, Plot No. 2346 Kilongawima<br />
            P.O. Box 20914, Dar es Salaam, Tanzania<br />
            Email: amarachiinvestmentcoltd@gmail.com<br />
            Phone: 0713 057706
          </p>
        </div>
      </div>
    </div>
  );
}
