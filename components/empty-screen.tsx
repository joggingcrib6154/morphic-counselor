import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Best computer science university',
    message: 'Best computer science university'
  },
  {
    heading: 'Pros and cons of majoring in medicine?',
    message: 'Pros and cons of majoring in medicine?'
  },
  {
    heading: 'Transferring in mechanical engineering from community college to Stanford',
    message: 'Transferring in mechanical engineering from community college to Stanford'
  },
  {
    heading: 'What does UC Berkeley like for freshman admissions?',
    message: 'What does UC Berkeley like for freshman admissions?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-md text-white-600 font-semibold"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
