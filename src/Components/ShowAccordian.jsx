import React, { useState } from 'react';
import { styled } from '@mui/system';
import CheckCircleIcon from '../assets/icons/CheckCircleIcon';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import DotIcon from '../assets/icons/DotIcon';

const AccordionItemWrapper = styled('div')({
  backgroundColor: 'green',
  marginBottom: theme => theme.spacing(2),
});

const AccordionTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '& > div': {
    marginRight: theme => theme.spacing(1), // Adjust margin as needed
  },
});

const AccordionContent = styled('div')({
  width: '400px',
});

const YourAccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItemWrapper>
      <AccordionSummary
          expandIcon={<DotIcon />}  
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CheckCircleIcon/>
          hello
          {/* <CustomTypography>Accordion 1</> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1.
          </Typography>
        </AccordionDetails>
    </AccordionItemWrapper>
  );
};

export default YourAccordionItem;
