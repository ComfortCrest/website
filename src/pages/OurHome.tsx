import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import lakeImage from "@/assets/lake-access.jpg";

const OurHome = () => {
  return (
    <Layout>
      <HeroBanner
        backgroundImage={heroImage}
        title="Our Beautiful Home"
        subtitle="A warm, welcoming environment designed for comfort, safety, and quality of life"
      >
        <Button asChild className="btn-secondary font-semibold px-8 py-3">
          <Link to="/contact">Schedule a Tour</Link>
        </Button>
      </HeroBanner>

      {/* Home Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins">
                Welcome to Our Home
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Our facility is more than just a place to live—it's a true home where 
                residents feel comfortable, secure, and valued. Every detail has been 
                carefully considered to create an environment that promotes well-being 
                and happiness.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                From the moment you step through our doors, you'll feel the warmth 
                and care that makes Comfort Crest special. Our home combines modern 
                amenities with a cozy, residential atmosphere.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/services">Learn About Our Care</Link>
              </Button>
            </div>
            <div className="fade-in-right">
              <img
                src={livingRoomImage}
                alt="Comfortable living room"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Home Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins fade-in-up">
              Home Features & Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
              Our thoughtfully designed home offers modern comfort and accessibility 
              in a beautiful, peaceful setting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">❄️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Climate Control</h3>
                <p className="text-muted-foreground">
                  Central air conditioning and heating throughout the home for 
                  year-round comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">♿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Accessibility</h3>
                <p className="text-muted-foreground">
                  Wheelchair accessible design with ramps, wide doorways, and 
                  accessible bathrooms throughout.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-400">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛏️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Private Rooms</h3>
                <p className="text-muted-foreground">
                  Comfortable private and semi-private rooms with personal 
                  space for belongings and privacy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-600">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Dining Areas</h3>
                <p className="text-muted-foreground">
                  Spacious dining room and comfortable seating areas for 
                  meals and social gatherings.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-800">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Garden Areas</h3>
                <p className="text-muted-foreground">
                  Beautiful outdoor spaces with gardens and seating areas 
                  for relaxation and fresh air.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-1000">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Safety Features</h3>
                <p className="text-muted-foreground">
                  24/7 monitoring systems, emergency call buttons, and 
                  secure entry for peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lake Access Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left order-2 lg:order-1">
              <img
                src={lakeImage}
                alt="Beautiful lake access"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="fade-in-right order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins">
                Lakeside Living
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                One of our most cherished features is our beautiful lake access. 
                Residents can enjoy peaceful moments by the water, watch wildlife, 
                and participate in gentle outdoor activities.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The serene lake environment provides a therapeutic setting that 
                promotes relaxation and well-being. Whether it's morning coffee 
                by the water or an afternoon stroll along the accessible walkways, 
                the lake adds a special dimension to daily life.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Accessible walking paths along the shoreline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Comfortable seating areas with lake views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Wildlife watching opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Peaceful outdoor therapy and relaxation space</span>
                </li>
              </ul>
              <Button asChild className="btn-primary">
                <Link to="/contact">Experience Our Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up font-poppins">
            See Our Home for Yourself
          </h2>
          <p className="text-xl mb-8 fade-in-up delay-200 max-w-2xl mx-auto">
            We invite you to visit our beautiful home and see firsthand the 
            comfortable, caring environment we've created for our residents.
          </p>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 fade-in-up delay-400">
            <Link to="/contact">Schedule Your Visit Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default OurHome;