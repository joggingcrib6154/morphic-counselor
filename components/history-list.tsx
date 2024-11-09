import React, { cache } from 'react'
import HistoryItem from './history-item'
import { Chat } from '@/lib/types'
import { getChats } from '@/lib/actions/chat'
import { ClearHistory } from './clear-history'

type HistoryListProps = {
  onConversationSelect: (chatId: string) => void
}

const loadChats = cache(async () => {
  return await getChats()
})

export async function HistoryList({ onConversationSelect }: HistoryListProps) {
  const chats = await loadChats()

  return (
    <div className="flex flex-col flex-1 space-y-3 h-full">
      <div className="flex flex-col space-y-0.5 flex-1 overflow-y-auto">
        {!chats?.length ? (
          <div className="text-foreground/30 text-sm text-center py-4">
            No search history
          </div>
        ) : (
          chats.map(
            (chat: Chat) =>
              chat && (
                <HistoryItem
                  key={chat.id}
                  chat={chat}
                  onClick={() => onConversationSelect(chat.id)}
                />
              )
          )
        )}
      </div>
      <div className="mt-auto">
        <ClearHistory empty={!chats?.length} />
      </div>
    </div>
  )
}
