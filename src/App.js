import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ThemedButton onClick={this.toggleTheme}>
              Change theme
            </ThemedButton>
          </header>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
