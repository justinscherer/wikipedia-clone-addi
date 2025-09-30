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
    
    // Determine vertical position: if cursor is in top half, show below
    const isTopHalf = cursorY < viewportHeight / 2
    const newSide = isTopHalf ? 'bottom' : 'top'
    
    // Determine horizontal alignment: if cursor is in right half, align to left
    const isRightHalf = cursorX > viewportWidth / 2
    const newAlign = isRightHalf ? 'end' : 'start'
    
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
        collisionPadding={20}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
      >
        {previewContent}
      </HoverCardContent>
    </HoverCard>
  )
}