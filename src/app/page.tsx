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
import { CheckCircle, Heart, Smartphone } from "lucide-react";

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
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Golden Deli & Grocery"
      button={{
        text: "Order Now",
        href: "#menu",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Wilmington's Finest Deli & Grocery"
      description="Experience premium quality deli classics and fresh daily groceries, now available for easy online ordering."
      testimonials={[
        {
          name: "John D.",
          handle: "@google-maps",
          testimonial: "The best deli in Wilmington! Always fresh.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-table_23-2150857766.jpg",
          imageAlt: "delicatessen interior warm",
        },
        {
          name: "Sarah K.",
          handle: "@google-maps",
          testimonial: "Authentic, high-quality, and delicious.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-green-olives-bowl-glass-counter_23-2147916294.jpg",
          imageAlt: "delicatessen interior warm",
        },
        {
          name: "Mike R.",
          handle: "@google-maps",
          testimonial: "Consistent flavors and great service.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cut-tomato-avocado-salad_23-2148585813.jpg",
          imageAlt: "delicatessen interior warm",
        },
        {
          name: "Elena V.",
          handle: "@google-maps",
          testimonial: "Golden Deli is my go-to for lunch.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-frame-with-delicious-food-copy-space_23-2148308807.jpg",
          imageAlt: "delicatessen interior warm",
        },
        {
          name: "David M.",
          handle: "@google-maps",
          testimonial: "Everything is fresh and tasty.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/customer-waiting-packed-groceries_482257-76166.jpg",
          imageAlt: "delicatessen interior warm",
        },
      ]}
      buttons={[
        {
          text: "Browse Menu",
          href: "#menu",
        },
        {
          text: "Call Now",
          href: "tel:3025550198",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-food-table_23-2150857766.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/assorted-food-basket-table_23-2147930091.jpg",
          alt: "Customer portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/buffet-catering_74190-2051.jpg",
          alt: "Customer portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/assorted-food-near-oils_23-2147930122.jpg",
          alt: "Customer portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-delicious-pie-plate_23-2149629045.jpg",
          alt: "Customer portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-taking-photos-food_23-2149303528.jpg",
          alt: "Customer portrait 5",
        },
      ]}
      avatarText="Join 500+ happy neighbors"
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Daily",
        },
        {
          type: "text",
          text: "Locally Sourced",
        },
        {
          type: "text",
          text: "Fast Delivery",
        },
        {
          type: "text",
          text: "Premium Quality",
        },
        {
          type: "text",
          text: "Community Focused",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Passion for Quality"
      description="Located at 103 Vandever Ave, we pride ourselves on serving fresh, made-to-order sandwiches and everyday grocery essentials to the local Wilmington community."
      metrics={[
        {
          value: "100%",
          title: "Fresh Ingredients",
        },
        {
          value: "50+",
          title: "Menu Items",
        },
        {
          value: "10+",
          title: "Years Serving",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-green-olives-bowl-glass-counter_23-2147916294.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Cheeseburger Deluxe",
          price: "$6.50",
          variant: "Classic Deli Style",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-burger-wooden-board-lettuce-tomato-cheese-french-fries-ketchup-side-view_141793-3157.jpg",
        },
        {
          id: "p2",
          name: "Chicken Tenders(6)",
          price: "$7.99",
          variant: "Golden Crispy",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-chicken-wings-cutting-board-with-tomatoes-dark-background-burger-food-meal-sandwich-lunch-salad-horizontal_140725-158663.jpg",
        },
        {
          id: "p3",
          name: "Mozzarella Sticks",
          price: "$7.00",
          variant: "10pcs",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-from-afar-pies-ketchup-appetizing-pies-french-fries-cutting-board-bowls-cheese-ketchup-black-pepper-lemon-grey-table_140725-110616.jpg",
        },
        {
          id: "p4",
          name: "Chicken Over Rice",
          price: "$10.99",
          variant: "Large Platter",
          imageSrc: "http://img.b2bpic.net/free-photo/rice-salad-with-tomato-cornolives-tuna-wooden-table_123827-35697.jpg",
        },
        {
          id: "p5",
          name: "Regular Wings(6 Pcs)",
          price: "$6.99",
          variant: "Crispy Wings",
          imageSrc: "http://img.b2bpic.net/free-photo/fork-holding-boneless-chicken-piece_23-2149973030.jpg",
        },
        {
          id: "p6",
          name: "Egg n Cheese",
          price: "$8.00",
          variant: "Breakfast",
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast-sandwich-made-with-bread-fried-egg-ham-lettuce_1150-25678.jpg",
        },
      ]}
      title="Our Online Menu"
      description="Order your favorite deli sandwiches, rice platters, and snacks online for quick pickup."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: CheckCircle,
          title: "Fresh Daily",
          description: "We ensure every item we serve meets high quality standards.",
        },
        {
          icon: Smartphone,
          title: "Online Ordering",
          description: "Order ahead and skip the line with our online platform.",
        },
        {
          icon: Heart,
          title: "Community Focus",
          description: "Proudly serving the Wilmington community with care.",
        },
      ]}
      title="Why Choose Us"
      description="We blend quality deli service with convenience to make your daily routine easier."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Great Food!",
          quote: "The food is consistently excellent and fresh.",
          name: "John D.",
          role: "Local Resident",
          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-photos-food_23-2149303528.jpg",
        },
        {
          id: "t2",
          title: "My Favorite!",
          quote: "Best deli sandwich in Wilmington hands down.",
          name: "Sarah K.",
          role: "Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-delicious-cocktail_23-2150166188.jpg",
        },
        {
          id: "t3",
          title: "So Fresh!",
          quote: "Love the rice platters, they are huge!",
          name: "Mike R.",
          role: "Regular",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-paper-wrapped-sandwich_23-2151309994.jpg",
        },
        {
          id: "t4",
          title: "Great Service!",
          quote: "Friendly staff and quick turnaround time.",
          name: "Elena V.",
          role: "Local",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13338.jpg",
        },
        {
          id: "t5",
          title: "The Best!",
          quote: "My daily lunch stop for a reason.",
          name: "David M.",
          role: "Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-food_23-2149536952.jpg",
        },
      ]}
      title="Community Love"
      description="What our neighbors are saying about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, we offer delivery services through local partners.",
        },
        {
          id: "q2",
          title: "Can I order for pickup?",
          content: "Absolutely! You can order online and pick up at 103 Vandever Ave.",
        },
        {
          id: "q3",
          title: "What are your hours?",
          content: "We open early for breakfast and stay open until late evening.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about our deli and grocery store."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch"
      description="Have questions or feedback? Reach out to us directly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/organic-harvest-swift-delivery_482257-76156.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Golden Deli & Grocery"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Golden Deli & Grocery"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
