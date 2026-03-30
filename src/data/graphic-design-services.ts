export interface DesignSubService {
  slug: string;
  shortName: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[]; // slugs
  parentLink: { label: string; path: string };
}

export const designSubServices: DesignSubService[] = [
  // ── Branding & Identity ──
  {
    slug: "logo-design-sri-lanka",
    shortName: "Logo Design",
    seoTitle: "Logo Design Sri Lanka | Custom Logo Designers",
    metaDescription: "Creative logo design services in Sri Lanka to build strong brand identity.",
    h1: "Logo Design Sri Lanka – Custom Logo Design Services for Strong Brand Identity",
    intro: "Your logo is the face of your brand — the first thing customers see and the visual anchor of everything your business represents. A professionally designed logo creates instant credibility, builds recognition, and sets you apart from competitors. At Cypher Digital, we create custom logo designs that capture your brand's personality, values, and vision. Whether you're a startup looking for your first logo or an established business ready for a rebrand, our designers deliver logos that work across every platform — from business cards to billboards, websites to social media profiles. Every logo we create is 100% original, scalable, and delivered in all formats you need.",
    benefits: [
      "100% custom designs — no templates or clip art",
      "Scalable vector files that look sharp at any size",
      "Multiple concept options to choose from",
      "Unlimited revisions until you're satisfied",
      "Delivered in PNG, JPG, SVG, AI, and PDF formats",
      "Fast turnaround — initial concepts within 48 hours",
      "Designed for both print and digital applications",
      "Brand color palette and typography recommendations included",
    ],
    processSteps: [
      { title: "Discovery & Brief", desc: "We learn about your brand, industry, target audience, competitors, and design preferences through a detailed creative brief." },
      { title: "Concept Development", desc: "Our designers create 3–5 unique logo concepts based on your brief, exploring different visual directions and styles." },
      { title: "Refinement & Revisions", desc: "You select your preferred concept and we refine it with unlimited revisions until the design perfectly represents your brand." },
      { title: "Final Delivery", desc: "You receive your logo in all required formats — print-ready and web-optimized — along with a simple brand guidelines document." },
    ],
    faqs: [
      { q: "How much does logo design cost in Sri Lanka?", a: "Our custom logo design packages start from LKR 15,000. The cost depends on the complexity of the design and whether you need additional brand identity elements like business cards and letterheads." },
      { q: "How many logo concepts will I receive?", a: "We provide 3–5 unique logo concepts for you to choose from. You can then request unlimited revisions on your selected concept until it's perfect." },
      { q: "What file formats do you deliver?", a: "We deliver your logo in PNG, JPG, SVG, AI (Adobe Illustrator), and PDF formats — ready for both print and digital use." },
      { q: "How long does logo design take?", a: "Initial logo concepts are ready within 2–3 business days. The complete process, including revisions, typically takes 5–7 business days." },
      { q: "Can you redesign my existing logo?", a: "Yes, we offer logo redesign and modernization services. We can refresh your current logo while maintaining brand recognition, or create a completely new design." },
    ],
    relatedServices: ["brand-identity-design-sri-lanka", "social-media-design-sri-lanka", "company-profile-design-sri-lanka"],
    parentLink: { label: "Graphic Design Sri Lanka", path: "/graphic-design-sri-lanka" },
  },
  {
    slug: "brand-identity-design-sri-lanka",
    shortName: "Brand Identity",
    seoTitle: "Brand Identity Design Sri Lanka | Branding Experts",
    metaDescription: "Complete brand identity design services including logos, colors & brand systems.",
    h1: "Brand Identity Design Sri Lanka – Build a Powerful, Consistent Brand",
    intro: "A strong brand identity is more than just a logo — it's the complete visual system that defines how your business looks, feels, and communicates across every touchpoint. From color palettes and typography to business cards and social media templates, your brand identity shapes how customers perceive and remember your business. At Cypher Digital, we create comprehensive brand identity systems that give your business a professional, cohesive look across all platforms. Our branding experts work with you to define your brand's visual language and create a toolkit that ensures consistency whether you're designing a website, printing a brochure, or posting on Instagram.",
    benefits: [
      "Complete visual brand system — logo, colors, typography, and patterns",
      "Brand guidelines document for consistent application",
      "Business card, letterhead, and envelope design included",
      "Social media profile kit (covers, avatars, templates)",
      "Ensures brand consistency across all marketing channels",
      "Professional perception that builds customer trust",
      "Scalable identity that grows with your business",
      "Differentiates you from competitors in your market",
    ],
    processSteps: [
      { title: "Brand Discovery", desc: "We deep-dive into your business values, target audience, market positioning, competitors, and brand personality through workshops and research." },
      { title: "Visual Direction", desc: "We create mood boards, color explorations, and typography pairings to establish the visual direction that best represents your brand." },
      { title: "Identity Design", desc: "We design the complete brand identity system — logo variations, color palette, typography hierarchy, patterns, and all collateral." },
      { title: "Brand Guidelines", desc: "We compile everything into a comprehensive brand guidelines document that ensures consistent application across all touchpoints." },
    ],
    faqs: [
      { q: "What is included in a brand identity package?", a: "Our brand identity package includes logo design (primary + variations), color palette, typography selection, business card design, letterhead, social media profile kit, and a brand guidelines document." },
      { q: "How much does brand identity design cost in Sri Lanka?", a: "Complete brand identity packages start from LKR 45,000. The price varies based on the scope — whether you need just core brand elements or a full identity system with extensive collateral." },
      { q: "How long does brand identity design take?", a: "A complete brand identity project typically takes 2–3 weeks, including discovery, design, revisions, and final delivery of all brand assets and guidelines." },
      { q: "Why do I need brand guidelines?", a: "Brand guidelines ensure that everyone who creates content for your brand — whether it's your team, a printer, or a marketing agency — applies your brand elements consistently, maintaining a professional image." },
      { q: "Can you rebrand an existing business?", a: "Absolutely. We handle complete rebranding projects — from strategic brand positioning to designing an entirely new visual identity that better represents your business's current direction and goals." },
    ],
    relatedServices: ["logo-design-sri-lanka", "company-profile-design-sri-lanka", "social-media-design-sri-lanka"],
    parentLink: { label: "Graphic Design Sri Lanka", path: "/graphic-design-sri-lanka" },
  },
  {
    slug: "company-profile-design-sri-lanka",
    shortName: "Company Profile",
    seoTitle: "Company Profile Design Sri Lanka | Business Profiles",
    metaDescription: "Professional company profile designs for corporate branding and presentations.",
    h1: "Company Profile Design Sri Lanka – Professional Business Profiles That Impress",
    intro: "A professionally designed company profile is one of the most powerful tools for building credibility with clients, investors, and partners. It tells your brand story, showcases your services, highlights achievements, and creates a lasting impression. At Cypher Digital, we design company profiles that combine compelling content structure with stunning visuals. Whether you need a printed corporate brochure or a digital PDF for email and presentations, we create profiles that reflect the quality and professionalism of your business. Our designs are clean, modern, and structured to guide readers through your brand story effectively.",
    benefits: [
      "Professional layouts that reflect corporate credibility",
      "Both print-ready and digital PDF versions delivered",
      "Custom infographics and data visualization",
      "Consistent branding throughout the document",
      "Optimized for presentations, proposals, and client meetings",
      "Available in A4, A5, and custom sizes",
      "Content structuring assistance included",
      "Quick turnaround — typically 5–7 business days",
    ],
    processSteps: [
      { title: "Content Planning", desc: "We review your existing materials and help structure the content flow — company overview, services, team, achievements, clients, and contact information." },
      { title: "Layout Design", desc: "We create a visual layout that balances text, images, infographics, and white space for maximum readability and professional impact." },
      { title: "Revisions & Polish", desc: "We refine the design based on your feedback, ensuring every page looks perfect and the overall document tells a cohesive brand story." },
      { title: "Final Delivery", desc: "You receive print-ready files (with bleed and crop marks) and a digital PDF optimized for email sharing and on-screen viewing." },
    ],
    faqs: [
      { q: "How many pages should a company profile have?", a: "Most effective company profiles are 8–16 pages. This gives enough space to cover your story, services, team, achievements, and case studies without overwhelming the reader." },
      { q: "How much does company profile design cost?", a: "Company profile design starts from LKR 25,000 for a standard 8-page profile. Pricing depends on page count, complexity, and whether you need content writing assistance." },
      { q: "Do you write the content too?", a: "We provide content structuring and editing guidance. If you need full copywriting, we can arrange that as an add-on service to ensure your profile communicates effectively." },
      { q: "Can I update the profile later?", a: "Yes, we deliver editable source files so you can make text updates. We also offer affordable update packages if you need design changes in the future." },
      { q: "What format will I receive?", a: "You'll receive print-ready PDF files with proper bleed and resolution, a digital PDF optimized for screens, and the editable source file (InDesign or equivalent)." },
    ],
    relatedServices: ["brand-identity-design-sri-lanka", "presentation-design-sri-lanka", "brochure-design-sri-lanka"],
    parentLink: { label: "Graphic Design Sri Lanka", path: "/graphic-design-sri-lanka" },
  },

  // ── Social Media Design ──
  {
    slug: "social-media-design-sri-lanka",
    shortName: "Social Media Design",
    seoTitle: "Social Media Design Sri Lanka | Creative Post Designs",
    metaDescription: "High-quality social media post and ad designs for Facebook, Instagram & more.",
    h1: "Social Media Design Sri Lanka – Scroll-Stopping Designs for Every Platform",
    intro: "In the fast-scrolling world of social media, your visuals have less than 2 seconds to capture attention. Generic, template-based designs get ignored — but professionally crafted social media graphics stop the scroll, drive engagement, and build brand recognition. At Cypher Digital, we design custom social media content for Facebook, Instagram, TikTok, LinkedIn, and more. From daily post designs and story graphics to carousel content and cover photos, we create visuals that are on-brand, platform-optimized, and designed to perform. Our designs follow each platform's specifications and best practices to maximize reach and engagement.",
    benefits: [
      "Custom designs for every major social media platform",
      "Platform-optimized dimensions and specifications",
      "Consistent brand aesthetic across all channels",
      "Designed for engagement — bold visuals, clear messaging",
      "Monthly content calendar support available",
      "Story, reel cover, and carousel design included",
      "Quick turnaround — most designs within 24 hours",
      "Unlimited revisions on every design",
    ],
    processSteps: [
      { title: "Brand & Content Brief", desc: "We review your brand guidelines, content calendar, and campaign goals to understand the visual direction and messaging requirements." },
      { title: "Design Creation", desc: "Our designers create eye-catching social media graphics optimized for each platform's specifications and your audience's preferences." },
      { title: "Review & Refinement", desc: "You review the designs and request any changes — we offer unlimited revisions to ensure every piece is perfect before posting." },
      { title: "Delivery & Scheduling", desc: "Designs are delivered in ready-to-post formats. We can also coordinate with your social media team for seamless content scheduling." },
    ],
    faqs: [
      { q: "What platforms do you design for?", a: "We design for Facebook, Instagram, TikTok, LinkedIn, Twitter/X, YouTube, and Pinterest. Each design is optimized for the specific platform's dimensions and best practices." },
      { q: "How much does social media design cost?", a: "Individual post designs start from LKR 3,000. We also offer monthly packages (10, 20, or 30 designs per month) with significant savings starting from LKR 25,000/month." },
      { q: "Can you match my existing brand style?", a: "Absolutely. We work from your brand guidelines to ensure every design is consistent with your established visual identity — colors, fonts, imagery style, and tone." },
      { q: "Do you create content calendars?", a: "Yes, we can create visual content calendars with post designs planned and designed in advance, making your social media management much more efficient." },
      { q: "How fast can you deliver?", a: "Standard turnaround is 24 hours per design. Rush delivery (same day) is available for urgent campaigns at a small additional fee." },
    ],
    relatedServices: ["facebook-ad-design-sri-lanka", "instagram-post-design-sri-lanka", "brand-identity-design-sri-lanka"],
    parentLink: { label: "Graphic Design Sri Lanka", path: "/graphic-design-sri-lanka" },
  },
  {
    slug: "facebook-ad-design-sri-lanka",
    shortName: "Facebook Ad Design",
    seoTitle: "Facebook Ad Design Sri Lanka | High-Converting Ads",
    metaDescription: "Engaging Facebook ad creatives designed to increase clicks and conversions.",
    h1: "Facebook Ad Design Sri Lanka – High-Converting Ad Creatives That Drive Results",
    intro: "Your Facebook ad creative is the single biggest factor that determines whether someone stops scrolling, clicks, and converts — or keeps scrolling past your ad. Even with perfect targeting and budget, weak visuals will waste your ad spend. At Cypher Digital, we design Facebook ad creatives that are engineered to convert. We understand what works in Sri Lankan and global markets — from color psychology and visual hierarchy to text overlay best practices and Meta's ad guidelines. Whether you're running lead generation campaigns, product promotions, or retargeting ads, our designs maximize your click-through rates and reduce your cost per result.",
    benefits: [
      "Designed to maximize CTR and reduce cost per click",
      "Compliant with Meta's ad creative guidelines (text ratio, formats)",
      "A/B test variations to optimize performance",
      "Single image, carousel, and video thumbnail designs",
      "Attention-grabbing visuals with clear calls-to-action",
      "Optimized for both feed and Stories placements",
      "Fast turnaround — ad creatives within 24–48 hours",
      "Data-informed design based on ad performance best practices",
    ],
    processSteps: [
      { title: "Campaign Brief", desc: "We understand your campaign objective, target audience, offer, and key messaging to craft ad creatives that align with your marketing goals." },
      { title: "Creative Design", desc: "We design multiple ad creative variations — testing different visual approaches, headlines, and CTAs to find the best-performing combination." },
      { title: "Review & Optimize", desc: "You review the designs and we refine based on feedback. We also ensure all creatives comply with Meta's advertising policies." },
      { title: "Deliver & Test", desc: "Creatives are delivered in all required formats and dimensions. We recommend running A/B tests to identify the highest-converting designs." },
    ],
    faqs: [
      { q: "What makes a Facebook ad design effective?", a: "Effective Facebook ads combine attention-grabbing visuals, clear value propositions, strong calls-to-action, and compliance with Meta's guidelines. The design must stop the scroll within 1–2 seconds and communicate the offer instantly." },
      { q: "How much does Facebook ad design cost?", a: "Facebook ad creative design starts from LKR 5,000 per design. Campaign packages with multiple variations for A/B testing start from LKR 15,000." },
      { q: "Do you design carousel ads?", a: "Yes, we design all Facebook ad formats including single image ads, carousel ads (multiple cards), collection ads, and story/reel ad creatives." },
      { q: "Can you redesign my underperforming ads?", a: "Yes, we analyze your current ad creatives, identify issues with visual hierarchy, messaging, or compliance, and redesign them for better performance." },
      { q: "Do you follow Meta's ad policies?", a: "Yes, all our ad creatives are designed to comply with Meta's advertising policies, including text-to-image ratios, restricted content guidelines, and format specifications." },
    ],
    relatedServices: ["social-media-design-sri-lanka", "instagram-post-design-sri-lanka", "banner-design-sri-lanka"],
    parentLink: { label: "Graphic Design Sri Lanka", path: "/graphic-design-sri-lanka" },
  },
  {
    slug: "instagram-post-design-sri-lanka",
    shortName: "Instagram Design",
    seoTitle: "Instagram Post Design Sri Lanka | Creative Visuals",
    metaDescription: "Eye-catching Instagram posts and story designs to boost engagement.",
    h1: "Instagram Post Design Sri Lanka – Creative Visuals That Boost Engagement",
    intro: "Instagram is a visual-first platform where aesthetics directly impact your reach, engagement, and follower growth. A cohesive, professionally designed Instagram feed builds brand authority and turns casual browsers into loyal followers and customers. At Cypher Digital, we design Instagram content that combines stunning visuals with strategic messaging. From feed posts and carousels to Stories, Reels covers, and Highlights icons, we create a complete visual experience that makes your brand stand out on the most visual social media platform in Sri Lanka.",
    benefits: [
      "Feed-worthy designs that create a cohesive grid aesthetic",
      "Instagram Stories and Highlights cover designs",
      "Carousel post designs for educational and promotional content",
      "Reels cover designs for consistent video branding",
      "Optimized for Instagram's algorithm — engagement-focused",
      "Hashtag strategy consultation included",
      "Monthly content packages available",
      "On-brand consistency across every post",
    ],
    processSteps: [
      { title: "Profile Audit & Strategy", desc: "We review your current Instagram presence, analyze competitors, and define a visual content strategy aligned with your brand and audience." },
      { title: "Template & Grid Design", desc: "We create a set of reusable post templates and plan a grid layout strategy that gives your profile a polished, professional look." },
      { title: "Content Design", desc: "We design individual posts, stories, carousels, and highlight covers according to your content calendar and campaign goals." },
      { title: "Delivery & Optimization", desc: "Designs are delivered in Instagram-optimized dimensions with caption suggestions and hashtag recommendations for maximum reach." },
    ],
    faqs: [
      { q: "What Instagram content do you design?", a: "We design feed posts (square, portrait, landscape), carousel posts, Instagram Stories, Reels covers, Highlights icons, profile headers, and promotional graphics for Instagram ads." },
      { q: "How much does Instagram post design cost?", a: "Individual Instagram post designs start from LKR 3,000. Monthly packages with 15–30 posts, stories, and carousel designs start from LKR 30,000/month." },
      { q: "Can you create a consistent Instagram aesthetic?", a: "Yes, we specialize in creating cohesive Instagram grid aesthetics. We develop a visual template system with consistent colors, fonts, and layouts that make your profile look professionally curated." },
      { q: "Do you design Instagram Stories?", a: "Yes, we design custom Instagram Story graphics for promotions, announcements, behind-the-scenes content, polls, and interactive story sequences." },
      { q: "Can you help with Instagram Reels?", a: "We design Reels cover images and thumbnail graphics to maintain visual consistency. For Reels video production, we can collaborate with our video production team." },
    ],
    relatedServices: ["social-media-design-sri-lanka", "facebook-ad-design-sri-lanka", "brand-identity-design-sri-lanka"],
    parentLink: { label: "Graphic Design Sri Lanka", path: "/graphic-design-sri-lanka" },
  },

  // ── Placeholder entries for remaining 13 services (to be built next) ──
  // These have slug + shortName + SEO meta defined so the full list is available
  // for internal linking and the main page, but content will be added in the next batch.
];

