'use client';
import { useState } from 'react';
import Link from 'next/link';

/* American semi-truck SVG — Kenworth/Peterbilt style, facing RIGHT (front on the right) */
const TruckSVG = () => (
  <svg viewBox="0 0 195 52" width="195" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">

    {/* ── TRAILER ─────────────────────────────── */}
    {/* Main trailer box */}
    <rect x="2" y="6" width="88" height="28" rx="1.5" fill="#1B2E4B" stroke="#2563EB" strokeWidth="0.7" />
    {/* Rear doors */}
    <rect x="2" y="6" width="8" height="28" rx="1" fill="#243a5e" stroke="#2563EB" strokeWidth="0.7" />
    <line x1="6" y1="8" x2="6" y2="32" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.5" />
    {/* Trailer ribs */}
    <line x1="30" y1="6" x2="30" y2="34" stroke="#2563EB" strokeWidth="0.4" strokeOpacity="0.25" />
    <line x1="55" y1="6" x2="55" y2="34" stroke="#2563EB" strokeWidth="0.4" strokeOpacity="0.25" />
    <line x1="78" y1="6" x2="78" y2="34" stroke="#2563EB" strokeWidth="0.4" strokeOpacity="0.25" />
    {/* FLEETCORE label */}
    <text x="46" y="23" fontSize="6" fill="#2563EB" fillOpacity="0.75" fontFamily="system-ui,sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="1">FLEETCORE</text>
    {/* Undercarriage bar */}
    <rect x="10" y="34" width="78" height="2" fill="#374151" />

    {/* ── TRAILER WHEELS (dual axle) ───────────── */}
    {/* Rear axle */}
    <circle cx="22" cy="40" r="7" fill="#111827" /><circle cx="22" cy="40" r="4.5" fill="#1F2937" /><circle cx="22" cy="40" r="1.8" fill="#4B5563" />
    <circle cx="27" cy="40" r="6" fill="#0f172a" fillOpacity="0.6" />
    {/* Front axle */}
    <circle cx="60" cy="40" r="7" fill="#111827" /><circle cx="60" cy="40" r="4.5" fill="#1F2937" /><circle cx="60" cy="40" r="1.8" fill="#4B5563" />
    <circle cx="65" cy="40" r="6" fill="#0f172a" fillOpacity="0.6" />

    {/* ── FIFTH WHEEL / COUPLING ───────────────── */}
    <rect x="86" y="32" width="16" height="5" rx="1" fill="#374151" />
    <rect x="90" y="30" width="8" height="4" rx="1" fill="#4B5563" />

    {/* ── SLEEPER CAB ─────────────────────────── */}
    <rect x="90" y="7" width="22" height="27" rx="1.5" fill="#0A1628" stroke="#2563EB" strokeWidth="0.7" />
    {/* Sleeper window */}
    <rect x="93" y="10" width="15" height="9" rx="1" fill="#2563EB" fillOpacity="0.25" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.5" />

    {/* ── MAIN CAB ────────────────────────────── */}
    <rect x="112" y="9" width="24" height="25" rx="1.5" fill="#0A1628" stroke="#2563EB" strokeWidth="0.7" />
    {/* Big cab window */}
    <rect x="115" y="11" width="18" height="13" rx="1" fill="#2563EB" fillOpacity="0.3" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.6" />
    {/* Window glare */}
    <line x1="117" y1="12" x2="115" y2="18" stroke="white" strokeWidth="0.8" strokeOpacity="0.35" strokeLinecap="round" />
    {/* Door handle */}
    <rect x="128" y="22" width="5" height="1.5" rx="0.5" fill="#374151" />
    {/* Fuel tanks (side) */}
    <rect x="113" y="28" width="10" height="6" rx="1" fill="#1F2937" stroke="#374151" strokeWidth="0.5" />

    {/* ── LONG NOSE / HOOD (American style) ───── */}
    <path d="M136 11 L168 17 L170 34 L136 34 Z" fill="#0A1628" stroke="#2563EB" strokeWidth="0.7" />
    {/* Hood stripe */}
    <line x1="138" y1="13" x2="166" y2="18" stroke="#2563EB" strokeWidth="0.6" strokeOpacity="0.35" />
    {/* Air intake on hood */}
    <rect x="150" y="14" width="10" height="3" rx="0.5" fill="#1F2937" stroke="#374151" strokeWidth="0.4" />

    {/* ── GRILL (chrome, American style) ──────── */}
    <rect x="168" y="17" width="8" height="17" rx="0.5" fill="#1F2937" stroke="#6B7280" strokeWidth="0.5" />
    <line x1="169" y1="20" x2="175" y2="20" stroke="#9CA3AF" strokeWidth="0.6" />
    <line x1="169" y1="23" x2="175" y2="23" stroke="#9CA3AF" strokeWidth="0.6" />
    <line x1="169" y1="26" x2="175" y2="26" stroke="#9CA3AF" strokeWidth="0.6" />
    <line x1="169" y1="29" x2="175" y2="29" stroke="#9CA3AF" strokeWidth="0.6" />

    {/* ── FRONT BUMPER (chrome) ───────────────── */}
    <rect x="166" y="34" width="14" height="4" rx="0.5" fill="#6B7280" stroke="#9CA3AF" strokeWidth="0.4" />

    {/* ── HEADLIGHTS ──────────────────────────── */}
    <circle cx="170" cy="16" r="3" fill="#FCD34D" fillOpacity="0.85" />
    <circle cx="170" cy="16" r="1.5" fill="white" fillOpacity="0.7" />

    {/* ── EXHAUST STACKS (twin vertical) ──────── */}
    <rect x="114" y="1"  width="3" height="10" rx="1.5" fill="#374151" stroke="#4B5563" strokeWidth="0.4" />
    <rect x="120" y="1"  width="3" height="10" rx="1.5" fill="#374151" stroke="#4B5563" strokeWidth="0.4" />
    {/* Smoke puffs */}
    <circle cx="115" cy="0"  r="1.8" fill="#9CA3AF" fillOpacity="0.45" />
    <circle cx="113" cy="-2" r="1.2" fill="#9CA3AF" fillOpacity="0.25" />
    <circle cx="121" cy="0"  r="1.8" fill="#9CA3AF" fillOpacity="0.45" />
    <circle cx="123" cy="-2" r="1.2" fill="#9CA3AF" fillOpacity="0.25" />

    {/* ── DRIVE WHEELS (dual rear axle) ────────── */}
    <circle cx="101" cy="40" r="7" fill="#111827" /><circle cx="101" cy="40" r="4.5" fill="#1F2937" /><circle cx="101" cy="40" r="1.8" fill="#4B5563" />
    <circle cx="106" cy="40" r="6" fill="#0f172a" fillOpacity="0.6" />
    <circle cx="114" cy="40" r="7" fill="#111827" /><circle cx="114" cy="40" r="4.5" fill="#1F2937" /><circle cx="114" cy="40" r="1.8" fill="#4B5563" />
    <circle cx="119" cy="40" r="6" fill="#0f172a" fillOpacity="0.6" />

    {/* ── FRONT STEER WHEEL ───────────────────── */}
    <circle cx="163" cy="40" r="7" fill="#111827" /><circle cx="163" cy="40" r="4.5" fill="#1F2937" /><circle cx="163" cy="40" r="1.8" fill="#4B5563" />

    {/* ── GROUND SHADOW ───────────────────────── */}
    <ellipse cx="90" cy="48" rx="88" ry="2.5" fill="#0A1628" fillOpacity="0.12" />
  </svg>
);

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Main bar — overflow-hidden only here so the truck clips correctly */}
      <div className="relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo — text only, truck replaced the icon */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="text-[#0A1628] font-bold text-xl tracking-tight">FleetCore</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-[#2563EB] font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-[#0A1628] font-medium text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#2563EB] text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Animated truck — rides along the bottom of the nav bar */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -2,
            animation: 'truck-drive 10s linear infinite',
          }}
        >
          <TruckSVG />
        </div>
      </div>

      {/* Mobile menu — outside overflow-hidden so it's not clipped */}
      {open && (
        <div className="md:hidden border-b border-gray-100 py-3 space-y-1 bg-white/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-gray-600 hover:text-[#2563EB] hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors mx-4"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2 px-4 pb-1">
            <Link
              href="/login"
              className="text-center py-2 border border-gray-200 rounded-lg font-medium text-sm text-[#0A1628] hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-center py-2.5 bg-[#2563EB] rounded-lg font-medium text-sm text-white hover:bg-blue-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
