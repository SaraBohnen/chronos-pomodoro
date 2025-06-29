import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    //react fragment(tag vazia), esta div não aparecerá quando for inspecioanr no navegador
    <>
      <Heading> Olá mundo!</Heading>
      <Heading> Olá mundo 2</Heading>
    </>
  );
}
