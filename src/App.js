import React, { useEffect } from 'react';
import './App.scss';
import { observer, inject } from 'mobx-react'
import Button from '@doodle/components/controls/Button/Button';

const App = ({ store }) => {
  useEffect(() => { store.getRequester() }, [store]);

  const { requester = {} } = store;
  return (
    <div className="App">
      <Button onClick={() => console.log('test')} variant="blue">lib-components Button</Button>
      <header className="App-header">
        <p className="Requester-name">Requesters name is {requester.name}.</p>
      </header>
      <footer className="app-footer">
      <a
          className="app-link"
          href="https://cloudhuset.dk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with&nbsp;
          <span role="img" aria-label="Love">
          ❤️
          </span>
          &nbsp;
          and
          &nbsp;
          <span role="img" aria-label="Love">
          ☕
          </span>
          &nbsp;by Cloudhuset
        </a>
    </footer>
    </div>
  );
}

export default inject(({ store }) => ({ store }))(observer(App));