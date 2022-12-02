import styled from '@emotion/styled';

export const BottomBox = styled.div`
  position: fixed;
  left: 50%;
  text-align: center;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
`;

export const Button = styled.button`
  border-radius: 50%;
  border: 1px solid #1976d2;
  color: #1976d2;
  background-color: rgb(136, 175, 214);
  cursor: pointer;
  box-shadow: 0 0 20px 5px rgb(136, 175, 214);

  :hover,
  :focus,
  :active {
    color: yellowgreen;
    border-color: yellowgreen;
    background-color: #1976d2;
    box-shadow: 0 0 20px 5px yellowgreen;
  }
`;
