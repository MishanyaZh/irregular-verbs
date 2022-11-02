import styled from '@emotion/styled';

export const BottomBox = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  opacity: 0.7;
`;

export const Button = styled.button`
  border-radius: 50%;
  border: 1px solid #1976d2;
  color: #1976d2;
  background-color: rgb(55, 135, 214);
  cursor: pointer;
  :hover,
  :focus,
  :active {
    color: yellowgreen;
    border-color: yellowgreen;
  }
`;
