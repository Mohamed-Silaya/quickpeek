import React from 'react';
import { Button } from '@mui/material';

export default function CopyButton({ onCopy, copied }) {
  return (
   <Button
      variant={copied ? "outlined" : "contained"}
      color="secondary"
      onClick={onCopy}
      size="small"
    >
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  );
}
