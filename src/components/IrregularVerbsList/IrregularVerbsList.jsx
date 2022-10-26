import React, { useState } from 'react';
import { irregularVerbs } from '../../data/irregularVerbs';

import Actions from './Actions/Actions';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Container,
  StyledTableHead,
  StyledTableCellHead,
  StyledTableCell,
  StyledTableRow,
} from './IrregularVerbsList.styled';

const IrregularVerbsList = () => {
  const [data] = useState(irregularVerbs);
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

  const getDataIncludesTargetValue = (target, data) => {
    return data.toLocaleLowerCase().includes(target.toLocaleLowerCase());
  };

  const getFilteredData = e => {
    const target = e.target.value.trim();
    setInputValue(target);

    setFilteredData(
      data.filter(
        ({ base, translate, pastParticiple, pastSimple }) =>
          getDataIncludesTargetValue(target, base) ||
          getDataIncludesTargetValue(target, translate) ||
          getDataIncludesTargetValue(target, pastParticiple) ||
          getDataIncludesTargetValue(target, pastSimple),
      ),
    );
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
      <Actions
        getFilteredData={getFilteredData}
        inputValue={inputValue}
        handleChange={handleChange}
        verbs={state.verbs}
        translate={state.translate}
      />
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
