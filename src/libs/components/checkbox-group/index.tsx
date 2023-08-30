import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import React from 'react';

type CheckboxGroupProps = {
  onChangeItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  items: string[];
  isVisible?: boolean;
} & ({ type: 'multiple'; value?: string[] } | { type: 'one'; value?: string });

interface CheckboxItemProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  checked: () => boolean;
}

function CheckboxGroup({ type, title, items, value, onChangeItem, isVisible }: CheckboxGroupProps) {
  const [isActive, setIsActive] = React.useState(!!isVisible);
  return (
    <Box width={'100%'}>
      <Button
        variant="filter"
        onClick={() => {
          setIsActive((val) => !val);
        }}
        fullWidth
      >
        {title}
      </Button>
      <Collapse timeout={300} in={isActive}>
        <Box
          sx={{
            border: '1px solid rgba( 255, 255, 255, 0.1)',
            padding: '0px 4px',
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: '390px',
            '::-webkit-scrollbar': {
              width: '2px',
            },
            '::-webkit-scrollbar-track': {
              background: 'rgba(255, 255, 255, 0.1)',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: (theme) => theme.palette.blueBase.main,
              borderRadius: '0px',
              border: (theme) => `1px solid ${theme.palette.blueBase.main}`,
            },
          }}
        >
          <FormGroup>
            {items.map((item, i) => (
              <CheckboxGroupItem
                key={`${title}-${i}`}
                onChange={onChangeItem}
                name={item}
                label={item}
                checked={() => {
                  if (value) {
                    if (type === 'one') return value === item;
                    if (type === 'multiple') return value.includes(item);
                    return false;
                  } else return false;
                }}
              />
            ))}
          </FormGroup>
        </Box>
      </Collapse>
    </Box>
  );
}

function CheckboxGroupItem({ name, checked, label, onChange }: CheckboxItemProps) {
  const status = checked();
  return (
    <FormControlLabel
      name={name}
      sx={{
        width: '236px',
        marginLeft: '-4px',
        ':hover': {
          background: 'rgba(255, 255, 255, 0.1)',
        },
      }}
      control={<Checkbox checked={status} onChange={onChange} />}
      label={
        <Typography
          sx={{ fontSize: '14px', padding: '4px', color: (theme) => theme.palette.whiteBase.main }}
        >
          {label}
        </Typography>
      }
    />
  );
}

export default CheckboxGroup;
