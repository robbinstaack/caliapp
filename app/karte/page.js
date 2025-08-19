// karte/page.js
// This is the map page that will be accessible at /karte
// This serves as an example of how to create new pages in Next.js

export default function KartePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation placeholder */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                🗺️
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Karten-Ansicht
                </h1>
                <p className="text-sm text-gray-500">
                  Hier werden später die Mapbox-Karten angezeigt
                </p>
              </div>
            </div>

            {/* Back to workshop link */}
            <a
              href="/"
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              ← Zurück zum Workshop
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Mapbox Karten-Integration 🗺️
            </h1>
            <p className="text-xl text-gray-600">
              Hier werden wir während des Workshops verschiedene Karten-Themes
              und interaktive Elemente entwickeln
            </p>
          </div>

          {/* Placeholder for map */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Mapbox Karte kommt hier rein
                </h3>
                <p className="text-gray-600">
                  Während des Workshops werden wir hier eine interaktive
                  Mapbox-Karte einbauen
                </p>
              </div>
            </div>
          </div>

          {/* Features we'll build */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎨 <span className="ml-2">Karten-Themes</span>
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Standard-Karte</li>
                <li>• Satellite-Ansicht</li>
                <li>• Dark Mode Theme</li>
                <li>• Motorrad-spezifische Styles</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                ⚡ <span className="ml-2">Interaktive Elemente</span>
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Marker setzen und bewegen</li>
                <li>• Routen zeichnen</li>
                <li>• POI (Points of Interest) anzeigen</li>
                <li>• Zoom und Pan Controls</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🛠️ <span className="ml-2">Tools & Controls</span>
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Theme-Switcher</li>
                <li>• Layer-Controls</li>
                <li>• Search-Funktionalität</li>
                <li>• Export-Funktionen</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                📱 <span className="ml-2">Responsive Design</span>
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile-optimierte Bedienung</li>
                <li>• Touch-Gesten</li>
                <li>• Adaptive UI-Elemente</li>
                <li>• Performance-Optimierung</li>
              </ul>
            </div>
          </div>

          {/* Development info */}
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              👨‍💻 Development-Status
            </h3>
            <div className="text-yellow-700 space-y-2">
              <p>
                • <strong>Aktuell:</strong> Grundgerüst steht,
                Mapbox-Integration noch nicht implementiert
              </p>
              <p>
                • <strong>Nächste Schritte:</strong> Environment-Variablen
                konfigurieren, Mapbox GL JS einbinden
              </p>
              <p>
                • <strong>Workshop-Ziel:</strong> Funktionsfähige Karte mit
                verschiedenen Themes und interaktiven Elementen
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
