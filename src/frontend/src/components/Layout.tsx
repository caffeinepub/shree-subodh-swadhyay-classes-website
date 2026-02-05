import { Outlet, Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { SiFacebook, SiGoogle, SiInstagram } from 'react-icons/si';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-brand-blue/10 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-3 lg:h-20">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center gap-3 lg:gap-4">
              <img
                src="/assets/generated/shree-subodh-logo-transparent.dim_200x200.png"
                alt="Shree Subodh Swadhyay Classes Logo"
                className="h-12 w-12 flex-shrink-0 lg:h-14 lg:w-14"
              />
              <span className="max-w-[180px] text-base font-bold leading-tight text-brand-blue sm:max-w-none sm:text-lg lg:text-xl">
                Shree Subodh Swadhyay Classes
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-brand-blue/80 transition-colors hover:text-brand-blue"
                  activeProps={{ className: 'text-brand-blue font-semibold' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = 'tel:+919975323281')}
                className="gap-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button
                size="sm"
                onClick={() => navigate({ to: '/contact' })}
                className="bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
              >
                Contact Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex-shrink-0 text-brand-blue lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="border-t border-brand-blue/10 py-4 lg:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium text-brand-blue/80 transition-colors hover:text-brand-blue"
                    activeProps={{ className: 'text-brand-blue font-semibold' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = 'tel:+919975323281';
                      setMobileMenuOpen(false);
                    }}
                    className="gap-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      navigate({ to: '/contact' });
                      setMobileMenuOpen(false);
                    }}
                    className="bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                  >
                    Contact Now
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-blue/10 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* About Section */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="/assets/generated/shree-subodh-logo-transparent.dim_200x200.png"
                  alt="Shree Subodh Swadhyay Classes"
                  className="h-12 w-12"
                />
                <span className="text-lg font-bold text-brand-blue">Shree Subodh Swadhyay Classes</span>
              </div>
              <p className="text-sm text-brand-blue/70">
                Empowering Dreams, Inspiring Success. Quality education from Pre-Foundation to NEET | JEE | MHT-CET | NDA in Pune.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-brand-blue">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-blue/70 transition-colors hover:text-brand-blue"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-brand-blue">Contact Us</h3>
              <ul className="space-y-2 text-sm text-brand-blue/70">
                <li>Shantiprasad Apartment, 1123/B</li>
                <li>Near Lalit Mahal Hotel, Rage Path</li>
                <li>Model Colony, Shivajinagar</li>
                <li>Pune, Maharashtra 411016</li>
                <li className="pt-2">
                  <a href="tel:+919975323281" className="hover:text-brand-blue">
                    Phone: +91 99753 23281
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919975323219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-blue"
                  >
                    WhatsApp: +91 99753 23219
                  </a>
                </li>
                <li className="pt-1 text-xs">11:00 AM – 8:00 PM (Mon–Sat)</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/shreesubodhswadhyayclasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue/70 transition-colors hover:text-brand-blue"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61558262736477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue/70 transition-colors hover:text-brand-blue"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://share.google/b9nFCafzEIQoDjTnU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue/70 transition-colors hover:text-brand-blue"
                  aria-label="Google Business Profile"
                >
                  <SiGoogle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-brand-blue/10 pt-8 text-center text-sm text-brand-blue/70">
            <p>
              © 2026. Built with love using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button (Mobile) */}
      <a
        href="https://wa.me/919975323219"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-blue shadow-lg transition-transform hover:scale-110 md:hidden"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
