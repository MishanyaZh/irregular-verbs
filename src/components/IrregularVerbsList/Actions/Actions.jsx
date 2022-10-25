import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Wrapper } from './Actions.styled';

const Actions = ({
  getFilteredData,
  inputValue,
  handleChange,
  verbs,
  translate,
}) => {
  return (
    <Wrapper>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={getFilteredData}
          value={inputValue}
          id="standard-search"
          label="Search Verbs"
          type="search"
          variant="outlined"
        />
      </Box>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={verbs} onChange={handleChange} name="verbs" />
            }
            label="verbs"
          />
          <FormControlLabel
            control={
              <Switch
                checked={translate}
                onChange={handleChange}
                name="translate"
              />
            }
            label="translate"
          />
        </FormGroup>
      </FormControl>
    </Wrapper>
  );
};

export default Actions;
