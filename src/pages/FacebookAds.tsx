import ServicePageLayout from "@/components/ServicePageLayout";
import { Target } from "lucide-react";

const FacebookAds = () => (
  <ServicePageLayout
    title="Facebook Advertising Sri Lanka"
    subtitle="High-Performance Facebook Campaigns"
    description="Run high-performing Facebook & Instagram advertising campaigns to generate quality leads and drive sales for your Sri Lankan business."
    icon={<Target className="w-7 h-7" />}
    serviceName="Facebook advertising"
    stats={[
      { value: "3x", label: "Avg Lead Increase" },
      { value: "40%", label: "Lower CPA" },
      { value: "200+", label: "Campaigns Managed" },
      { value: "98%", label: "Client Retention" },
    ]}
    features={[
      "Lead generation campaigns with instant forms",
      "Brand awareness & reach campaigns",
      "Remarketing & retargeting campaigns",
      "Conversion-optimized website traffic campaigns",
      "Advanced audience targeting & lookalike audiences",
      "A/B testing for ad creatives & copy",
      "Landing page optimization recommendations",
      "Detailed ROI & performance reporting",
      "Custom audience creation from CRM data",
      "Dynamic product ads for e-commerce",
    ]}
    benefits={[
      "Reach your ideal customers with precision targeting based on interests, behaviors, and demographics",
      "Generate quality leads at lower cost per acquisition compared to traditional advertising",
      "Scale campaigns based on proven performance data and real-time analytics",
      "Maximize return on ad spend with continuous A/B testing and optimization",
      "Track every conversion from click to customer with Facebook Pixel integration",
      "Re-engage website visitors and past customers with strategic remarketing",
    ]}
    processSteps={[
      { title: "Audience Research", desc: "We analyze your ideal customer profile, competitors, and market to build precise targeting." },
      { title: "Creative & Copy", desc: "Our team designs scroll-stopping visuals and persuasive ad copy that converts." },
      { title: "Campaign Launch", desc: "We set up campaigns with proper tracking, budgets, and A/B test variants." },
      { title: "Optimize & Scale", desc: "Daily monitoring, bid adjustments, and scaling winning ads for maximum ROI." },
    ]}
    faqs={[
      { q: "How much should I spend on Facebook Ads?", a: "We recommend starting with a minimum of LKR 30,000–50,000/month for ad spend. This gives enough data to optimize campaigns effectively. We'll help you determine the right budget based on your goals and industry." },
      { q: "How soon will I see results?", a: "Most clients start seeing leads within the first 3–7 days of campaign launch. However, we recommend at least 2–4 weeks for proper optimization and consistent results." },
      { q: "Do you manage Instagram ads too?", a: "Yes! Facebook and Instagram ads are managed through the same platform (Meta Ads Manager). All our Facebook ad packages include Instagram placement at no extra cost." },
      { q: "What industries do you work with?", a: "We work with real estate, education, healthcare, salons & beauty, restaurants, e-commerce, professional services, and more. Our strategies are customized for each industry." },
      { q: "Will I get reports on campaign performance?", a: "Absolutely. You'll receive detailed monthly reports covering impressions, clicks, leads, cost per lead, and ROI analysis with actionable recommendations." },
    ]}
  />
);

export default FacebookAds;
