// App.js

import React from 'react';
import Form from './form/form';

function App() {
  return (
    <div className="App">
      <Form username="email" password="password" name="text" age="number">
      </Form>
    </div>
  );
}

export default App;
