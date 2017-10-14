import React from 'react';
import styles from './App.scss';

class Logo extends React.Component {
  render () {
    return (
      <div className={ styles.sparkApp__logo }>
        <svg width="124" height="123" viewBox="0 0 164 163" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g fill="#FDD835">
              <path d="M136.24 27.26l-4.994 15.6-10.607-10.606zM28.76 134.74l4.994-15.6 10.607 10.606z"/>
            </g>
            <g fill="#FDD835">
              <path d="M136.24 134.74l-15.6-4.994 10.606-10.607zM28.76 27.26l15.6 4.994-10.606 10.607z"/>
            </g>
            <g fill="#FDD835">
              <path d="M.5 81.5l20.034-10v20zM163.5 81.5l-20.034 10v-20z"/>
            </g>
            <g fill="#FDD835">
              <path d="M82 0l10 20.034H72zM82 163l-10-20.034h20z"/>
            </g>
            <circle fill="#FDD835" cx="82" cy="82" r="50"/>
            <text fontFamily="Avenir-Black, Avenir" fontSize="30" fontWeight="700" fill="#000">
              <tspan x="42.105" y="89">spark</tspan>
            </text>
          </g>
        </svg>
      </div>
    )
  }
}

export default Logo;
