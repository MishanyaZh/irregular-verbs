import { Header, Info } from './App.styled';
import IrregularVerbsList from './components/IrregularVerbsList/IrregularVerbsList';

function App() {
  return (
    <div>
      <header>
        <Header>Irregular Verbs List</Header>
        <Info>
          <span> suggestions for improvement </span>
          <a target="_blank" href="https://t.me/Mishanya_Zh" rel="noreferrer">
            Mishanya Zholondkovskyi
          </a>
        </Info>
      </header>
      <IrregularVerbsList />
    </div>
  );
}

export default App;
