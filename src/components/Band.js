import React, { Component } from 'react';

class Band extends Component {

  render() { 
    const { band, removeBand } = this.props;
    return(
      <ul>
        <li key={band.id}>{band.name}<button onClick={() => removeBand(band.id)}>DELETE</button></li>
      </ul>
    );
  }
};

export default Band;
