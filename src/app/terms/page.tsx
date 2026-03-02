import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Amarachi Investment Company Ltd",
  description: "Terms of service for Amarachi Investment Company Ltd. Please read these terms carefully before using our services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-dark mb-8 font-heading">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <p className="mb-6">
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully 
            before using the website or services of Amarachi Investment Company Ltd 
            (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By accessing or using our website and services, you agree to be bound by these 
            Terms. If you disagree with any part of the terms, you may not access our 
            website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            2. Use of Services
          </h2>
          <p className="mb-4">
            Our services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Civil engineering works</li>
            <li>Building construction</li>
            <li>Transportation and logistics</li>
            <li>Equipment and machinery supply</li>
            <li>Project support and mobilization</li>
          </ul>
          <p className="mb-6">
            All services are subject to separate contracts and agreements that will be 
            provided upon engagement.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            3. Quotes and Estimates
          </h2>
          <p className="mb-6">
            Any quotes or estimates provided through our website or communication channels 
            are subject to change based on detailed project requirements. Final pricing 
            will be agreed upon in a formal contract.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            4. Equipment Hire Terms
          </h2>
          <p className="mb-4">
            For equipment rental services:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Minimum hire periods may apply</li>
            <li>Equipment must be used by qualified operators</li>
            <li>Damages caused by misuse are the hirer&apos;s responsibility</li>
            <li>Cancellation policies will be specified in the hire agreement</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            5. Intellectual Property
          </h2>
          <p className="mb-6">
            The content, organization, graphics, design, and other materials related to 
            our website are protected under applicable copyrights, trademarks, and other 
            proprietary rights. Copying, redistributing, use or publication of any such 
            matters or any part of the website is prohibited without our express permission.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            6. Limitation of Liability
          </h2>
          <p className="mb-6">
            In no event shall Amarachi Investment Company Ltd, nor its directors, employees, 
            partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, 
            special, consequential or punitive damages arising out of or relating to your use 
            of our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            7. Governing Law
          </h2>
          <p className="mb-6">
            These Terms shall be governed and construed in accordance with the laws of 
            Tanzania, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            8. Changes to Terms
          </h2>
          <p className="mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms 
            at any time. We will provide notice of any significant changes by updating the 
            &quot;Last updated&quot; date at the top of this page.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4 font-heading">
            9. Contact Us
          </h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us at:
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
