import React from 'react';
import { irregularVerbs } from '../../data/irregularVerbs';
import {
  Ul,
  Li,
  Word,
  Box,
  StyledTableHead,
  StyledTableCellHead,
  StyledTableCell,
} from './IrregularVerbsList.styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const IrregularVerbsList = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCellHead>base</StyledTableCellHead>
              <StyledTableCellHead>pastSimple</StyledTableCellHead>
              <StyledTableCellHead>pastParticiple</StyledTableCellHead>
              <StyledTableCellHead>translate</StyledTableCellHead>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {irregularVerbs.map((verb, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{verb.base}</StyledTableCell>
                <StyledTableCell>{verb.pastSimple}</StyledTableCell>
                <StyledTableCell>{verb.pastParticiple}</StyledTableCell>
                <StyledTableCell>translate</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IrregularVerbsList;
