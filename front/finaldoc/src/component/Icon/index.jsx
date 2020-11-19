import React from 'react';
import classnames from 'classnames';
import propsTypes from 'prop-types';
import './icon.scss';

const scriptElem = document.createElement('script');
scriptElem.src = '//at.alicdn.com/t/font_2213074_yli3jzu1v6r.js';
document.body.appendChild(scriptElem);

function SimpleIcon({ classname,type, name, ...restProps }) {
  return (
    <svg
    
      className={classnames(type==="spin"?"simple-icon-spin":"simple-icon",classname)}
      aria-hidden="true"
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}

SimpleIcon.propsTypes = {
  name: propsTypes.string.isRequired,
  style: propsTypes.object,
};

export default SimpleIcon;