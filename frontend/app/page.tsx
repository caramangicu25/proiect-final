import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ─── SVG Icons ─────────────────────────────────────────── */
const MapPinIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const UsersIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BarChartIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const TruckIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const TrailerIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="17" height="11" rx="1" />
    <path d="M19 8h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="14" cy="19" r="2" />
    <line x1="6" y1="16" x2="6" y2="17" />
    <line x1="14" y1="16" x2="14" y2="17" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" />
    <path d="M2 12h20" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-4 h-4 fill-[#2563EB] text-[#2563EB]" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#2563EB] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────── */
const features = [
  {
    icon: <MapPinIcon />,
    title: 'Real-Time Tracking',
    description: 'Monitor every vehicle on a live map with second-by-second GPS updates, route history, and smart geofencing alerts.',
    highlights: ['Live GPS positions', 'Custom geofence zones', 'Full route replay'],
  },
  {
    icon: <UsersIcon />,
    title: 'Driver Management',
    description: 'Track driver performance, manage licences and schedules, and stay compliant across your entire operation.',
    highlights: ['Performance scorecards', 'Licence expiry alerts', 'HOS compliance'],
  },
  {
    icon: <BarChartIcon />,
    title: 'Fleet Analytics',
    description: 'Deep insights into fuel consumption, route efficiency, maintenance costs, and overall fleet utilisation.',
    highlights: ['Fuel cost reports', 'Utilisation heatmaps', 'Predictive maintenance'],
  },
];

const services = [
  {
    icon: <TruckIcon />,
    title: 'Truck Rental',
    description: 'Short and long-term truck rental with full telemetry and 24/7 roadside support included as standard.',
    tag: 'Most Popular',
  },
  {
    icon: <TrailerIcon />,
    title: 'Trailer Rental',
    description: 'A wide range of trailer types — flatbed, refrigerated, curtainsider — for any cargo requirement.',
    tag: null,
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Fleet Consulting',
    description: 'Expert advice on fleet size, vehicle selection, route optimisation, and long-term cost reduction strategies.',
    tag: null,
  },
];

const testimonials = [
  {
    quote: "FleetCore cut our fuel costs by 23% in the first quarter. The real-time tracking and route optimisation are genuine game-changers for an operation our size.",
    name: "Marcus Hendricks",
    role: "Operations Director",
    company: "TransGlobal Logistics",
    initials: "MH",
    color: "bg-blue-600",
  },
  {
    quote: "Managing 150 vehicles used to be a constant headache. Now our entire team monitors everything from one dashboard. Onboarding took less than a day.",
    name: "Sarah Chen",
    role: "Head of Fleet",
    company: "Pacific Freight Co.",
    initials: "SC",
    color: "bg-violet-600",
  },
  {
    quote: "The driver compliance tracking alone justified the switch. We passed our last audit without a single issue — something that had never happened before.",
    name: "Robert Kowalski",
    role: "CEO",
    company: "Euro Transport Solutions",
    initials: "RK",
    color: "bg-emerald-600",
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for small fleets getting started.',
    features: ['Up to 10 vehicles', 'Real-time GPS tracking', 'Basic reporting', 'Email support'],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '149',
    description: 'For growing fleets that need more power.',
    features: ['Up to 50 vehicles', 'Advanced analytics', 'Driver management', 'Geofencing & alerts', 'Priority support'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large operations with complex needs.',
    features: ['Unlimited vehicles', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'On-site training'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

/* ─── Dashboard Mockup ───────────────────────────────────── */
function DashboardMockup() {
  const vehicles = [
    { id: 'TRK-001', driver: 'J. Miller', status: 'On Route', statusColor: 'bg-green-400' },
    { id: 'TRK-004', driver: 'A. Santos', status: 'On Route', statusColor: 'bg-green-400' },
    { id: 'TRK-007', driver: 'C. Wright', status: 'Idle', statusColor: 'bg-yellow-400' },
    { id: 'TRK-012', driver: 'N. Okafor', status: 'On Route', statusColor: 'bg-green-400' },
  ];

  return (
    <div className="bg-[#0A1628] rounded-2xl p-5 shadow-2xl ring-1 ring-white/10 select-none">
      {/* Browser chrome */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-gray-500 bg-[#1B2E4B] px-3 py-1 rounded-md">
          FleetCore — Live Dashboard
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-green-400">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          LIVE
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {[
          { value: '42', label: 'Vehicles', sub: '+3 this month' },
          { value: '38', label: 'Active', sub: '90% utilised' },
          { value: '4', label: 'Idle', sub: '2 in maintenance' },
        ].map((s) => (
          <div key={s.label} className="bg-[#1B2E4B] rounded-xl p-3">
            <div className="text-white font-bold text-lg leading-none">{s.value}</div>
            <div className="text-gray-400 text-[10px] mt-1">{s.label}</div>
            <div className="text-gray-600 text-[9px] mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Map + vehicle list */}
      <div className="grid grid-cols-5 gap-2.5 mb-4">
        {/* Fake map */}
        <div className="col-span-3 bg-[#1B2E4B] rounded-xl h-28 relative overflow-hidden">
          {[20, 40, 60, 80].map((p) => (
            <div key={`h${p}`} className="absolute inset-x-0 border-t border-white/5" style={{ top: `${p}%` }} />
          ))}
          {[20, 40, 60, 80].map((p) => (
            <div key={`v${p}`} className="absolute inset-y-0 border-l border-white/5" style={{ left: `${p}%` }} />
          ))}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q25 30 50 50 T100 50" stroke="#2563EB" strokeWidth="2" fill="none" />
            <path d="M30 0 L40 100" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M70 0 L60 100" stroke="#2563EB" strokeWidth="1.5" fill="none" />
          </svg>
          {[
            { top: '25%', left: '18%' },
            { top: '55%', left: '42%' },
            { top: '35%', left: '65%' },
            { top: '70%', left: '80%' },
            { top: '20%', left: '55%' },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-2.5 h-2.5 bg-[#2563EB] rounded-full ring-2 ring-[#2563EB]/30 animate-pulse"
              style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.4}s` }}
            />
          ))}
          <span className="absolute top-2 left-2 text-[9px] text-gray-500 font-medium">LIVE MAP</span>
        </div>

        {/* Vehicle list */}
        <div className="col-span-2 bg-[#1B2E4B] rounded-xl p-2.5 flex flex-col gap-1.5">
          <span className="text-[9px] text-gray-500 font-medium mb-0.5">FLEET STATUS</span>
          {vehicles.map((v) => (
            <div key={v.id} className="flex items-center justify-between">
              <div>
                <div className="text-white text-[9px] font-semibold">{v.id}</div>
                <div className="text-gray-500 text-[8px]">{v.driver}</div>
              </div>
              <span className="flex items-center gap-1 text-[8px] text-gray-400">
                <span className={`w-1.5 h-1.5 rounded-full ${v.statusColor}`} />
                {v.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fuel bar + mini chart */}
      <div className="bg-[#1B2E4B] rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-gray-400 font-medium">Weekly Fuel Efficiency</span>
          <span className="text-[10px] text-green-400 font-semibold">↑ 8.3% vs last week</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-2 bg-[#0A1628] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2563EB] to-blue-400 rounded-full" style={{ width: '73%' }} />
          </div>
          <span className="text-[10px] text-white font-semibold">73%</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <div
                className="w-full rounded-sm bg-[#2563EB]/60"
                style={{ height: `${[12, 16, 9, 18, 14, 6, 4][i]}px` }}
              />
              <span className="text-[7px] text-gray-600">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-[#0A1628] text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/30 text-blue-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                Trusted by 2,400+ fleet managers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Manage Your Fleet.{' '}
                <span className="text-[#2563EB]">Smarter.</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                FleetCore gives you real-time visibility, powerful analytics, and complete control over every vehicle in your operation — from one screen.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-900/40"
                >
                  Start Free Trial
                  <ArrowRightIcon />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  See How It Works
                </a>
              </div>
              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    { i: 'MH', c: 'bg-blue-600' },
                    { i: 'SC', c: 'bg-violet-600' },
                    { i: 'RK', c: 'bg-emerald-600' },
                    { i: 'AL', c: 'bg-orange-500' },
                  ].map(({ i, c }) => (
                    <div key={i} className={`w-8 h-8 rounded-full ring-2 ring-[#0A1628] flex items-center justify-center text-[10px] font-bold text-white ${c}`}>
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <span className="text-gray-400 text-xs">4.9/5 from 380+ reviews</span>
                </div>
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#2563EB]/10 rounded-3xl blur-2xl" />
              <div className="relative">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logos strip ──────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm font-medium mb-6 uppercase tracking-widest">
            Trusted by companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {['TransGlobal', 'Pacific Freight', 'NorthStar', 'Euro Transport', 'SwiftMove', 'CargoMax'].map((name) => (
              <span key={name} className="text-gray-300 font-bold text-base sm:text-lg tracking-tight select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section id="features" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest">Features</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mt-2 mb-4">
              Everything your fleet needs
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Built for fleet managers who need precision, speed, and reliability — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-[#0A1628] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.description}</p>
                <ul className="space-y-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckIcon />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest">Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mt-2 mb-4">
                More than software
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                FleetCore also offers physical fleet services for businesses that need vehicles, not just a platform.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#1B2E4B] transition-colors duration-200"
              >
                View All Services
                <ArrowRightIcon />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-5 bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-sm transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2563EB] flex-shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#0A1628]">{s.title}</h3>
                      {s.tag && (
                        <span className="text-[10px] bg-[#2563EB]/10 text-[#2563EB] font-semibold px-2 py-0.5 rounded-full">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#2563EB] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section id="pricing" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mt-2 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No hidden fees. Cancel anytime. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 flex flex-col transition-transform hover:-translate-y-1 duration-300 relative ${
                  plan.highlighted
                    ? 'bg-[#0A1628] text-white shadow-2xl ring-2 ring-[#2563EB]'
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className={`font-bold text-lg mb-1 ${plan.highlighted ? 'text-white' : 'text-[#0A1628]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <span className={`text-3xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-[#0A1628]'}`}>
                      Custom
                    </span>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-[#0A1628]'}`}>
                        ${plan.price}
                      </span>
                      <span className="text-sm mb-1.5 text-gray-400">/mo</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-[#2563EB]/20' : 'bg-[#2563EB]/10'}`}>
                        <svg className="w-2.5 h-2.5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors duration-200 ${
                    plan.highlighted
                      ? 'bg-[#2563EB] text-white hover:bg-blue-600'
                      : 'bg-[#0A1628] text-white hover:bg-[#1B2E4B]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Loved by fleet managers
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Don't take our word for it — here's what our customers say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#1B2E4B] rounded-2xl p-7 flex flex-col hover:bg-[#243a5e] transition-colors duration-300">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to take control of your fleet?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of fleet managers already using FleetCore. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-[#2563EB] font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Start Free Trial
              <ArrowRightIcon />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-blue-700/50 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors duration-200 border border-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
