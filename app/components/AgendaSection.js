// AgendaSection.js
// This component shows the workshop agenda for the day

export default function AgendaSection() {
  // Workshop agenda items for Mapbox UI development session
  const agendaItems = [
    {
      time: "10:00 - 10:15",
      title: "Willkommen & Vibe Check",
      description:
        "Begrüßung und kurze Einführung in das heutige 'Vibe Coding'",
      icon: "👋",
    },
    {
      time: "10:15 - 10:45",
      title: "Setup & Projekt-Start",
      description:
        "Repo downloaden, HomePro installieren, Dependencies installieren",
      icon: "⚙️",
    },
    {
      time: "10:45 - 12:00",
      title: "Mapbox Integration & Themings",
      description: "Mapbox einrichten, verschiedene Karten-Themes ausprobieren",
      icon: "🗺️",
    },
    {
      time: "12:00 - 12:30",
      title: "Mittagspause",
      description: "Kurze Erholungspause (30 Minuten)",
      icon: "🍕",
    },
    {
      time: "12:30 - 13:30",
      title: "UI Komponenten bauen",
      description: "Interaktive Elemente für die Karte entwickeln und testen",
      icon: "🎨",
    },
    {
      time: "13:30 - 14:00",
      title: "Testing & Wrap-up",
      description:
        "Letzte Tests, Learnings besprechen und nächste Schritte planen",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Agenda für heute
        </h2>

        {/* Agenda timeline */}
        <div className="space-y-6">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                {/* Time and icon */}
                <div className="flex-shrink-0">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.time}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
