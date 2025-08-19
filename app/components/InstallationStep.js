// InstallationStep.js
// This component represents a single installation step with command and description

export default function InstallationStep({
  stepNumber,
  title,
  description,
  command,
  additionalInfo,
  icon,
  link,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      {/* Step header with number and icon */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
          {stepNumber}
        </div>
        <div className="text-2xl mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Step description */}
      <p className="text-gray-600 mb-4 ml-14">{description}</p>

      {/* Command to execute (if provided) */}
      {command && (
        <div className="ml-14">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Terminal-Befehl:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <code>{command}</code>
          </div>
        </div>
      )}

      {/* Additional information (if provided) */}
      {additionalInfo && (
        <div className="ml-14 mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">💡 Tipp:</span> {additionalInfo}
          </p>
          {/* Show clickable link if provided */}
          {link && (
            <div className="mt-3">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔗 Link öffnen
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
