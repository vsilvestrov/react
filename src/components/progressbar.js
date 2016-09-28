import React from 'react';

export default class Progressbar extends React.Component {
  render(){
    return (
      <div className="col-md-4">
        <div className="page-header">
          <h3>Progressbar Component</h3>
        </div>
        <div className="progress">
  <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
    <span className="sr-only">40% Complete (success)</span>
  </div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
    <span className="sr-only">20% Complete</span>
  </div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    <span className="sr-only">60% Complete (warning)</span>
  </div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
    <span className="sr-only">80% Complete (danger)</span>
  </div>
</div>
      </div>
      )
  }
}

