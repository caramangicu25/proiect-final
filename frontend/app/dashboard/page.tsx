import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>

        {/* Badge */}
        <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          In Development
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-3">
          Dashboard
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          The full dashboard is coming soon. Your fleet command center is being built right here.
        </p>

        {/* Progress items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-sm mx-auto mb-8 text-left">
          <h3 className="text-sm font-semibold text-[#0A1628] mb-4 uppercase tracking-wide">Planned Features</h3>
          <ul className="space-y-3">
            {[
              { label: 'Live Map & Vehicle Tracking', done: false },
              { label: 'Fleet Overview Stats', done: false },
              { label: 'Driver Performance Reports', done: false },
              { label: 'Maintenance Scheduler', done: false },
              { label: 'Fuel Analytics', done: false },
            ].map(({ label, done }) => (
              <li key={label} className="flex items-center gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${done ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {done ? (
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="w-2 h-2 bg-gray-300 rounded-full" />
                  )}
                </span>
                <span className="text-sm text-gray-600">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] hover:text-blue-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
