import React from "react";
import { Sparkles, Settings, Calendar, MapPin, Users, PoundSterling } from "lucide-react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { useNavigate } from "react-router-dom";



export default function Homepage() {
    const navigate=useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
        {/* Hero Section with Background Image */}
        <div className="relative bg-[url('/images/party-hero.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center">
            <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Plan Your Perfect Party</h1>
            <p className="mb-6">Get everything sorted — food, music, décor and more — based on your preferences in just a few clicks.</p>
            </div>
        </div>

        {/* Party Details Form (Mandatory Step) */}
        <section className="max-w-4xl mx-auto bg-white shadow-lg -mt-16 rounded-xl p-6 space-y-4 z-10 relative" id="party-details-form">
            <h3 className="text-xl font-semibold text-center">Start With Your Party Details</h3>
            <p className="text-sm text-center text-gray-500">This helps us tailor services and recommendations no matter how you choose to plan.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Type of party? e.g. Birthday, Wedding" />
            <div className="flex items-center w-full gap-2">
                <MapPin size={16} />
                <Input placeholder="Location / Postcode" />
            </div>
            <div className="flex items-center w-full gap-2">
                <Calendar size={16} />
                <Input type="date" placeholder="Select date" />
            </div>
            <div className="flex items-center w-full gap-2">
                <PoundSterling size={16} />
                <Input placeholder="Budget (e.g. £500)" type="number" min="0" />
            </div>
            <div className="flex items-center w-full gap-2">
                <Users size={16} />
                <Input placeholder="Number of people" type="number" min="1" />
            </div>
            </div>
            <Button className="w-full" onClick={()=>{navigate('/planning-party')}}>Continue</Button>
        </section>

        {/* Footer */}
        <footer className="bg-white py-6 text-center text-sm text-gray-500">
            © 2025 PartyEasy. Designed with care in the UK.
        </footer>
        </div>
    );
}
