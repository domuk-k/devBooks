import React from 'react';
import Add from './pages/Add';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme/customTheme';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/add" component={Add} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </ErrorBoundary>
  );
};

export default App;
