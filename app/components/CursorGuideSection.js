// CursorGuideSection.js
// This component explains how to use Cursor AI IDE effectively during the workshop

export default function CursorGuideSection() {
  // Tips for using Cursor AI IDE during development
  const cursorTips = [
    {
      title: "Code mit AI generieren",
      description: "Nutze Cursor's AI-Agent, um Code-Vorschläge zu bekommen",
      example:
        "Schreibe einen Kommentar wie '// Create a button component' und lass Cursor den Code generieren",
      icon: "🤖",
    },
    {
      title: "Änderungen überprüfen",
      description:
        "Schaue dir immer die vorgeschlagenen Änderungen genau an, bevor du sie akzeptierst",
      example:
        "Cursor zeigt dir ein Diff mit grünen (hinzugefügt) und roten (entfernt) Linien",
      icon: "👀",
    },
    {
      title: "'Keep All' verwenden",
      description:
        "Wenn du mit allen Änderungen zufrieden bist, klicke auf 'Keep All'",
      example:
        "Nach Code-Review einfach auf 'Keep All' klicken, um alle Änderungen zu übernehmen",
      icon: "✅",
    },
    {
      title: "Einzelne Änderungen akzeptieren",
      description:
        "Du kannst auch nur bestimmte Teile der Vorschläge übernehmen",
      example:
        "Klicke auf einzelne grüne '+' Symbole, um nur diese Änderung zu akzeptieren",
      icon: "🎯",
    },
    {
      title: "Code erklären lassen",
      description: "Markiere Code und frage Cursor, was er macht",
      example: "Markiere eine Funktion und frage: 'Was macht diese Funktion?'",
      icon: "💭",
    },
    {
      title: "Fehler beheben",
      description: "Cursor kann Fehler erkennen und Lösungsvorschläge machen",
      example:
        "Bei Fehlern im Terminal oder Code einfach Cursor nach einer Lösung fragen",
      icon: "🔧",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Cursor AI IDE Leitfaden 🤖
          </h2>
          <p className="text-lg text-gray-600">
            So nutzt du Cursor effektiv für die Entwicklung während des
            Workshops
          </p>
        </div>

        {/* Cursor tips grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cursorTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">
                    {tip.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{tip.description}</p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
                    <p className="text-sm text-purple-800">
                      <span className="font-semibold">Beispiel:</span>{" "}
                      {tip.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best practices */}
        <div className="mt-12 p-6 bg-purple-100 border border-purple-200 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">
            💡 Cursor Best Practices für den Workshop
          </h3>
          <div className="text-purple-700 space-y-2">
            <p>
              • <strong>Kommuniziere klar:</strong> Beschreibe genau, was du
              erreichen möchtest
            </p>
            <p>
              • <strong>Iteriere schrittweise:</strong> Mache kleine Änderungen
              und teste regelmäßig
            </p>
            <p>
              • <strong>Verstehe den Code:</strong> Lass dir erklären, was
              Cursor generiert hat
            </p>
            <p>
              • <strong>Experimentiere:</strong> Probiere verschiedene Prompts
              und Ansätze aus
            </p>
            <p>
              • <strong>Speichere oft:</strong> Verwende Ctrl+S (Cmd+S)
              regelmäßig, um deine Arbeit zu sichern
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
