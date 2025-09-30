import React from 'react'
import { WikipediaHeader } from './components/WikipediaHeader'
import { ArticleNavigation } from './components/ArticleNavigation'
import { ArticleContent } from './components/ArticleContent'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <WikipediaHeader />
      <ArticleNavigation />
      <ArticleContent />
    </div>
  )
}

export default App