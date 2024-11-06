import React from 'react'
import { History } from './history'
import { HistoryList } from './history-list'

type HistoryContainerProps = {
  location: 'sidebar' | 'header'
  onConversationSelect: (conversationId: string) => void
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({
  location,
  onConversationSelect
}) => {
  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <History location={location}>
        <HistoryList onConversationSelect={onConversationSelect} />
      </History>
    </div>
  )
}

export default HistoryContainer
