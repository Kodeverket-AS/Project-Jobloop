"use client";

export default function CourseCard({ content }) {
  return (
    <div className="flex flex-col p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-kv-white rounded-xl border border-gray-100 hover:border-jobloop-primary-green/20">
      <h3 className="text-xl md:text-2xl font-bold text-kv-black mb-4 border-b-2 border-jobloop-primary-green w-fit pb-2">Om kurset</h3>
      <p className="pb-4 border-b-2 border-gray-200 md:pt-2 text-gray-600">
        Innhold og rammer for kurset
      </p>
      <div className="space-y-4 pt-4">
        <div>
          <h4 className="text-lg font-semibold text-jobloop-primary-green mb-2">Målgruppe</h4>
          <p className="text-gray-700">{content.targetGroupShort}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-jobloop-primary-green mb-2">Tidsplan</h4>
          <p className="text-gray-700">{content.duration}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-jobloop-primary-green mb-2">Undervisningsform</h4>
          <p className="text-gray-700">{content.lectureType}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-jobloop-primary-green mb-2">Sted</h4>
          <p className="text-gray-700">{content.locations}</p>
        </div>
      </div>
    </div>
  );
}
