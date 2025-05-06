import React, { useState } from "react";

import { Star } from "lucide-react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";

const cuisineOptions = ["Indian", "Italian", "Chinese", "Mexican", "BBQ"];

const cuisineRestaurants = {
  Indian: [
    { name: "Tandoori Flames", price: 300, rating: 4.6, reviews: 102, tags: ["Veg", "Spicy", "North Indian"], image: "/images/tandoori-flames.jpg" },
    { name: "Curry Junction", price: 250, rating: 4.2, reviews: 87, tags: ["Non-Veg", "Buffet"], image: "/images/curry-junction.jpg" },
    { name: "Spice of India", price: 275, rating: 4.8, reviews: 134, tags: ["Mild", "Family Friendly"], image: "/images/spice-of-india.jpg" }
  ],
  Italian: [
    { name: "Pasta Bella", price: 280, rating: 4.5, reviews: 95, tags: ["Pasta", "Pizza"], image: "/images/pasta-bella.jpg" },
    { name: "Roma Kitchen", price: 320, rating: 4.3, reviews: 76, tags: ["Fine Dining"], image: "/images/roma-kitchen.jpg" },
    { name: "The Italian Spot", price: 290, rating: 4.7, reviews: 110, tags: ["Trendy", "Young Crowd"], image: "/images/italian-spot.jpg" }
  ],
  Chinese: [
    { name: "Dragon Wok", price: 260, rating: 4.4, reviews: 89, tags: ["Authentic", "Dim Sum"], image: "/images/dragon-wok.jpg" },
    { name: "Golden Panda", price: 245, rating: 4.1, reviews: 70, tags: ["Takeaway Friendly"], image: "/images/golden-panda.jpg" },
    { name: "Mandarin Palace", price: 310, rating: 4.6, reviews: 105, tags: ["Banquet", "Family"], image: "/images/mandarin-palace.jpg" }
  ],
  Mexican: [
    { name: "Taco Fiesta", price: 240, rating: 4.3, reviews: 81, tags: ["Tacos", "Street Style"], image: "/images/taco-fiesta.jpg" },
    { name: "Casa Mexicana", price: 285, rating: 4.6, reviews: 92, tags: ["Sit Down", "Traditional"], image: "/images/casa-mexicana.jpg" },
    { name: "Burrito Bros", price: 260, rating: 4.2, reviews: 67, tags: ["Quick Serve"], image: "/images/burrito-bros.jpg" }
  ],
  BBQ: [
    { name: "Smokey’s Grill", price: 350, rating: 4.7, reviews: 119, tags: ["Grill", "Smoked"], image: "/images/smokeys-grill.jpg" },
    { name: "BBQ Barn", price: 330, rating: 4.5, reviews: 90, tags: ["Outdoor", "Family"], image: "/images/bbq-barn.jpg" },
    { name: "Rib Shack", price: 340, rating: 4.6, reviews: 106, tags: ["Ribs", "Southern Style"], image: "/images/rib-shack.jpg" }
  ]
};

const decorations = ["Balloons", "Table Setup", "Banners", "Lighting"];
const djs = ["Local DJ", "Live Band", "Karaoke Set"];
const photographers = ["Candid Photographer", "Full Coverage", "Photo Booth"];
const prices = {
  decorations: 100,
  dj: 200,
  photographer: 250
};

export default function BuildYourParty() {
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  const [selection, setSelection] = useState({
    cuisine: "",
    restaurant: "",
    decoration: "",
    dj: "",
    photographer: ""
  });

  const handleSelect = (key, value, price = 0) => {
    setSelection(prev => ({ ...prev, [key]: value }));
    setTotal(prev => prev + price);
    setStep(prev => prev + 1);
  };

  const renderRestaurantOptions = (restaurants) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {restaurants.map(r => (
        <Card key={r.name} onClick={() => handleSelect("restaurant", r.name, r.price)} className="cursor-pointer hover:shadow-lg">
          <CardContent className="p-0">
            <img src={r.image} alt={r.name} className="w-full h-40 object-cover rounded-t-md" />
            <div className="p-4 space-y-2 text-center">
              <div className="font-medium">{r.name}</div>
              <div className="text-sm text-gray-600">£{r.price}</div>
              <div className="flex justify-center items-center gap-1 text-yellow-500 text-sm">
                <Star size={14} /> {r.rating} · {r.reviews} reviews
              </div>
              <div className="text-xs text-gray-500">{r.tags.join(", ")}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderSimpleOptions = (options, key) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {options.map(option => (
        <Card key={option} onClick={() => handleSelect(key, option, prices[key])} className="cursor-pointer hover:shadow-lg">
          <CardContent className="p-4 text-center font-medium">{option}</CardContent>
        </Card>
      ))}
    </div>
  );

  const stepLabels = ["Cuisine", "Restaurant", "Decoration", "DJ", "Photographer"];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">Build Your Own Party</h2>

      {/* Progress Tracker */}
      <div className="flex justify-between text-sm text-gray-500 border-b pb-2">
        {stepLabels.map((label, i) => (
          <div key={label} className={i + 1 === step ? "text-blue-600 font-semibold" : ""}>{label}</div>
        ))}
      </div>

      {/* Steps */}
      {step === 1 && (
        <>
          <h3 className="text-xl font-medium">1. Select Cuisine</h3>
          {renderSimpleOptions(cuisineOptions, "cuisine")}
        </>
      )}

      {step === 2 && selection.cuisine && (
        <>
          <h3 className="text-xl font-medium">2. Choose a Restaurant ({selection.cuisine})</h3>
          {renderRestaurantOptions(cuisineRestaurants[selection.cuisine])}
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="text-xl font-medium">3. Choose Decorations</h3>
          {renderSimpleOptions(decorations, "decoration")}
        </>
      )}

      {step === 4 && (
        <>
          <h3 className="text-xl font-medium">4. Select DJ or Music</h3>
          {renderSimpleOptions(djs, "dj")}
        </>
      )}

      {step === 5 && (
        <>
          <h3 className="text-xl font-medium">5. Add Photographer</h3>
          {renderSimpleOptions(photographers, "photographer")}
        </>
      )}

      {step === 6 && (
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Summary</h3>
          <ul className="text-left inline-block space-y-2">
            <li><strong>Cuisine:</strong> {selection.cuisine}</li>
            <li><strong>Restaurant:</strong> {selection.restaurant}</li>
            <li><strong>Decorations:</strong> {selection.decoration}</li>
            <li><strong>DJ:</strong> {selection.dj}</li>
            <li><strong>Photographer:</strong> {selection.photographer}</li>
          </ul>
          <div className="text-lg font-bold mt-4">Estimated Total: £{total}</div>
          <Button className="mt-4">Confirm & Continue</Button>
        </div>
      )}
    </div>
  );
}
