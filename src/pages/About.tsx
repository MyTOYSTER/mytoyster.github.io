import { Heart, Shield, Truck, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
            About Toyster
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Bringing joy and learning to children through quality toys since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Toyster was founded with a simple mission: to provide children with toys that not only entertain
            but also educate and inspire. We believe that play is essential for childhood development, and
            every toy should contribute to a child's growth.
          </p>
          <p className="text-lg text-muted-foreground">
            Over the years, we've carefully curated a collection of toys from trusted brands around the world,
            ensuring that every product meets our high standards for quality, safety, and educational value.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary text-primary-foreground mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Safety First</h3>
              <p className="text-muted-foreground">
                All toys are tested and certified to meet international safety standards
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-secondary text-secondary-foreground mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                We stand behind every product with our satisfaction guarantee
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-accent text-accent-foreground mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery to bring joy to your doorstep
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl border-2 shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary text-primary-foreground mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Curation</h3>
              <p className="text-muted-foreground">
                Hand-picked toys that promote learning and development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To make quality toys accessible to every child, fostering creativity, imagination,
                and learning through play.
              </p>
              <p className="text-muted-foreground">
                We're committed to sustainable practices, ethical sourcing, and supporting
                communities through our toys for charity program.
              </p>
            </div>
            
            <div className="bg-gradient-hero rounded-3xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-black">500,000+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-black">1,000+</div>
                  <div className="text-sm opacity-90">Toys Available</div>
                </div>
                <div>
                  <div className="text-4xl font-black">50+</div>
                  <div className="text-sm opacity-90">Trusted Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
