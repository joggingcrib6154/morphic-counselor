import React from 'react'
// import { ModeToggle } from './mode-toggle';
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC<{ onReload: () => void }> = ({ onReload }) => {
  return (
    <header
      className="fixed w-full p-1 md:p-2 flex items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent"
      style={{ top: '10px', left: '10px' }}
    >
      <div className="flex-1">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="MyEDCounselor Logo"
            className={cn('w-8 h-8')}
          />
          <span className="sr-only">Morphic</span>
        </a>
      </div>
      <div className="flex items-center justify-end flex-1">
        <HistoryContainer
          location="header"
          onConversationSelect={function (conversationId: string): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </header>
  )
}

export default Header
