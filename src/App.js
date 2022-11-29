import React from 'react';
import Navigation from './Navigation';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from './contexts/LocaleContext';
import './styles/write.scss';
import { createTheme, ThemeProvider } from '@mui/material';
import { colors } from './utils';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.secondary,
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,

      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };
  }

  render() {
    return (
      <LocaleProvider value={this.state.localeContext}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <Navigation />
            </Router>
          </ThemeProvider>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;
