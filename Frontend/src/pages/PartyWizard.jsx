import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";

const packages = [
  {
    title: "Complete Celebration Combo",
    price: 1200,
    details: {
      Food: ["2 Starters", "2 Mains", "1 Dessert"],
      Decoration: ["50 Balloons", "Table Runners", "Centerpieces"],
      Music: ["DJ with Lighting", "3-Hour Playlist"],
      Photographer: ["2 Hours", "50 Edited Photos"]
    },
    image: "/images/party-combo-1.jpg"
  },
  {
    title: "Elegant Indoors Setup",
    price: 900,
    details: {
      Food: ["3-Course Buffet"],
      Decoration: ["Floral Setup", "Dining Arrangement"],
      Music: ["Background Music"]
    },
    image: "/images/party-combo-2.jpg"
  },
  {
    title: "Garden BBQ Bash",
    price: 800,
    details: {
      Food: ["Grilled Chicken", "BBQ Corn", "Cold Drinks"],
      Decoration: ["Garden Lights", "Rustic Tables"],
      Music: ["Live Acoustic Band"]
    },
    image: "/images/party-combo-3.jpg"
  }
];

export default function PartyWizardPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center">Recommended Party Packages</h1>
      <p className="text-center text-gray-600">Based on your preferences, here are ready-to-book options. You can customise them later.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.title} className="overflow-hidden hover:shadow-xl transition">
            <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover" />
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{pkg.title}</h3>
              {Object.entries(pkg.details).map(([category, items]) => (
                <div key={category}>
                  <p className="text-sm font-medium text-gray-700">{category}:</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="text-pink-600 font-bold">£{pkg.price}</div>
              <Button className="w-full mt-2">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
