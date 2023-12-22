import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  const data = require('./data/data.json');

  return (
    <div>
      <Header />
      <Navigation />
      <Section>
        {data.map((item, index) => (
          <Article key={index} name={item.browser} logo={item.logo} description={item.description} />
        ))}
      </Section>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
