import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Globe, Calendar, MapPin, Users, Ticket, CheckCircle2, Sparkles, Layers, ArrowRight } from 'lucide-react';

const mockEvents = [
  {
    id: 1,
    title: "National AI & Game Dev Hackathon",
    date: "Dec 14-16, 2024",
    location: "SR University Auditorium / Hybrid",
    category: "Hackathon",
    seatsLeft: 14,
    badge: "Trending",
    desc: "48-hour build sprint centered on building intelligent interactive games and AI workflows.",
  },
  {
    id: 2,
    title: "Next-Gen Machine Learning Summit",
    date: "Jan 10, 2025",
    location: "Virtual Webinar (Zoom)",
    category: "Tech Summit",
    seatsLeft: 42,
    badge: "Keynote",
    desc: "Deep-dive workshops into XGBoost, ensemble algorithms, and production inference deployment.",
  },
  {
    id: 3,
    title: "Unity 3D Engine Physics Masterclass",
    date: "Jan 25, 2025",
    location: "Tech Lab 3, Campus Core",
    category: "Workshop",
    seatsLeft: 6,
    badge: "Limited Seats",
    desc: "Hands-on session dissecting rigidbody kinematics, collision matrix tuning, and endless runner mechanics.",
  },
];

const EventManagementModal = ({ isOpen, onClose, project }) => {
  const [events, setEvents] = useState(mockEvents);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookedEvent, setBookedEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  if (!isOpen) return null;

  const handleBook = (evt) => {
    setIsRegistering(true);
    setTimeout(() => {
      setEvents((prev) =>
        prev.map((e) => (e.id === evt.id ? { ...e, seatsLeft: Math.max(0, e.seatsLeft - 1) } : e))
      );
      setBookedEvent(evt);
      setIsRegistering(false);
    }, 400);
  };

  const categories = ['All', 'Hackathon', 'Tech Summit', 'Workshop'];
  const filteredEvents =
    selectedCategory === 'All'
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-[#00C878]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,200,120,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#123524] border border-[#00C878]/30 text-gray-300 hover:text-white hover:border-[#00C878] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#123524] border border-[#00C878]/40 text-[#00C878]">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#00C878]/20 text-[#00C878] border border-[#00C878]/30 font-semibold">
                MERN Stack Showcase
              </span>
              <span className="text-xs font-mono text-gray-400">Interactive Web UI Preview</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mt-1">
              Smart Event Management Application
            </h3>
          </div>
        </div>

        {/* Live Mock UI Banner & Tabs */}
        <div className="p-5 rounded-2xl bg-[#080B09]/80 border border-[#00C878]/20 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-mono text-[#00C878] uppercase tracking-wider block">
                Live Prototype Simulator
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Browse Campus Tech Events & Book Pass
              </h4>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === c
                      ? 'bg-[#00C878] text-[#080B09] font-bold'
                      : 'bg-[#071B13] text-gray-300 hover:text-white border border-[#00C878]/15'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-xl bg-[#071B13]/90 border border-[#00C878]/20 flex flex-col justify-between hover:border-[#00C878]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#123524] text-[#10f796] border border-[#00C878]/25">
                      {evt.badge}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-[#00C878]" />
                      <span>{evt.seatsLeft} slots left</span>
                    </span>
                  </div>

                  <h5 className="font-display font-semibold text-sm text-white group-hover:text-[#00C878] transition-colors mb-2">
                    {evt.title}
                  </h5>

                  <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
                    {evt.desc}
                  </p>

                  <div className="space-y-1 text-[11px] text-gray-300 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#00C878]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#00C878]" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleBook(evt)}
                  disabled={evt.seatsLeft === 0}
                  className="w-full py-2 rounded-lg bg-[#123524] hover:bg-[#00C878] hover:text-[#080B09] border border-[#00C878]/30 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(0,200,120,0.15)] disabled:opacity-50"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>{evt.seatsLeft === 0 ? 'Full' : 'Book Ticket'}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Booking Confirmation Pill */}
          {bookedEvent && (
            <div className="p-3.5 rounded-xl bg-[#123524]/80 border border-[#00C878] text-white flex items-center justify-between animate-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00C878]" />
                <div>
                  <span className="text-xs font-bold text-[#00C878] block">Registration Confirmed!</span>
                  <span className="text-[11px] text-gray-300">
                    Your digital pass for "{bookedEvent.title}" has been reserved.
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#00C878] text-[#080B09] font-bold">
                Pass ID: EVT-{Math.floor(1000 + Math.random() * 9000)}
              </span>
            </div>
          )}
        </div>

        {/* Technical Architecture Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
            <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00C878]" />
              <span>Full-Stack Architecture</span>
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="p-2.5 rounded-lg bg-[#071B13] border border-[#00C878]/15">
                <span className="font-mono text-[#00C878] font-bold block mb-0.5">Frontend (React + Tailwind)</span>
                <span>Component-driven dynamic routing, event filter controls, responsive booking forms.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#071B13] border border-[#00C878]/15">
                <span className="font-mono text-[#00C878] font-bold block mb-0.5">Backend (Node.js & Express)</span>
                <span>RESTful endpoints for event retrieval, ticket generation, and user registration pipelines.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#071B13] border border-[#00C878]/15">
                <span className="font-mono text-[#00C878] font-bold block mb-0.5">Database (MongoDB)</span>
                <span>Structured schemas for Users, Events, Booking Records, and Capacity tracking.</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#080B09]/60 border border-[#00C878]/15">
            <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00C878]" />
              <span>Key Implemented Features</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00C878] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagementModal;
