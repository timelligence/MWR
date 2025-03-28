import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, Link } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const styles = "/assets/tailwind-BQJgJmfh.css";
const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "ro", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "font-sans bg-gray-50 text-gray-800", children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => {
  return [
    { title: "Devino Ambasador MWR Life | Călătorește și Câștigă" },
    { name: "description", content: "Alătură-te echipei MWR Life ca Ambasador și construiește-ți un venit pasiv promovând vacanțe de vis cu Travel Advantage." }
  ];
};
function LandingPage() {
  const registrationLink = "https://www.mwrlife.com/SmartWayTravel";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email && email.includes("@")) {
      console.log("Email submitted for PDF guide:", email);
      setSubmitted(true);
      window.location.href = "/ghid-venit-pasiv-travel.pdf";
    } else {
      alert("Te rugăm să introduci o adresă de email validă.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-12 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("img", { src: "/mwr-life-logo.png", alt: "MWR Life Logo", className: "mx-auto h-16 w-auto mb-8" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-blue-900 sm:text-5xl md:text-6xl mb-4", children: "Călătorește la prețuri de insider și construiește-ți un venit pasiv promovând vacanțe de vis!" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 mb-8 max-w-3xl mx-auto", children: "Alătură-te echipei noastre de Ambasadori MWR Life și începe o carieră globală în domeniul călătoriilor. Îți oferim training, unelte, venituri comisionate și bonusuri lunare – inclusiv un Car Bonus de $500!" }),
      /* @__PURE__ */ jsx("img", { src: "/tropical-sunset.jpg", alt: "Vacanță de vis tropicală", className: "rounded-lg shadow-lg mx-auto mb-10 w-full max-w-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-xl mb-10 text-left max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-purple-700 mb-6 text-center", children: "Beneficiile tale ca Ambasador MWR Life:" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 text-gray-700", children: [
          "Câștiguri pasive lunare pe baza abonamentelor vândute",
          "Bonusuri rapide de până la $150 în primele 14 zile",
          "Până la 25% comision rezidual lunar",
          "Car Bonus de $500/lună pentru Ambasadorii activi (BMW, Audi, Mercedes)",
          "Platformă proprie de călătorii + aplicație mobilă",
          "Training gratuit + sprijin din partea echipei"
        ].map((benefit, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("svg", { className: "flex-shrink-0 h-6 w-6 text-green-500 mr-2", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }),
          /* @__PURE__ */ jsx("span", { children: benefit })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "/travel-advantage-banner.png", alt: "Beneficii Travel Advantage Membership", className: "mx-auto mb-10 w-full max-w-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 mb-12", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/apply",
            className: "inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md",
            children: "Află mai multe și aplică"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: registrationLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md",
            children: "Înregistrează-te direct acum"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/apply#faq",
            className: "inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md",
            children: "Vezi Întrebări Frecvente"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 p-6 bg-blue-50 rounded-lg max-w-xl mx-auto border border-blue-200", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-blue-800 mb-3", children: "Bonus Gratuit:" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Introdu adresa ta de email pentru a descărca mini-ghidul PDF: „Cum să-ți creezi un venit pasiv promovând călătoriile”." }),
        submitted ? /* @__PURE__ */ jsx("p", { className: "text-green-600 font-semibold", children: "Mulțumim! Descărcarea ghidului va începe automat." }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleEmailSubmit, className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Adresa ta de email",
              required: true,
              className: "flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
              "aria-label": "Adresa de email pentru ghid"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300",
              children: "Descarcă Ghidul PDF"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-3", children: "Vom folosi emailul pentru a-ți trimite ghidul și câteva informații utile ulterioare. Nu vom face spam." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "text-center text-gray-500 mt-12 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " MWR Life Ambassador Team. Toate drepturile rezervate."
    ] })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LandingPage,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "Aplică Acum - Devino Ambasador MWR Life" },
    { name: "description", content: "Începe-ți cariera în travel astăzi. Aplică pentru a deveni Lifestyle Ambassador MWR Life și accesează comisioane, bonusuri și oportunități globale." }
  ];
};
function ApplyPage() {
  const whatsappLink = "https://wa.me/0721839889?text=Bun%C4%83%21%20Sunt%20interesat(%C4%83)%20s%C4%83%20devin%20Ambasador%20MWR%20Life%20%C8%99i%20a%C8%99%20dori%20mai%20multe%20detalii.";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("img", { src: "/mwr-life-logo.png", alt: "MWR Life Logo", className: "mx-auto h-16 w-auto mb-8" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-center text-blue-900 sm:text-5xl mb-10", children: "Începe-ți cariera în travel azi – devino Lifestyle Ambassador MWR Life" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-purple-700 mb-6 text-center", children: "Modelul de afacere în 3 pași simpli:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: "1️⃣" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-1", children: "Promovezi Travel Advantage" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Folosește uneltele și trainingul oferit pentru a prezenta platforma." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: "2️⃣" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-1", children: "Clienții cumpără membership" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Tu câștigi comisioane rapide și lunare pentru fiecare membru activ." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-gray-200 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2", children: "3️⃣" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-1", children: "Construiești echipă" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Deblochezi bonusuri recurente și avansezi în carieră." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg mb-10 border border-blue-200", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8", children: "Cum funcționează activitatea de Ambasador?" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-blue-800 mb-2 flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🤝" }),
            " Ce este un Ambasador MWR Life?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Ambasadorul MWR Life este un agent independent care conectează clienții cu platforma Travel Advantage, ajutându-i să obțină reduceri exclusive și să transforme călătoriile în venit pasiv." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-blue-800 mb-3 flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🧑‍🏫" }),
            " Rolul Ambasadorului"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsx("li", { children: "Conectează potențialii clienți la Travel Advantage." }),
            /* @__PURE__ */ jsx("li", { children: "Ghidează clienții prin procesul de înscriere și utilizare a platformei." }),
            /* @__PURE__ */ jsx("li", { children: "Primește comisioane din înscrieri și bonusuri pentru activitatea de echipă." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-blue-800 mb-4 flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "💰" }),
            " Câștiguri și Bonusuri"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-center text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-100 rounded flex-1", children: [
              "Prospectare & Înscriere ",
              /* @__PURE__ */ jsx("span", { className: "text-lg ml-1", children: "📞" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block text-xl font-bold text-blue-500", children: "→" }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-100 rounded flex-1", children: [
              "Conversie Membri ",
              /* @__PURE__ */ jsx("span", { className: "text-lg ml-1", children: "✅" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block text-xl font-bold text-blue-500", children: "→" }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-100 rounded flex-1", children: [
              "Atragere Echipă ",
              /* @__PURE__ */ jsx("span", { className: "text-lg ml-1", children: "👥" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block text-xl font-bold text-blue-500", children: "→" }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-100 rounded flex-1", children: [
              "Acumulare Puncte ",
              /* @__PURE__ */ jsx("span", { className: "text-lg ml-1", children: "⭐" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "hidden md:block text-xl font-bold text-blue-500", children: "→" }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-100 rounded flex-1 font-semibold text-green-800", children: [
              "Bonusuri & Comisioane ",
              /* @__PURE__ */ jsx("span", { className: "text-lg ml-1", children: "🎁" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-3 text-center", children: "Include: Fast Start, Reziduale, Boost Bonus, etc." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-blue-800 mb-4 flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🌊" }),
            " Fluxul Activității"
          ] }),
          /* @__PURE__ */ jsxs("ol", { className: "relative border-l border-gray-300 dark:border-gray-700 ml-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "mb-6 ml-6", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "🔍" }) }),
              /* @__PURE__ */ jsx("h4", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900", children: "Prospectare" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-gray-600", children: "Identifică potențiali clienți (rețele sociale, bloguri, etc.)." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "mb-6 ml-6", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "✍️" }) }),
              /* @__PURE__ */ jsx("h4", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900", children: "Înscriere" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-gray-600", children: "Invită clienții să se înscrie pe platformă." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "mb-6 ml-6", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "💸" }) }),
              /* @__PURE__ */ jsx("h4", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900", children: "Conversie & Comisioane" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-gray-600", children: "Clienții devin membri plătitori, tu primești comisioane." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "mb-6 ml-6", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "📈" }) }),
              /* @__PURE__ */ jsx("h4", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900", children: "Creșterea Rețelei" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-gray-600", children: "Recomandă și înscrie alți clienți/ambasadori, acumulând puncte." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "ml-6", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-yellow-900", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "🏖️" }) }),
              /* @__PURE__ */ jsx("h4", { className: "flex items-center mb-1 text-lg font-semibold text-gray-900", children: "Beneficii & Plată" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-gray-600", children: "Utilizează punctele (ex: vacanță gratuită), primește bonusuri." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-blue-800 mb-3 flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "✨" }),
            " Beneficiile Suplimentare"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl mr-2", children: "🎓" }),
              " Acces la training gratuit și suport 24/7."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl mr-2", children: "🚗" }),
              " Bonusuri speciale (ex: Car Bonus, Turbo Add-On)."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl mr-2", children: "🏆" }),
              " Recunoaștere în cadrul rețelei (avansare în rang, diplome, etc.)."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-white font-semibold mb-4", children: "Transformă-ți pasiunea pentru călătorii într-o sursă de venit pasiv. Fii propriul tău șef și construiește-ți propria rețea de clienți fericiți!" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: whatsappLink,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 shadow-lg transform hover:scale-105",
              children: "Devino Ambasador acum!"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-purple-700 mb-6 text-center", children: "Recompensele tale:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Tip Bonus/Comision" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Valoare" }),
            /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Detalii" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "bg-white divide-y divide-gray-200", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900", children: "Fast Start Bonus" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-gray-700", children: "$150 x 3" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: "Pentru primii 3 membri personali înscriși rapid." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900", children: "Comisioane Lunare" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-gray-700", children: "Până la 25%" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: "Comision rezidual din abonamentele echipei." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900", children: "Car Bonus" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-gray-700", children: "$500/lună" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: "Pentru BMW, Mercedes sau Audi, la atingerea unui anumit nivel." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900", children: "Rank Bonuses" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-gray-700", children: "Până la $500,000" }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: "Bonusuri substanțiale la avansarea în rank." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-4 text-center", children: "Consultați planul de compensații complet pentru toate detaliile și condițiile." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "faq", className: "bg-blue-50 p-8 rounded-lg shadow-inner mb-10 border border-blue-200 scroll-mt-20", children: [
        " ",
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-blue-800 mb-6 text-center", children: "Întrebări Frecvente (FAQ):" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-800 mb-1", children: "Trebuie să fiu membru Travel Advantage ca să fiu Ambasador?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Nu, nu este obligatoriu să fii membru Travel Advantage pentru a deveni Ambasador și a promova platforma." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-800 mb-1", children: "Cât costă să devin Ambasador?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Licența anuală de Ambasador este de aproximativ 90€ (poate varia ușor în funcție de cursul valutar și taxe)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-800 mb-1", children: "Am nevoie de experiență în vânzări sau travel?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Nu este necesară experiență anterioară. Oferim training complet și suport continuu din partea echipei și a companiei." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-800 mb-1", children: "Este legal în Europa?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Da, Travel Advantage este o agenție de turism online (OTA) înregistrată legal, cu licențe IATA și licențe specifice în țări precum Franța și Portugalia." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: whatsappLink,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-300 shadow-lg",
          children: [
            "Aplică acum prin WhatsApp!",
            /* @__PURE__ */ jsx("span", { className: "block text-sm font-normal", children: "(Vei fi redirecționat către WhatsApp)" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "text-center text-gray-500 mt-12 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " MWR Life Ambassador Team. Toate drepturile rezervate."
    ] })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ApplyPage,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-PlxOTHEU.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-5PomSlkx.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-Caxdh-BM.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-5PomSlkx.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Dx5RsBm6.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-5PomSlkx.js"], "css": [] }, "routes/apply": { "id": "routes/apply", "parentId": "root", "path": "apply", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/apply-DqjhHSld.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] } }, "url": "/assets/manifest-2c473b5a.js", "version": "2c473b5a" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/apply": {
    id: "routes/apply",
    parentId: "root",
    path: "apply",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
