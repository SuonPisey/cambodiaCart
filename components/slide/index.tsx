"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  badge?: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "New Launch",
    title: "Revolutionary Design Meets Performance",
    description:
      "Experience the next generation of innovation. Built for creators, designed for excellence.",
    primaryCta: "Shop Now",
    secondaryCta: "Learn More",
    image: "/img/modern-sleek-product-hero-shot.jpg",
    imageAlt: "Featured product showcase",
  },
  {
    id: 2,
    badge: "Limited Edition",
    title: "Crafted for the Bold",
    description:
      "Exclusive collection that pushes boundaries. Premium quality meets cutting-edge technology.",
    primaryCta: "Explore Collection",
    secondaryCta: "View Details",
    image: "/img/luxury-product-photography-dark-background.jpg",
    imageAlt: "Limited edition product",
  },
  {
    id: 3,
    badge: "Best Seller",
    title: "Trusted by Thousands",
    description:
      "Join the community of satisfied customers. Proven performance, unmatched reliability.",
    primaryCta: "Get Started",
    secondaryCta: "See Reviews",
    image: "/img/popular-product-lifestyle-shot.jpg",
    imageAlt: "Best selling product",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleNavigation = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    direction === "prev" ? prevSlide() : nextSlide();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-3xl">
                  {slide.badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6 animate-fade-in-up">
                      <span className="text-sm font-medium text-secondary-foreground">
                        {slide.badge}
                      </span>
                    </div>
                  )}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:300ms]">
                    <Button
                      size="lg"
                      className="text-base md:text-lg px-8 py-6 h-auto font-semibold"
                    >
                      {slide.primaryCta}
                    </Button>
                    {slide.secondaryCta && (
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-base md:text-lg px-8 py-6 h-auto font-semibold bg-transparent"
                      >
                        {slide.secondaryCta}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-16 pointer-events-none z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleNavigation("prev")}
          className="pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleNavigation("next")}
          className="pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-12 bg-foreground"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-6 md:right-12 lg:right-16 z-20">
        <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
          <span className="text-sm font-mono font-medium text-foreground">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
