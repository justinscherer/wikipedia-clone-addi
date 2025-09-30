import { MagnifyingGlass, List, User, Globe } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function WikipediaHeader() {
  return (
    <header className="bg-white border-b border-border">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <List size={16} />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <Globe size={16} />
            </div>
            <div>
              <div className="font-bold text-sm">WIKIPEDIA</div>
              <div className="text-xs text-muted-foreground">The Free Encyclopedia</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <Input 
              placeholder="Search Wikipedia" 
              className="pl-10 w-64"
            />
          </div>
          
          <Button variant="ghost" size="sm">
            <User size={16} />
          </Button>
        </div>
      </div>
    </header>
  )
}