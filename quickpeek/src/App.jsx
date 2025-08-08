import React, { useState } from 'react';
import InputBox from './components/InputBox';
import AnswerBox from './components/AnswerBox';

function App() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleSummarize() {
    if (!input.trim()) return;
    setLoading(true);
    setCopied(false);
   
      setAnswer("TEST>>>>>");
      setLoading(false);
  
  }

  function handleCopy() {
    navigator.clipboard.writeText(answer);
    setCopied(true);
  }

  return (
    <div style={{ maxWidth: 480, margin: '40px auto', padding: 24, boxShadow: '0 0 15px #eee', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', color:'#9c27b0' }}>QuickPeek</h2>
      <InputBox input={input} setInput={setInput} onSummarize={handleSummarize} loading={loading} />
      <AnswerBox answer={answer} onCopy={handleCopy} copied={copied} />
    </div>
  );
}

export default App;
