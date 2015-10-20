'use strict';

import Cassis from 'cassis';
import config from '../../config.json';
import Flex from './mixins/flex';

class Row extends Cassis {
  constructor () {
    const flex = new Flex();

    const rules = {
      '.reactui-flash'                :    {

          'border-radius'             :     '4px',
          'color'                     :     '#fff',
          'background'                :     '#aaa',
          'font-weight'               :     'bold',
          flex,

          'div'                       :     {
            'padding'                 :     '8px',
          },

          '.reactui-flash-close'      :    {
            'border-left'             :     '1px dotted #fff',
            'cursor'                  :     'pointer'
          }
      }
    };

    for ( let color in config.colors ) {
      rules[`.reactui-flash-${color}`] = {
        'background'              :     `rgb(${config.colors[color][0]},${config.colors[color][1]},${config.colors[color][2]})`,
        'border-color'            :     `rgb(${config.colors[color][0]},${config.colors[color][1]},${config.colors[color][2]})`
      };
    }

    super(rules);
  }
}

export default Row;
