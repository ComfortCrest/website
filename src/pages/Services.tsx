import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Pill, 
  ChefHat, 
  Users, 
  Home, 
  Car, 
  Clock, 
  Brain 
} from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import personalCareImage from "@/assets/personal-care.jpg";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Personal Care Assistance",
      description: "Compassionate help with daily activities including bathing, dressing, grooming, and mobility assistance."
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Professional oversight of medication schedules, dosages, and health monitoring by trained staff."
    },
    {
      icon: ChefHat,
      title: "Meal Preparation",
      description: "Nutritious, delicious meals prepared fresh daily, accommodating dietary restrictions and preferences."
    },
    {
      icon: Users,
      title: "Companionship & Social Interaction",
      description: "Meaningful social engagement, activities, and emotional support to prevent isolation."
    },
    {
      icon: Home,
      title: "Light Housekeeping & Errands",
      description: "Maintaining a clean, comfortable living environment and assistance with personal errands."
    },
    {
      icon: Car,
      title: "Transportation Assistance",
      description: "Safe, reliable transportation to medical appointments, shopping, and social activities."
    },
    {
      icon: Clock,
      title: "Respite Care for Family Caregivers",
      description: "Temporary relief care allowing family members time to rest and recharge."
    },
    {
      icon: Brain,
      title: "Specialized Care for Dementia & Alzheimer's",
      description: "Expert care for individuals with cognitive conditions, including memory care and behavioral support."
    }
  ];

  return (
    <Layout>
      <HeroBanner
        backgroundImage={heroImage}
        title="Our Services"
        subtitle="Comprehensive care tailored to your individual needs and preferences"
      >
        <Button asChild className="btn-secondary font-semibold px-8 py-3">
          <Link to="/contact">Learn More About Our Care</Link>
        </Button>
      </HeroBanner>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins fade-in-up">
              Professional Care Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
              Our comprehensive range of services is designed to support independence 
              while providing the assistance needed for a comfortable, fulfilling life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in-left">
              <img
                src={personalCareImage}
                alt="Professional personal care"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="fade-in-right">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Personalized Care Plans
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Every resident receives a customized care plan developed in collaboration 
                with the individual, their family, and healthcare providers. We believe 
                in honoring personal preferences while ensuring the highest level of safety and care.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our experienced staff is trained in best practices for elder care and 
                continuously educated on the latest techniques and approaches in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                Our Care Philosophy
              </h2>
              <p className="text-xl leading-relaxed mb-6">
                We believe that quality care goes beyond meeting basic needs. It's about 
                preserving dignity, encouraging independence, and creating meaningful 
                connections that enrich daily life.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our approach is holistic, considering not just physical health but 
                emotional, social, and spiritual well-being as well.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="fade-in-right">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>24/7 professional care and supervision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>Individualized care plans for each resident</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>Regular communication with families</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>Continuous staff training and education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <span>Coordination with healthcare providers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up">
            Ready to Experience Our Care?
          </h2>
          <p className="text-xl mb-8 fade-in-up delay-200">
            Schedule a visit to see our beautiful home and meet our caring staff.
          </p>
          <Button asChild className="btn-primary font-semibold px-8 py-3 fade-in-up delay-400">
            <Link to="/contact">Schedule a Visit Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;