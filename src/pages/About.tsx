import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "/pics/outside8.webp";
import livingRoomImage from "/pics/living2.jpg";
import provider from "/pics/provider.jpg";

const About = () => {
  return (
    <Layout>
      <HeroBanner
        backgroundImage={heroImage}
        backgroundImage2x="/pics/outside8@2x.webp"
        backgroundImageMobile="/pics/outside8.webp"
        title="About Comfort Crest"
        subtitle="Creating a beautiful, comfortable home environment where dignity meets professional care"
      >
        <Button asChild className="btn-secondary font-semibold px-8 py-3">
          <Link to="/contact">Schedule a Tour</Link>
        </Button>
      </HeroBanner>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins">
                Our Story.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Comfort Crest Adult Family Home was founded with a simple yet profound mission: 
                to provide exceptional care in an environment that truly feels like home. Our beautiful 
                facility combines the warmth of a family setting with the professionalism of 
                healthcare excellence.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Located in a serene setting , our home offers residents the 
                opportunity to enjoy nature's tranquility while receiving personalized care 
                tailored to their individual needs.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/services">Learn About Our Services</Link>
              </Button>
            </div>
            <div className="fade-in-right">
              <img
                src={livingRoomImage}
                alt="Comfortable living space"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Provider Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins">
                Meet Our Provider.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                At the heart of Comfort Crest is our dedicated care provider <b>Faith Nkubitu Maina</b>, whose passion and commitment to 
                serving others inspire everything we do. With years of experience in adult and senior care, 
                our provider leads with compassion, professionalism, and a deep understanding of the unique needs of every resident.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Faith Nkubitu Maina is a passionate leader, life insurance professional, and founder of Comfort Crest — a home built on 
                dignity, trust, and heartfelt care. With a strong background in financial services and family advocacy, Faith has spent years 
                helping individuals plan for the future through life insurance and legacy protection.Her work in life insurance has deepened
                 her understanding of what truly matters: peace of mind, family security, and care that honors every stage of life. This perspective 
                 inspired her to create Comfort Crest — a nurturing adult family home where residents are treated like family and every detail is handled with compassion and integrity.
                Blending her commitment to service with her natural empathy and leadership, Faith ensures that every resident at Comfort Crest receives not just professional assistance, but the warmth and respect they deserve.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Contact Our Provider</Link>
              </Button>
            </div>
            <div className="fade-in-right">
              <img
                src={provider}
                alt="Faith Maina"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins fade-in-up">
              Our Mission.
            </h2>
            <p className="text-xl leading-relaxed mb-8 fade-in-up delay-200">
              To enhance the quality of life for our residents by providing compassionate, 
              professional care in a beautiful home environment that promotes dignity, 
              independence, and well-being.
            </p>
            <Button asChild variant="outline" className="border-white text-[#f2d469] hover:bg-white hover:text-[#f2d469]">
              <Link to="/contact">Join Our Family</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Home Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins fade-in-up">
              A Beautiful Home Environment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
              Our facility offers modern amenities and comfortable living spaces designed 
              with our residents' well-being in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Modern Comfort</h3>
                <p className="text-muted-foreground">
                  Air conditioning, comfortable furnishings, and accessible design 
                  throughout our home.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏞️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Lake Access</h3>
                <p className="text-muted-foreground">
                  Beautiful lakeside setting providing peaceful views and 
                  outdoor recreation opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 fade-in-up delay-400">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Family Atmosphere</h3>
                <p className="text-muted-foreground">
                  Small, intimate setting that promotes genuine relationships 
                  and personalized attention.
                </p>
              </CardContent>
            </Card>
            <Button asChild className="btn-primary">
                <Link to="/our-home">View Gallery</Link>
              </Button>
          </div>

          
        </div>
      </section>

     
    </Layout>
  );
};

export default About;