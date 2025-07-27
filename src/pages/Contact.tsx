import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "/pics/contact1.jpg";
import emailjs from "@emailjs/browser"; // 🆕 import EmailJS

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    careRecipientName: "",
     email: "",
    phone: "",
    moveInDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      care_recipient: formData.careRecipientName,
       from_email: formData.email,
      phone: formData.phone,
      move_in_date: formData.moveInDate,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send("comfort", "template_ket7u3l", templateParams, "B-7qhWEdtv3ZkMUBw")
      .then(() => {
      // Auto-reply to user
        emailjs.send("comfort", "template_9mpp3ge", templateParams, "B-7qhWEdtv3ZkMUBw")
          .then(() => {
            toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We've sent you a confirmation email.",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            careRecipientName: "",
            phone: "",
            moveInDate: "",
            message: ""
          });
        })
        .catch((error) => {
          console.error("Auto-reply Error:", error);
          toast({
            title: "Message Sent, but Auto-Reply Failed",
            description: "We received your message, but couldn't send confirmation email.",
            variant: "destructive",
          });
        });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <HeroBanner
        backgroundImage={heroImage}
        title="Contact Us"
        subtitle="Ready to learn more? We're here to answer your questions and schedule your visit"
        height="medium"
      />

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in-left">
              <h2 className="text-3xl font-bold mb-8 text-primary font-poppins">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <p className="text-muted-foreground">Main: (201) 920-7621</p>
                    <p className="text-muted-foreground">Alt: +1 (360) 990-2377</p>
                    <p className="text-muted-foreground">House: +1 (360) 999-6009</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">comfortcrestafh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      6318 Shady Ln SE<br />
                      Lacey, WA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visiting Hours</h3>
                    <p className="text-muted-foreground">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">
                      Emergency assistance available 24/7
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    Schedule a Personal Tour
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We encourage you to visit our home and meet our staff. 
                    Tours are available by appointment to ensure we can 
                    give you our full attention.
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Call us today to schedule your visit!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="fade-in-right">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="careRecipientName">Name of Person Receiving Care</Label>
                      <Input
                        id="careRecipientName"
                        name="careRecipientName"
                        value={formData.careRecipientName}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="moveInDate">Estimated Move-in Date</Label>
                      <Input
                        id="moveInDate"
                        name="moveInDate"
                        type="date"
                        value={formData.moveInDate}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us about your care needs, questions, or any other information that would help us assist you better..."
                      />
                    </div>

                    <Button type="submit" className="btn-primary w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary font-poppins fade-in-up">
              Find Us
            </h2>
            <p className="text-xl text-muted-foreground fade-in-up delay-200">
              Located in beautiful Lacey, Washington
            </p>
          </div>
          
          <div className="fade-in-up delay-400">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.123456789!2d-122.8267!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549174c6b85f8b8b%3A0x1234567890123456!2s6318%20Shady%20Ln%20SE%2C%20Lacey%2C%20WA!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Comfort Crest Adult Family Home Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in-up font-poppins">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 fade-in-up delay-200 max-w-2xl mx-auto">
            Don't wait to secure the best care for your loved one. 
            Contact us today to learn more about our services and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-400">
          <a href="tel:+12019207621">
            <Button
              variant="outline"
              className="border-white text-[#f6d170] hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (201) 920-7621
            </Button>
          </a>

          <a href="mailto:comfortcrestafh@gmail.com">
            <Button
              variant="outline"
              className="border-white text-[#f6d170] hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </a>
        </div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;