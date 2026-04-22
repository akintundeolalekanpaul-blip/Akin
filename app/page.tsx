'use client';

import { useState } from 'react';

export default function HomePage() {
  const content = {
    churchName: 'IJERO BAPTIST CHURCH',
    tagline: 'A place to belong, believe, become',
    heroImage:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2000&q=80',
    youtubeLiveLink: 'https://www.youtube.com/@[CHURCH_CHANNEL]',
    youtubeLatestEmbed: 'https://www.youtube.com/embed/[LATEST_VIDEO_ID]',
    youtubeChannelLink: 'https://www.youtube.com/@[CHURCH_CHANNEL]/videos',
    whatsappLink: 'https://wa.me/234[WHATSAPP_NUMBER]?text=Hello%20I%20am%20new%20to%20church',
    instagramLink: 'https://instagram.com/[CHURCH_HANDLE]',
    facebookLink: 'https://facebook.com/[CHURCH_PAGE]',
    phone: '+234 [PHONE NUMBER]',
    email: 'hello@[CHURCHDOMAIN].org',
    address: '884 Apapa Road, Ebute Metta, Lagos, Nigeria',
    directionsLink:
      'https://www.google.com/maps/search/?api=1&query=Ijero+Baptist+Church+Ebute+Metta+Lagos',
    mapEmbed:
      'https://www.google.com/maps?q=Ijero%20Baptist%20Church%20Ebute%20Metta%20Lagos&output=embed',
    pastorName: 'Pastor [NAME]',
    pastorMessage:
      'You are welcome here. Whether you are exploring faith or looking for a church family, we would love to meet you and grow with you in Christ.',
    pastorPhoto:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bankName: '[BANK NAME]',
    accountName: '[ACCOUNT NAME]',
    accountNumber: '[ACCOUNT NUMBER]',
    paystackLink: 'https://paystack.com/pay/[YOUR_LINK]',
    flutterwaveLink: 'https://flutterwave.com/pay/[YOUR_LINK]',
    copyrightYear: '2026',
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBankDetails = async () => {
    const bankDetails = `${content.bankName}\n${content.accountName}\n${content.accountNumber}`;
    await navigator.clipboard.writeText(bankDetails);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const links = [
    { label: 'Service Times', href: '#service-location' },
    { label: 'About', href: '#about' },
    { label: 'New Here', href: '#new-here' },
    { label: 'Sermons', href: '#sermons' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <main className="bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="text-sm font-bold tracking-wide text-[#1E40AF] md:text-base">
            {content.churchName}
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-[#1E40AF]">
                {link.label}
              </a>
            ))}
            <a
              href="#give"
              className="rounded-xl bg-[#1E40AF] px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-blue-700"
            >
              Give
            </a>
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 md:hidden"
            aria-label="Open Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#give"
                className="rounded-lg bg-[#1E40AF] px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Give
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.6), rgba(30, 64, 175, 0.65)), url(${content.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm backdrop-blur">Lagos, Nigeria</p>
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
            Welcome to {content.churchName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100 md:text-2xl">{content.tagline}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#service-location" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#1E40AF] shadow-soft">
              Plan Your Visit
            </a>
            <a
              href={content.youtubeLiveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Watch Live
            </a>
          </div>
        </div>
      </section>

      <section id="service-location" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-slate-900">Service Times & Location</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Sunday Service', time: '8:00 AM' },
            { title: 'Sunday Service', time: '10:00 AM' },
            { title: 'Wednesday Midweek', time: '6:00 PM' },
          ].map((item) => (
            <article key={item.title + item.time} className="card-3d rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">{item.title}</p>
              <p className="mt-2 text-2xl font-bold text-[#1E40AF]">{item.time}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card-3d rounded-2xl border border-slate-200 p-5">
            <p className="text-sm uppercase tracking-wide text-slate-500">Address</p>
            <p className="mt-2 text-lg font-medium">{content.address}</p>
            <a
              href={content.directionsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-xl bg-[#1E40AF] px-5 py-3 font-semibold text-white"
            >
              Get Directions
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
            <iframe
              title="Church map"
              src={content.mapEmbed}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-blue-50/50 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-700">
              {content.churchName} is a Bible-believing church family in Lagos committed to worship, discipleship, prayer,
              and serving our community with love. We welcome everyone to encounter Jesus, grow in faith, and walk in purpose.
            </p>
          </div>
          <article className="card-3d rounded-2xl border border-slate-200 bg-white p-5">
            <img src={content.pastorPhoto} alt={content.pastorName} className="h-56 w-full rounded-xl object-cover" />
            <p className="mt-4 text-xl font-semibold text-[#1E40AF]">{content.pastorName}</p>
            <p className="mt-2 text-slate-700">{content.pastorMessage}</p>
          </article>
        </div>
      </section>

      <section id="new-here" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold">New Here?</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            'Plan your visit',
            'Join us Sunday',
            'Connect',
          ].map((step, index) => (
            <div key={step} className="card-3d rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Step {index + 1}</p>
              <p className="mt-2 text-xl font-semibold">{step}</p>
            </div>
          ))}
        </div>
        <a
          href={content.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
        >
          I&apos;m New
        </a>
      </section>

      <section id="sermons" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Sermons</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-soft">
            <iframe
              title="Latest sermon"
              src={content.youtubeLatestEmbed}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href={content.youtubeChannelLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-semibold text-[#1E40AF]"
          >
            See all sermons →
          </a>
        </div>
      </section>

      <section id="give" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold">Give Online</h2>
        <article className="card-3d mt-6 rounded-2xl border border-slate-200 p-6">
          <p className="text-sm uppercase tracking-wide text-slate-500">Bank Transfer</p>
          <div className="mt-3 space-y-1 text-lg">
            <p><span className="font-semibold">Bank:</span> {content.bankName}</p>
            <p><span className="font-semibold">Account Name:</span> {content.accountName}</p>
            <p><span className="font-semibold">Account Number:</span> {content.accountNumber}</p>
          </div>
          <button
            onClick={copyBankDetails}
            className="mt-4 rounded-xl border border-[#1E40AF] px-4 py-2 font-semibold text-[#1E40AF]"
          >
            {copied ? 'Copied!' : 'Copy Details'}
          </button>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={content.paystackLink}
              className="rounded-xl bg-[#1E40AF] px-4 py-2 font-semibold text-white"
              target="_blank"
              rel="noreferrer"
            >
              Paystack (Placeholder)
            </a>
            <a
              href={content.flutterwaveLink}
              className="rounded-xl border border-[#1E40AF] px-4 py-2 font-semibold text-[#1E40AF]"
              target="_blank"
              rel="noreferrer"
            >
              Flutterwave (Placeholder)
            </a>
          </div>

          <p className="mt-6 italic text-slate-700">“God loves a cheerful giver - 2 Cor 9:7”</p>
        </article>
      </section>

      <footer id="contact" className="bg-slate-900 py-12 text-slate-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Contact</p>
            <p className="mt-2">Phone: {content.phone}</p>
            <p>Email: {content.email}</p>
            <p>WhatsApp: {content.phone}</p>
          </div>

          <div>
            <p className="text-lg font-semibold">Connect</p>
            <div className="mt-3 flex gap-4 text-sm">
              <a href={content.instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">📷 Instagram</a>
              <a href={content.facebookLink} target="_blank" rel="noreferrer" aria-label="Facebook">📘 Facebook</a>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Service Times</p>
            <p className="mt-2">Sunday: 8:00 AM & 10:00 AM</p>
            <p>Wednesday: 6:00 PM</p>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">
          © {content.copyrightYear} {content.churchName}. All rights reserved.
        </p>
      </footer>

      <a
        href={content.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-soft"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
