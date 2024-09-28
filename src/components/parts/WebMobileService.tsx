import Image from "next/image";
import { Button } from "@/components/ui/button";

const WebMobileService = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="sticky w-full lg:w-1/2 aspect-square">
          <div className="absolute inset-0 bg-gray-800 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Hand holding a smartphone displaying a website"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-400"></div>
          <div className="absolute top-1/2 right-0 w-8 h-8 bg-red-400 rounded-full"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 bg-black rounded-full"></div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-yellow-400">Web & Mobile</h2>
          <h3 className="text-2xl font-semibold">
            Sites internet et applications : Notre agence web de la stratégie au
            développement !
          </h3>
          <p className="text-gray-300">
            Maximisez votre impact digital en collaborant avec notre agence web
            en Vendée et Deux-Sèvres. Intervenant de
            <span className="text-yellow-400"> Nantes à Niort </span>
            en passant par la
            <span className="text-yellow-400"> La Roche-sur-Yon</span>, nous
            élaborons ensemble votre identité et présence web. Du développement
            sur-mesure au lancement de boutiques en ligne, sans oublier la
            refonte de sites vitrine existants, nous unissons l’expertise
            technique et la stratégie pour créer des solutions performantes et
            personnalisées. Chaque projet est l’expression du talent de notre
            équipe et vous garantit une réalisation qui non seulement répond à
            vos besoins, mais où chaque détail est conçu pour refléter votre
            vision et surpasser les attentes de vos utilisateurs. Nous ne nous
            contentons pas de créer des sites web, nous bâtissons des
            expériences !
          </p>
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            DÉCOUVRIR
          </Button>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-yellow-400">Web & Mobile</h2>
          <h3 className="text-2xl font-semibold">
            Sites internet et applications : Notre agence web de la stratégie au
            développement !
          </h3>
          <p className="text-gray-300">
            Maximisez votre impact digital en collaborant avec notre agence web
            en Vendée et Deux-Sèvres. Intervenant de
            <span className="text-yellow-400"> Nantes à Niort </span>
            en passant par la
            <span className="text-yellow-400"> La Roche-sur-Yon</span>, nous
            élaborons ensemble votre identité et présence web. Du développement
            sur-mesure au lancement de boutiques en ligne, sans oublier la
            refonte de sites vitrine existants, nous unissons l’expertise
            technique et la stratégie pour créer des solutions performantes et
            personnalisées. Chaque projet est l’expression du talent de notre
            équipe et vous garantit une réalisation qui non seulement répond à
            vos besoins, mais où chaque détail est conçu pour refléter votre
            vision et surpasser les attentes de vos utilisateurs. Nous ne nous
            contentons pas de créer des sites web, nous bâtissons des
            expériences !
          </p>
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            DÉCOUVRIR
          </Button>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-yellow-400">Web & Mobile</h2>
          <h3 className="text-2xl font-semibold">
            Sites internet et applications : Notre agence web de la stratégie au
            développement !
          </h3>
          <p className="text-gray-300">
            Maximisez votre impact digital en collaborant avec notre agence web
            en Vendée et Deux-Sèvres. Intervenant de
            <span className="text-yellow-400"> Nantes à Niort </span>
            en passant par la
            <span className="text-yellow-400"> La Roche-sur-Yon</span>, nous
            élaborons ensemble votre identité et présence web. Du développement
            sur-mesure au lancement de boutiques en ligne, sans oublier la
            refonte de sites vitrine existants, nous unissons l’expertise
            technique et la stratégie pour créer des solutions performantes et
            personnalisées. Chaque projet est l’expression du talent de notre
            équipe et vous garantit une réalisation qui non seulement répond à
            vos besoins, mais où chaque détail est conçu pour refléter votre
            vision et surpasser les attentes de vos utilisateurs. Nous ne nous
            contentons pas de créer des sites web, nous bâtissons des
            expériences !
          </p>
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            DÉCOUVRIR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebMobileService;
