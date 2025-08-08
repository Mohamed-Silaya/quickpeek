import React from 'react';
import { TextField, Button } from '@mui/material';

export default function InputBox({ input, setInput, onSummarize, loading }) {
  return (
    <div>
      <TextField
        multiline
        minRows={5}
        maxRows={10}
        fullWidth
        label="Your Question or Text"
        placeholder="Type or paste your question here..."
        value={input}
        onChange={e => setInput(e.target.value)}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <Button
        variant="contained"
        color="secondary"
        disabled={loading || !input.trim()}
        onClick={onSummarize}
        fullWidth
        sx={{ mb: 2 }}
      >
        {loading ? 'Summarizing...' : 'Summarize / Answer'}
      </Button>
    </div>
  );
}
