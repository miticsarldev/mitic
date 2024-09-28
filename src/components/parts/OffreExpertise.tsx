"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const OffreExpertise = () => {
  const [scale, setScale] = useState(0.8);
  const sectionRefNew = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRefNew.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if the bottom of the section is visible on the screen
        if (rect.bottom >= 0 && rect.top <= viewportHeight) {
          const progress = Math.min(
            Math.max((viewportHeight - rect.top) / (viewportHeight / 1.5), 0),
            1
          );
          const newScale = 0.8 + progress * 0.2;
          setScale(newScale);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRefNew} className="flex items-center justify-center">
      <div
        className="container bg-mitic-2/30  mx-auto mt-[100px] py-[100px] px-5 text-center relative transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="absolute top-0 right-8 w-8 h-8 bg-red-400 rounded-full -mt-4 -mr-4"></div>
          <h1 className="text-[calc(min(5vh,2.5em))] font-black mb-6 leading-tight">
            Une offre complète d’expertises pour tous vos projets !
          </h1>
          <p className="leading-[1.4]"></p>
          <h2 className="text-[calc(min(3vh,1.25em))] font-bold mb-6 uppercase leading-tight text-black">
            CHEZ CYBERSCOPE, NOUS SOMMES BIEN PLUS QU’UNE AGENCE WEB !
          </h2>
          <p className="mb-6 text-[calc(min(2.5vh,1.25em))] leading-[1.4]">
            Bénéficier de notre expérience acquise depuis 1995 au travers de
            chaque réalisation vous garantit une communication pensée pour
            répondre à vos clients. Nous sommes fiers de rassembler une équipe
            d’experts dans tous les domaines incontournables du{" "}
            <span className="font-bold">
              web, du digital ou de la communication
            </span>{" "}
            et de s’appuyer sur un réseau de professionnels aguerris en France.
            Cyberscope cultive une maîtrise multi-facettes du monde digital
            <span className="font-bold">
              {" "}
              ancrée dans l’expérience et nourrie par la passion.
            </span>
          </p>
          <p className="leading-[1.4]"></p>
          <p className="mb-8 text-[calc(min(2.5vh,1.25em))] leading-[1.4]">
            Avec Cyberscope à vos côtés, vous choisissez un{" "}
            <span className="font-bold">partenaire digital engagé</span> dans
            votre stratégie pour la
            <span className="font-bold">
              {" "}
              croissance et le succès durable
            </span>{" "}
            de votre entreprise.
          </p>
          <Button
            variant="default"
            className="bg-white text-black hover:bg-gray-100 transition-colors px-6 py-3 text-lg font-semibold"
          >
            PRENONS RENDEZ-VOUS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffreExpertise;
