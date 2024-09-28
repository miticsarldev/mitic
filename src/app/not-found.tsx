import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mitic-1 via-mitic-2 to-mitic-3 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center mb-8">
            <div className="text-4xl font-bold text-mitic-1">Mitic</div>
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            404 - Page non trouvée
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Oups ! La page que vous cherchez semble être en vacances numériques.
            Ne vous inquiétez pas, même nos meilleures technologies ont parfois
            besoin d’une pause !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="default"
              className="flex items-center justify-center"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Retour à la page d’accueil
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex items-center justify-center"
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Link>
            </Button>
          </div>
        </div>
        <div className="bg-blue-50 p-4 text-center text-sm text-blue-600">
          Si vous pensez qu’il s’agit d’une erreur, veuillez contacter notre
          équipe de support.
        </div>
      </div>
    </div>
  );
}
