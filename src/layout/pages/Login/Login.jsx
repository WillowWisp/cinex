import React, { useEffect, useState } from 'react';

import classes from './Login.module.scss';

function Login(props) {


  return (
    <div className={classes['page-content']}>
      <div className={`${classes['login-card']} card`}>
        <div className="card-header">
          <div className={classes['card-header-text']}>Sign In</div>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Username" style={{fontSize: 22}} />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="Password" style={{fontSize: 22}} />
            </div>
            <div className={`${classes['remember-and-login-btn-container']}`}>
              <div>
                <label><input type="checkbox" /> Remember Me</label>
              </div>
              <div className="form-group">
                <input type="submit" value="Login" className={classes['login-btn']} />
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="#" className="ml-2 font-weight-bold">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#" className="font-weight-bold">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;