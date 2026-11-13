import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Send, Copy, Check, Sparkles, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState(null);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'opened' | null

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out your Name, Email, and Message before sending.');
      return;
    }

    // Compose mailto URI
    const subjectLine = encodeURIComponent(
      formData.subject ? `[Portfolio Contact] ${formData.subject}` : `[Portfolio Inquiry] From ${formData.name}`
    );

    const bodyContent = encodeURIComponent(
      `Hi Srinidhi,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nSender Email: ${formData.email}\nSent via The Digital Forest Portfolio`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

    // Open email client fallback
    window.location.href = mailtoUrl;
    setSubmittedStatus('opened');
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00C878]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123524]/70 border border-[#00C878]/30 text-xs font-mono text-[#00C878] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>07 // THE DIGITAL GLADE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          Let's Build Something <span className="text-gradient-emerald">Amazing Together</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00C878] to-transparent rounded-full mb-6" />
        <p className="text-[#a3d9bc] max-w-xl text-sm sm:text-base font-normal">
          Whether you have an internship opportunity, a project collaboration, or just want to chat about AI, Unity, and software engineering — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Social Cards (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Main Direct Email Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-[#00C878]/25 group">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-xl bg-[#123524] border border-[#00C878]/30 text-[#00C878] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#080B09] border border-[#00C878]/20 text-gray-300 hover:text-[#00C878] hover:border-[#00C878] transition-all"
                title="Copy Email"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00C878]" />
                    <span className="text-[#00C878]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <span className="text-xs font-mono text-[#00C878] uppercase tracking-wider block mb-1">
              Direct Email
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base sm:text-lg font-bold text-white hover:text-[#00C878] transition-colors break-all"
            >
              {personalInfo.email}
            </a>
            <p className="text-xs text-gray-400 mt-2">
              Replies typically within 24 hours.
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#00C878]/20 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#123524] text-[#00C878]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white group-hover:text-[#00C878] transition-colors block">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-gray-400">Professional Network</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#00C878]/20 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#123524] text-[#00C878]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white group-hover:text-[#00C878] transition-colors block">
                    GitHub
                  </span>
                  <span className="text-[10px] text-gray-400">Repositories & Code</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LeetCode */}
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#00C878]/20 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#123524] text-[#00C878]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white group-hover:text-[#00C878] transition-colors block">
                    LeetCode
                  </span>
                  <span className="text-[10px] text-gray-400">Algorithmic Practice</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Location */}
            <div className="glass-panel rounded-xl p-4 border border-[#00C878]/20 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#123524] text-[#00C878]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Location</span>
                <span className="text-[10px] text-gray-400">Warangal / Telangana, IN</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#00C878]/25 shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-bold font-display text-white mb-2 flex items-center gap-2">
              <span>Send a Message</span>
              <span className="text-xs font-mono font-normal text-[#00C878]">
                [Functional Email Dispatch]
              </span>
            </h3>
            <p className="text-xs text-gray-300 mb-6">
              Fill in your details below. Submitting will launch your email client with your message drafted to Gaddam Srinidhi.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1.5">
                    Your Name <span className="text-[#00C878]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#080B09]/80 border border-[#00C878]/25 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00C878] focus:ring-1 focus:ring-[#00C878] transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1.5">
                    Your Email <span className="text-[#00C878]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#080B09]/80 border border-[#00C878]/25 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00C878] focus:ring-1 focus:ring-[#00C878] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-300 block mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Unity Game Collaboration"
                  className="w-full bg-[#080B09]/80 border border-[#00C878]/25 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00C878] focus:ring-1 focus:ring-[#00C878] transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-300 block mb-1.5">
                  Message <span className="text-[#00C878]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Srinidhi, I came across your portfolio and would like to discuss..."
                  className="w-full bg-[#080B09]/80 border border-[#00C878]/25 rounded-xl p-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00C878] focus:ring-1 focus:ring-[#00C878] transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00C878] to-[#10f796] text-[#080B09] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,200,120,0.4)] hover:shadow-[0_0_30px_rgba(0,200,120,0.7)] hover:scale-[1.02] active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
                    handleCopy(text, 'form');
                  }}
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-[#080B09] border border-[#00C878]/30 hover:border-[#00C878] text-xs font-mono text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                  title="Copy formatted message text"
                >
                  {copiedType === 'form' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00C878]" />
                      <span className="text-[#00C878]">Message Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>

              {submittedStatus === 'opened' && (
                <div className="p-3.5 rounded-xl bg-[#123524]/80 border border-[#00C878] text-xs text-[#a3d9bc] animate-in fade-in duration-300">
                  <span className="font-bold text-[#00C878] block mb-0.5">Email Client Triggered</span>
                  Your message has been transferred to your mail app addressing <span className="text-white font-mono">{personalInfo.email}</span>. If your client did not launch, click "Copy Draft" and send it manually.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
