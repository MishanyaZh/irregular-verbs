import React, { useState } from 'react';
import { irregularVerbs } from '../../data/irregularVerbs';
import {
  Container,
  StyledTableHead,
  StyledTableCellHead,
  StyledTableCell,
  StyledTableRow,
  Actions,
} from './IrregularVerbsList.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const IrregularVerbsList = () => {
  const [data, setData] = useState(irregularVerbs);
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const getFilteredData = e => {
    const target = e.target.value;
    setInputValue(target);
    const filter = data.filter(v =>
      v.base.toLocaleLowerCase().includes(target.toLocaleLowerCase()),
    );
    setFilteredData(filter);
  };

  const [state, setState] = useState({
    verbs: true,
    translate: true,
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Container>
      <Actions>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.verbs}
                  onChange={handleChange}
                  name="verbs"
                />
              }
              label="verbs"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.translate}
                  onChange={handleChange}
                  name="translate"
                />
              }
              label="translate"
            />
          </FormGroup>
        </FormControl>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
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
      </Actions>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCellHead>Base</StyledTableCellHead>
              <StyledTableCellHead>Past Simple</StyledTableCellHead>
              <StyledTableCellHead>Past Participle</StyledTableCellHead>
              <StyledTableCellHead>Translate</StyledTableCellHead>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {filteredData.map((verb, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>
                  {state.verbs ? verb.base : '----------'}
                </StyledTableCell>
                <StyledTableCell>
                  {state.verbs ? verb.pastSimple : '----------'}
                </StyledTableCell>
                <StyledTableCell>
                  {state.verbs ? verb.pastParticiple : '----------'}
                </StyledTableCell>
                <StyledTableCell>
                  {state.translate ? verb.translate : '------'}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default IrregularVerbsList;
