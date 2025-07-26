import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import blog1Image from "@/assets/blog-1.jpg";
import blog2Image from "@/assets/blog-2.jpg";
import blog3Image from "@/assets/blog-3.jpg";
import blog4Image from "@/assets/blog-4.png";
import blog5Image from "@/assets/blog-5.png";
import blog6Image from "@/assets/blog-6.png";
import blog7Image from "@/assets/blog-7.png";
import blog8Image from "@/assets/blog-8.png";

const blogPosts = {
  "1": {
  title: "Understanding Adult Family Home Care",
  image: blog1Image,
  date: "March 15, 2025",
  content: `
    Adult family home care represents a unique approach to senior living that combines professional care with the warmth and comfort of a home environment. Unlike larger institutional facilities, adult family homes provide personalized care in a residential setting that feels like a true home.

    At Comfort Crest, we believe that quality care starts with understanding each resident as an individual. Our small, intimate setting allows us to develop deep relationships with each person in our care, understanding their preferences, needs, and personal history.

    **What Makes Adult Family Home Care Special?**

    The family-style environment creates opportunities for meaningful connections and personalized attention that simply isn't possible in larger facilities. Residents become part of our extended family, participating in daily life activities and maintaining their independence while receiving the support they need.

    Our approach focuses on:
    - Maintaining dignity and independence
    - Providing personalized care plans
    - Creating a true home atmosphere
    - Building lasting relationships
    - Supporting family involvement

    **The Difference You'll Feel**

    When you visit Comfort Crest, you'll immediately notice the difference. The sound of conversation and laughter, the smell of home-cooked meals, and the sight of residents relaxing in comfortable living spaces all contribute to an environment that promotes well-being and happiness.

    We're proud to offer this unique style of care that honors the individual while providing the professional support needed for safety and health.
  `
},

  "2": {
    title: "Creating a Home Away from Home",
    image: blog2Image,
    date: "March 10, 2025",
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
    date: "June 5, 2025",
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
  },
  "4": {
  title: "Specialized Care for Dementia & Alzheimer's",
  image: blog4Image,
  date: "June 1, 2025",
  content: `
    Caring for a loved one with dementia or Alzheimer’s is both a deeply emotional and demanding journey. At Comfort Crest, we understand the unique challenges families face and offer a specialized, compassionate approach tailored to individuals living with memory-related conditions.

    **Understanding Memory Care Needs**

    Dementia and Alzheimer’s affect more than just memory — they influence behavior, communication, and the ability to perform daily tasks. As the condition progresses, professional support becomes essential to ensure safety, comfort, and emotional well-being.

    At Comfort Crest, we provide a structured and secure environment designed to reduce confusion and promote a sense of calm.

    **What Makes Our Care Unique**

    We go beyond basic assistance to offer a holistic memory care experience that supports the mind, body, and spirit:

    - Trained caregivers with expertise in dementia-specific care  
    - Consistent routines to reduce anxiety and disorientation  
    - Memory-stimulating activities like music therapy, puzzles, and storytelling  
    - Nutritious meals catered to individual preferences and health needs  
    - Safe living spaces designed to minimize falls and confusion  

    **Supporting Families Along the Way**

    We know that memory loss affects the entire family. Our care team provides emotional support, regular updates, and guidance to help families stay connected and informed. We encourage visits, conversations, and participation in our community whenever possible.

    **The Comfort Crest Difference**

    Our mission is to preserve the dignity and individuality of every resident. We approach dementia care with patience, respect, and heartfelt connection — creating a safe space where residents feel valued and families find peace of mind.

    **You're Not Alone**

    If your loved one has been diagnosed with dementia or Alzheimer’s, know that you don’t have to walk this path alone. Contact us today to learn more about our specialized care programs and how Comfort Crest can provide the compassionate support your family deserves.
  `
},
"5": {
  title: "Promoting Mental Wellness in Older Adults",
  image: blog5Image,
  date: "July 5, 2025",
  content: `
    Mental wellness is just as important as physical health—especially in our golden years. At Comfort Crest, we place great emphasis on nurturing not only the bodies but also the minds of our residents.

    **Why Mental Wellness Matters**

    As people age, they may face increased risks of loneliness, depression, or cognitive decline. Staying mentally healthy can improve quality of life, support independence, and even contribute to physical well-being.

    **Our Approach to Mental Wellness**

    At Comfort Crest, we foster mental wellness through a mix of daily routines, personalized attention, and enriching activities, including:

    - Social interaction through group meals and games  
    - Memory games and puzzles to stimulate the brain  
    - Light physical exercise to boost mood and focus  
    - Music, art, and storytelling for creative expression  
    - Access to nature and quiet time for relaxation  

    **Creating a Positive Environment**

    We believe a supportive and joyful environment is key to mental health. Our caregivers are trained to provide emotional support, engage residents in meaningful conversations, and notice changes in mood or behavior early.

    **Supporting Family Connections**

    Staying connected with loved ones is vital for emotional stability. We encourage regular visits, phone calls, video chats, and family participation in home events.

    **A Home That Cares for the Whole Person**

    At Comfort Crest, promoting mental wellness isn’t an add-on—it’s part of our everyday care. By focusing on the emotional and psychological needs of each resident, we create a home that feels safe, stimulating, and full of life.

    Contact us to learn more about how we care for the whole person—mind, body, and spirit.
  `
},
"6": {
  title: "Transitioning a Loved One to an Adult Family Home",
  image: blog6Image,
  date: "July 8, 2025",
  content: `
    Moving a loved one into an adult family home is a significant life transition—for both the individual and their family. At Comfort Crest, we understand the emotional and practical challenges that come with this decision and are here to support you every step of the way.

    **Understanding the Need for the Move**

    Recognizing when it’s time for extra care can be difficult. Common signs include difficulty managing daily tasks, frequent falls, medication mismanagement, or increasing isolation. Adult family homes offer a safe and supportive environment while preserving the resident’s dignity and comfort.

    **How to Prepare for the Transition**

    Planning ahead and including your loved one in the decision can help ease anxiety. Steps include:

    - Touring potential homes together  
    - Talking openly about care needs and preferences  
    - Downsizing belongings while keeping sentimental items  
    - Scheduling regular visits during the adjustment period  

    **Emotional Support Matters**

    This change often brings up feelings of guilt, fear, or grief. Reassure your loved one that this move is about enhancing their safety, health, and happiness—not about giving up their independence.

    At Comfort Crest, we provide a warm, homelike setting that promotes confidence and connection from day one.

    **A Smooth Welcome at Comfort Crest**

    Our welcoming team helps new residents settle in comfortably. From personalized room setups to introductions with staff and other residents, we take care to make the transition feel natural and respectful.

    **We’re Here for Families Too**

    Transitioning to an adult family home is a journey. That’s why we also provide guidance, check-ins, and emotional support to family members throughout the process.

    Let us help your loved one start this next chapter with comfort, dignity, and compassion.
  `
},
"7": {
  title: "Staying Active at Any Age: Light Exercises for Seniors",
  image: blog7Image,
  date: "July 15, 2025",
  content: `
    Physical activity plays a vital role in healthy aging. At Comfort Crest, we encourage seniors to stay active through safe, light exercises that improve physical health, mental well-being, and overall quality of life.

    **Why Staying Active Matters**

    Regular movement—even gentle activity—has powerful benefits for older adults:

    - Improves balance and reduces fall risk  
    - Strengthens muscles and joints  
    - Boosts mood and reduces symptoms of depression  
    - Enhances cardiovascular health  
    - Supports better sleep and cognitive function  

    **Simple Exercises for Daily Wellness**

    At Comfort Crest, we integrate easy, low-impact exercises into daily routines, such as:

    - **Seated stretches** to increase flexibility  
    - **Chair yoga** for gentle movement and relaxation  
    - **Walking** in our garden or hallway loops  
    - **Light resistance band exercises** to build strength  
    - **Breathing and posture routines** to promote calm and focus  

    **Making Movement Fun**

    We also keep things social and enjoyable by offering:

    - Group movement sessions  
    - Music and dance therapy  
    - Gentle games like balloon toss and bowling  

    **Personalized for Each Resident**

    Our caregivers tailor activity plans based on each resident's ability, comfort level, and medical needs. We ensure every senior has the opportunity to move safely and joyfully—at their own pace.

    **A Lifestyle That Encourages Vitality**

    Staying active isn’t just about physical fitness—it’s about maintaining independence, confidence, and a vibrant outlook on life. At Comfort Crest, we make wellness a part of every day.

    Let us help your loved one stay active, happy, and strong—at any age.
  `
},
"8": {
  title: "What’s on the Menu: Healthy Meals for Seniors",
  image: blog8Image,
  date: "August 1, 2025",
  content: `
    Nutrition plays a vital role in maintaining strength, energy, and overall health—especially for older adults. At Comfort Crest, we prioritize wholesome, well-balanced meals that support both physical health and emotional comfort.

    **Fresh Ingredients, Thoughtful Choices**

    Our meals are made with fresh, locally sourced ingredients whenever possible. We take into account dietary needs, preferences, allergies, and medical considerations to create menus that are both nutritious and satisfying.

    **Sample Meal Highlights:**
    - **Breakfast:** Oatmeal with fresh fruit, whole grain toast, and herbal tea
    - **Lunch:** Grilled chicken, steamed vegetables, and brown rice
    - **Dinner:** Baked salmon, sweet potatoes, and green beans
    - **Snacks:** Greek yogurt, nuts, or a smoothie

    **Specialized Nutrition Support**

    For residents with specific health needs—such as diabetes, hypertension, or swallowing difficulties—we provide tailored meal options guided by professional dietary advice.

    **Mealtimes That Feel Like Home**

    Beyond nutrition, we strive to make meals a social and comforting experience. Shared dining spaces, familiar dishes, and a calm atmosphere contribute to a sense of community and well-being.

    At Comfort Crest, we believe food is more than fuel—it’s part of living well every day.
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