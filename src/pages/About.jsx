const About = () => {
  return (
    <div className="section-container max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
      </div>

      {/* Bio Section */}
      <div className="relative group mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-emerald-500/10 border-2 border-sky-500/20 dark:border-sky-500/30 p-8 hover:border-sky-500/40 dark:hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Bio</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
              I'm a passionate Data Analyst and M.S. Applied Data Intelligence student with a strong foundation in 
              statistical analysis, machine learning, and data visualization. My journey in data 
              science began with a curiosity about uncovering hidden patterns in complex datasets 
              and has evolved into a commitment to transforming raw data into actionable business insights.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
              Through my academic work and personal projects, I've developed expertise in building 
              predictive models, creating interactive dashboards, and implementing end-to-end data 
              pipelines. I'm particularly interested in applying machine learning techniques to 
              solve real-world problems and making data accessible through compelling visualizations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              When I'm not analyzing data, I enjoy staying current with the latest developments in 
              the field, contributing to open-source projects, and sharing knowledge with the 
              data science community.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Education</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Academic journey and learning milestones</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Masters Degree */}
        <div className="group relative">
          <div className="h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-emerald-500/10 border-2 border-sky-500/20 dark:border-sky-500/30 p-6 hover:border-sky-500/40 dark:hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">M.S. Applied Data Intelligence</h3>
                  <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">San Jose State University</p>
                </div>
              </div>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sm font-semibold text-sky-700 dark:text-sky-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Graduation: May 2027</span>
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-sky-500 to-purple-500 rounded-full"></span>
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Mathematical Methods for Data Analytics',
                    'Data Warehouse and Pipeline',
                    'Business Intelligence and Data Visualization',
                    'Distributed Systems for Data Engineering',
                    'Machine Learning Technologies',
                    'Big Data Technologies',
                    'Deep Learning Technologies',
                    'Generative Model Applications',
                  ].map((c) => (
                    <span key={c} className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bachelors Degree */}
        <div className="group relative">
          <div className="h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-emerald-500/10 border-2 border-purple-500/20 dark:border-purple-500/30 p-6 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.Tech CSE (Data Science)</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">DJ Sanghvi College of Engineering</p>
                  <p className="text-xs text-purple-500 dark:text-purple-500 mt-0.5">Honors in Computational Finance</p>
                </div>
              </div>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-semibold text-purple-700 dark:text-purple-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Graduation: May 2025</span>
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-emerald-500 rounded-full"></span>
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Database Management Systems',
                    'Data Structures & Algorithms',
                    'Machine Learning',
                    'Deep Learning',
                    'Computational Linguistics',
                    'Time Series Analysis',
                  ].map((c) => (
                    <span key={c} className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Tools and technologies I work with</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { 
            title: 'Languages', 
            icon: '💻',
            gradient: 'from-blue-500/10 to-cyan-500/10',
            border: 'border-blue-500/30 hover:border-blue-500/60',
            items: ['Python', 'SQL', 'R', 'JavaScript'] 
          },
          { 
            title: 'Analytics', 
            icon: '📊',
            gradient: 'from-purple-500/10 to-pink-500/10',
            border: 'border-purple-500/30 hover:border-purple-500/60',
            items: ['Statistical Analysis', 'Hypothesis Testing', 'A/B Testing', 'Time Series'] 
          },
          { 
            title: 'Visualization', 
            icon: '📈',
            gradient: 'from-emerald-500/10 to-teal-500/10',
            border: 'border-emerald-500/30 hover:border-emerald-500/60',
            items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'] 
          },
          { 
            title: 'Databases', 
            icon: '🗄️',
            gradient: 'from-orange-500/10 to-red-500/10',
            border: 'border-orange-500/30 hover:border-orange-500/60',
            items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'] 
          },
          { 
            title: 'Machine Learning', 
            icon: '🤖',
            gradient: 'from-indigo-500/10 to-purple-500/10',
            border: 'border-indigo-500/30 hover:border-indigo-500/60',
            items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'XGBoost'] 
          },
          { 
            title: 'Tools', 
            icon: '🛠️',
            gradient: 'from-cyan-500/10 to-blue-500/10',
            border: 'border-cyan-500/30 hover:border-cyan-500/60',
            items: ['Git', 'Jupyter', 'Excel', 'Google Analytics', 'Apache Spark'] 
          },
        ].map((group, index) => (
          <div 
            key={group.title} 
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${group.gradient} border-2 ${group.border} p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1`}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${group.gradient} blur-2xl opacity-50 group-hover:scale-150 group-hover:opacity-75 transition-all duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About


