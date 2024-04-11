import * as React from 'react';
import {Storyboard, RemixScene} from 'utopia-api';

import {getLoadContext} from '../server';

const contextGetter = getLoadContext(
  {
    SESSION_SECRET: 'foobar',
    PUBLIC_STORE_DOMAIN: 'mock.shop',
  },
  {
    waitUntil: () => {},
  },
  // Demo cart ID obtained from https://mock.shop/create-cart
  'gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSEhKQ0I3RFoySlY3Mk5ORlhUVEo2RjhU',
);

export var storyboard = (
  <Storyboard>
    <RemixScene
      data-label="Desktop"
      style={{
        position: 'absolute',
        width: 1024,
        height: 'max-content',
        left: 0,
        top: 0,
        overflow: 'hidden',
      }}
      getLoadContext={contextGetter}
    />
    <RemixScene
      data-label="Tablet"
      style={{
        position: 'absolute',
        width: 700,
        height: 'max-content',
        left: 1050,
        top: 0,
        overflow: 'hidden',
      }}
      getLoadContext={contextGetter}
    />
  </Storyboard>
);
