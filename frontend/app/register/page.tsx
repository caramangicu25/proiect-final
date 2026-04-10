'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AnchorIcon = () => (
  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const perks = [
  '14-day free trial — no credit card required',
  'Real-time GPS tracking from day one',
  'Unlimited driver & vehicle profiles',
  'Dedicated onboarding support',
  'Cancel or upgrade anytime',
];

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    company: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const passwordStrength = (pw: string) => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strength = passwordStrength(form.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'][strength];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.company || !form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#0A1628] flex-col justify-center p-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Glow */}
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl" />

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 text-[#2563EB] mb-10">
            <AnchorIcon />
            <span className="text-white font-bold text-3xl tracking-tight">FleetCore</span>
          </div>

          <h2 className="text-white text-3xl font-bold leading-tight mb-3">
            Start managing your fleet today
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            Join thousands of businesses who trust FleetCore to run their operations smarter and more efficiently.
          </p>

          {/* Perks list */}
          <ul className="space-y-4 mb-10">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#2563EB]/20 rounded-full flex items-center justify-center text-[#2563EB] flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </span>
                <span className="text-gray-300 text-sm">{p}</span>
              </li>
            ))}
          </ul>

          {/* Testimonial mini */}
          <div className="bg-white/6 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-sm italic leading-relaxed mb-4">
              "Setting up FleetCore took under an hour. Within a week we already had actionable data on our entire fleet."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                JD
              </div>
              <div>
                <div className="text-white text-xs font-semibold">James Dalton</div>
                <div className="text-gray-500 text-[11px]">Fleet Director · NorthStar Deliveries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-12 bg-[#F8FAFC] overflow-y-auto">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 text-[#2563EB] mb-8 lg:hidden">
          <AnchorIcon />
          <span className="text-[#0A1628] font-bold text-2xl">FleetCore</span>
        </Link>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-7">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-2">Create your account</h1>
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-[#2563EB] font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </div>
              )}

              {/* Company name */}
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-1.5" htmlFor="company">
                  Company name
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Acme Transport Ltd."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#0A1628] placeholder-gray-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                />
              </div>

              {/* Full name */}
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-1.5" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={update('fullName')}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#0A1628] placeholder-gray-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-1.5" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#0A1628] placeholder-gray-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-1.5" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={update('password')}
                    placeholder="Min. 8 characters"
                    className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 bg-gray-50 text-[#0A1628] placeholder-gray-400 text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                  >
                    {showPw ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {/* Strength meter */}
                {form.password && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= strength ? strengthColor : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <span className={`text-[11px] font-medium ${['', 'text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-600'][strength]}`}>
                      {strengthLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label className="block text-sm font-semibold text-[#0A1628] mb-1.5" htmlFor="confirmPassword">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={update('confirmPassword')}
                    placeholder="Repeat your password"
                    className={`w-full px-4 py-3 pr-11 rounded-xl border bg-gray-50 text-[#0A1628] placeholder-gray-400 text-sm outline-none focus:ring-2 transition-all ${
                      form.confirmPassword && form.password !== form.confirmPassword
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                        : form.confirmPassword && form.password === form.confirmPassword
                        ? 'border-green-300 focus:border-green-400 focus:ring-green-100'
                        : 'border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2.5">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-gray-300 accent-[#2563EB] mt-0.5 flex-shrink-0"
                />
                <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed select-none cursor-pointer">
                  I agree to FleetCore's{' '}
                  <a href="#" className="text-[#2563EB] hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-[#2563EB] hover:underline">Privacy Policy</a>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2563EB] text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm shadow-sm mt-1"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creating account...
                  </>
                ) : 'Create Account'}
              </button>
            </form>
          </div>

          {/* Back link */}
          <div className="mt-6 text-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#0A1628] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
