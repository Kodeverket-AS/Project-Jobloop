export default function CTASection() {
  return (
    <div className="w-full mx-auto text-center mb-16">
      <div className="bg-jobloop-primary-green/50 rounded-3xl p-8 ">
        <h2 className="text-3xl font-bold mb-4">
          Har du spørsmål?
        </h2>
        <p className="text-xl mb-6 opacity-90">
          Vi er her for å hjelpe deg med å finne det perfekte kurset for din bedrift eller deg selv.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:oda.kristin@jobloop.no"
            className="bg-white text-jobloop-primary-green px-8 py-3 rounded-full text-lg hover:bg-jobloop-primary-green/50 hover:text-white hover:border-white hover:border-2 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Send oss en e-post
          </a>
          <a 
            href="/kontakt"
            className="  border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-jobloop-primary-green transition-all duration-300 hover:scale-105"
          >
            Besøk vår kontakt side
          </a>
        </div>
      </div>
    </div>
  );
}
