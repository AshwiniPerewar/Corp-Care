import './App.css';
import SimpleSidebar from './components/SimpleSidebar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <SimpleSidebar/>
       </ChakraProvider>
    
  );
}

export default App;
