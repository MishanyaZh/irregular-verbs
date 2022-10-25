import Hero from './components/Hero/Hero';
import IrregularVerbsList from './components/IrregularVerbsList/IrregularVerbsList';
import { AppContainer } from './App.styled';

function App() {
  return (
    <AppContainer>
      <Hero />
      <IrregularVerbsList />
    </AppContainer>
  );
}

export default App;
