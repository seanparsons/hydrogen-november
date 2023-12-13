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
);

export var storyboard = (
  <Storyboard>
    <RemixScene
      style={{
        position: 'absolute',
        width: 644,
        height: 750,
        left: 200,
        top: 30,
        overflow: 'hidden',
      }}
      getLoadContext={contextGetter}
      data-label="Mood Board"
    />
  </Storyboard>
);
