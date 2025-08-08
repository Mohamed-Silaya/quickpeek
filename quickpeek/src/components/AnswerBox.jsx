import React from 'react';
import CopyButton from './CopyButton';

export default function AnswerBox({ answer, onCopy, copied }) {
  if (!answer) return null;
  return (
    <div style={{ marginTop: 16, background: '#f7f7f7', padding: 14, borderRadius: 6 }}>
      <strong>Answer:</strong><br />
      {answer}
      <br />
      <CopyButton onCopy={onCopy} copied={copied} />
    </div>
  );
}
