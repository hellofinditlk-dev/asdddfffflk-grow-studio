import ServicePageLayout from "@/components/ServicePageLayout";
import { Megaphone } from "lucide-react";

const SocialMediaManagement = () => (
  <ServicePageLayout
    title="Social Media Management Sri Lanka"
    subtitle="Professional Page Management"
    description="Complete Facebook and Instagram page management to build a strong online presence for your business. We handle everything from content creation to community management."
    icon={<Megaphone className="w-7 h-7" />}
    serviceName="social media management"
    stats={[
      { value: "30+", label: "Pages Managed" },
      { value: "500+", label: "Posts Created" },
      { value: "3x", label: "Engagement Growth" },
      { value: "Daily", label: "Monitoring" },
    ]}
    features={[
      "Content planning & monthly editorial calendar",
      "Creative post design — graphics, carousels & infographics",
      "Daily or weekly post scheduling & publishing",
      "Inbox & comment management with quick response",
      "Instagram & Facebook Story creation",
      "Reels & short-form video content",
      "Monthly performance reports with analytics",
      "Competitor analysis & benchmarking",
      "Hashtag strategy & optimization",
      "Brand voice development & consistency",
    ]}
    benefits={[
      "Build a consistent, professional brand presence across Facebook & Instagram",
      "Save 15+ hours per week while maintaining active, engaging social profiles",
      "Increase engagement rates by 2–5x with professionally designed content",
      "Convert followers into paying customers with strategic CTAs",
      "Stay ahead of competitors with data-driven content planning",
      "Never miss a customer message with dedicated inbox management",
    ]}
    processSteps={[
      { title: "Brand Audit", desc: "We review your current social presence, audience, and competitors." },
      { title: "Content Strategy", desc: "A tailored content plan with themes, formats, and posting schedule." },
      { title: "Design & Publish", desc: "Our creative team designs and publishes engaging content daily/weekly." },
      { title: "Engage & Report", desc: "Community management, inbox handling, and monthly analytics reports." },
    ]}
    faqs={[
      { q: "How many posts do you create per month?", a: "Our standard packages include 12–20 posts per month depending on the plan. This includes a mix of graphics, carousels, stories, and reels to keep your audience engaged." },
      { q: "Do you handle customer messages and comments?", a: "Yes! Inbox and comment management is included. We respond to customer queries professionally and escalate important messages to you immediately." },
      { q: "Which platforms do you manage?", a: "We primarily manage Facebook and Instagram pages. We can also manage LinkedIn, TikTok, and Google Business Profile as add-on services." },
      { q: "Can I approve posts before they go live?", a: "Absolutely. We share a monthly content calendar for your approval before publishing. You'll always have final say on what gets posted." },
      { q: "Do you create video content too?", a: "Yes, our packages include Reels and Story content. For more advanced video production like promotional videos, check our Video Production service." },
    ]}
  />
);

export default SocialMediaManagement;
