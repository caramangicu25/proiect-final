'use client';
import { useState } from 'react';
import Link from 'next/link';

/* Flat icon-style box truck — blue outline, white fill, facing RIGHT */
const TruckSVG = () => (
  <svg viewBox="0 0 148 52" width="148" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">

    {/* ── CARGO BOX (left 2/3) ─────────────────── */}
    <rect x="2" y="5" width="82" height="32" rx="2" fill="white" stroke="#2563EB" strokeWidth="2" />
    {/* Rear door detail */}
    <line x1="12" y1="5"  x2="12" y2="37" stroke="#2563EB" strokeWidth="2" />
    <line x1="7"  y1="14" x2="12" y2="14" stroke="#2563EB" strokeWidth="1.5" />
    <line x1="7"  y1="28" x2="12" y2="28" stroke="#2563EB" strokeWidth="1.5" />

    {/* ── CAB (right 1/3) ──────────────────────── */}
    {/* Cab body — stepped: tall section + lower hood */}
    {/* Cab back wall shared with cargo front */}
    <path
      d="M84 5 L84 37 L132 37 L132 22 L126 14 L126 5 Z"
      fill="white" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"
    />
    {/* Step line between cab-body and hood slope */}
    <line x1="126" y1="5" x2="126" y2="22" stroke="#2563EB" strokeWidth="2" />
    <line x1="126" y1="22" x2="132" y2="22" stroke="#2563EB" strokeWidth="2" />
    {/* Windshield — big angled pane */}
    <path
      d="M118 7 L126 7 L126 20 L110 20 Z"
      fill="#2563EB" fillOpacity="0.12" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"
    />
    {/* Door window */}
    <rect x="86" y="9" width="20" height="13" rx="1.5" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="1.5" />
    {/* Door handle */}
    <line x1="92" y1="27" x2="100" y2="27" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
    {/* Headlight */}
    <circle cx="132" cy="28" r="3" fill="#2563EB" />
    {/* Front bumper */}
    <rect x="130" y="33" width="6" height="4" rx="1" fill="#2563EB" />

    {/* ── EXHAUST STACK ────────────────────────── */}
    <rect x="112" y="0" width="4" height="7" rx="2" fill="#2563EB" />

    {/* ── WHEELS ───────────────────────────────── */}
    {/* Rear dual wheels */}
    <circle cx="20" cy="43" r="8" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="20" cy="43" r="3"  fill="#2563EB" />
    <circle cx="28" cy="43" r="7"  fill="white" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="28" cy="43" r="2.5" fill="#2563EB" fillOpacity="0.5" />
    {/* Front trailer wheel */}
    <circle cx="66" cy="43" r="8" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="66" cy="43" r="3"  fill="#2563EB" />
    {/* Cab/drive wheel */}
    <circle cx="112" cy="43" r="8" fill="white" stroke="#2563EB" strokeWidth="2" />
    <circle cx="112" cy="43" r="3"  fill="#2563EB" />
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
