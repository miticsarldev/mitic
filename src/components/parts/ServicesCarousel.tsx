"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Phone,
  ShoppingCart,
  Layout,
  Search,
  Globe,
  Wrench,
  BarChart,
  Code,
  FileText,
  Users,
  Shield,
  Cloud,
  Lock,
  Target,
  Package,
  Share2,
  WorkflowIcon,
} from "lucide-react";

type Card = {
  id: number;
  title: string;
  content: string;
  icon?: JSX.Element;
};

const cards = [
  {
    id: 1,
    title: "Applis Web",
    content:
      "Développement d'applications web sur-mesure pour répondre à vos besoins spécifiques. Nous utilisons des technologies modernes pour créer des solutions robustes, sécurisées et évolutives. Que vous ayez besoin d'une application de gestion, d'un portail client ou d'un site web dynamique, nous vous accompagnons à chaque étape du processus.",
    icon: (
      <Laptop className="text-mitic-4 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 2,
    title: "Applis Mobile",
    content:
      "Création d'applications mobiles innovantes pour iOS et Android. Notre équipe conçoit des applications intuitives qui améliorent l'expérience utilisateur tout en intégrant des fonctionnalités avancées. Nous nous assurons que chaque application est optimisée pour la performance et la compatibilité sur divers appareils.",
    icon: (
      <Phone className="text-mitic-5 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 3,
    title: "E-commerce",
    content:
      "Solutions e-commerce personnalisées pour booster vos ventes en ligne. Nous proposons des plateformes de commerce électronique adaptées à votre secteur, avec des fonctionnalités telles que des systèmes de paiement sécurisés, des outils de gestion des stocks, et des intégrations de marketing. Transformez votre boutique en ligne en un moteur de ventes efficace.",
    icon: (
      <ShoppingCart className="text-mitic-7 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 4,
    title: "UX/UI Design",
    content:
      "Conception d'interfaces utilisateur intuitives et esthétiques. Notre équipe d'experts en design se concentre sur la création d'expériences utilisateur fluides et engageantes. Nous effectuons des recherches approfondies pour comprendre votre public cible et concevoir des interfaces qui captivent et retiennent l'attention des utilisateurs.",
    icon: (
      <Layout className="text-mitic-4 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 5,
    title: "SEO",
    content:
      "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne. Nous utilisons des techniques éprouvées pour optimiser votre site web, améliorer son classement sur Google et attirer un trafic organique de qualité. Nos services incluent l'analyse des mots-clés, l'optimisation du contenu, et la création de backlinks de qualité.",
    icon: (
      <Search className="text-mitic-5 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 6,
    title: "Marketing Digital",
    content:
      "Stratégies de marketing digital pour atteindre et engager votre audience cible. Nous développons des campagnes personnalisées qui englobent le marketing par e-mail, le marketing de contenu, et la publicité en ligne. Notre approche axée sur les données garantit des résultats mesurables et un retour sur investissement élevé.",
    icon: (
      <Globe className="text-mitic-7 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 7,
    title: "Maintenance",
    content:
      "Services de maintenance et de support continu pour vos applications. Nous proposons des contrats de maintenance flexibles pour garantir que vos applications fonctionnent sans interruption. Cela inclut des mises à jour régulières, des corrections de bugs et un support technique rapide pour résoudre tout problème éventuel.",
    icon: (
      <Wrench className="text-mitic-4 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 8,
    title: "Analyse de Données",
    content:
      "Services d'analyse de données pour transformer les informations en insights stratégiques. Nous utilisons des outils avancés pour collecter et analyser vos données, vous permettant de prendre des décisions éclairées et d'optimiser vos opérations. Des tableaux de bord personnalisés vous offrent une visibilité sur vos performances clés.",
    icon: (
      <BarChart className="text-mitic-5 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 9,
    title: "Développement API",
    content:
      "Création d'API robustes pour faciliter l'intégration et l'échange de données entre vos systèmes. Nos API sont conçues pour être sécurisées et évolutives, permettant à vos applications de communiquer efficacement et de partager des données en temps réel. Nous garantissons une documentation claire et un support technique pour l'intégration.",
    icon: (
      <Code className="text-mitic-7 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 10,
    title: "Stratégie de Contenu",
    content:
      "Élaboration de stratégies de contenu efficaces pour attirer et fidéliser votre public. Nous créons du contenu engageant et pertinent, optimisé pour le SEO, afin d'améliorer votre visibilité et de renforcer votre autorité dans votre secteur. Notre approche inclut l'analyse de votre audience et la planification de publications régulières.",
    icon: (
      <FileText className="text-mitic-4 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 11,
    title: "Publicité en Ligne",
    content:
      "Campagnes de publicité en ligne ciblées pour maximiser votre retour sur investissement. Nous concevons et gérons des campagnes PPC sur des plateformes comme Google Ads et Facebook Ads, en optimisant continuellement les performances pour garantir des résultats optimaux. Suivi et analyse détaillés de chaque campagne pour une transparence totale.",
    icon: (
      <Target className="text-mitic-5 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 12,
    title: "Consultation Technologique",
    content:
      "Conseils d'experts pour vous aider à choisir les meilleures solutions technologiques. Nous offrons des consultations personnalisées pour évaluer vos besoins et vous orienter vers les outils et technologies les plus adaptés. Notre objectif est de vous aider à rationaliser vos opérations et à améliorer votre efficacité.",
    icon: (
      <Users className="text-mitic-7 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 13,
    title: "Formation",
    content:
      "Programmes de formation sur les dernières tendances en développement et marketing digital. Nous proposons des ateliers pratiques et des sessions de formation personnalisées pour vos équipes, leur permettant de se familiariser avec les nouveaux outils et techniques, et d'améliorer leurs compétences en continu.",
    icon: (
      <Share2 className="text-mitic-4 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 14,
    title: "Cloud Computing",
    content:
      "Solutions de cloud computing pour assurer la scalabilité et la flexibilité de vos opérations. Nous vous aidons à migrer vers le cloud en toute sécurité, en optimisant vos ressources informatiques pour réduire les coûts et améliorer l'accès à vos données. Nos solutions sont conçues pour s'adapter à la croissance de votre entreprise.",
    icon: (
      <Cloud className="text-mitic-5 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 15,
    title: "Sécurité Informatique",
    content:
      "Mesures de sécurité pour protéger vos données et vos systèmes contre les cybermenaces. Nous évaluons vos systèmes actuels et mettons en place des protocoles de sécurité robustes, incluant la gestion des risques, le cryptage des données, et des formations pour sensibiliser vos équipes aux meilleures pratiques de sécurité.",
    icon: (
      <Lock className="text-mitic-7 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 16,
    title: "Automatisation des Processus",
    content:
      "Automatisation de vos processus métier pour améliorer l'efficacité et réduire les coûts. Nous analysons vos workflows existants et intégrons des outils d'automatisation qui permettent d'optimiser les tâches répétitives, libérant ainsi du temps pour vos équipes afin qu'elles se concentrent sur des activités à plus forte valeur ajoutée.",
    icon: (
      <WorkflowIcon className="text-mitic-4 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 17,
    title: "Développement de Logiciels",
    content:
      "Création de logiciels personnalisés pour répondre aux besoins spécifiques de votre entreprise. Nous développons des solutions logicielles adaptées, en utilisant des méthodologies agiles pour garantir une flexibilité et une réactivité maximales tout au long du projet. Notre objectif est de créer des outils qui améliorent votre productivité et votre efficacité opérationnelle.",
    icon: (
      <Package className="text-mitic-5 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
  {
    id: 18,
    title: "Réseaux Sociaux",
    content:
      "Gestion et optimisation de vos réseaux sociaux pour renforcer votre présence en ligne. Nous élaborons des stratégies de contenu adaptées à chaque plateforme, gérons vos publications et interagissons avec votre audience pour construire une communauté engagée autour de votre marque.",
    icon: (
      <Globe className="text-mitic-7 w-[calc(min(10vh,100px))] h-[calc(min(10vh,100px))] mb-12" />
    ),
  },
];

const ApplisCard = ({ card, index }: { card: Card; index: number }) => {
  const bgColor =
    index % 3 === 0
      ? "bg-mitic-1"
      : index % 3 === 1
      ? "bg-mitic-2"
      : "bg-mitic-3";

  const textColor =
    index % 3 === 0
      ? "text-mitic-4"
      : index % 3 === 1
      ? "text-mitic-5"
      : "text-mitic-7";

  const hoverColor =
    index % 3 === 0
      ? "hover:bg-mitic-1/90"
      : index % 3 === 1
      ? "hover:bg-mitic-2/90"
      : "hover:bg-mitic-3/90";

  return (
    <Card
      className={`w-[400px] h-full overflow-hidden cursor-pointer shadow-lg group rounded-none ${textColor} ${bgColor} ${hoverColor} transition-all duration-300`}
    >
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-center w-full items-center">
            <div className="flex justify-between items-start mb-4 w-16 h-16">
              {card.icon}
            </div>
          </div>
          <h2 className="text-[calc(min(6vh,3.5em))] w-full font-black mb-4 leading-[.9] min-h-[calc(15vh)] flex items-center justify-center text-center">
            {card.title}
          </h2>
          <p className="text-[calc(min(3vh,1.55em))] leading-relaxed relative text-center">
            {card.content}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-84%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 h-full group">
          {cards.map((card, index) => {
            return <ApplisCard card={card} key={card.id} index={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const ServicesCarousel = () => {
  return (
    <div className="bg-white mt-[100px] mb-[80px]">
      <HorizontalScrollCarousel />
    </div>
  );
};

export default ServicesCarousel;
