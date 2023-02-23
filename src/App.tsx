import React from 'react';

import '~/App.scss';
import { HomePage } from './pages/HomePage/HomePage.module.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
