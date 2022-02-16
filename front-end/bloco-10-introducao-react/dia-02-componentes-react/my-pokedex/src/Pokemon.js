import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return(
      <div className="pokemon">
        <h2>{ name }</h2>
        <p>{ type }</p>
        <p>{ `Average weight:  ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

export default Pokemon;
