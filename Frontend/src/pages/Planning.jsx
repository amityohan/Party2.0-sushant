import React from "react";
import { Sparkles, Settings } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { useNavigate } from "react-router-dom";
import photography from "../assets/photography.png"
import musicDj from "../assets/musicDj.png"
import decor from "../assets/decor.png"
import catering from "../assets/catering.png"

const PartyPlanningPage = () => {
  const navigate=useNavigate();
  const individualServices = [
    { title: "Catering", image: catering },
    { title: "Decor", image: decor },
    { title: "Music / DJ", image: musicDj },
    { title: "Photography", image: photography },
  ];

  return (
    <div>
      {/* Planning Options Section */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-10 px-4">
          <h2 className="text-2xl font-semibold">How Would You Like to Plan?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl bg-white shadow text-left">
              <h4 className="text-lg font-medium mb-2">✨ Party Wizard</h4>
              <p className="text-sm text-gray-600 mb-4">
                Tell us your party details and we’ll show you a ready-to-book package tailored to your needs.
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white flex gap-2 items-center text-sm px-4 py-2"
              onClick={()=>{navigate('/party-wizard')}}>
                <Sparkles size={16} /> Use Party Wizard
              </Button>
            </div>
            <div className="p-6 border rounded-xl bg-white shadow text-left" 
            onClick={()=>{navigate('/Build-your-party')}}>
              <h4 className="text-lg font-medium mb-2">🛠️ Build Your Own Party</h4>
              <p className="text-sm text-gray-600 mb-4">
                Choose each element yourself — from cuisine and caterers to DJs, décor and photographers.
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white flex gap-2 items-center text-sm px-4 py-2">
                <Settings size={16} /> Build Your Own Party
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Select Individual Services</h2>
        <p className="text-center text-gray-600 mb-6">
          Browse and book individual services without needing a full package.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {individualServices.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <CardContent className="p-4 text-center font-semibold">
                {item.title}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © 2025 PartyEasy. Designed with care in the UK.
      </footer>
    </div>
  );
};

export default PartyPlanningPage;
