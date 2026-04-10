'use client';
import { useState } from 'react';
import Link from 'next/link';

/*
  Flat outline truck (cab-over style), faces RIGHT.
  White fill + #2563EB stroke — matches the clean flat icon style.
*/
const TruckSVG = () => (
  <svg viewBox="0 0 230 68" width="230" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">

    {/* ── TRAILER ─────────────────────────────── */}
    <rect x="4" y="6" width="136" height="43" rx="3" fill="white" stroke="#2563EB" strokeWidth="2" />

    {/* ── COUPLING ────────────────────────────── */}
    <rect x="138" y="34" width="20" height="9" rx="2" fill="white" stroke="#2563EB" strokeWidth="1.5" />

    {/* ── CAB BODY ────────────────────────────── */}
    <rect x="156" y="10" width="66" height="39" rx="3" fill="white" stroke="#2563EB" strokeWidth="2" />

    {/* Side window */}
    <rect x="160" y="14" width="30" height="18" rx="2" fill="white" stroke="#2563EB" strokeWidth="1.5" />

    {/* Front windshield (right face of cab) */}
    <rect x="200" y="14" width="18" height="20" rx="2" fill="white" stroke="#2563EB" strokeWidth="1.5" />

    {/* Exhaust stack */}
    <rect x="162" y="2" width="5" height="10" rx="2.5" fill="white" stroke="#2563EB" strokeWidth="1.5" />

    {/* ── TRAILER WHEELS ──────────────────────── */}
    <circle cx="34"  cy="57" r="9" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="34"  cy="57" r="4" fill="white" stroke="#2563EB" strokeWidth="1.5" />
    <circle cx="108" cy="57" r="9" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="108" cy="57" r="4" fill="white" stroke="#2563EB" strokeWidth="1.5" />

    {/* ── DRIVE WHEEL ─────────────────────────── */}
    <circle cx="175" cy="57" r="9" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="175" cy="57" r="4" fill="white" stroke="#2563EB" strokeWidth="1.5" />

    {/* ── STEER WHEEL ─────────────────────────── */}
    <circle cx="207" cy="57" r="9" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="207" cy="57" r="4" fill="white" stroke="#2563EB" strokeWidth="1.5" />
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
      {/* Main bar */}
      <div className="relative overflow-hidden border-b border-gray-100">

        {/* Truck — rendered FIRST so it sits behind the nav content */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -4,
            zIndex: 0,
            opacity: 0.45,
            animation: 'truck-drive 14s linear infinite',
          }}
        >
          <TruckSVG />
        </div>

        {/* Nav content — sits on top of the truck */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          <div className="flex items-center justify-between h-16">

            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="text-[#0A1628] font-bold text-xl tracking-tight">FleetCore</span>
            </Link>

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
      </div>

      {/* Mobile menu */}
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
