import React from 'react'
// import { ModeToggle } from './mode-toggle';
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC<{ onReload: () => void }> = ({ onReload }) => {
  return (
    <header
      className="fixed w-full p-1 md:p-2 flex justify-between items-start z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent"
      style={{ top: '20px' }}
    >
      <div>
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Morphic</span>
        </a>
      </div>
      <div className="flex items-center gap-2">
        <HistoryContainer
          location="header"
          onConversationSelect={function (conversationId: string): void {
            throw new Error('Function not implemented.')
          }}
        />
        <button
          className="reload-button"
          onClick={onReload}
          style={{ marginTop: '0px' }}
        ></button>
      </div>
    </header>
  )
}

export default Header
