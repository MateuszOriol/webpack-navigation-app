import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Article from './Article';
import Section from './Section';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Article />
        <Section data={data}></Section>
        <Footer />
      </div>
    );
  }
}

export default App;