/** All 19 sub-service definitions for navigation/linking purposes */
export const allDesignServiceMeta: { slug: string; shortName: string; seoTitle: string; metaDescription: string; h1: string }[] = [
  { slug: "logo-design-sri-lanka", shortName: "Logo Design", seoTitle: "Logo Design Sri Lanka | Custom Logo Designers", metaDescription: "Creative logo design services in Sri Lanka to build strong brand identity.", h1: "Logo Design Sri Lanka – Custom Logo Design Services" },
  { slug: "brand-identity-design-sri-lanka", shortName: "Brand Identity", seoTitle: "Brand Identity Design Sri Lanka | Branding Experts", metaDescription: "Complete brand identity design services including logos, colors & brand systems.", h1: "Brand Identity Design Sri Lanka" },
  { slug: "company-profile-design-sri-lanka", shortName: "Company Profile", seoTitle: "Company Profile Design Sri Lanka | Business Profiles", metaDescription: "Professional company profile designs for corporate branding and presentations.", h1: "Company Profile Design Sri Lanka" },
  { slug: "social-media-design-sri-lanka", shortName: "Social Media Design", seoTitle: "Social Media Design Sri Lanka | Creative Post Designs", metaDescription: "High-quality social media post and ad designs for Facebook, Instagram & more.", h1: "Social Media Design Sri Lanka" },
  { slug: "facebook-ad-design-sri-lanka", shortName: "Facebook Ad Design", seoTitle: "Facebook Ad Design Sri Lanka | High-Converting Ads", metaDescription: "Engaging Facebook ad creatives designed to increase clicks and conversions.", h1: "Facebook Ad Design Sri Lanka" },
  { slug: "instagram-post-design-sri-lanka", shortName: "Instagram Design", seoTitle: "Instagram Post Design Sri Lanka | Creative Visuals", metaDescription: "Eye-catching Instagram posts and story designs to boost engagement.", h1: "Instagram Post Design Sri Lanka" },
  { slug: "banner-design-sri-lanka", shortName: "Banner Design", seoTitle: "Banner Design Sri Lanka | Display & Web Banners", metaDescription: "Professional banner ad designs for websites, Google ads & campaigns.", h1: "Banner Design Sri Lanka" },
  { slug: "email-design-sri-lanka", shortName: "Email Design", seoTitle: "Email Newsletter Design Sri Lanka | EDM Design", metaDescription: "Creative email template and newsletter designs for marketing campaigns.", h1: "Email Newsletter Design Sri Lanka" },
  { slug: "landing-page-design-sri-lanka", shortName: "Landing Page Design", seoTitle: "Landing Page Design Sri Lanka | Conversion Focused", metaDescription: "High-converting landing page design services to generate leads and sales.", h1: "Landing Page Design Sri Lanka" },
  { slug: "ui-ux-design-sri-lanka", shortName: "UI/UX Design", seoTitle: "UI UX Design Sri Lanka | Website & App Design", metaDescription: "User-friendly UI/UX design for websites, apps and digital platforms.", h1: "UI UX Design Sri Lanka" },
  { slug: "website-ui-design-sri-lanka", shortName: "Website UI Design", seoTitle: "Website UI Design Sri Lanka | Modern Web Design", metaDescription: "Modern website UI designs that improve user experience and conversions.", h1: "Website UI Design Sri Lanka" },
  { slug: "flyer-design-sri-lanka", shortName: "Flyer Design", seoTitle: "Flyer Design Sri Lanka | Brochure & Poster Design", metaDescription: "Professional flyer, brochure and poster design services in Sri Lanka.", h1: "Flyer Design Sri Lanka" },
  { slug: "brochure-design-sri-lanka", shortName: "Brochure Design", seoTitle: "Brochure Design Sri Lanka | Corporate Print Design", metaDescription: "Creative brochure designs for marketing, corporate and product promotions.", h1: "Brochure Design Sri Lanka" },
  { slug: "poster-design-sri-lanka", shortName: "Poster Design", seoTitle: "Poster Design Sri Lanka | Creative Advertising Posters", metaDescription: "Eye-catching poster designs for events, promotions and advertising.", h1: "Poster Design Sri Lanka" },
  { slug: "packaging-design-sri-lanka", shortName: "Packaging Design", seoTitle: "Packaging Design Sri Lanka | Product Packaging Experts", metaDescription: "Professional product packaging and label design services in Sri Lanka.", h1: "Packaging Design Sri Lanka" },
  { slug: "motion-graphics-sri-lanka", shortName: "Motion Graphics", seoTitle: "Motion Graphics Sri Lanka | Animated Video Design", metaDescription: "Creative motion graphics, animated ads and explainer videos.", h1: "Motion Graphics Sri Lanka" },
  { slug: "video-ad-design-sri-lanka", shortName: "Video Ad Design", seoTitle: "Video Ad Design Sri Lanka | Creative Video Ads", metaDescription: "High-impact video ad creatives for social media and campaigns.", h1: "Video Ad Design Sri Lanka" },
  { slug: "presentation-design-sri-lanka", shortName: "Presentation Design", seoTitle: "Presentation Design Sri Lanka | PowerPoint Experts", metaDescription: "Professional PowerPoint and pitch deck design services.", h1: "Presentation Design Sri Lanka" },
  { slug: "infographic-design-sri-lanka", shortName: "Infographic Design", seoTitle: "Infographic Design Sri Lanka | Visual Data Design", metaDescription: "Creative infographic designs to present data visually and clearly.", h1: "Infographic Design Sri Lanka" },
];
