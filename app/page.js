// page.js
// This is the main homepage for the Product Team Workshop
// It provides a welcome message, agenda, and setup instructions

import WelcomeSection from "./components/WelcomeSection";
import AgendaSection from "./components/AgendaSection";
import InstallationGuide from "./components/InstallationGuide";
import CursorGuideSection from "./components/CursorGuideSection";
import ProjectStructureSection from "./components/ProjectStructureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple navigation bar for workshop */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Workshop branding */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                PW
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Product Workshop
                </h1>
                <p className="text-sm text-gray-500">
                  Web Development Training
                </p>
              </div>
            </div>

            {/* Simple navigation menu */}
            <div className="hidden md:flex space-x-6">
              <a
                href="#welcome"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Willkommen
              </a>
              <a
                href="#agenda"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Agenda
              </a>
              <a
                href="#setup"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Setup
              </a>
              <a
                href="#cursor"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Cursor
              </a>
              <a
                href="#projekt"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Projekt
              </a>
              <a
                href="/karte"
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                🗺️ Karte
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content sections */}
      <main>
        {/* Welcome section with workshop introduction */}
        <section id="welcome">
          <WelcomeSection />
        </section>

        {/* Agenda section showing today's schedule */}
        <section id="agenda">
          <AgendaSection />
        </section>

        {/* Setup guide with installation instructions */}
        <section id="setup">
          <InstallationGuide />
        </section>

        {/* Cursor AI Guide section */}
        <section id="cursor">
          <CursorGuideSection />
        </section>

        {/* Project Structure section */}
        <section id="projekt">
          <ProjectStructureSection />
        </section>
      </main>

      {/* Simple footer with contact info */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Product Team Workshop
            </h3>
            <p className="text-gray-300">
              Bei Fragen während des Workshops, meldet euch gerne!
            </p>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              © 2024 Product Workshop - Viel Erfolg beim Lernen! 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
