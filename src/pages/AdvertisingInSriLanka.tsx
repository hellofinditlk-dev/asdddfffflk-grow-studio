import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";

const AdvertisingInSriLanka = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Advertising in Sri Lanka: The Complete Guide to Digital Advertising for Businesses",
      description: "Comprehensive guide to advertising in Sri Lanka covering digital advertising, social media ads, search engine advertising, and industry-specific strategies for business growth.",
      author: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      mainEntityOfPage: "https://cypherdigital.lk/advertising-in-sri-lanka",
      datePublished: "2025-03-16",
      dateModified: "2025-03-16",
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <>
      <SEOHead
        title="Advertising in Sri Lanka | Complete Digital Advertising Guide 2025"
        description="Learn about advertising in Sri Lanka. Comprehensive guide to digital advertising strategies, social media ads, search engine advertising, and industry-specific marketing for Sri Lankan businesses."
        canonical="https://cypherdigital.lk/advertising-in-sri-lanka"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background via-secondary to-background py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            <a href="https://cypherdigital.lk/" className="text-primary hover:underline">Advertising in Sri Lanka</a>: The Complete Guide to Digital Advertising for Businesses
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how modern digital advertising strategies help Sri Lankan businesses increase brand awareness, attract customers, and drive measurable growth.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-12">

          {/* Introduction */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              <a href="https://cypherdigital.lk/" className="text-primary font-semibold hover:underline">Advertising in Sri Lanka</a> has evolved dramatically over the past decade. Businesses are no longer limited to traditional advertising channels such as television, radio, and newspapers. Today, digital platforms allow businesses to reach their target audience more efficiently through data-driven campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Companies that invest in modern advertising strategies can increase brand awareness, attract customers, and generate measurable business growth. Whether you run a hotel, restaurant, ecommerce store, or real estate business, advertising plays a critical role in connecting your brand with potential customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This guide explains how advertising works in Sri Lanka and how businesses can use modern marketing strategies to achieve better results.
            </p>
          </section>

          {/* Types of Advertising */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Types of Advertising in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Businesses in Sri Lanka use several advertising methods depending on their goals, target audience, and marketing budget.
            </p>

            <h3 className="font-heading text-xl font-bold mt-8 mb-3">Digital Advertising</h3>
            <p className="text-muted-foreground leading-relaxed">
              Digital advertising is now the fastest-growing advertising channel in Sri Lanka. Online platforms allow businesses to target specific audiences based on demographics, interests, and online behavior.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-3">
              <li>Search engine advertising</li>
              <li>Social media advertising</li>
              <li>Display advertising</li>
              <li>Video advertising</li>
              <li>Influencer marketing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Digital advertising allows businesses to reach customers at the exact moment they are searching for products or services.
            </p>

            <h3 className="font-heading text-xl font-bold mt-8 mb-3">Social Media Advertising</h3>
            <p className="text-muted-foreground leading-relaxed">
              Social media platforms have become powerful advertising channels in Sri Lanka. Businesses can promote products and services directly to their audience through engaging content and targeted advertising campaigns.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-3">
              <li><Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook advertising</Link></li>
              <li>Instagram advertising</li>
              <li>TikTok advertising</li>
              <li>YouTube advertising</li>
              <li>LinkedIn advertising</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Social media advertising allows businesses to increase brand awareness and build relationships with their audience.
            </p>

            <h3 className="font-heading text-xl font-bold mt-8 mb-3">Search Engine Advertising</h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Search engine advertising</Link> helps businesses appear when customers search online for products or services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              For example, when people search for terms like <strong>advertising agency Sri Lanka</strong>, <strong>digital marketing services Sri Lanka</strong>, or <strong>online marketing Sri Lanka</strong>, search engine ads appear at the top of search results.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Search advertising is highly effective because it targets users who already have strong purchase intent.
            </p>
          </section>

          {/* Why Advertising Is Important */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Why Advertising Is Important for Businesses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Advertising plays an essential role in business growth and brand development. Benefits of advertising include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Increased brand awareness</li>
              <li>Higher customer engagement</li>
              <li>Improved online visibility</li>
              <li>Increased website traffic</li>
              <li>Higher sales and conversions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses that invest in effective advertising strategies often outperform competitors that rely only on traditional marketing.
            </p>
          </section>

          {/* Industry-Specific Advertising */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Industry-Specific Advertising Strategies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Different industries require different advertising strategies because customer behavior and marketing channels vary across sectors.
            </p>

            <div className="space-y-8">
              {[
                { title: "Hotel Advertising", desc: "Hotels must promote their services to travelers searching for accommodation online. Digital marketing strategies such as social media campaigns, search engine advertising, and travel content marketing can significantly increase bookings.", link: "/hotel-digital-marketing-sri-lanka", cta: "hotel digital marketing strategies in Sri Lanka" },
                { title: "Travel Agency Advertising", desc: "Travel agencies need to inspire potential travelers and promote destinations effectively through digital campaigns.", link: "/travel-agency-digital-marketing-sri-lanka", cta: "travel agency digital marketing in Sri Lanka" },
                { title: "Fashion Brand Advertising", desc: "Fashion brands depend heavily on visual marketing strategies and influencer collaborations to build their brand identity.", link: "/fashion-brand-digital-marketing-sri-lanka", cta: "fashion brand digital marketing" },
                { title: "Restaurant Advertising", desc: "Restaurants attract customers through social media engagement, food photography, and local search marketing.", link: "/restaurant-digital-marketing-sri-lanka", cta: "restaurant digital marketing strategies" },
                { title: "Real Estate Advertising", desc: "Property buyers now search online before contacting real estate agents. Digital marketing allows real estate companies to showcase listings and generate qualified leads.", link: "/real-estate-digital-marketing-sri-lanka", cta: "real estate digital marketing strategies in Sri Lanka" },
                { title: "Education Marketing", desc: "Education institutions must promote courses and attract students through digital platforms including social media, SEO, and targeted advertising.", link: "/education-marketing-agency-sri-lanka", cta: "education marketing strategies for institutes" },
                { title: "Beauty Salon Advertising", desc: "Beauty salons rely on social media marketing to showcase transformations and promote services to local customers.", link: "/beauty-salon-digital-marketing-sri-lanka", cta: "beauty salon digital marketing strategies" },
                { title: "Automotive Advertising", desc: "Automotive businesses promote vehicles through targeted advertising, search engine marketing, and video marketing.", link: "/automotive-digital-marketing-sri-lanka", cta: "automotive digital marketing strategies" },
                { title: "Small Business Advertising", desc: "Small businesses can use digital marketing to compete with larger companies and reach local customers cost-effectively.", link: "/small-business-digital-marketing-sri-lanka", cta: "small business digital marketing strategies" },
                { title: "Ecommerce Advertising", desc: "Online stores depend heavily on advertising to attract traffic and increase online sales through SEO, paid ads, and social media.", link: "/ecommerce-digital-marketing-sri-lanka", cta: "ecommerce digital marketing strategies" },
              ].map((item) => (
                <div key={item.link}>
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  <p className="mt-2">
                    <Link to={item.link} className="text-primary font-semibold hover:underline">
                      Learn more about {item.cta} →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Digital Advertising Trends */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Digital Advertising Trends in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The advertising industry continues to evolve as new technologies and platforms emerge. Important trends include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Short-form video advertising</li>
              <li>Influencer marketing campaigns</li>
              <li>AI-driven advertising</li>
              <li>Personalized marketing campaigns</li>
              <li>Mobile-first advertising strategies</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses that adapt to these trends can reach modern consumers more effectively.
            </p>
          </section>

          {/* Choosing the Right Agency */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Choosing the Right Advertising Agency</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Working with a professional advertising agency can help businesses develop effective marketing strategies and achieve measurable results. A professional agency provides services such as:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">Social media management</Link></li>
              <li><Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook advertising</Link></li>
              <li><Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads management</Link></li>
              <li><Link to="/seo-services-sri-lanka" className="text-primary hover:underline">Search engine optimization</Link></li>
              <li><Link to="/video-production-sri-lanka" className="text-primary hover:underline">Video marketing</Link></li>
              <li><Link to="/graphic-design-sri-lanka" className="text-primary hover:underline">Graphic design</Link></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These services help businesses maximize their advertising investment and generate measurable ROI.
            </p>
          </section>

          {/* Future of Advertising */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">The Future of Advertising in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed">
              The future of <a href="https://cypherdigital.lk/" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</a> will continue to be driven by digital technologies and data-driven marketing strategies. Businesses that adopt modern advertising methods will have a competitive advantage in reaching customers and building strong brands.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Advertising will continue to evolve as platforms introduce new tools and technologies that improve targeting, personalization, and campaign performance.
            </p>
          </section>
        </div>

        {/* CTA + Inquiry Form */}
        <section className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Grow Your Business with Cypher Digital
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cypher Digital helps businesses grow through innovative digital advertising strategies. Our team specializes in creating customized marketing campaigns designed to increase visibility, generate leads, and drive business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you want to improve your advertising strategy and attract more customers, contact Cypher Digital today to learn how our digital marketing solutions can help your business succeed.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Get a Free Consultation</h3>
              <InquiryForm service="Advertising" />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default AdvertisingInSriLanka;
