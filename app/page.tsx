'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Users, Clock, UserX, Target, TrendingUp, BarChart3 } from 'lucide-react';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a2e2e]">
      {/* Navbar */}
      <nav className="bg-[#1a2e2e]/80 backdrop-blur-sm border-b border-[#86EFAC]/10 sticky top-0 z-50 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/oak-logo.png" 
                alt="Oak" 
                className="w-10 h-10"
              />
              <span className="text-3xl font-bold text-[#86EFAC]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>Oak</span>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-base text-[#86EFAC]/70 hover:text-[#86EFAC] transition-colors font-sans">Home</Link>
                <Link href="/login" className="bg-[#86EFAC] text-[#1a2e2e] px-5 py-2 rounded-lg text-base font-medium hover:bg-[#a7f3c9] transition-colors font-sans">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <header className="py-24 md:py-32 text-center">
        <div className="relative max-w-5xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white" style={{ fontFamily: 'var(--font-ibm-plex)' }}>
            Your Instagram Followers Want to Take Action. You&apos;re Losing Them at Link-in-Bio.
          </h1>
          <p className="text-xl md:text-2xl text-[#86EFAC]/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Amplify delivers links directly to engaged followers—automatically driving donations, signatures, and subscribers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center gap-3 bg-[#86EFAC] text-[#1a2e2e] px-8 py-4 rounded-2xl text-base font-semibold tracking-wide hover:bg-[#a7f3c9] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Try Amplify Free - 90 Days</span>
            </Link>
            <Link href="/demo" className="inline-flex items-center gap-3 bg-transparent text-[#86EFAC] px-8 py-4 rounded-2xl text-base font-semibold tracking-wide hover:bg-[#86EFAC]/10 transition-all border-2 border-[#86EFAC]/50">
              <span>Meet With Us</span>
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-28 bg-[#152424]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-center" style={{ fontFamily: 'var(--font-ibm-plex)' }}>
            Engagement isn&apos;t your problem. Follow-through is.
          </h2>
          <p className="text-lg text-[#86EFAC]/70 text-center mb-16 max-w-3xl mx-auto">
            Instagram is great at creating moments of attention. It&apos;s terrible at helping people act on them—especially when stakes are high and timing matters.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a2e2e] border-l-4 border-[#86EFAC] rounded-xl p-10">
              <div className="w-12 h-12 bg-[#86EFAC]/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#86EFAC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You Can&apos;t Reach Everyone</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed">
                Thousands comment asking how to help. You manually DM a handful. The rest never get the link.
              </p>
            </div>
            
            <div className="bg-[#1a2e2e] border-l-4 border-[#86EFAC] rounded-xl p-10">
              <div className="w-12 h-12 bg-[#86EFAC]/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#86EFAC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Momentum Dies Fast</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed">
                They&apos;re ready now. You reply hours later. The moment&apos;s gone.
              </p>
            </div>
            
            <div className="bg-[#1a2e2e] border-l-4 border-[#86EFAC] rounded-xl p-10">
              <div className="w-12 h-12 bg-[#86EFAC]/10 rounded-lg flex items-center justify-center mb-6">
                <UserX className="w-6 h-6 text-[#86EFAC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You Become the Bottleneck</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed">
                Instead of organizing, you&apos;re copy-pasting links into DMs. Your impact is limited by your reply speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW AMPLIFY WORKS */}
      <section className="py-28 bg-[#1a2e2e]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex)' }}>How Amplify Works</h2>
            <p className="text-lg text-[#86EFAC]/70">Set it up once. Keep posting like normal.</p>
          </div>
          
          {/* Video */}
          <div className="mb-20">
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#86EFAC]/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QsSQGvw9rNM"
                title="How Amplify Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#152424] border border-[#86EFAC]/20 rounded-xl p-8 flex flex-col">
              <div className="w-14 h-14 bg-[#86EFAC] rounded-full flex items-center justify-center text-[#1a2e2e] text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enable Once</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed mb-6">
                Connect your Instagram account and turn on touchless automations. Takes under 5 minutes. Done.
              </p>
              <div className="mt-auto">
                <img src="/step1-setup.png" alt="Amplify setup interface" className="rounded-lg w-full" />
              </div>
            </div>
            
            <div className="bg-[#152424] border border-[#86EFAC]/20 rounded-xl p-8 flex flex-col">
              <div className="w-14 h-14 bg-[#86EFAC] rounded-full flex items-center justify-center text-[#1a2e2e] text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Post With Two Things</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed mb-6">
                Include &quot;comment KEYWORD&quot; and your URL in the caption. That&apos;s it. No dashboard setup, no pre-configuring keywords.
              </p>
              <div className="mt-auto">
                <img src="/step2-post.png" alt="Instagram post with keyword" className="rounded-lg w-full" />
              </div>
            </div>
            
            <div className="bg-[#152424] border border-[#86EFAC]/20 rounded-xl p-8 flex flex-col">
              <div className="w-14 h-14 bg-[#86EFAC] rounded-full flex items-center justify-center text-[#1a2e2e] text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">It Works Automatically</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed mb-6">
                Amplify detects the keyword and URL in your caption. Anyone who comments the keyword gets the link via DM—instantly, while they&apos;re still engaged. Works on every post, including collabs.
              </p>
              <div className="mt-auto">
                <img src="/step3-dm.png" alt="Automated DM delivery" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
          
          {/* Why This Works - Explanatory text */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#86EFAC]/80 leading-relaxed">
              <span className="text-white font-semibold">Why this works:</span> The action arrives at the moment of intent—and you didn&apos;t have to configure anything. Just post with a keyword and URL. Amplify handles the rest. No leaving the post, no remembering your profile, no finding the right link later.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT THIS MEANS FOR YOUR WORK */}
      <section className="py-28 bg-[#152424]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center" style={{ fontFamily: 'var(--font-ibm-plex)' }}>
            What This Means For Your Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a2e2e] border border-[#86EFAC]/20 rounded-xl p-10">
              <div className="w-12 h-12 bg-[#86EFAC]/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#86EFAC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Your Posts Drive Measurable Action</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed">
                When 1,000 people comment, 1,000 people get the link. DM delivery converts 4-6x higher than link-in-bio.
              </p>
            </div>
            <div className="bg-[#1a2e2e] border border-[#86EFAC]/20 rounded-xl p-10">
              <div className="w-12 h-12 bg-[#86EFAC]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#86EFAC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You Stop Being the Bottleneck</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed">
                Your campaign can go viral and you won&apos;t lose people. No matter how many posts, no matter what keywords you use—the infrastructure scales with you automatically.
              </p>
            </div>
            <div className="bg-[#1a2e2e] border border-[#86EFAC]/20 rounded-xl p-10">
              <div className="w-12 h-12 bg-[#86EFAC]/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#86EFAC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You Have Proof Instagram Is Worth It</h3>
              <p className="text-[#86EFAC]/70 leading-relaxed">
                Not just likes and comments. Actual donations, signatures, volunteer signups you can point to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUSTED BY / PROOF FROM REAL CAMPAIGNS */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wider text-center mb-8">
            Currently in use
          </p>
          
          {/* Logo Bar */}
          <div className="mb-16">
            <img 
              src="/trusted-logos.png" 
              alt="Trusted by Social Currant, Feel Good Action, The Hometown Project, Jolly Good Ginger, Good Influence, Christopher Street Project, George Lee Speaks" 
              className="w-full max-w-4xl mx-auto opacity-80"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 tracking-tight text-center" style={{ fontFamily: 'var(--font-ibm-plex)' }}>
            Proof From Real Campaigns
          </h2>
          <p className="text-lg text-stone-600 text-center mb-16">
            Campaigns, organizers, and political commentators are already using Amplify to turn Instagram engagement into action:
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#1a2e2e] mb-2">1,400+</p>
              <p className="text-stone-500 text-sm">commenters reached in one rapid-response moment</p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#1a2e2e] mb-2">81%</p>
              <p className="text-stone-500 text-sm">clickthrough rate on high-intent actions</p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#1a2e2e] mb-2">1,000+</p>
              <p className="text-stone-500 text-sm">links auto-delivered from single viral posts</p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#1a2e2e] mb-2">4-6x</p>
              <p className="text-stone-500 text-sm">higher conversion vs link-in-bio</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-28 bg-[#152424]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center bg-gradient-to-r from-[#86EFAC]/10 to-[#86EFAC]/5 rounded-3xl p-16 border border-[#86EFAC]/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-ibm-plex)' }}>
              Stop Losing Supporters at Link-in-Bio
            </h3>
            <p className="text-[#86EFAC]/70 mb-10 text-lg">
              Turn attention into action—automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="inline-flex items-center gap-3 bg-[#86EFAC] text-[#1a2e2e] px-10 py-5 rounded-2xl text-lg font-semibold tracking-wide hover:bg-[#a7f3c9] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span>Try Amplify Free - 90 Days</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link href="/demo" className="inline-flex items-center gap-3 bg-transparent text-[#86EFAC] px-10 py-5 rounded-2xl text-lg font-semibold tracking-wide hover:bg-[#86EFAC]/10 transition-all border-2 border-[#86EFAC]/50">
                <MessageCircle className="w-6 h-6" />
                <span>Meet With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#0f1f1f] border-t border-[#86EFAC]/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-[#86EFAC]/50 text-sm mb-6">
            Oak is a Public Benefit Corporation based in Portland, Maine. You own your audience relationships. We&apos;re not farming your data—we&apos;re building tools that make it useful to you.
          </p>
          <p className="text-[#86EFAC]/30 text-sm">&copy; {new Date().getFullYear()} Oak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
