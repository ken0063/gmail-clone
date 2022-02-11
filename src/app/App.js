import { Header } from '../components';
import tw, { styled } from 'twin.macro';

export const AppWrapper = styled.div`
  ${tw`m-0 p-0 w-screen h-screen `}
`;

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;
