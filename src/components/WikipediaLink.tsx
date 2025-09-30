import React, { useState } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

interface WikipediaLinkProps {
  href: string
  children: React.ReactNode
  previewContent?: React.ReactNode
  className?: string
}

export function WikipediaLink({ href, children, previewContent, className = '' }: WikipediaLinkProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!previewContent) {
    return (
      <a 
        href={href} 
        className={`wiki-link ${className}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <a 
          href={href} 
          className={`wiki-link ${className}`}
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {children}
        </a>
      </HoverCardTrigger>
      <HoverCardContent 
        className="preview-card" 
        side="top" 
        align="start"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {previewContent}
      </HoverCardContent>
    </HoverCard>
  )
}