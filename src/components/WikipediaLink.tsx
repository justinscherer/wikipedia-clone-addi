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
    
    // Preview card width calculation (from CSS: min(700px, calc(100vw - 40px)))
    const previewWidth = Math.min(700, viewportWidth - 40)
    const previewHeight = Math.min(300, viewportHeight * 0.7)
    
    // Collision padding to ensure the card stays within viewport
    const padding = 20
    
    // Determine vertical position: if cursor is in top half, show below
    const isTopHalf = cursorY < viewportHeight / 2
    const newSide = isTopHalf ? 'bottom' : 'top'
    
    // Get trigger element bounds
    const triggerRect = (event.target as HTMLElement).getBoundingClientRect()
    const triggerCenter = triggerRect.left + triggerRect.width / 2
    const triggerLeft = triggerRect.left
    
    let newAlign: 'start' | 'center' | 'end'
    
    // Calculate positions for each alignment option
    const centeredLeft = triggerCenter - previewWidth / 2
    const centeredRight = centeredLeft + previewWidth
    const startRight = triggerLeft + previewWidth
    
    // Choose alignment that keeps preview within viewport bounds
    if (centeredLeft >= padding && centeredRight <= viewportWidth - padding) {
      newAlign = 'center'
    } else if (startRight <= viewportWidth - padding) {
      newAlign = 'start'
    } else {
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
        className="p-0 border-0 shadow-lg w-auto" 
        side={side}
        align={align}
        avoidCollisions={true}
        sideOffset={8}
        alignOffset={0}
        collisionPadding={20}
        collisionBoundary={typeof window !== 'undefined' ? document.documentElement : undefined}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
        style={{ maxWidth: 'min(700px, calc(100vw - 40px))' }}
      >
        {previewContent}
      </HoverCardContent>
    </HoverCard>
  )
}