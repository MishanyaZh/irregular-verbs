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

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
  const [filteredData, setFilteredData] = useState(data);

  const [inputValue, setInputValue] = useState('');
  const [id, setId] = useState('');

  const [state, setState] = useState({
    verbs: true,
    translate: true,
  });

  const hendleClickVisible = index => {
    setId(index);
  };

  const getFilteredData = e => {
    const target = e.target.value;
    setInputValue(target);
    const filter = data.filter(v =>
      v.base.toLocaleLowerCase().includes(target.toLocaleLowerCase()),
    );
    setFilteredData(filter);
  };

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    setId('');
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
                <StyledTableCell onClick={() => hendleClickVisible(index)}>
                  {state.verbs || index === id ? (
                    verb.base
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </StyledTableCell>
                <StyledTableCell onClick={() => hendleClickVisible(index)}>
                  {state.verbs || index === id ? (
                    verb.pastSimple
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </StyledTableCell>
                <StyledTableCell onClick={() => hendleClickVisible(index)}>
                  {state.verbs || index === id ? (
                    verb.pastParticiple
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </StyledTableCell>

                <StyledTableCell onClick={() => hendleClickVisible(index)}>
                  {state.translate || index === id ? (
                    verb.translate
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
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
