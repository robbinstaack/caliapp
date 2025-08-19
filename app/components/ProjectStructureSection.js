// ProjectStructureSection.js
// This component explains the project structure and how Next.js apps are organized

export default function ProjectStructureSection() {
  // Explanation of the project structure
  const projectStructure = [
    {
      name: "📁 caliapp/",
      description: "Haupt-Projektordner - hier beginnt alles",
      details:
        "Hier findest du alle Projekt-Dateien, package.json, und Konfigurationsdateien wie .env.local",
      level: 0,
    },
    {
      name: "📁 app/",
      description: "App Router - das Herz unserer Next.js Anwendung",
      details:
        "Next.js 13+ verwendet den App Router. Jeder Ordner hier wird zu einer Route in der URL",
      level: 1,
    },
    {
      name: "📄 page.js",
      description: "Homepage - die Hauptseite der Anwendung",
      details:
        "Diese Datei wird angezeigt, wenn jemand / (die Root-URL) besucht",
      level: 2,
    },
    {
      name: "📄 layout.js",
      description: "Layout-Komponente - umhüllt alle Seiten",
      details:
        "Definiert gemeinsame Elemente wie <head>, Metadaten und globale Styles",
      level: 2,
    },
    {
      name: "📁 components/",
      description: "Wiederverwendbare UI-Komponenten",
      details:
        "Hier leben alle React-Komponenten, die wir in verschiedenen Seiten verwenden können",
      level: 2,
    },
    {
      name: "📁 api/",
      description: "API-Routen für Backend-Funktionalität",
      details:
        "Hier können wir Server-seitige API-Endpunkte erstellen (z.B. für Mapbox-Daten)",
      level: 2,
    },
    {
      name: "📁 karte/",
      description: "Neue Seite für Kartenansicht (Beispiel)",
      details:
        "Ein Beispiel-Ordner, der zeigt, wie neue Seiten erstellt werden. Erreichbar unter /karte",
      level: 2,
    },
  ];

  const newPageSteps = [
    {
      step: 1,
      title: "Neuen Ordner erstellen",
      description: "Erstelle einen neuen Ordner im app/ Verzeichnis",
      example: "app/meine-neue-seite/",
    },
    {
      step: 2,
      title: "page.js hinzufügen",
      description: "Erstelle eine page.js Datei im neuen Ordner",
      example: "app/meine-neue-seite/page.js",
    },
    {
      step: 3,
      title: "React-Komponente exportieren",
      description: "Exportiere eine React-Komponente als Standard-Export",
      example:
        "export default function MeineNeueSeite() { return <div>...</div> }",
    },
    {
      step: 4,
      title: "Seite aufrufen",
      description: "Die neue Seite ist automatisch unter der URL erreichbar",
      example: "http://localhost:3000/meine-neue-seite",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Projekt-Struktur verstehen 🏗️
          </h2>
          <p className="text-lg text-gray-600">
            So ist unser Calimoto-inspiriertes Next.js Projekt aufgebaut
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project structure */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              📂 Ordner-Struktur
            </h3>
            <div className="space-y-4">
              {projectStructure.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    item.level === 0
                      ? "bg-blue-50 border-blue-500"
                      : item.level === 1
                      ? "bg-green-50 border-green-500 ml-4"
                      : "bg-gray-50 border-gray-400 ml-8"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <h4 className="font-mono font-semibold text-gray-800">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-gray-700 mt-1 font-medium">
                    {item.description}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to create new pages */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              ➕ Neue Seite erstellen
            </h3>
            <div className="space-y-6">
              {newPageSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-orange-50 border border-orange-200 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-2">{step.description}</p>
                  <div className="bg-orange-100 p-2 rounded font-mono text-sm text-orange-800">
                    {step.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calimoto connection */}
        {/* Tailwind CSS Erklärung */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">
            🎨 Tailwind CSS - Unser Styling-Framework
          </h3>
          <div className="text-purple-700 space-y-2">
            <p>
              • <strong>Was ist Tailwind?</strong> Ein "Utility-first" CSS
              Framework mit vordefinierten Klassen
            </p>
            <p>
              • <strong>Beispiele:</strong>{" "}
              <code className="bg-purple-100 px-1 rounded">bg-blue-500</code>{" "}
              (blauer Hintergrund),{" "}
              <code className="bg-purple-100 px-1 rounded">p-4</code> (Padding),{" "}
              <code className="bg-purple-100 px-1 rounded">text-center</code>{" "}
              (zentrierter Text)
            </p>
            <p>
              • <strong>Vorteil:</strong> Schnelles Styling direkt im HTML/JSX,
              keine separaten CSS-Dateien nötig
            </p>
            <p>
              • <strong>Im Workshop:</strong> Wir verwenden Tailwind für alle
              UI-Komponenten und Karten-Styling
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            🎯 Heutiges Ziel
          </h3>
          <div className="text-green-700 space-y-2">
            <p>
              • <strong>Unser Ziel:</strong> Wir bauen eine ähnliche App, um
              Mapbox-Integration und UI-Design zu lernen
            </p>
            <p>
              • <strong>Workshop-Fokus:</strong> Verschiedene Karten-Themes
              testen und interaktive Karten-Elemente entwickeln
            </p>
            <p>
              • <strong>Praktisches Lernen:</strong> Real-world Projekt macht
              das Lernen interessanter und relevanter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
