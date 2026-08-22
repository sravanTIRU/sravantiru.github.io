import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileDown, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080d1a]/80 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Contact & Inquiries"
          title="Start a Conversation"
          subtitle="Whether you are looking to collaborate on software development, explore AI research, or discuss academic opportunities, I would love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Reach out directly via email, phone, or professional networks.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-mono">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-white/5 hover:border-teal-500/30 text-slate-300 hover:text-teal-300 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-slate-500 uppercase">Email Address</div>
                    <div className="text-slate-200 font-medium truncate">{portfolioData.personal.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-white/5 hover:border-teal-500/30 text-slate-300 hover:text-teal-300 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase">Phone Number</div>
                    <div className="text-slate-200 font-medium">{portfolioData.personal.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-white/5 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase">Location</div>
                    <div className="text-slate-200 font-medium">{portfolioData.personal.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Professional Profiles:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-mono transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-teal-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-mono transition-colors"
                  >
                    <Github className="w-4 h-4 text-teal-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900/70 to-indigo-950/60 border border-teal-500/30 text-white space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-500/20 text-teal-300">
                  <FileDown className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-base">
                    Curriculum Vitae / Resume
                  </h4>
                  <p className="text-xs text-slate-300 font-mono">
                    {portfolioData.personal.resumeFileName}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Download the complete verified resume containing academic credentials, teaching appointments, and project documentation.
              </p>

              <a
                href={portfolioData.personal.resumeDownloadPath}
                download={portfolioData.personal.resumeFileName}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold font-mono text-xs transition-colors shadow-lg shadow-teal-500/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (DOCX)</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    I will respond promptly via email.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800 text-teal-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-teal-950/40 border border-teal-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto animate-bounce" />
                  <h4 className="font-bold font-display text-white text-lg">
                    Opening Email Client!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Your email client has been prepared with your message to {portfolioData.personal.email}. If it did not open automatically, you can send directly to the email above.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-slate-800 text-xs font-mono text-teal-300 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors placeholder:text-slate-600 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors placeholder:text-slate-600 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Project / Academic Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors placeholder:text-slate-600 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors placeholder:text-slate-600 font-sans resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20 active:scale-[0.99] font-sans"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                    Direct communication with T G Sravan Teja.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
