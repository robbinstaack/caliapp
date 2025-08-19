// InstallationGuide.js
// This component provides step-by-step installation guide for development tools

import InstallationStep from "./InstallationStep";

export default function InstallationGuide() {
  // Setup steps for the Mapbox UI workshop
  const installationSteps = [
    {
      stepNumber: 1,
      title: "Projekt Repository herunterladen",
      description:
        "Lade das Workshop-Repository direkt als ZIP-Datei herunter (kein Git benötigt).",
      command: "",
      additionalInfo:
        "Gehe zum GitHub Repository und lade es als ZIP herunter. Klicke auf 'Code' → 'Download ZIP' und entpacke die Datei auf deinem Computer.",
      icon: "📦",
      link: "https://github.com/robbinstaack/caliapp",
    },
    {
      stepNumber: 2,
      title: "Node.js installieren (ERFORDERLICH)",
      description:
        "Node.js ist die JavaScript-Runtime, die wir für Next.js und npm benötigen.",
      command: "",
      additionalInfo:
        "Gehe zu https://nodejs.org und lade die LTS-Version herunter. Installiere sie normal. Nach der Installation sollten 'node' und 'npm' im Terminal verfügbar sein.",
      icon: "🟢",
      link: "https://nodejs.org",
    },
    {
      stepNumber: 3,
      title: "Cursor IDE vorbereiten",
      description:
        "Öffne Cursor, lade das Projekt und bereite die Entwicklungsumgebung vor.",
      command: "",
      additionalInfo:
        "1. Cursor öffnen 2. Ordner öffnen (File → Open Folder) und das entpackte Projekt wählen 3. Terminal öffnen (Terminal → New Terminal) 4. Chat öffnen (Cmd+L oder Ctrl+L)",
      icon: "🎯",
    },
    {
      stepNumber: 4,
      title: "Homebrew installieren (optional für macOS)",
      description:
        "Homebrew vereinfacht die Installation von Entwicklungstools auf macOS.",
      command: "",
      additionalInfo:
        "Nur für macOS-Nutzer: Besuche https://brew.sh für die Installation. Windows/Linux-Nutzer können diesen Schritt überspringen. Alternative zu direkten Downloads.",
      icon: "🍺",
      link: "https://brew.sh",
    },
    {
      stepNumber: 5,
      title: "Dependencies installieren",
      description: "Alle benötigten Pakete für das Projekt installieren.",
      command: "npm install",
      additionalInfo:
        "Dies installiert alle Abhängigkeiten aus der package.json, inklusive Mapbox GL JS und alle UI-Komponenten. Stelle sicher, dass Node.js installiert ist!",
      icon: "📦",
    },
    {
      stepNumber: 6,
      title: "Environment-Datei erstellen (.env.local)",
      description:
        "Erstelle eine .env.local Datei im Projekt-Root über deine IDE (Cursor).",
      command: "",
      additionalInfo:
        "Rechtsklick im Explorer → 'New File' → '.env.local' eingeben. Der Punkt am Anfang sorgt dafür, dass Git diese Datei automatisch ignoriert und sie nicht aus Versehen hochgeladen wird.",
      icon: "🔑",
    },
    {
      stepNumber: 7,
      title: "Mapbox Token hinzufügen",
      description:
        "Öffne die .env.local Datei und füge deinen Mapbox Access Token hinzu.",
      command: "MAPBOX_ACCESS_TOKEN=dein_token_hier",
      additionalInfo:
        "⚠️ WICHTIG: Den Token bekommst du im Workshop. Teile diese Datei NIEMALS öffentlich! Tokens sind wie Passwörter - wenn sie öffentlich werden, kann jeder auf dein Mapbox-Konto zugreifen und Kosten verursachen.",
      icon: "🗺️",
    },
    {
      stepNumber: 8,
      title: "Entwicklungsserver starten",
      description: "Starte das Projekt und beginne mit dem 'Vibe Coding'!",
      command: "npm run dev",
      additionalInfo:
        "Der Server läuft normalerweise auf http://localhost:3000. Jetzt können wir mit dem Mapbox UI experimentieren!",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mapbox UI Workshop Setup 🗺️
          </h2>
          <p className="text-lg text-gray-600">
            Folge diesen Schritten, um für das 'Vibe Coding' bereit zu sein
          </p>
        </div>

        {/* Installation steps */}
        <div className="space-y-6">
          {installationSteps.map((step, index) => (
            <InstallationStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              command={step.command}
              additionalInfo={step.additionalInfo}
              icon={step.icon}
              link={step.link}
            />
          ))}
        </div>

        {/* Help section */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            🚀 Workshop-Ziele & Vibe
          </h3>
          <div className="text-blue-700 space-y-2">
            <p>
              • <strong>Ziel:</strong> Gemeinsam eine UI für Mapbox-Theming und
              Karten-Elemente entwickeln
            </p>
            <p>
              • <strong>Arbeitsweise:</strong> Wir entscheiden vor Ort, ob alle
              an einem Rechner oder jeder separat arbeitet
            </p>
            <p>
              • <strong>Learning:</strong> Verständnis für
              Implementierungsgeschwindigkeit und Design-Entscheidungen
              entwickeln
            </p>
            <p>
              • <strong>Hilfe:</strong> Bei Problemen einfach das Team fragen -
              wir sind alle da, um voneinander zu lernen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
