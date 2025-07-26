import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "/pics/blog.jpg";
import blog1Image from "@/assets/blog-1.jpg";
import blog2Image from "@/assets/blog-2.jpg";
import blog3Image from "@/assets/blog-3.jpg";
import blog4Image from "@/assets/blog-4.png";
import blog5Image from "@/assets/blog-5.png";
import blog6Image from "@/assets/blog-6.png";
import blog7Image from "@/assets/blog-7.png";
import blog8Image from "@/assets/blog-8.png";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Adult Family Home Care",
    excerpt: "Learn about the personalized care and family-like atmosphere that makes adult family homes special.",
    image: blog1Image,
    date: "March 15, 2025"
  },
  {
    id: 2,
    title: "Creating a Home Away from Home",
    excerpt: "Discover how we create a warm, welcoming environment that feels like home for all our residents.",
    image: blog2Image,
    date: "March 10, 2025"
  },
  {
    id: 3,
    title: "Specialized Care for Dementia & Alzheimer's",
    excerpt: "Professional medication management ensures safety and peace of mind for residents and families.",
    image: blog3Image,
    date: "June 5, 2025"
  },
  {
    id: 4,
    title: "Specialized care for dementia and Alzheimer's",
    excerpt: "It focuses on maximizing quality of life for individuals and families affected by these conditions. This involves a multifaceted approach that includes managing symptoms, supporting daily living activities, and addressing the emotional and social well-being of both the person with dementia and their caregivers.",
    image: blog4Image,
    date: "July 1, 2025"
  },
  {
    id: 5,
    title: "Promoting Mental Wellness in Older Adults",
    excerpt: "Mental wellness in older adults encompasses life satisfaction, optimism, self-esteem, a sense of control and purpose, and strong social connections. Despite common misconceptions, many older adults experience improved well-being and life satisfaction in later life, sometimes referred to as the paradox of aging.",
    image: blog5Image,
    date: "July 5, 2025"
  },
  {
    id: 6,
    title: "Transitioning a Loved One to an Adult Family Home",
    excerpt: "Moving a loved one into an adult family home is a significant life transition—for both the individual and their family. At Comfort Crest, we understand the emotional and practical challenges that come with this decision and are here to support you every step of the way.",
    image: blog6Image,
    date: "July 8, 2025"
  },
  {
    id: 7,
    title: "Staying Active at Any Age: Light Exercises for Seniors",
    excerpt: "Physical activity plays a vital role in healthy aging. At Comfort Crest, we encourage seniors to stay active through safe, light exercises that improve physical health, mental well-being, and overall quality of life.",
    image: blog7Image,
    date: "July 15, 2025"
  },
  {
    id: 8,
    title: "What’s on the Menu: Healthy Meals for Seniors",
    excerpt: " Nutrition plays a vital role in maintaining strength, energy, and overall health—especially for older adults. At Comfort Crest, we prioritize wholesome, well-balanced meals that support both physical health and emotional comfort.",
    image: blog8Image,
    date: "August 1, 2025"
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