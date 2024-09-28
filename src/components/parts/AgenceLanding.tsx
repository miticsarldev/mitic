import Link from "next/link";

const AgenceLanding = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-10 px-8">
      <main className="container mx-auto">
        <h1 className="text-[calc(min(5vh,2.5em))] max-w-6xl text-center mx-auto font-black leading-tight">
          Bienvenue chez <span className="text-mitic-2">MITIC</span>, où
          l’innovation digitale rencontre la stratégie, de la conception au
          développement de vos projets numériques !
        </h1>
        <p className="text-xl py-6 text-center text-[calc(min(3vh,1.25em))] uppercase">
          MADE IN MALI !
        </p>
        <p className="mb-4 text-center text-[calc(min(3vh,1.25em))]">
          Située au cœur de la capitale du MALI à Bamako, notre agence est au
          service de la <strong>stratégie de vos entreprises !</strong>
        </p>

        <p className="mb-4 text-center text-[calc(min(3vh,1.25em))]">
          <strong>Expertise et conseil</strong> guident nos réalisations pour
          développer la présence sur internet de tous nos clients !
        </p>

        <p className="mb-8 text-center text-[calc(min(3vh,1.25em))]">
          Nous sommes une agence en stratégie digitale passionnée par la
          transformation numérique des entreprises. Depuis notre création, nous
          avons pour mission d’accompagner nos clients dans l’optimisation de
          leur présence en ligne et dans le développement technologique. Nous
          intervenons dans des domaines variés tels que le Développement
          Applicatif (Web, Logiciel, Mobile), l’Administration de Système
          Réseau, et l’Analyse de Données, afin de les aider à naviguer et
          exceller dans un monde numérique en perpétuelle évolution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10 max-w-4xl mx-auto font-black">
          <div className="border-b-4 border-mitic-1">
            <h2 className="font-black w-auto transition-all duration-300 text-[calc(min(10vh,5.9375em))]">
              480
            </h2>
            <p className="text-center uppercase text-[1.0625em] px-0 pt-2 pb-4">
              Solutions web hautes en pixel et made in MALI !
            </p>
          </div>
          <div className="border-b-4 border-mitic-1">
            <h2 className="font-black w-auto transition-all duration-300 text-[calc(min(10vh,5.9375em))]">
              <span>154</span>
            </h2>
            <p className="text-center uppercase text-[1.0625em] px-0 pt-2 pb-4">
              Supports de communication, pour briller en HD !
            </p>
          </div>
          <div className="border-b-4 border-mitic-1">
            <h2 className="font-black w-auto transition-all duration-300 text-[calc(min(10vh,5.9375em))]">
              13
            </h2>
            <p className="text-center uppercase text-[1.0625em] px-0 pt-2 pb-4">
              Équipiers armés de souris et claviers super-soniques !
            </p>
          </div>
        </div>

        <div className="pt-[90px] pb-[60px] flex items-center justify-center">
          <Link
            href="/"
            className="bg-mitic-1 text-xl text-white hover:bg-mitic-2 hover:border-mitic-5 hover:text-white transition-all duration-300 px-6 py-2 font-bold relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-6 before:content-[''] before:w-10 before:h-2 before:bg-mitic-5 before:transition-all before:duration-300 before:ease-in-out before:hover:w-10 before:hover:-right-10"
          >
            Découvrir
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AgenceLanding;
