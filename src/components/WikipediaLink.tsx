import React, { useState, useCallback } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

interface WikipediaLinkProps {
  href: string
  children: React.ReactNode
  previewContent?: React.ReactNode
  className?: string
}

export function WikipediaLink({ href, children, previewContent, className = '' }: WikipediaLinkProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [side, setSide] = useState<'top' | 'bottom' | 'left' | 'right'>('top')
  const [align, setAlign] = useState<'start' | 'center' | 'end'>('center')

  const handleMouseEnter = useCallback((event: React.MouseEvent) => {
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth
    const cursorY = event.clientY
    const cursorX = event.clientX
    
    // Preview card estimated width (from CSS: min(700px, 90vw))
    const previewWidth = Math.min(700, viewportWidth * 0.9)
    const previewHeight = Math.min(300, viewportHeight * 0.7)
    
    // Determine vertical position: if cursor is in top half, show below
    const isTopHalf = cursorY < viewportHeight / 2
    const newSide = isTopHalf ? 'bottom' : 'top'
    
    // Determine horizontal alignment based on available space
    // Check if there's enough space to the right for the preview
    const spaceToRight = viewportWidth - cursorX
    const spaceToLeft = cursorX
    
    let newAlign: 'start' | 'center' | 'end'
    
    if (spaceToRight >= previewWidth + 20) {
      // Enough space to the right, align to start (left edge at cursor)
      newAlign = 'start'
    } else if (spaceToLeft >= previewWidth + 20) {
      // Not enough space to right, but enough to left, align to end
      newAlign = 'end'
    } else {
      // Not enough space on either side, center it
      newAlign = 'center'
    }
    
    setSide(newSide)
    setAlign(newAlign)
    setIsOpen(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false)
  }, [])

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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </a>
      </HoverCardTrigger>
      <HoverCardContent 
        className="p-0 border-0 shadow-lg" 
        side={side}
        align={align}
        avoidCollisions={true}
        sideOffset={8}
        alignOffset={0}
        collisionPadding={40}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
      >
        {previewContent}
      </HoverCardContent>
    </HoverCard>
  )
}