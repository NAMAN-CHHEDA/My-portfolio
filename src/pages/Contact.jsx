const Contact = () => {
  return (
    <div className="section-container max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I'm always open to discussing data analytics projects, opportunities, or just connecting with fellow data enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Email */}
        <a
          href="mailto:namanvipul.chheda@sjsu.edu"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border-2 border-sky-500/30 hover:border-sky-500/60 p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-2xl opacity-50 group-hover:scale-150 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Email</h3>
            <p className="text-sky-600 dark:text-sky-400 font-medium">namanvipul.chheda@sjsu.edu</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/naman-chheda/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-2 border-blue-500/30 hover:border-blue-500/60 p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl opacity-50 group-hover:scale-150 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">LinkedIn</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">linkedin.com/in/naman-chheda</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/NAMAN-CHHEDA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-slate-600/10 border-2 border-slate-500/30 hover:border-slate-500/60 p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-slate-500/20 to-gray-500/20 blur-2xl opacity-50 group-hover:scale-150 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">GitHub</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium">github.com/NAMAN-CHHEDA</p>
          </div>
        </a>
      </div>

      {/* Contact Form */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-emerald-500/10 border-2 border-sky-500/20 dark:border-sky-500/30 p-8 hover:border-sky-500/40 dark:hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Send a Message</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have a question or want to collaborate? Drop me a message!
            </p>
          </div>

          <form
            action="https://formspree.io/f/mojaobjl"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project, question, or just say hello..."
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact


