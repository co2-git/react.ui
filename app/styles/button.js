'use strict';

import Cassis from 'cassis';
import config from '../../config.json';

const declarations = {
  '.reactui-button' : {
    'display'                   :   'inline-block',
    'border'                    :   '1px solid #ccc',
    'background'                :   '#ccc',
    'vertical-align'            :   'middle',
    'touch-action'              :   'manipulation',
    'text-align'                :   'center',
    'border-radius'             :   '1px',
    'box-sizing'                :   'border-box',
    'padding'                   :   config.inputs.padding
  },

  '.reactui-button.reactui-button-block' : { width : '100%' },

  '.reactui-button.reactui-button-medium' : {
    'font-size'         :   '125%',
    'border-width'      :   '2px',
    'padding'           :   '1em'
  },

  '.reactui-button.reactui-button-large' : {
    'font-size'         :   '175%',
    'border-width'      :   '2px',
    'padding'           :   '1.3em'
  }
};

for ( let color of ['primary', 'success', 'warning', 'error'] ) {
  declarations[`.reactui-button.reactui-button-${color}`] = {
    'background'        :   `rgb(${config.colors[color][0]},${config.colors[color][1]},${config.colors[color][2]})`,
    'border-color'      :   `rgb(${config.colors[color][0]},${config.colors[color][1]},${config.colors[color][2]})`,
    'color'             :   '#fff'
  }

  for ( let placeholder of ['::-webkit-input-placeholder', ':-moz-placeholder', '::-moz-placeholder', ':-ms-input-placeholder'] ) {
    declarations[`.reactui-button.reactui-button-${color}${placeholder}`] = {
      color : `rgb(${config.colors[color][0]},${config.colors[color][1]},${config.colors[color][2]})`
    }
  }
}

class Button extends Cassis {
  constructor () {
    super(declarations);
  }
}

export default Button;
