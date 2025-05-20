import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import bbq from "../assets/bbq.png"
import bombayFood from "../assets/bombayFood.png"
import casaFiesta from "../assets/casaFiesta.png"
import chinese from "../assets/chinese.png"
import curry from "../assets/curry.png"
import goldenPanda from "../assets/goldenPanda.png"
import smokey from "../assets/smokey.png"
import roma from "../assets/roma.png"
import taco from "../assets/taco.png"
import tandooriFlames from "../assets/tandooriFlamees.png"
import banner from "../assets/banner.png"
import balloon1 from "../assets/balloon1.png"
import balloon2 from "../assets/balloon2.png"
import tables from "../assets/tandooriFlamees.png"
import club1 from "../assets/club1.png"
import houseDj from "../assets/houseDj.png"
import DjPulseNation from "../assets/DjPulseNation.png"
import karaoke from "../assets/karaoke.png"
import rockDj from "../assets/rockDj.png"
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"
import photo4 from "../assets/photo4.png"
import photoBooth from "../assets/photoBooth.png"
import bookingConfirmed from "../assets/bookingConfirmed.png"

export default function BuildYourParty() {
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  const [selection, setSelection] = useState({
    restaurant: "",
    decoration: "",
    dj: "",
    photographer: ""
  });
  const [modalContent, setModalContent] = useState(null);
  const [djFilter, setDjFilter] = useState("");
  const [photographerFilter, setPhotographerFilter] = useState("");

  const cuisineFilters = ["Indian", "Italian", "Chinese", "Mexican", "BBQ"];
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const allSteps = [
    {
      label: "Restaurant",
      options: [
        { name: "Tandoori Flames", price: 300, image: tandooriFlames, tags: ["Curry", "Vegetarian"] },
        { name: "Curry Junction", price: 280, image: curry, description: "Classic North Indian curries and tandoori specials.", tags: ["Spicy", "Traditional"] },
        { name: "Bombay Bites", price: 320, image: bombayFood, description: "Street food-style Indian meals with flair.", tags: ["Street Style", "Biryani"] },
        
        { name: "Golden Panda", price: 270, image: goldenPanda, description: "Elegant Chinese banquets and stir-fry classics.", tags: ["Banquet", "Soup"] },
        { name: "Taco Loco", price: 260, image: taco, description: "Bold and zesty Mexican plates for parties.", tags: ["Tacos", "Churros"] },
        { name: "Casa Fiesta", price: 280, image: casaFiesta, description: "Authentic Mexican street food and salsas.", tags: ["Street Style", "Spicy"] },
        { name: "Smokey’s Grill", price: 350, image: smokey, description: "Chargrilled meats and smokehouse BBQ.", tags: ["BBQ", "Grill"] },
        { name: "BBQ Junction", price: 330, image: bbq, description: "Classic ribs and southern BBQ goodness.", tags: ["Ribs", "Smoky"] },
        { name: "Roma Kitchen", price: 280, image: roma, description: "Traditional Italian dishes with modern flair." },
        { name: "Dragon Wok", price: 260, image: chinese, description: "Fast and flavorful Chinese cuisine perfect for groups." }
      ]
    },
    {
      label: "Decoration",
      options: [
        { name: "Backdrop Boutique", price: 110, image: balloon1, description: "Photo-friendly backdrops and stage designs.", tags: ["Backdrop", "Stage"] },
        { name: "Balloon Bliss Co.", price: 100, image: balloon2, description: "Vibrant balloon arches and centerpieces.", tags: ["Arches", "Themes"] },
        { name: "Elegant Tablescapes", price: 100, image: tables, description: "Elegant table settings with themed linen and decor.", tags: ["Formal", "Custom Linen"] },
        { name: "Banner Boutique", price: 100, image: banner, description: "Custom printed banners for all events.", tags: ["Printed", "Custom Design"] }
      ]
    },
    {
      label: "DJ",
      options: [
        { name: "DJ Rhythm Nation", price: 200, image: club1, description: "Top 40 mixes and dance floor favorites.", tags: ["Club", "Charts"] },
        { name: "House Beats Co.", price: 220, image: houseDj, description: "Electronic music specialists for upbeat parties.", tags: ["House", "EDM"] },
        { name: "DJ Pulse Nation", price: 200, image: DjPulseNation, description: "Crowd-pleasing sets for all ages.", tags: ["Hip Hop", "EDM"] },
        { name: "Echo Live Band", price: 200, image: rockDj, description: "Live acoustic band ideal for intimate and lively settings.", tags: ["Rock", "Acoustic"] },
        { name: "SingStar Karaoke", price: 200, image: karaoke, description: "Engaging karaoke with interactive crowd sessions.", tags: ["Pop", "Interactive"] }
      ]
    },
    {
      label: "Photographer",
      options: [
        { name: "Snapshot Stories", price: 260, image: photo1, description: "Storytelling-style wedding and party photography.", tags: ["Documentary", "Weddings"] },
        { name: "Focus Pro Studio", price: 255, image: photo2, description: "Portraits and editorial-style event photos.", tags: ["Studio", "Portrait"] },
        { name: "Candid Moments Studio", price: 250, image: photo3, description: "Natural, unobtrusive photography that captures the vibe.", tags: ["Natural", "On-location"] },
        { name: "EverAfter Captures", price: 250, image: photo4, description: "Comprehensive photo coverage of the entire event.", tags: ["All-day", "Albums"] },
        { name: "The Snap Booth", price: 250, image: photoBooth, description: "Fun photo booth with props and instant prints.", tags: ["Instant Prints", "Props"] }
      ]
    }
  ];

  const handleSelect = (category, option) => {
    setSelection(prev => ({ ...prev, [category.toLowerCase()]: option.name }));
    setTotal(prev => prev + option.price);
    setStep(prev => prev + 1);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">Build Your Own Party</h2>
      <div className="flex justify-between text-sm text-gray-500 border-b pb-2">
        {allSteps.map((stepItem, i) => (
          <div key={stepItem.label} className={i + 1 === step ? "text-blue-600 font-semibold" : ""}>{stepItem.label}</div>
        ))}
      </div>

      {step <= allSteps.length && (
        <>
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" disabled={step === 1} onClick={() => setStep(step - 1)}>Back</Button>
            <span className="text-sm text-gray-500">Step {step} of {allSteps.length}</span>
            <Button variant="ghost" onClick={() => setStep(step + 1)}>Skip</Button>
          </div>

          <h3 className="text-xl font-medium">{step}. Choose {allSteps[step - 1].label}</h3>
          {step === 3 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {["Club", "Charts", "House", "EDM", "Hip Hop", "Rock", "Pop"].map(tag => (
                <Button
                  key={tag}
                  variant={djFilter === tag ? "default" : "outline"}
                  onClick={() => setDjFilter(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {["Weddings", "Studio", "Candid", "Portrait", "Props"].map(tag => (
                <Button
                  key={tag}
                  variant={photographerFilter === tag ? "default" : "outline"}
                  onClick={() => setPhotographerFilter(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {cuisineFilters.map(cuisine => (
                <Button
                  key={cuisine}
                  variant={selectedCuisine === cuisine ? "default" : "outline"}
                  onClick={() => setSelectedCuisine(cuisine)}
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allSteps[step - 1].options
              .filter(option => {
                if (step === 1) return selectedCuisine === "" || option.description.toLowerCase().includes(selectedCuisine.toLowerCase());
                if (step === 3) return allSteps[2].options.includes(option) && (djFilter === "" || (option.tags && option.tags.includes(djFilter)));
                if (step === 4) return allSteps[3].options.includes(option) && (photographerFilter === "" || (option.tags && option.tags.includes(photographerFilter)));
                if (step === 2) return allSteps[1].options.includes(option);
                return false;
              })
              .map((option) => (
              <Card key={option.name} className="hover:shadow-lg transition">
                <CardContent className="p-0">
                  <img src={option.image} alt={option.name} className="w-full h-40 object-cover rounded-t-md" />
                  <div className="p-4 space-y-2 text-center">
                    <div className="font-medium text-lg">{option.name}</div>
                    <div className="text-sm text-gray-600">£{option.price}</div>
                    {option.tags && (
                      <div className="text-xs text-gray-500">{option.tags.join(", ")}</div>
                    )}
                    <div className="flex justify-center gap-2 mt-2">
                      <Button variant="outline" size="sm" onClick={() => setModalContent(option)}>View Details</Button>
                      <Button size="sm" onClick={() => handleSelect(allSteps[step - 1].label, option)}>Select</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
                  <div className="flex justify-between items-center mt-6">
            <Button variant="outline" disabled={step === 1} onClick={() => setStep(step - 1)}>Back</Button>
            <Button onClick={() => setStep(step + 1)}>Continue</Button>
          </div>
        </>
      )}

      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button className="absolute top-2 right-4 text-xl" onClick={() => setModalContent(null)}>&times;</button>
            <h3 className="text-xl font-semibold mb-2">{modalContent.name}</h3>
            <img src={modalContent.image} alt={modalContent.name} className="w-full h-40 object-cover rounded mb-4" />
            <p className="text-sm text-gray-600 mb-2">Price: £{modalContent.price}</p>
            <p className="text-sm text-gray-700 mb-2">{modalContent.description}</p>
            {modalContent.tags && <p className="text-xs text-gray-500">Tags: {modalContent.tags.join(", ")}</p>}
          </div>
        </div>
      )}

      {/* Floating Summary */}
      <div className="fixed top-28 right-4 bg-white border shadow-lg rounded-lg w-72 z-50 p-4 space-y-2">
        <h4 className="text-sm font-semibold mb-2">Your Selections</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Restaurant:</strong> {selection.restaurant || '—'}</li>
          <li><strong>Decoration:</strong> {selection.decoration || '—'}</li>
          <li><strong>DJ:</strong> {selection.dj || '—'}</li>
          <li><strong>Photographer:</strong> {selection.photographer || '—'}</li>
        </ul>
        <div className="pt-2 border-t text-sm font-bold">Total: £{total}</div>
      </div>

      {step > allSteps.length && (
        <div className="text-center space-y-4 mt-10">
          <h3 className="text-xl font-semibold">Review Your Selections</h3>
          <ul className="text-left inline-block space-y-2">
            <li><strong>Restaurant:</strong> {selection.restaurant || '—'}</li>
            <li><strong>Decoration:</strong> {selection.decoration || '—'}</li>
            <li><strong>DJ:</strong> {selection.dj || '—'}</li>
            <li><strong>Photographer:</strong> {selection.photographer || '—'}</li>
          </ul>
          <div className="text-lg font-bold mt-4">Estimated Total: £{total}</div>
          <Button className="mt-4" onClick={() => setModalContent({ name: 'Booking Confirmed', image: bookingConfirmed, price: total, description: 'Your party has been successfully booked! We will send a confirmation email shortly.' })}>Book Now</Button>
        </div>
      )}
    </div>
  );
}
