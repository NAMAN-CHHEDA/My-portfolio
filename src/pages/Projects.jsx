import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
    return ['All', ...Array.from(tags).sort()]
  }, [])

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(project => project.tags.includes(selectedTag))
    }

    // Sort projects
    if (sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
    } else if (sortBy === 'title') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered
  }, [selectedTag, sortBy])

  return (
    <div className="section-container bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my portfolio of data analytics, machine learning, and visualization projects.
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="mb-10 space-y-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-lg shadow-sky-500/50 scale-105'
                  : 'bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 hover:scale-105 hover:shadow-md'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-gray-900 dark:text-gray-100 text-sm font-medium hover:border-sky-400 dark:hover:border-sky-500 focus:border-sky-500 focus:outline-none transition-colors duration-200 cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
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
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group/link"
                        >
                          <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
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
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No projects found with the selected filter.</p>
        </div>
      )}
    </div>
  )
}

export default Projects

