import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Aplică Acum - Devino Ambasador MWR Life" },
    { name: "description", content: "Începe-ți cariera în travel astăzi. Aplică pentru a deveni Lifestyle Ambassador MWR Life și accesează comisioane, bonusuri și oportunități globale." },
  ];
};

export default function ApplyPage() {
  // Updated WhatsApp link with relevant text
  const whatsappLink = "https://wa.me/0721839889?text=Bun%C4%83%21%20Sunt%20interesat(%C4%83)%20s%C4%83%20devin%20Ambasador%20MWR%20Life%20%C8%99i%20a%C8%99%20dori%20mai%20multe%20detalii.";

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Updated Logo */}
         <img src="/mwr-life-logo.png" alt="MWR Life Logo" className="mx-auto h-16 w-auto mb-8" />

        <h1 className="text-4xl font-bold text-center text-blue-900 sm:text-5xl mb-10">
          Începe-ți cariera în travel azi – devino Lifestyle Ambassador MWR Life
        </h1>

        {/* Modelul de afacere */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Modelul de afacere în 3 pași simpli:</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-2">1️⃣</div>
              <h3 className="font-semibold text-lg mb-1">Promovezi Travel Advantage</h3>
              <p className="text-gray-600 text-sm">Folosește uneltele și trainingul oferit pentru a prezenta platforma.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-2">2️⃣</div>
              <h3 className="font-semibold text-lg mb-1">Clienții cumpără membership</h3>
              <p className="text-gray-600 text-sm">Tu câștigi comisioane rapide și lunare pentru fiecare membru activ.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-2">3️⃣</div>
              <h3 className="font-semibold text-lg mb-1">Construiești echipă</h3>
              <p className="text-gray-600 text-sm">Deblochezi bonusuri recurente și avansezi în carieră.</p>
            </div>
          </div>
        </div>

         {/* START: Replaced Placeholder with Structured Content */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg mb-10 border border-blue-200">
          <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8">
            Cum funcționează activitatea de Ambasador?
          </h2>

          {/* Secțiunea 1: Introducere */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
              <span className="text-2xl mr-3">🤝</span> Ce este un Ambasador MWR Life?
            </h3>
            <p className="text-gray-700">
              Ambasadorul MWR Life este un agent independent care conectează clienții cu platforma Travel Advantage, ajutându-i să obțină reduceri exclusive și să transforme călătoriile în venit pasiv.
            </p>
          </div>

          {/* Secțiunea 2: Rolul Ambasadorului */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <span className="text-2xl mr-3">🧑‍🏫</span> Rolul Ambasadorului
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Conectează potențialii clienți la Travel Advantage.</li>
              <li>Ghidează clienții prin procesul de înscriere și utilizare a platformei.</li>
              <li>Primește comisioane din înscrieri și bonusuri pentru activitatea de echipă.</li>
            </ul>
          </div>

          {/* Secțiunea 3: Câștiguri și Bonusuri */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="text-2xl mr-3">💰</span> Câștiguri și Bonusuri
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-center text-sm text-gray-600">
              <div className="p-3 bg-gray-100 rounded flex-1">Prospectare & Înscriere <span className="text-lg ml-1">📞</span></div>
              <span className="hidden md:block text-xl font-bold text-blue-500">→</span>
              <div className="p-3 bg-gray-100 rounded flex-1">Conversie Membri <span className="text-lg ml-1">✅</span></div>
              <span className="hidden md:block text-xl font-bold text-blue-500">→</span>
              <div className="p-3 bg-gray-100 rounded flex-1">Atragere Echipă <span className="text-lg ml-1">👥</span></div>
              <span className="hidden md:block text-xl font-bold text-blue-500">→</span>
              <div className="p-3 bg-gray-100 rounded flex-1">Acumulare Puncte <span className="text-lg ml-1">⭐</span></div>
              <span className="hidden md:block text-xl font-bold text-blue-500">→</span>
              <div className="p-3 bg-green-100 rounded flex-1 font-semibold text-green-800">Bonusuri & Comisioane <span className="text-lg ml-1">🎁</span></div>
            </div>
             <p className="text-xs text-gray-500 mt-3 text-center">Include: Fast Start, Reziduale, Boost Bonus, etc.</p>
          </div>

          {/* Secțiunea 4: Fluxul Activității */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="text-2xl mr-3">🌊</span> Fluxul Activității
            </h3>
            <ol className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <span className="text-lg">🔍</span>
                </span>
                <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Prospectare</h4>
                <p className="text-sm font-normal text-gray-600">Identifică potențiali clienți (rețele sociale, bloguri, etc.).</p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                   <span className="text-lg">✍️</span>
                </span>
                <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Înscriere</h4>
                <p className="text-sm font-normal text-gray-600">Invită clienții să se înscrie pe platformă.</p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                   <span className="text-lg">💸</span>
                </span>
                <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Conversie & Comisioane</h4>
                <p className="text-sm font-normal text-gray-600">Clienții devin membri plătitori, tu primești comisioane.</p>
              </li>
               <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                   <span className="text-lg">📈</span>
                </span>
                <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Creșterea Rețelei</h4>
                <p className="text-sm font-normal text-gray-600">Recomandă și înscrie alți clienți/ambasadori, acumulând puncte.</p>
              </li>
               <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                   <span className="text-lg">🏖️</span>
                </span>
                <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Beneficii & Plată</h4>
                <p className="text-sm font-normal text-gray-600">Utilizează punctele (ex: vacanță gratuită), primește bonusuri.</p>
              </li>
            </ol>
          </div>

          {/* Secțiunea 5: Beneficiile Suplimentare */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <span className="text-2xl mr-3">✨</span> Beneficiile Suplimentare
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-xl mr-2">🎓</span> Acces la training gratuit și suport 24/7.</li>
              <li className="flex items-center"><span className="text-xl mr-2">🚗</span> Bonusuri speciale (ex: Car Bonus, Turbo Add-On).</li>
              <li className="flex items-center"><span className="text-xl mr-2">🏆</span> Recunoaștere în cadrul rețelei (avansare în rang, diplome, etc.).</li>
            </ul>
          </div>

          {/* Secțiunea Finală: Concluzie & CTA */}
          <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md">
            <p className="text-lg text-white font-semibold mb-4">
              Transformă-ți pasiunea pentru călătorii într-o sursă de venit pasiv. Fii propriul tău șef și construiește-ți propria rețea de clienți fericiți!
            </p>
            <a
              href={whatsappLink} // Using the updated WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 shadow-lg transform hover:scale-105"
            >
              Devino Ambasador acum!
            </a>
          </div>

        </div>
        {/* END: Replaced Placeholder with Structured Content */}


        {/* Tabel explicativ recompense */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Recompensele tale:</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tip Bonus/Comision</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valoare</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalii</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Fast Start Bonus</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">$150 x 3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pentru primii 3 membri personali înscriși rapid.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Comisioane Lunare</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Până la 25%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Comision rezidual din abonamentele echipei.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Car Bonus</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">$500/lună</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pentru BMW, Mercedes sau Audi, la atingerea unui anumit nivel.</td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Rank Bonuses</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">Până la $500,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bonusuri substanțiale la avansarea în rank.</td>
                </tr>
              </tbody>
            </table>
          </div>
           <p className="text-xs text-gray-500 mt-4 text-center">Consultați planul de compensații complet pentru toate detaliile și condițiile.</p>
        </div>


        {/* FAQ */}
        <div id="faq" className="bg-blue-50 p-8 rounded-lg shadow-inner mb-10 border border-blue-200 scroll-mt-20"> {/* Added id="faq" and scroll-margin-top */}
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Întrebări Frecvente (FAQ):</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Trebuie să fiu membru Travel Advantage ca să fiu Ambasador?</h3>
              <p className="text-gray-700">Nu, nu este obligatoriu să fii membru Travel Advantage pentru a deveni Ambasador și a promova platforma.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Cât costă să devin Ambasador?</h3>
              <p className="text-gray-700">Licența anuală de Ambasador este de aproximativ 90€ (poate varia ușor în funcție de cursul valutar și taxe).</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Am nevoie de experiență în vânzări sau travel?</h3>
              <p className="text-gray-700">Nu este necesară experiență anterioară. Oferim training complet și suport continuu din partea echipei și a companiei.</p>
            </div>
             <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Este legal în Europa?</h3>
              <p className="text-gray-700">Da, Travel Advantage este o agenție de turism online (OTA) înregistrată legal, cu licențe IATA și licențe specifice în țări precum Franța și Portugalia.</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          {/* Updated WhatsApp Link */}
          <a
            href={whatsappLink} // Using the updated WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-300 shadow-lg"
          >
            Aplică acum prin WhatsApp!
             <span className="block text-sm font-normal">(Vei fi redirecționat către WhatsApp)</span>
          </a>
           {/* Removed placeholder text */}
        </div>
      </div>
       <footer className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} MWR Life Ambassador Team. Toate drepturile rezervate.
      </footer>
    </div>
  );
}
