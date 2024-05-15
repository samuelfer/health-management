import { NativeBaseProvider, StatusBar } from 'native-base';
import Routes from './src/Routes';
import { THEMES } from './src/styles/themes';



export default function App() {
  return (
    <NativeBaseProvider theme={THEMES} >
        <StatusBar backgroundColor={THEMES.colors.green[800]} />
      <Routes />
    </NativeBaseProvider>
   
  );
}
