import React, { Component , Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
      <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-item-center'>
              <h1 className= 'm-0 slide-in-bottom' >Hello Everyone! </h1>
              <p2 className= 'ls-2 mt-2 slide-in-bottom'> My Name is Thanadol Dejkoonchorn I'm Backend Developer</p2>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
          <img className="img-fluid" src="../images/nomad-bro.png" alt='...'/>
          </div>
      </div>
  </Fragment>
    )
  }
}
