import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

function Header ({todos}){
    return (
      <header>
        <Stats todos={todos} />
        <h1>Redux Todo</h1>
        <Stopwatch />
      </header>
    );
}

Header.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Header;