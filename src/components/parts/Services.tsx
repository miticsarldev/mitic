/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web & Mobile",
    subTitle:
      "Conception et Développement Web & Mobile : De la stratégie à la réalisation sur mesure",
    image: "/images/1.jpg",
    description:
      "Maximisez votre impact digital en collaborant avec notre agence spécialisée dans la création de solutions web et mobiles sur mesure. Nous développons des applications web, logicielles et mobiles qui répondent spécifiquement aux besoins de votre entreprise, tout en garantissant une présence en ligne percutante. De la conception de votre identité numérique à la mise en place de boutiques en ligne ou à la refonte de sites existants, nous allions expertise technique et stratégie pour délivrer des solutions performantes et personnalisées. Chaque projet est conçu pour offrir une expérience utilisateur optimale, surpasser les attentes de vos utilisateurs et refléter la vision unique de votre marque. Avec nous, vous ne créez pas seulement des sites web, vous développez des expériences numériques exceptionnelles.",
  },
  {
    title: "Digital Marketing",
    subTitle: "Stratégie Digitale et Marketing : Faites Briller Votre Marque",
    image: "/images/2.jpg",
    description:
      "Renforcez votre présence en ligne avec des stratégies de marketing digital sur mesure. Nous vous accompagnons dans la transformation numérique de votre entreprise en élaborant des plans de communication cohérents et efficaces, allant du design UX/UI à la création d'une identité visuelle inoubliable. Que ce soit pour la création de logos, la définition d'une charte graphique, ou l'amélioration de l'expérience utilisateur, nous veillons à une cohérence parfaite de votre image de marque sur tous les supports. En plus du digital, nos services incluent également l'édition et le print, garantissant une communication homogène sur tous les canaux. Avec notre expertise, votre marque se démarquera durablement dans un marché compétitif.",
  },
  {
    title: "Administration Systèmes et Réseaux",
    subTitle: "Optimisation des Systèmes et Réseaux : Sécurité et Performance",
    image: "/images/3.jpg",
    description:
      "Assurez la sécurité et la stabilité de vos infrastructures informatiques avec nos services d’administration de systèmes et de réseaux. Nous mettons en place des solutions robustes pour garantir des performances optimales, en veillant à ce que votre entreprise soit équipée pour faire face aux défis technologiques d'aujourd'hui. Notre expertise en gestion de réseaux vous permet de vous concentrer sur votre activité principale, tandis que nous nous assurons que vos systèmes fonctionnent de manière fluide et sécurisée.",
  },
  {
    title: "Analyse de Données",
    subTitle: "Analyse de Données : Transformez vos Données en Stratégies",
    image: "/images/4.jpg",
    description:
      "Libérez tout le potentiel de vos données avec nos solutions d’analyse avancée. Nous vous aidons à prendre des décisions éclairées en temps réel, basées sur des données précises et pertinentes. Grâce à nos outils et techniques d’analyse, vous obtenez une vue claire et exploitable de vos opérations, vous permettant d’optimiser vos performances et de saisir de nouvelles opportunités de croissance. Notre approche centrée sur les données vous permet de mieux comprendre vos clients, d'affiner vos processus et de créer une véritable valeur ajoutée pour votre entreprise.",
  },
];

export default function DynamicServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [scale, setScale] = useState(0.9);
  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (serviceRefs.current.length && sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY;

        // Start scaling when window.scrollY reaches sectionTop
        if (scrollY >= sectionTop && scale <= 1) {
          const maxScale = 1;
          const minScale = 0.8;
          const scrollFactor = 0.0001; // Adjust this to control scaling speed

          // Calculate new scale between 0.8 and 1 based on scrollY after the sectionTop is reached
          const newScale = Math.min(
            maxScale,
            minScale + (scrollY - sectionTop) * scrollFactor
          );
          setScale(newScale);
        }

        // Calculate the current service in view
        const windowMidpoint = window.innerHeight / 2;

        const newActiveService = serviceRefs.current.findIndex((service) => {
          if (!service) return false;
          const rect = service.getBoundingClientRect();
          const elementMidpoint = rect.top + rect.height / 2;
          return elementMidpoint > 0 && elementMidpoint < windowMidpoint;
        });
        if (newActiveService !== -1) {
          setActiveService(newActiveService);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ServiceContent = ({
    service,
    index,
  }: {
    service: (typeof services)[0];
    index: number;
  }) => (
    <div
      ref={(el) => {
        serviceRefs.current[index] = el;
      }}
      className="w-full space-y-6 transition-opacity duration-500"
    >
      <h2 className="text-[calc(min(8vh,4em))] font-bold text-mitic-4 mb-[30px]">
        {service.title}
      </h2>
      <h3 className="text-[calc(min(3vh,1.5em))] font-bold mb-[1em] text-white">
        {service.subTitle}
      </h3>
      <p className="text-gray-300 text-[calc(min(2.5vh,1.125em))]">
        {service.description}
      </p>
      <Button
        variant="outline"
        className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
      >
        DÉCOUVRIR
      </Button>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-white min-h-screen py-16">
      <div className="w-full">
        <div
          className="bg-black flex flex-col lg:flex-row items-start gap-8 py-10 px-10"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="sticky top-16 w-full lg:w-1/2">
            <div
              className="relative aspect-square bg-gray-800 rounded-full overflow-hidden transition-all duration-300"
              style={{ transform: `scale(${scale})` }}
            >
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-mitic-4"></div>
              <div className="absolute top-1/2 right-0 w-8 h-8 bg-mitic-6 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-mitic-2 rounded-full"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-24">
            {services.map((service, index) => (
              <ServiceContent key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
