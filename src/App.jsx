import React from 'react';

import HeaderContainer from "./containers/HeaderContainer";
import FormContainers from "./containers/FormContainers";
import ListContainer from "./containers/ListContainer";
import FIlterContainer from "./containers/FIlterContainer";

function App() {
  return (
    <main>
      <HeaderContainer  />
      <FIlterContainer />
      <ListContainer />
      <FormContainers  />
    </main>
  );
}

export default App;
