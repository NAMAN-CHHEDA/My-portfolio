const Resume = () => {
  // Replace with your Google Drive link
  // Format: https://drive.google.com/file/d/FILE_ID/preview (for iframe)
  // Get FILE_ID from your Google Drive shareable link
  const resumeDriveLink = "https://drive.google.com/file/d/1A8usaf-gFgVT1nm7DJXZPED2lmJDzplJ/preview"
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1A8usaf-gFgVT1nm7DJXZPED2lmJDzplJ"

  return (
    <div className="section-container max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
        <a
          href={resumeDownloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* PDF Embed from Google Drive */}
      <div className="card">
        <iframe
          src={resumeDriveLink}
          className="w-full h-[800px] rounded-lg border border-gray-200 dark:border-gray-700"
          title="Resume PDF"
          allow="autoplay"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          Having trouble viewing? <a href={resumeDownloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Download PDF</a>
        </p>
      </div>
    </div>
  )
}

export default Resume


