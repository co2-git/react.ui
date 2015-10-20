'use strict';

import Cassis from 'cassis';

class Table extends Cassis {
  constructor () {
    super({
      '.reactui-table' : {

        'thead' : {
          'tr' : {
            'background' : '#ccc',
            'font-weight' : 'bold'
          }
        },

        'tbody' : {
          'tr' : {
            '&:nth-child(even)' : {
              'background' : '#eee'
            }
          }
        },

        '&.reactui-table-block' : {
          width : '100%'
        }
      }
    });
  }
}

export default Table;
