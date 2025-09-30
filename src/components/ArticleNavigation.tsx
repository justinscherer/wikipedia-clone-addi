import { Button } from '@/components/ui/button'
import { Star, Pencil, ClockCounterClockwise, Article } from '@phosphor-icons/react'

export function ArticleNavigation() {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold">Additive synthesis</h1>
            <div className="text-sm text-muted-foreground">12 languages</div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Article size={16} className="mr-1" />
              Article
            </Button>
            <Button variant="ghost" size="sm">
              <Pencil size={16} className="mr-1" />
              Talk
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-border pt-2 pb-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Read</Button>
            <Button variant="ghost" size="sm">Edit source</Button>
            <Button variant="ghost" size="sm">View history</Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Star size={16} />
            </Button>
            <Button variant="ghost" size="sm">Tools</Button>
          </div>
        </div>
      </div>
    </div>
  )
}