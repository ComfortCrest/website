import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import blog1Image from "@/assets/blog-1.jpg";
import blog2Image from "@/assets/blog-2.jpg";
import blog3Image from "@/assets/blog-3.jpg";

const blogPosts = {
  "1": {
    title: "Understanding Adult Family Home Care",
    image: blog1Image,
    date: "March 15, 2024",
    content: `
      Adult family home care represents a unique approach to senior living that combines professional care with the warmth and comfort of a home environment. Unlike larger institutional facilities, adult family homes provide personalized care in a residential setting that feels like a true home.

      At Comfort Crest, we believe that quality care starts with understanding each resident as an individual. Our small, intimate setting allows us to develop deep relationships with each person in our care, understanding their preferences, needs, and personal history.

      ## What Makes Adult Family Home Care Special?

      The family-style environment creates opportunities for meaningful connections and personalized attention that simply isn't possible in larger facilities. Residents become part of our extended family, participating in daily life activities and maintaining their independence while receiving the support they need.

      Our approach focuses on:
      - Maintaining dignity and independence
      - Providing personalized care plans
      - Creating a true home atmosphere
      - Building lasting relationships
      - Supporting family involvement

      ## The Difference You'll Feel

      When you visit Comfort Crest, you'll immediately notice the difference. The sound of conversation and laughter, the smell of home-cooked meals, and the sight of residents relaxing in comfortable living spaces all contribute to an environment that promotes well-being and happiness.

      We're proud to offer this unique style of care that honors the individual while providing the professional support needed for safety and health.
    `
  },
  "2": {
    title: "Creating a Home Away from Home",
    image: blog2Image,
    date: "March 10, 2024",
    content: `
      Creating a home away from home is at the heart of everything we do at Comfort Crest Adult Family Home. We understand that the transition to assisted living can be challenging, which is why we've dedicated ourselves to creating an environment that truly feels like home.

      ## The Physical Environment

      Our home features comfortable living spaces designed with residents in mind. From the cozy living room where residents gather to watch television or chat, to the bright dining room where we share meals together, every space is designed to feel welcoming and familiar.

      We encourage residents to personalize their rooms with their own furniture, photographs, and cherished belongings. These personal touches help create a sense of continuity and comfort during the transition.

      ## The Emotional Environment

      Beyond the physical space, we work hard to create an emotional environment that supports well-being. Our small size means that staff members become familiar faces who truly know each resident. We celebrate birthdays, holidays, and personal milestones together as a family.

      ## Daily Life and Routines

      We believe in maintaining the rhythms of home life. Residents wake up naturally, participate in meal preparation if they're able and interested, and enjoy activities that bring them joy. Whether it's tending to plants, reading in a sunny corner, or sharing stories over coffee, we support the activities that make life meaningful.

      ## Family Involvement

      We encourage family members to remain actively involved in their loved one's care. Regular visits, participation in care planning, and inclusion in special events help maintain important family connections.

      Our goal is simple: to create a place where residents feel at home, families feel confident, and everyone feels part of the Comfort Crest family.
    `
  },
  "3": {
    title: "The Importance of Medication Management",
    image: blog3Image,
    date: "March 5, 2024",
    content: `
      Proper medication management is one of the most critical aspects of care in an adult family home setting. At Comfort Crest, we understand that managing multiple medications can be complex and potentially dangerous if not handled with the utmost care and attention.

      ## Why Professional Medication Management Matters

      Many seniors take multiple medications throughout the day, and the complexity of managing these prescriptions can be overwhelming. Missed doses, incorrect timing, or drug interactions can have serious health consequences. Professional medication management ensures that each resident receives the right medication, at the right time, in the right dose.

      ## Our Medication Management System

      At Comfort Crest, we've implemented a comprehensive medication management system that includes:

      ### Careful Documentation
      We maintain detailed records of all medications, including prescription drugs, over-the-counter medications, and supplements. This documentation helps prevent dangerous interactions and ensures continuity of care.

      ### Trained Staff
      Our caregivers receive specialized training in medication administration and are knowledgeable about potential side effects, interactions, and proper storage requirements.

      ### Regular Reviews
      We work closely with physicians and pharmacists to regularly review medication regimens, ensuring they remain appropriate and effective as health conditions change.

      ### Safety Protocols
      We follow strict protocols for medication storage, administration, and disposal to maintain safety and comply with all regulations.

      ## Communication with Families and Healthcare Providers

      We maintain open communication with families and healthcare providers about any changes in medication or observed effects. This collaboration ensures the best possible outcomes for our residents.

      ## Peace of Mind

      For families, knowing that their loved one's medications are being managed by trained professionals provides invaluable peace of mind. They can rest assured that this critical aspect of care is being handled with the attention and expertise it deserves.

      Professional medication management is just one of the many ways we demonstrate our commitment to the health, safety, and well-being of every resident at Comfort Crest.
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </Button>
        </div>

        <article className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="text-sm text-secondary mb-4">{post.date}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-poppins mb-8">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return null;
                  
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-primary mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-primary mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-6 mb-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  
                  return (
                    <p key={index} className="mb-6 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex justify-between items-center">
                  <Button asChild variant="outline">
                    <Link to="/blog">View All Posts</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;