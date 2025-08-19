// WelcomeSection.js
// This component displays the welcome message for the workshop participants

export default function WelcomeSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 px-6">
      {/* Container for centering content with max width */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main welcome heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Willkommen zum Product Team AI App Workshop! 🚀
        </h1>

        {/* Subheading with workshop description */}
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Heute lernen wir gemeinsam, wie man Web-Anwendungen mit AI-Tools
          entwickelt
        </p>

        {/* Workshop date and time info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
          <p className="text-lg mb-2">
            <span className="font-semibold">Datum:</span> 20.08.2025
          </p>
          <p className="text-lg">
            <span className="font-semibold">Zeit:</span> 10:00 - 14:00 Uhr
          </p>
        </div>
      </div>
    </section>
  );
}
