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

  const filterDataAndTargetValue = (target, data) => {
    return data.toLocaleLowerCase().includes(target.toLocaleLowerCase());
  };

  const getFilteredData = e => {
    const target = e.target.value;
    setInputValue(target);

    const filter = data.filter(
      ({ base, translate, pastParticiple, pastSimple }) =>
        filterDataAndTargetValue(target, base) ||
        filterDataAndTargetValue(target, translate) ||
        filterDataAndTargetValue(target, pastParticiple) ||
        filterDataAndTargetValue(target, pastSimple),
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
  const getVisibleVerbs = (curentState, index, verb) => {
    return curentState || index === id ? verb : <RemoveRedEyeIcon />;
  };
  return (
    <Container>
      <Actions>
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
            {filteredData.map(
              ({ base, pastSimple, pastParticiple, translate }, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell onClick={() => hendleClickVisible(index)}>
                    {getVisibleVerbs(state.verbs, index, base)}
                  </StyledTableCell>
                  <StyledTableCell onClick={() => hendleClickVisible(index)}>
                    {getVisibleVerbs(state.verbs, index, pastSimple)}
                  </StyledTableCell>
                  <StyledTableCell onClick={() => hendleClickVisible(index)}>
                    {getVisibleVerbs(state.verbs, index, pastParticiple)}
                  </StyledTableCell>
                  <StyledTableCell onClick={() => hendleClickVisible(index)}>
                    {getVisibleVerbs(state.translate, index, translate)}
                  </StyledTableCell>
                </StyledTableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default IrregularVerbsList;
