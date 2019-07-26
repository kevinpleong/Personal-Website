import React from 'react';

export default class Art extends React.Component {
  render() {
    return (<div className="container">
      <h3>Art Materials I love to use:</h3>
      <ul>
        <li>Alcohol Markers</li>
        <ul>
          <li>Copics</li>
        </ul>
        <li>Paints</li>
        <ul>
          <li>Watercolors</li>
          <li>Watercolor Pencils</li>
          <li>Gouache</li>
        </ul>
        <li>Pastels</li>
        <ul>
          <li>Chalk Pastels</li>
          <li>Oil Pastels</li>
        </ul>
      </ul>
    </div>);
  }
}
