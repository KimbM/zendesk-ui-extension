import {Injectable} from '@angular/core';

@Injectable()
export class EnvService {
  LABELS = {
    '60316187': 'ZIP CODE',
    '60726048': 'CUSTOM TAG',
    '58411107': 'CONV ID',
    '60315747': 'CUSTOM DATE',
    '60315567': 'CUSTOM DECIMAL',
    '60726208': 'CUSTOM TEXT',
    '56668108': 'QUIQ TENANT',
    '60725468': 'CUSTOM TEXTAREA',
    '60726508': 'CUSTOM NUMERIC',
  };

  ZEN_SITE = 'https://centricient.zendesk.com';

  CLIENT_ID = 'zendeskCustomerLookup';

  //REDIRECT_URI = 'http://localhost:3000/oauth';
  REDIRECT_URI = ' https://8cff1995.ngrok.io/oauth';

  END_USER = 'Kim Bee';
}
