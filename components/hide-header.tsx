import { useState } from 'react';

export function QuestionSubmission({ submitMessage }: { submitMessage: (message: string) => void }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    submitMessage(question);
    setQuestion('');
  };

  return (
    <div>
      
    </div>
  );
  
}
