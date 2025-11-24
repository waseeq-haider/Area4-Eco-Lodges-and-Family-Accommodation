// Final Mockup Images
import mockupMain from "@/assets/Eco Lodges & Family Accommodation.png";
import area4_01 from "@/assets/area4_01.png";
import area4_02 from "@/assets/area4_02.png";
import area4_03 from "@/assets/area4_03.png";
import mockup2 from "@/assets/2.png";
import floorPlan from "@/assets/floorplan.png";

// Feature Images
import ecoCabins from "@/assets/Eco-friendly cabins with solar panels, AC, and Wi-Fi.jfif";
import landscaping from "@/assets/Landscaped with native shrubs and flowering plants.jfif";
import privateGardens from "@/assets/Private garden spaces and outdoor decks.jfif";

// Specific Items
import solarArray from "@/assets/SOLAR ARRAY & BATTERY STORAGE.jfif";
import rainwater from "@/assets/RAINWATER COLLECTION TANKS (50,000L).jfif";
import decking from "@/assets/PRIVATE GARDENS & DECKING.jfif";

// Reference Images
import plantingRef from "@/assets/Planting Kangaroo Paw, Grevillea, Callistemon.jfif";
import groundSurfaces from "@/assets/Ground surfaces timber decking, gravel paths, native grass.jfif";
import designers from "@/assets/Designed by Sandara Passos and Veronica Bosque.jfif";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  // Final Mockups - Overview
  { src: mockupMain, alt: "Eco Lodges & Family Accommodation - Main View", category: "Overview" },
  { src: area4_01, alt: "Area 4 - Perspective 1", category: "Overview" },
  { src: area4_02, alt: "Area 4 - Perspective 2", category: "Overview" },
  { src: area4_03, alt: "Area 4 - Perspective 3", category: "Overview" },
  { src: mockup2, alt: "Eco Lodge Layout View", category: "Overview" },
  { src: floorPlan, alt: "Floor Plan - Eco Lodges", category: "Floor Plans" },

  // Features
  { src: ecoCabins, alt: "Eco-friendly Cabins with Solar Panels, AC, and Wi-Fi", category: "Features" },
  { src: landscaping, alt: "Native Shrubs and Flowering Plants", category: "Features" },
  { src: privateGardens, alt: "Private Garden Spaces and Outdoor Decks", category: "Features" },

  // Specific Items
  { src: solarArray, alt: "Solar Array & Battery Storage", category: "Sustainability" },
  { src: rainwater, alt: "Rainwater Collection Tanks (50,000L)", category: "Sustainability" },
  { src: decking, alt: "Private Gardens & Decking", category: "Amenities" },

  // References
  { src: plantingRef, alt: "Native Planting: Kangaroo Paw, Grevillea, Callistemon", category: "References" },
  { src: groundSurfaces, alt: "Ground Surfaces: Timber Decking, Gravel Paths, Native Grass", category: "References" },
  { src: designers, alt: "Designed by Sandara Passos and Veronica Bosque", category: "References" }
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">Image Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Explore the complete visual documentation of Area 4 - Eco Lodges & Family Accommodation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                  <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ''}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
