'use strict';

import Cassis from 'cassis';

class Tooltip extends Cassis {
  constructor () {
    super({
      '.reactui-tooltip' : {
        'position' : 'absolute',
        'background' : '#000',
        'color' : '#fff',
        'display' : 'none',

        '&.reactui-tooltip-show' : {
          'display' : 'block'
        },

        '&:after, &:before' : {
          'border' : 'solid transparent',
          'content' : '" "',
          'height' : 0,
          'width' : 0,
          'position' : 'absolute',
          'pointer-events' : 'none'
        },

        '&:after' : {
          'border-color' : 'rgba(0, 0, 0, 0)',
          'border-width' : '5px'
        },

        '&:before' : {
          'border-color': 'rgba(0, 0, 0, 0)',
        	'border-width': '11px'
        },

        '&.reactui-tooltip-bottom' : {
          '&:after, &:before' : {
            'bottom' : '100%',
            'left' : '50%'
          },
          '&:after' : {
            'border-bottom-color' : 'rgb(0, 0, 0)',
            'margin-left' : '-5px'
          },
          '&:before' : {
            'border-bottom-color': 'rgb(0, 0, 0)',
            'margin-left': '-11px'
          }
        },

        '&.reactui-tooltip-top' : {
          '&:after, &:before' : {
            'top' : '100%',
            'left' : '50%'
          },
          '&:after' : {
            'border-top-color' : 'rgb(0, 0, 0)',
            'margin-left' : '-5px'
          },
          '&:before' : {
            'border-top-color': 'rgb(0, 0, 0)',
            'margin-left': '-11px'
          }
        }
      }
    });
  }
}

export default Tooltip;
