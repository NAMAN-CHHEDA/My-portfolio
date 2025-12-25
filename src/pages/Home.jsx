import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Subtle background shapes (different from inspiration) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 -top-40 h-72 bg-gradient-to-b from-sky-600/25 via-transparent to-transparent blur-2xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rotate-6 bg-gradient-to-tr from-purple-700/30 via-sky-500/20 to-transparent blur-3xl" />
          <div className="absolute -left-24 top-1/3 h-64 w-64 -rotate-6 bg-sky-500/10 blur-2xl" />
        </div>

        <div className="section-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left column: intro text */}
            <div className="space-y-6">
              

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Turning data into impact
                </p>
                <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
                  <span className="block text-slate-100">Naman  Vipul</span>
                  <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    Chheda
                  </span>
                </h1>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                I design analytics workflows, dashboards, and machine learning experiments that help
                teams understand their data and make better decisions. My focus is on clear
                storytelling with data, solid statistical foundations, and reliable engineering
                practices.
              </p>

              {/* (Removed mini stats row per request) */}

              {/* Primary actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/projects" className="btn-primary bg-sky-500 hover:bg-sky-600">
                  Explore Projects
                </Link>
                <a
                  href="https://drive.google.com/file/d/1A8usaf-gFgVT1nm7DJXZPED2lmJDzplJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary bg-slate-900/70 text-slate-100 hover:bg-slate-800"
                >
                  Download Resume
                </a>
              </div>

              {/* Social icons row */}
              <div className="mt-4 flex items-center gap-4 text-slate-400">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Find me on
                </span>
                <a
                  href="https://github.com/NAMAN-CHHEDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-300 transition-colors duration-200 hover:border-sky-500 hover:text-sky-400"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/naman-chheda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-300 transition-colors duration-200 hover:border-sky-500 hover:text-sky-400"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:namanvipul.chheda@sjsu.edu"
                  className="rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-300 transition-colors duration-200 hover:border-sky-500 hover:text-sky-400"
                  aria-label="Email"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right column: circular portrait */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-300 p-1.5 shadow-[0_25px_80px_rgba(56,189,248,0.35)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                  {/* Option 1: Use local file from public folder (if it exists) */}
                  {/* Option 2: Use Google Drive link - Replace YOUR_PHOTO_FILE_ID with your actual Google Drive file ID */}
                  {/* Format: https://drive.google.com/uc?export=view&id=FILE_ID */}
                  <img
                    src="/PHOTO.jpg"
                    alt="Naman Chheda portrait"
                    className="h-[92%] w-[92%] rounded-full object-cover border border-slate-800"
                    onError={(e) => {
                      // Fallback: If local file fails, use Google Drive
                      // Uncomment and add your Google Drive FILE_ID below:
                      // e.target.src = "https://drive.google.com/uc?export=view&id=YOUR_PHOTO_FILE_ID"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Interactive Cards */}
      <section className="section-container bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Selected analytics, dashboard, and machine learning work. Explore the details or jump to the full Projects page.
          </p>
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const gradients = [
              'from-sky-500/10 via-blue-500/10 to-purple-500/10',
              'from-purple-500/10 via-pink-500/10 to-emerald-500/10',
              'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
              'from-cyan-500/10 via-sky-500/10 to-blue-500/10',
              'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
            ]
            const borderGradients = [
              'border-sky-500/30 hover:border-sky-500/60',
              'border-purple-500/30 hover:border-purple-500/60',
              'border-emerald-500/30 hover:border-emerald-500/60',
            ]
            const iconColors = [
              'from-sky-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-emerald-500 to-teal-500',
            ]
            return (
              <div 
                key={project.id} 
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-full relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} border-2 ${borderGradients[index % borderGradients.length]} p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1`}>
                  {/* Animated background gradient */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} blur-3xl opacity-50 group-hover:scale-150 group-hover:opacity-75 transition-all duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 border border-amber-500/30 text-xs font-bold text-amber-700 dark:text-amber-300">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </div>
                    )}
                    
                    {/* Project icon and title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColors[index % iconColors.length]} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {project.title.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription || project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group/link"
                        >
                          <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Code
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="flex items-center gap-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors ml-auto group/link"
                      >
                        Details
                        <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Education & Work Experience - Side by Side */}
      <section className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Education & Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Academic journey and professional milestones
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Education - Left Side */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left text-sky-600 dark:text-sky-400">Education</h3>
            <div className="relative">
              {/* Creative Timeline - Left side */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-purple-500 to-emerald-500 rounded-full hidden lg:block" />
              
              <div className="space-y-6 pl-8 lg:pl-12">
                {/* Masters */}
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-4 lg:-left-6 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 border-4 border-white dark:border-slate-900 shadow-lg z-10 group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Year badge - Creative design */}
                  <div className="absolute -left-12 lg:-left-16 top-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-purple-500 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">2027</span>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-emerald-500/10 border-2 border-sky-500/20 dark:border-sky-500/30 p-6 hover:border-sky-500/40 dark:hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">M.S. Applied Data Intelligence</h4>
                        <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">San Jose State University</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-700 dark:text-sky-300 mb-3">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      August 2025 - May 2027
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Data Mining', 'ML', 'Statistics', 'Databases'].slice(0, 4).map((c) => (
                        <span key={c} className="px-2 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bachelors */}
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-4 lg:-left-6 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 border-4 border-white dark:border-slate-900 shadow-lg z-10 group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Year badge */}
                  <div className="absolute -left-12 lg:-left-16 top-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-emerald-500 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">2025</span>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-emerald-500/10 to-sky-500/10 border-2 border-purple-500/20 dark:border-purple-500/30 p-6 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">B.Tech CSE (Data Science)</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">DJ Sanghvi College</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      December 2021 - May 2025
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['DBMS', 'DSA', 'ML', 'DL'].slice(0, 4).map((c) => (
                        <span key={c} className="px-2 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience - Right Side */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left text-purple-600 dark:text-purple-400">Work Experience</h3>
            <div className="relative">
              {/* Creative Timeline - Right side */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-emerald-500 rounded-full hidden lg:block" />
              
              <div className="space-y-6 pr-8 lg:pr-12">
                {/* Experience 1 */}
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -right-4 lg:-right-6 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 border-4 border-white dark:border-slate-900 shadow-lg z-10 group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Year badge - Creative design */}
                  <div className="absolute -right-12 lg:-right-16 top-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-purple-500 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">2024</span>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-emerald-500/10 border-2 border-sky-500/20 dark:border-sky-500/30 p-6 hover:border-sky-500/40 dark:hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        DA
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Data Analyst Intern</h4>
                        <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">Inventure Growth & Securities</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      Built dashboards, cleaned datasets, and delivered weekly insights to stakeholders.
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>KPI dashboards (Power BI / Python)</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Automated data quality checks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -right-4 lg:-right-6 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 border-4 border-white dark:border-slate-900 shadow-lg z-10 group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Year badge */}
                  <div className="absolute -right-12 lg:-right-16 top-4 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-emerald-500 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">2023</span>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-emerald-500/10 to-sky-500/10 border-2 border-purple-500/20 dark:border-purple-500/30 p-6 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        CM
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Competitive Programming Mentor</h4>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">DJS Compute</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Mentored over 25 students in competitive programming, enhancing analytical skills and problem-solving abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Interactive Grid */}
      <section className="section-container bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tools and languages I use for analytics, dashboards, and ML experiments.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            { 
              title: 'Languages', 
              icon: '💻',
              gradient: 'from-blue-500/10 to-cyan-500/10',
              border: 'border-blue-500/30 hover:border-blue-500/60',
              items: ['Python', 'SQL', 'C', 'C++', 'JavaScript'] 
            },
            { 
              title: 'Analytics', 
              icon: '📊',
              gradient: 'from-purple-500/10 to-pink-500/10',
              border: 'border-purple-500/30 hover:border-purple-500/60',
              items: ['Statistical Analysis', 'A/B Testing', 'Hypothesis Testing'] 
            },
            { 
              title: 'Visualization', 
              icon: '📈',
              gradient: 'from-emerald-500/10 to-teal-500/10',
              border: 'border-emerald-500/30 hover:border-emerald-500/60',
              items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'] 
            },
            { 
              title: 'ML Frameworks', 
              icon: '🤖',
              gradient: 'from-orange-500/10 to-red-500/10',
              border: 'border-orange-500/30 hover:border-orange-500/60',
              items: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras'] 
            },
            { 
              title: 'Tools', 
              icon: '🛠️',
              gradient: 'from-indigo-500/10 to-purple-500/10',
              border: 'border-indigo-500/30 hover:border-indigo-500/60',
              items: ['Git', 'Jupyter', 'Excel', 'Google Analytics', 'Snowflake'] 
            },
            { 
              title: 'Data', 
              icon: '🗄️',
              gradient: 'from-cyan-500/10 to-blue-500/10',
              border: 'border-cyan-500/30 hover:border-cyan-500/60',
              items: ['Airflow', 'DBT', 'ETL Pipelines', 'Hadoop', 'Spark', 'Pinecone'] 
            },
          ].map((group, index) => (
            <div 
              key={group.title} 
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${group.gradient} border-2 ${group.border} p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${group.gradient} blur-2xl opacity-50 group-hover:scale-150 group-hover:opacity-75 transition-all duration-500`} />
              
              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                
                {/* Tech items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="group/item px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 hover:shadow-md transition-all duration-200 cursor-default"
                      style={{ animationDelay: `${itemIndex * 50}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Publications - Interactive Cards */}
      <section className="section-container bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Publications</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Research papers and contributions to the field
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Publication 1 */}
          <div className="group relative">
            <div className="h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-purple-500/10 border-2 border-sky-500/30 hover:border-sky-500/60 p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Publication icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    📄
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-700 dark:text-sky-300 mb-2">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      ICAC2N · 2024
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      Virtual Sales Assistant: A Chrome Extension for E-commerce Websites
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  A Chrome extension-based virtual sales assistant designed to enhance e-commerce user experience through intelligent product recommendations and interactive shopping assistance.
                </p>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a 
                    href="https://drive.google.com/file/d/1H06J0qlUirjy7-__2CclFzLMBdI7TzK7/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/50 text-sm font-medium text-sky-700 dark:text-sky-300 transition-all duration-200 group/link"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    PDF
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href="https://ieeexplore.ieee.org/document/10895510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group/link"
                  >
                    IEEE Xplore
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="group relative">
            <div className="h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-emerald-500/10 border-2 border-purple-500/30 hover:border-purple-500/60 p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
              {/* Decorative gradient */}
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Publication icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    📑
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      ICAC2N · 2024
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      Expert Patient Interaction Language Model (EPILM)
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  A language model designed to facilitate expert-patient interactions in healthcare settings, improving communication and understanding between medical professionals and patients.
                </p>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a 
                    href="https://drive.google.com/file/d/1WPhqNhke3xiVn8ZJ-n9smAaCC3nmmo-n/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 text-sm font-medium text-purple-700 dark:text-purple-300 transition-all duration-200 group/link"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    PDF
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href="https://ieeexplore.ieee.org/document/10895249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/link"
                  >
                    IEEE Xplore
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-container text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating or discussing data projects? I’m open to internships and roles in analytics, BI, and ML.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
            <a href="mailto:namanvipul.chheda@sjsu.edu" className="btn-secondary">
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

