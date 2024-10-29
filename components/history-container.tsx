import React from 'react'
import { History } from './history'
import { HistoryList } from './history-list'

type HistoryContainerProps = {
  location: 'sidebar' | 'header'
  onConversationSelect: (conversationId: string) => void // Add this callback prop
}

const HistoryContainer: React.FC<HistoryContainerProps> = async ({
  location,
  onConversationSelect // Get the prop here
}) => {
  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <History location={location}>
        <HistoryList
          userId="anonymous"
          onConversationSelect={onConversationSelect}
        />
      </History>
    </div>
  )
}

export default HistoryContainer
