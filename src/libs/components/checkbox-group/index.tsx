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
} & ({ type: 'multiple'; value?: string[] } | { type: 'one'; value?: string });

interface CheckboxItemProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  checked: boolean;
}

function CheckboxGroup({ type, title, items, value, onChangeItem }: CheckboxGroupProps) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Box width={'238px'}>
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
        <Box sx={{ border: '1px solid rgba( 255, 255, 255, 0.1)', padding: '0px 4px;' }}>
          <FormGroup>
            {items.map((item, i) => (
              <CheckboxGroupItem
                key={`${title}-${i}`}
                onChange={onChangeItem}
                name={item}
                label={item}
                checked={value ? value === item : false}
              />
            ))}
          </FormGroup>
        </Box>
      </Collapse>
    </Box>
  );
}

function CheckboxGroupItem({ name, checked, label, onChange }: CheckboxItemProps) {
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
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={<Typography sx={{ fontSize: '14px', padding: '4px' }}>{label}</Typography>}
    />
  );
}

export default CheckboxGroup;
