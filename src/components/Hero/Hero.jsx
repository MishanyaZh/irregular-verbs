import React from 'react';
import { Header, Info } from './Hero.styled';

const Hero = () => {
  return (
    <header>
      <Header>Irregular Verbs List</Header>
      <Info>
        <span> suggestions for improvement </span>
        <a target="_blank" href="https://t.me/Mishanya_Zh" rel="noreferrer">
          Mishanya Zholondkovskyi
        </a>
      </Info>
    </header>
  );
};

export default Hero;
