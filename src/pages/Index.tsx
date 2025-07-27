import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Home, Users, Shield } from "lucide-react";
import heroImage from "/pics/outside5.jpg";
import livingRoomImage from "/pics/outside2.jpg";
import personalCareImage from "/pics/elderly1.jpg";

const Index = () => {
  return (
    <Layout> 
      <HeroBanner
        backgroundImage={heroImage}
        title="Welcome to Comfort Crest"
        subtitle="Professional adult family home providing compassionate care in a beautiful, comfortable environment"
        height="full"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-secondary font-semibold px-8 py-3">
            <Link to="/contact">Schedule a Visit</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-[#f6d170] hover:bg-white hover:text-primary font-semibold px-8 py-3">
            <Link to="/services">Learn More</Link>
          </Button>
        </div>
      </HeroBanner>

      {/* What is an Adult Family Home */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins">
                What is an Adult Family Home?
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                An Adult Family Home is a residential care facility that provides 
                personalized care and assistance to adults who need help with daily 
                activities but prefer a home-like environment over a large institutional setting.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                At Comfort Crest, we offer a warm, family-like atmosphere where residents 
                receive individualized attention, maintain their independence, and enjoy 
                meaningful relationships with our caring staff and fellow residents.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="fade-in-right">
              
            <iframe
              className="rounded-lg shadow-elegant w-full h-96 md:h-[500px]"
              src="https://www.youtube-nocookie.com/embed/HIePEzOf0kY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
              
            </iframe>

            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins fade-in-up">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up delay-200">
              To provide exceptional, compassionate care that honors the dignity and 
              independence of each resident while creating a true home environment 
              where families feel confident and loved ones thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  Professional, personalized care delivered with genuine warmth and respect.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Home Environment</h3>
                <p className="text-muted-foreground">
                  Beautiful, comfortable living spaces that truly feel like home.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-400">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Family Focused</h3>
                <p className="text-muted-foreground">
                  Small, intimate setting that promotes meaningful relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-600">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Professional Excellence</h3>
                <p className="text-muted-foreground">
                  Licensed, trained staff committed to the highest standards of care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left order-2 lg:order-1">
              <img
                src={personalCareImage}
                alt="Professional care being provided"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="fade-in-right order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins">
                Our Story
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Comfort Crest was founded on the belief that everyone deserves to age 
                with dignity in a place that feels like home. Our experienced team 
                understands that choosing care for a loved one is one of life's most 
                important decisions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We've created a beautiful environment where residents receive 
                personalized attention while maintaining their independence and 
                connections to the things that matter most to them.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/about">Read Our Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins fade-in-up">
              Our Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto fade-in-up delay-200">
              Comprehensive care services designed to support independence 
              while providing assistance where needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Personal Care Assistance",
              "Medication Management", 
              "Meal Preparation",
              "Companionship & Social Interaction",
              "Light Housekeeping & Errands",
              "Transportation Assistance",
              "Respite Care",
              "Specialized Dementia Care"
            ].map((service, index) => (
              <div 
                key={index}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-medium text-center">{service}</p>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up delay-800">
            <Button asChild variant="outline" className="border-white text-[#f6d170] hover:bg-white hover:text-primary font-semibold px-8 py-3">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up">
            Ready to Experience Comfort Crest?
          </h2>
          <p className="text-xl mb-8 fade-in-up delay-200">
            Schedule a personal tour and see why families choose Comfort Crest for their loved ones.
          </p>
          <Button asChild className="btn-primary font-semibold px-8 py-3 fade-in-up delay-400">
            <Link to="/contact">Schedule Your Visit Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
