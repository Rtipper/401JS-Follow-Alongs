import './body.scss';
import React from 'react';

import Results from '../results/results.js';

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.goInput}>
        <div>
          URL: <input onChange={this.props.handleChange} type="text" name="urlInput" />
          <button class="catchEm">CATCH EM' ALL!</button>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="get" />
          GET
          </label>
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="post" />
          POST
          </label>
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="put" />
          PUT
          </label>
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="delete" />
          DELETE
          </label>
        </div>

        <div className="results">
          <p className="results-output">
            <Results resultsHeaders={this.props.headers} searchResults={this.props.results} />
          </p>
        </div>

      </form>
    );
  }
}

export default Form;