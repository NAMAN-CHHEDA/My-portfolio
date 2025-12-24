const Resume = () => {
  return (
    <div className="section-container max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
        <a
          href="Naman Vipul Chheda_GoFundMe_20251211.pdf"
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

      {/* PDF Embed only */}
      <div className="card">
        <iframe
          src="Naman Vipul Chheda_GoFundMe_20251211.pdf"
          className="w-full h-[800px] rounded-lg border border-gray-200 dark:border-gray-700"
          title="Resume PDF"
        />
      </div>
    </div>
  )
}

export default Resume


