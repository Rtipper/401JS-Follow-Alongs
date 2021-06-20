import React from 'react';
import JSONPretty from 'react-json-prettify';

import './results.scss';


function Results({ resultsHeaders, searchResults }) {
  return (
    <>
      <h5>Headers</h5>
      <JSONPretty json={resultsHeaders} />
      <h5>Results</h5>
      <JSONPretty json={searchResults} />
    </>
  );
}

export default Results;
