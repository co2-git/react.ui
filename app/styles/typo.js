'use strict';

import Cassis from 'cassis';

class Typo extends Cassis {
  constructor () {
    super({
      'html, body' : {
        'color'         :     '#333',
        'font-family'   :     "'Helvetica Neue', sans-serif",
        'font-size'     :     '14px',
        'line-height'   :     '24px',
        'margin'        :     '0 0 24px',
        'text-align'    :     'justify',
        'text-justify'  :     'inter-word'
      }
    });
  }
}

export default Typo;
