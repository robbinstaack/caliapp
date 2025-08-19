// InstallationStep.js
// This component represents a single installation step with command and description

export default function InstallationStep({ 
  stepNumber, 
  title, 
  description, 
  command, 
  additionalInfo,
  icon 
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
      <p className="text-gray-600 mb-4 ml-14">
        {description}
      </p>
      
      {/* Command to execute (if provided) */}
      {command && (
        <div className="ml-14">
          <p className="text-sm font-medium text-gray-700 mb-2">Terminal-Befehl:</p>
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
        </div>
      )}
    </div>
  );
}
