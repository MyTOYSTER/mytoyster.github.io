const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Toyster's website and services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily access the materials (information or software) on 
              Toyster's website for personal, non-commercial transitory viewing only. This is the grant 
              of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software on Toyster's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate product descriptions and pricing. However, we do not warrant 
              that product descriptions, colors, pricing, or other content available on the website is 
              accurate, complete, reliable, current, or error-free. If a product offered by Toyster is 
              not as described, your sole remedy is to return it in unused condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Orders and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you place an order, you agree to provide current, complete, and accurate purchase and 
              account information. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Refuse any order you place with us</li>
              <li>Limit or cancel quantities purchased per person, household, or order</li>
              <li>Refuse service to anyone for any reason at any time</li>
              <li>Require additional verification before accepting any order</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Shipping and Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will arrange for shipment of the products to you. Please check the individual product 
              pages for specific delivery options and fees. Title and risk of loss pass to you upon our 
              delivery to the carrier. We are not responsible for delays in delivery caused by carriers 
              or other third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Returns and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              We accept returns within 30 days of delivery for most items. Items must be unused, in their 
              original packaging, and in the same condition as received. Some items cannot be returned for 
              hygiene or safety reasons. Refunds will be issued to the original payment method within 
              7-10 business days of receiving the return.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for safeguarding your password and for all activities that occur under 
              your account. You agree to notify us immediately of any unauthorized access or use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website and its entire contents, features, and functionality (including but not limited 
              to all information, software, text, displays, images, video, and audio) are owned by Toyster, 
              its licensors, or other providers of such material and are protected by copyright, trademark, 
              and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Toyster shall not be liable for any indirect, 
              incidental, special, consequential or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
              intangible losses resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify you of any changes 
              by posting the new terms on this page and updating the "Last updated" date. Your continued 
              use of the service after any changes indicates your acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about the Terms of Service should be sent to us at:
              <br />
              Email: support@toyster.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: 123 Toy Street, Funville, CA 90210
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
