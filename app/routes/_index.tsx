import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from 'react'; // Import useState

export const meta: MetaFunction = () => {
  return [
    { title: "Devino Ambasador MWR Life | Călătorește și Câștigă" },
    { name: "description", content: "Alătură-te echipei MWR Life ca Ambasador și construiește-ți un venit pasiv promovând vacanțe de vis cu Travel Advantage." },
  ];
};

export default function LandingPage() {
  const registrationLink = "https://www.mwrlife.com/SmartWayTravel";
  // const webinarLink = "https://us06web.zoom.us/j/87828567652?pwd=S2RTRW5CNzFBUzZ1clJBQUwzeE1rQT09"; // Removed as schedule is removed
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && email.includes('@')) {
      console.log("Email submitted for PDF guide:", email);
      setSubmitted(true);
      // Simulate PDF download or redirect
      // In a real app, you might trigger a download or navigate to a thank you page
      // For now, let's assume the PDF is at this path
      window.location.href = '/ghid-venit-pasiv-travel.pdf';
    } else {
      alert("Te rugăm să introduci o adresă de email validă.");
    }
  };

  // Schedule Data and grouping removed

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <img src="/mwr-life-logo.png" alt="MWR Life Logo" className="mx-auto h-16 w-auto mb-8" />

        <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl md:text-6xl mb-4">
          Călătorește la prețuri de insider și construiește-ți un venit pasiv promovând vacanțe de vis!
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Alătură-te echipei noastre de Ambasadori MWR Life și începe o carieră globală în domeniul călătoriilor. Îți oferim training, unelte, venituri comisionate și bonusuri lunare – inclusiv un Car Bonus de $500!
        </p>

        <img src="/tropical-sunset.jpg" alt="Vacanță de vis tropicală" className="rounded-lg shadow-lg mx-auto mb-10 w-full max-w-2xl" />

        <div className="bg-white p-8 rounded-lg shadow-xl mb-10 text-left max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Beneficiile tale ca Ambasador MWR Life:</h2>
          <ul className="space-y-4 text-gray-700">
            {[
              "Câștiguri pasive lunare pe baza abonamentelor vândute",
              "Bonusuri rapide de până la $150 în primele 14 zile",
              "Până la 25% comision rezidual lunar",
              "Car Bonus de $500/lună pentru Ambasadorii activi (BMW, Audi, Mercedes)",
              "Platformă proprie de călătorii + aplicație mobilă",
              "Training gratuit + sprijin din partea echipei",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <img src="/travel-advantage-banner.png" alt="Beneficii Travel Advantage Membership" className="mx-auto mb-10 w-full max-w-3xl" />

        <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 mb-12">
          <Link
            to="/apply"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md"
          >
            Află mai multe și aplică
          </Link>
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md"
          >
            Înregistrează-te direct acum
          </a>
           <Link
            to="/apply#faq"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md"
          >
            Vezi Întrebări Frecvente
          </Link>
          {/* Removed "Participă la Webinarii" button */}
        </div>

        {/* START: Webinar Schedule Section - REMOVED */}
        {/* END: Webinar Schedule Section - REMOVED */}


        <div className="mt-12 p-6 bg-blue-50 rounded-lg max-w-xl mx-auto border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Bonus Gratuit:</h3>
          <p className="text-gray-600 mb-4">Introdu adresa ta de email pentru a descărca mini-ghidul PDF: „Cum să-ți creezi un venit pasiv promovând călătoriile”.</p>
          {submitted ? (
            <p className="text-green-600 font-semibold">Mulțumim! Descărcarea ghidului va începe automat.</p>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                required
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                aria-label="Adresa de email pentru ghid"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Descarcă Ghidul PDF
              </button>
            </form>
          )}
           <p className="text-xs text-gray-500 mt-3">Vom folosi emailul pentru a-ți trimite ghidul și câteva informații utile ulterioare. Nu vom face spam.</p>
        </div>

      </div>
       <footer className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} MWR Life Ambassador Team. Toate drepturile rezervate.
      </footer>
    </div>
  );
}
