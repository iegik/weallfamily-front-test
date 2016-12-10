import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Login from '../Login'
//import { login, logout, loginAsync } from './actions'
//import * as TodoActions from '../actions'

const App = ({}) => (
  <div className="app slides">
    <div className="slide slide_loader loader">
      <div className="loader__content">Loading...</div>
    </div>
    <div className="slide slide_intro intro">
      <div className="intro__content-wrap">
        <img
          src="https://storage.moqups.com/repo/mUDYl3XlXI/images/CQPYmZLIpW.jpg"
          width="5184"
          height="3456"
        />
        <h2 className="intro__title">Start from begining</h2>
        <div className="intro__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam 
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate 
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor 
            sed eleifend tristique, tortor mauris.
          </p>
          <a className="more" href="#login">Log-in</a>
        </div>
      </div>
    </div>
    <div className="slide slide_home home">
      <div className="home__content-wrap">
        <h2 className="home__title">Dont warry be happy</h2>
        <div className="home__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
            sed eleifend tristique, tortor mauris molestie elit, et lacinia
            ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium
            sit amet quis magna. Aenean velit odio, elementum in tempus ut,
            vehicula eu diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam 
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
            sed eleifend tristique, tortor mauris molestie elit, et lacinia
            ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium
            sit amet quis magna. Aenean velit odio, elementum in tempus ut,
            vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate
            eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius
            pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem
            sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
          </p>
        </div>
      </div>
    </div>
    <div className="slide slide_profile profile">
      <div className="profile__content">
        <form className="form form-md">
          <div className="form__field field">
            <img src="https://randomuser.me/api/portraits/lego/1.jpg"/>
          </div>
          <div className="form__field field">
            <input className="field__input"
              type="text"
              name="username"
              placeholder="anonymous"
            />
            <label className="field__label"
              htmlFor="username">
              Login
            </label>
          </div>
          <div className="form__field field">
            <input className="field__input"
              type="text"
              name="firstName"
              placeholder="Tom"
            />
            <label className="field__label"
              htmlFor="firstName">First name</label>
          </div>
          <div className="form__field field">
            <input className="field__input"
              type="text"
              name="lastName"
              placeholder="Cruse"
            />
            <label className="field__label"
              htmlFor="lastName">Last name</label>
          </div>
          <div className="form__field field">
            <input className="field__input"
              type="email"
              name="email"
              placeholder="Cruse"
            />
            <label className="field__label"
              htmlFor="email">E-mail</label>
          </div>
          <div className="form__field field">
            <input className="field__input"
              type="password"
              name="password"
              placeholder="P4$$w0rd"
            />
            <label className="field__label"
              htmlFor="password">Password</label>
          </div>
          <a className="form__btn btn btn-md btn-md-primary" href="#home">Save</a>
        </form>
      </div>
    </div>
    <div className="header">
      <button className="header__btn btn menu-toggle">
        <i className="icon-hamburger"></i>
      </button>
      <span className="header__title">
        Let`s go
      </span>
    </div>
    <div className="menu">
      <nav className="menu__content">
        <a href="#intro" className="menu__item">Intro</a>
        <a href="#home" className="menu__item">Home</a>
        <a href="#profile" className="menu__item">Profile</a>
        <a href="#login" className="menu__item">Log-in</a>
      </nav>
    </div>
    <div className="slide slide_login login">
      <div className="login__content">
        <form className="form form-md">
          <div className="form__field field">
            <input className="field__input"
              type="text"
              name="username"
              placeholder="anonymous"
            />
            <label className="field__label"
              htmlFor="username">
              Login
            </label>
          </div>
          <div className="form__field field">
            <input className="field__input"
              type="password"
              name="password"
              placeholder="P4$$w0rd"
            />
            <label className="field__label"
              htmlFor="password">Password</label>
          </div>
          <a className="form__btn btn btn-md btn-md-primary" href="#home">Log in</a>
        </form>
      </div>
    </div>
  </div>
);

App.propTypes = {
};

const mapStateToProps = state => ({
//  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>root.classList.add('animation-intro-in'), 1000 * 0.85);
  setTimeout(()=>root.classList.add('animation-header-in'), 1000 * 1.7);

  document.querySelector('.menu-toggle').addEventListener('click', ()=>
    root.classList[[].indexOf.call(root.classList,'animation-menu-in')>-1?'remove':'add']('animation-menu-in')
  );
  
  document.querySelectorAll('.slide').forEach((el)=>
    el.addEventListener('click', ()=>
      root.classList.remove('animation-menu-in')
    )
  );
  
  document.querySelectorAll('a').forEach((el)=>{
    let page = (new URL(el.href)).hash.substr(1);
    let pageClass = 'animation-' + page + '-in';
    el.addEventListener('click', ()=>{
      //root.classList[[].indexOf.call(root.classList,pageClass) > -1 ? 'remove' : 'add'](pageClass)
      ['intro','home','login','profile'].forEach((cl)=>{
        root.classList.remove('animation-'+cl+'-in');
      });
      root.classList.add(pageClass);
    });
  });
  setTimeout(()=>{
    document.querySelectorAll('input[type=text],input[type=email],input[type=password]').forEach((el)=>{
      (el.onkeyup=()=>el.setAttribute('value', el.value||''))();
    });
  }, 1000 * 5)
});
