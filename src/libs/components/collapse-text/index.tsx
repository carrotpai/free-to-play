import { Box, Button, Collapse, Typography } from '@mui/material';
import React from 'react';

interface CollapseTextProps {
  text?: string;
}

function CollapseText({ text }: CollapseTextProps) {
  const [height, setHeight] = React.useState(0);
  const textNodeRef = React.useRef<HTMLParagraphElement>(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setHeight(textNodeRef.current?.clientHeight ?? 0);
  }, []);
  return (
    <>
      <Box
        component={'div'}
        sx={{
          marginTop: '8px',
        }}
      >
        <Collapse orientation="vertical" in={isActive} collapsedSize={'400px'}>
          <Typography
            component={'p'}
            ref={textNodeRef}
            variant="body2"
            color={(theme) => theme.palette.whiteDim.main}
          >
            {text}
          </Typography>
        </Collapse>
      </Box>
      {textNodeRef.current && height >= 400 && (
        <Button variant="readMore" onClick={() => setIsActive((val) => !val)}>
          {isActive ? 'Свернуть' : 'Читать дальше'}
        </Button>
      )}
    </>
  );
}

export default CollapseText;
