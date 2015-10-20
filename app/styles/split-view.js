'use strict';

import Cassis from 'cassis';
import Flex from './mixins/flex';

class SplitView extends Cassis {
  constructor () {

    super({
      '.reactui-split-view' : {
        'overflow' : 'hidden',
        'height' : '300px',
        'position' : 'relative',

        '>.reactui-row' : {
          'height': '100%',

          '>.reactui-column' : {
            'overflow' : 'scroll',
            'width' : '100%'
          }
        }
      }
    });
  }
}

export default SplitView;
