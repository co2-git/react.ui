'use strict';

import Cassis               from 'cassis';
import config               from '../../config.json';
import Flex                 from './mixins/flex';

class Group extends Cassis {
  constructor () {
    const row = new Flex();
    const column = new Flex({ column : true });

    super({
      '.reactui-group' : {

        '&.reactui-group-radius' : {
          ':not(:first-child):not(:last-child)' : {
            'border-radius' : '0'
          },

          ':first-child' : {
            'border-radius' : '6px 0 0 6px'
          },

          ':last-child' : {
            'border-radius' : '0 6px 6px 0'
          },

          ':first-child:last-child' : {
            'border-radius' : '6px'
          }
        },

        '&.reactui-group-block': { row },

        '&.reactui-group-block>*' : { width : '100%' },

        '&.reactui-group-stack' : {
          column,
          '&.reactui-group-radius' : {
            ':first-child': {
              'border-radius' : '6px 6px 0 0'
            },
            ':last-child': {
              'border-radius' : '0 0 6px 6px'
            }
          },
          ':not(:first-child)': {
            'border-top' : 'none'
          }
        }
      }
    });
  }
}

export default Group;
