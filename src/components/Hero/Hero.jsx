import React from 'react';
import { BoxHeader, Header, Info } from './Hero.styled';

const Hero = () => {
  return (
    <BoxHeader>
      <Header>Irregular Verbs List</Header>
      <Info>
        <span>for comments and suggestions </span>
        <a target="_blank" href="https://t.me/Mishanya_Zh" rel="noreferrer">
          Author
        </a>
      </Info>
    </BoxHeader>
  );
};

export default Hero;
