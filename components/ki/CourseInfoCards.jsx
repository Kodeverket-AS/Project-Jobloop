"use client";
import { useEffect, useRef } from "react";

export default function CourseInfoCards() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.card-slide-in');
      cards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full mx-auto mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-jobloop-primary-green">
        Vi tilbyr et praktisk og motiverende kursløp:
      </h2>
      
      <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-jobloop-primary-green/20 hover:shadow-xl transition-all duration-300">
        <div className="grid gap-6" ref={cardsRef}>
          <div className="card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Varighet</h3>
              <p className="text-lg">1 hel dag i uken, over 12 uker (oppstart uke 47 inkludert 2 uker juleferie = <span className="font-bold text-jobloop-primary-orange">60 timer med undervisning</span>)</p>
            </div>
          </div>

          <div className="card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Innhold</h3>
              <p className="text-lg">Digital oppfriskning + praktisk bruk av KI i arbeidshverdagen (ingen tech-prat - bare «hvordan gjør jeg dette i praksis?»)</p>
            </div>
          </div>

          <div className="card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Format for bedrifter</h3>
              <p className="text-lg">Eget kurs for opptil 8 deltakere - <span className="font-bold text-jobloop-primary-orange text-2xl">45.000 kr</span></p>
            </div>
          </div>

          <div className="card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-green hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Åpen påmelding</h3>
              <p className="text-lg"><span className="font-bold text-jobloop-primary-orange text-2xl">8.500 kr</span> per deltaker</p>
            </div>
          </div>

          <div className="card-slide-in bg-gray-50 rounded-2xl p-6 border-l-4 border-jobloop-primary-orange hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-jobloop-primary-grey mb-2">Sted</h3>
              <p className="text-lg">Hos dere, i våre lokaler, eller digitalt (med kaffe og tålmodighet inkludert )</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
