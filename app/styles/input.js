'use strict';

import Cassis from 'cassis';
import config from '../../config.json';

class Input extends Cassis {
  constructor () {

    const rules = {
      '.reactui-input' : {
        'border'                    :   '1px solid #999',
        'border-radius '            :   '3px',
        'padding'                   :   config.inputs.padding,
        'box-sizing'                :   'border-box',

        '&.reactui-input-block'     :   {
          'width'                   :   '100%'
        },

        '&.reactui-input-medium'    :   {
          'font-size'               :   '125%',
          'border-width'            :   '2px',
          'padding'                 :   '1em'
        },

        '&.reactui-input-large'     :   {
          'font-size'               :   '175%',
          'border-width'            :   '2px',
          'padding'                 :   '1.3em'
        }
      }
    };

    for ( let color in config.colors ) {
      let input = `.reactui-input-${color}`;
      let rgb = `${config.colors[color][0]},${config.colors[color][1]},${config.colors[color][2]}`;

      rules['.reactui-input'][`&${input}, &${input}:active, &${input}:focus`] = {
        'border-color'            :   `rgb(${rgb})`,
        'outline'                 :   0,
        'color'                   :   `rgb(${rgb})`,
        'background'              :   `rgba(${rgb}, 0.1)`,
        'placeholder'             :   Cassis.Util.placeholder(`.reactui-input${input}, .reactui-input${input}:active, .reactui-input${input}:focus`, { color : `rgb(${rgb})` })
      }
    }

    super(rules);
  }
}

export default Input;
