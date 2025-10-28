const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Your privacy is important to us
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Toyster. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit 
              our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Identity Data: name, username or similar identifier</li>
              <li>Contact Data: email address, telephone numbers, billing and delivery addresses</li>
              <li>Transaction Data: details about payments and products you have purchased from us</li>
              <li>Technical Data: internet protocol (IP) address, browser type and version, time zone setting</li>
              <li>Usage Data: information about how you use our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use 
              your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To process and deliver your orders</li>
              <li>To manage our relationship with you</li>
              <li>To improve our website, products/services, and customer experience</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To protect our business and website from fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit 
              access to your personal data to those employees, agents, contractors and other third parties 
              who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies to distinguish you from other users. This helps us to provide you 
              with a good experience when you browse our website and also allows us to improve our site. 
              You can set your browser to refuse all or some browser cookies, or to alert you when websites 
              set or access cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may include links to third-party websites, plug-ins and applications. Clicking on 
              those links or enabling those connections may allow third parties to collect or share data about 
              you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              Email: privacy@toyster.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
