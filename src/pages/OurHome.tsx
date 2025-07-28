import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import heroImage from "/pics/outside1.webp";
import lakeImage from "/pics/lake.jpg";

const OurHome = () => {
  const homeImages = [
    { src: "/pics/living2.jpg", alt: "Comfortable Living room", title: "Living Area" },
    { src: "/pics/living4.jpg", alt: "View from Living Area", title: "Outside View" },
    { src: "/pics/living5.jpg", alt: "Comfortable Seating and Mounted TV", title: "Living Area" },
    { src: "/pics/living6.jpg", alt: "", title: "Elegant Dinner Table Setup" },
    { src: "/pics/living7.jpg", alt: "", title: "Stylish dinner table with place settings and comfortable sofas" },
    { src: "/pics/living9.jpg", alt: "The Single-Seat Sanctuary", title: "One-seat couches" }
  ];
  const bedroomImages = [
    { src: "/pics/bedroom1.jpg", alt: "Soft bed with warm lighting", title: "Cozy Bedroom" },
    { src: "/pics/bedroom2.jpg", alt: "View from Bedroom Area", title: "Modern Bedroom Interior" },
    { src: "/pics/bedroom3.jpg", alt: "Sleek bed in bright room.", title: "Comfortable Bedroom" },
    { src: "/pics/bedroom4.jpg", alt: "Movable Bed and Wooden Cupboard.", title: " Bedroom" },
    { src: "/pics/bedroom6.jpg", alt: "Comfortable bedroom", title: "Clean bed setup" },
    {src: "/pics/bedroom7.jpg", alt: "Cozy bedroom.", title: "Bedroom Interior" },
    { src: "/pics/bedroom5.jpg", alt: "A cozy room with a study desk by the window, warm lighting, and a comfortable chair.", title: "Bright Study Room Interior" },
        
  ];
  const bathroomImages = [
    { src: "/pics/bathroom1.jpg", alt: "Space-efficient bathroom design with a walk-in shower and standard toilet, accented by neutral tiles", title: "Compact Bathroom with Walk-In Shower and Toilet" },
    { src: "/pics/bathroom2.jpg", alt: "Simple bathroom with grey tiles", title: "Minimalist Bathroom Design" },
    { src: "/pics/bathroom3.jpg", alt: "Soft lighting Bathroom", title: "Bathroom" },
      
  ];
  const outsideImages = [
    { src: "/pics/outside1.webp", alt: "Green lawn with plants and flowers.", title: "Garden Area" },
    { src: "/pics/outside2.jpg", alt: "Front Patio", title: "Entrance" },
    { src: "/pics/outside3.jpg", alt: "Designated Outdoor Parking", title: "Parking Area" },
    { src: "/pics/outside4.jpg", alt: "Patio chairs and table", title: "Outdoor Seating" },
    { src: "/pics/outside6.jpg", alt: "Spacious backyard with grass and trees.", title: "Backyard View" },
    { src: "/pics/outside7.jpg", alt: "Aerial shot showing full layout of house and garden..", title: "Aerial View" },
    {src: "/pics/outside9.jpg", alt: "", title: "Outside View" },
    {src: "/pics/lake.jpg", alt: "High-angle view of homes, roads, and with Lake view", title: "Neighborhood Aerial Shot" },    
  ];
  const kitchenImages = [
    { src: "/pics/kitchen2.jpg", alt: "Spacious kitchen with island, wooden cabinets with stainless steel appliances..", title: "Open Kitchen Design" },
    { src: "/pics/kitchen1.jpg", alt: "Sunlit kitchen with white counters and large window.", title: "Bright Kitchen" },
    { src: "/pics/kitchen7.jpg", alt: " ", title: "Sleek Kitchen Design." },
    { src: "/pics/kitchen3.jpg", alt: "Kitchen with built-in oven and sleek cabinetry.", title: "Kitchen with Built-In Oven" },
    { src: "/pics/kitchen4.jpg", alt: "Dining setup between kitchen and living room.", title: "Dining Area" },
    {src: "/pics/kitchen6.jpg", alt: "Table with chairs set near door with outside view", title: "Cozy Dining Corner" },    
  ];
  const videoItems = [
    {
      src: "https://www.youtube-nocookie.com/embed/qGXovtiENic",
      poster: "/pics/kitchen4.jpg",
      title: "Facility Tour – Lounge Area",
      description: "A quick look into our cozy lounge and community space."
    },
    {
      src: "https://www.youtube-nocookie.com/embed/qGXovtiENic",
      poster: "/pics/outside3.jpg",
      title: "Walkthrough",
      description: "Garden Area."
    }
  ];



  return (
    <Layout>
      <HeroBanner
        backgroundImage={heroImage}
        backgroundImage2x="/pics/outside1@2x.webp"
        backgroundImageMobile="/pics/outside1.webp"
        title="Our Beautiful Home"
        subtitle="A warm, welcoming environment designed for comfort, safety, and quality of life"
      >
        <Button asChild className="btn-secondary font-semibold px-8 py-3">
          <Link to="/contact">Schedule a Tour</Link>
        </Button>
      </HeroBanner>

      {/* Home Gallery Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins fade-in-up">
              Tour Our Beautiful Home
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
              Take a visual journey through our comfortable, welcoming spaces designed for quality living.
            </p>
          </div>
          {/* Living Area */}
          <p className="text-xl  max-w-3xl mx-auto fade-in-up delay-200">SWIPE THROUGH THE <b>LIVING AREA</b> PICTURES</p>
          <div className="max-w-4xl mx-auto fade-in-up delay-400">
            <Carousel className="w-full">
              <CarouselContent>
                {homeImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-elegant"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          {/* Bedroom */}
          <p className="text-xl  max-w-3xl mx-auto fade-in-up delay-200">SWIPE THROUGH THE <b>BEDROOM</b> PICTURES</p>
          <div className="max-w-4xl mx-auto fade-in-up delay-400">
            <Carousel className="w-full">
              <CarouselContent>
                {bedroomImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-elegant"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          {/* Bathroom */}
          <p className="text-xl  max-w-3xl mx-auto fade-in-up delay-200">SWIPE THROUGH THE <b>BATHROOM</b> PICTURES</p>
          <div className="max-w-4xl mx-auto fade-in-up delay-400">
            <Carousel className="w-full">
              <CarouselContent>
                {bathroomImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-elegant"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          {/* Kitchen */}
          <p className="text-xl  max-w-3xl mx-auto fade-in-up delay-200">SWIPE THROUGH THE <b>KITCHEN</b> & <b>DINING AREA</b> PICTURES</p>
          <div className="max-w-4xl mx-auto fade-in-up delay-400">
            <Carousel className="w-full">
              <CarouselContent>
                {kitchenImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-elegant"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          {/* Outside */}
          <p className="text-xl  max-w-3xl mx-auto fade-in-up delay-200">SWIPE THROUGH THE <b>OUTSIDE GARDEN</b> PICTURES</p>
          <div className="max-w-4xl mx-auto fade-in-up delay-400">
            <Carousel className="w-full">
              <CarouselContent>
                {outsideImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-elegant"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          {/*Videos */}
          <p className="text-xl  max-w-3xl mx-auto fade-in-up delay-200">SWIPE THROUGH THE <b>VIDEOS</b></p>
          <div className="max-w-4xl mx-auto fade-in-up delay-400">
            <Carousel className="w-full">
              <CarouselContent>
                {videoItems.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <iframe
                        src={video.src}
                        title={video.title}
                        className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-elegant"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                          <p className="text-white/90">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>      

        </div>
      </section>

      {/* Home Overview */}
      <section className="py-20 bg-muted/30">
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
            
          </div>
        </div>
      </section>

      {/* Home Features */}
      <section className="py-20 bg-background">
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
          <Button asChild variant="outline" className="border-white text-[#f2d469] hover:bg-white hover:text-primary font-semibold px-8 py-3 fade-in-up delay-400">
            <Link to="/contact">Schedule Your Visit Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default OurHome;