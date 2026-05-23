"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { CheckCircle, Heart, Smartphone, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Menu", id: "#menu" },
        { name: "About", id: "#about" },
        { name: "Benefits", id: "#features" },
        { name: "Reviews", id: "#reviews" },
        { name: "FAQ", id: "#faq" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Golden Deli & Grocery"
      button={{
        text: "Order Now",        href: "#menu"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{ variant: "gradient-bars" }}
      title="Wilmington's Finest Deli & Grocery"
      description="Experience premium quality deli classics and fresh daily groceries, now available for easy online ordering."
      testimonials={[
        { name: "John D.", handle: "@google-maps", testimonial: "The best deli in Wilmington! Always fresh.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-table_23-2150857766.jpg?_wi=1", imageAlt: "delicatessen interior warm" },
        { name: "Sarah K.", handle: "@google-maps", testimonial: "Authentic, high-quality, and delicious.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/black-green-olives-bowl-glass-counter_23-2147916294.jpg?_wi=1", imageAlt: "delicatessen interior warm" },
        { name: "Mike R.", handle: "@google-maps", testimonial: "Consistent flavors and great service.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cut-tomato-avocado-salad_23-2148585813.jpg", imageAlt: "delicatessen interior warm" }
      ]}
      buttons={[{ text: "Browse Menu", href: "#menu" }, { text: "Call Now", href: "tel:3025550198" }]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-food-table_23-2150857766.jpg?_wi=2"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Passion for Quality"
      description="Located at 103 Vandever Ave, we pride ourselves on serving fresh, made-to-order sandwiches and everyday grocery essentials to the local Wilmington community."
      metrics={[
        { value: "100%", title: "Fresh Ingredients" },
        { value: "50+", title: "Menu Items" },
        { value: "10+", title: "Years Serving" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-green-olives-bowl-glass-counter_23-2147916294.jpg?_wi=2"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      title="Elevated Deli Experience"
      description="We combine traditional craftsmanship with modern efficiency to provide the best neighborhood grocery experience."
      features={[
        { icon: CheckCircle, title: "Artisan Quality", description: "Hand-selected ingredients prepared fresh throughout the day." },
        { icon: Zap, title: "Instant Ordering", description: "Seamless mobile-friendly interface for quick pickup." },
        { icon: ShieldCheck, title: "Community Trust", description: "A decade of serving Wilmington with honesty and excellence." },
        { icon: Sparkles, title: "Premium Selection", description: "A wide variety of snacks, deli items, and daily essentials." }
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Cheeseburger Deluxe", price: "$6.50", variant: "Classic Deli Style", imageSrc: "http://img.b2bpic.net/free-photo/meat-burger-wooden-board-lettuce-tomato-cheese-french-fries-ketchup-side-view_141793-3157.jpg" },
        { id: "p2", name: "Chicken Tenders(6)", price: "$7.99", variant: "Golden Crispy", imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-chicken-wings-cutting-board-with-tomatoes-dark-background-burger-food-meal-sandwich-lunch-salad-horizontal_140725-158663.jpg" }
      ]}
      title="Our Online Menu"
      description="Discover our signature deli classics, available for immediate order."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", title: "Great Food!", quote: "The food is consistently excellent and fresh.", name: "John D.", role: "Local Resident", imageSrc: "http://img.b2bpic.net/free-photo/people-taking-photos-food_23-2149303528.jpg" },
        { id: "t2", title: "My Favorite!", quote: "Best deli sandwich in Wilmington hands down.", name: "Sarah K.", role: "Customer", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-delicious-cocktail_23-2150166188.jpg" }
      ]}
      title="Community Love"
      description="What our neighbors are saying about our service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you offer delivery?", content: "Yes, we offer delivery services through local partners." },
        { id: "q2", title: "Can I order for pickup?", content: "Absolutely! You can order online and pick up at 103 Vandever Ave." },
        { id: "q3", title: "What are your hours?", content: "We are open daily for your convenience, check our contact page for specifics." },
        { id: "q4", title: "Is there a loyalty program?", content: "Stay tuned to our newsletter for upcoming community rewards." }
      ]}
      faqsAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about our deli and grocery store."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch"
      description="Need a bulk order or have a special request? Send us a message."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Your Message", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/organic-harvest-swift-delivery_482257-76156.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Golden Deli & Grocery"
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Contact", href: "#contact" }] },
        { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Privacy", href: "#" }] },
      ]}
      copyrightText="© 2025 Golden Deli & Grocery"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}