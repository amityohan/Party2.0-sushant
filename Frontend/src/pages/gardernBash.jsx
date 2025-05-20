import React, { useState } from "react";
import { Button } from "../components/Button";
import manPlayingDrums from "../assets/manPlayingDrums.png"
import manPlayingGuitar from "../assets/manPlayingGuitar.png"
import manPlayingAcoustic from "../assets/manPlayingAcoustic.png"
import { useNavigate } from "react-router-dom";

const ImageCarousel = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  return (
      <div className="w-full md:w-1/2">
      <div className="relative w-full overflow-hidden rounded-lg shadow">
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-52 object-cover rounded"
          />
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((src, idx) => (
            <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-14 h-10 rounded border-2 ${idx === current ? 'border-pink-600' : 'border-transparent'}`}
            >
            <img src={src} alt={`thumb-${idx}`} className="w-full h-full object-cover rounded" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default function GardenBBQBashDetails() {
    const navigate=useNavigate()
    return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Garden BBQ Bash</h1>
      <p className="text-center text-gray-600">
        Perfect for relaxed outdoor celebrations with friends and family. This package is ideal for garden parties, birthdays, casual weddings, and summer events. Sit back and enjoy the ambiance, live music, and delicious food — we’ll handle the rest.
      </p>

      <div className="space-y-10">
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <ImageCarousel
              images={[
                "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
"https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80"
              ]}
              alt="BBQ Food"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">🍖 Food by Grill Masters UK</h2>
              <p className="text-gray-600 mb-2">
                Known for their perfectly seasoned flame-grilled meats, Grill Masters UK brings smoky BBQ goodness right to your backyard.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Grilled Chicken Skewers (25 pcs)</li>
                <li>BBQ Corn on the Cob (20 pcs)</li>
                <li>Veggie Burgers & Sides (20 servings)</li>
                <li>Cold Beverages – Cola, Lemonade, Water (30 bottles)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <ImageCarousel
              images={[
                manPlayingDrums,
manPlayingGuitar
              ]}
              alt="Decoration"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">🎈 Decoration by Bloom & Bright</h2>
              <p className="text-gray-600 mb-2">
                Bloom & Bright specializes in rustic outdoor setups that blend beautifully with natural garden environments.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>String Garden Lights (30 ft)</li>
                <li>Rustic Wooden Tables (5) & Chairs (20)</li>
                <li>Outdoor Umbrellas (3)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <ImageCarousel
              images={[
                manPlayingAcoustic,
    manPlayingGuitar
              ]}
              alt="Live Music"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">🎵 Music by The Acoustic Duo</h2>
              <p className="text-gray-600 mb-2">
                Performing mellow classics and upbeat acoustic covers, The Acoustic Duo sets the perfect laid-back party vibe.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Live Acoustic Band (2 hours)</li>
                <li>Background Spotify Playlist for breaks</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">💰 Price</h2>
          <p className="text-pink-600 text-lg font-bold">£800 (all inclusive)</p>
        </section>

        

        <div className="text-center">
          <Button className="px-6 py-3 mr-6 text-white bg-pink-600 hover:bg-pink-700"
            onClick={()=>{navigate("/party-wizard")}}
            >Back</Button>
          <Button className="px-6 py-3 text-white bg-pink-600 hover:bg-pink-700">
            Book This Package
          </Button>
        </div>
      </div>
    </div>
  );
}
