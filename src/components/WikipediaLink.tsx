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
    
    // Add padding for safe positioning
    const padding = 20
    
    // Determine vertical position: if cursor is in top half, show below
    const isTopHalf = cursorY < viewportHeight / 2
    const newSide = isTopHalf ? 'bottom' : 'top'
    
    // Determine horizontal alignment based on cursor position
    // For start alignment: preview left edge aligns with trigger left edge
    // For center alignment: preview center aligns with trigger center  
    // For end alignment: preview right edge aligns with trigger right edge
    
    const triggerRect = (event.target as HTMLElement).getBoundingClientRect()
    const triggerCenter = triggerRect.left + triggerRect.width / 2
    const triggerLeft = triggerRect.left
    const triggerRight = triggerRect.right
    
    let newAlign: 'start' | 'center' | 'end'
    
    // Check if centering the preview would keep it in bounds
    const centeredLeft = triggerCenter - previewWidth / 2
    const centeredRight = triggerCenter + previewWidth / 2
    
    if (centeredLeft >= padding && centeredRight <= viewportWidth - padding) {
      newAlign = 'center'
    } else if (triggerLeft + previewWidth <= viewportWidth - padding) {
      // Try start alignment (left edge of trigger)
      newAlign = 'start'
    } else {
      // Use end alignment (right edge of trigger)
      newAlign = 'end'
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
        collisionPadding={20}
        collisionBoundary={typeof window !== 'undefined' ? document.body : undefined}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
      >
        {previewContent}
      </HoverCardContent>
    </HoverCard>
  )
}