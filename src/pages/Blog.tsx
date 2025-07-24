import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import blog1Image from "@/assets/blog-1.jpg";
import blog2Image from "@/assets/blog-2.jpg";
import blog3Image from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Adult Family Home Care",
    excerpt: "Learn about the personalized care and family-like atmosphere that makes adult family homes special.",
    image: blog1Image,
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Creating a Home Away from Home",
    excerpt: "Discover how we create a warm, welcoming environment that feels like home for all our residents.",
    image: blog2Image,
    date: "March 10, 2024"
  },
  {
    id: 3,
    title: "The Importance of Medication Management",
    excerpt: "Professional medication management ensures safety and peace of mind for residents and families.",
    image: blog3Image,
    date: "March 5, 2024"
  }
];

const Blog = () => {
  return (
    <Layout>
      <HeroBanner
        backgroundImage={heroImage}
        title="Our Blog"
        subtitle="Stories, insights, and updates from Comfort Crest Adult Family Home"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-poppins fade-in-up">
              Latest Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-200">
              Stay updated with news, insights, and stories from our family home community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className={`shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer fade-in-up delay-${index * 200} overflow-hidden group`}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-secondary mb-2">{post.date}</div>
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;