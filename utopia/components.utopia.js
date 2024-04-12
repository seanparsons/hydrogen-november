import * as Utopia from 'utopia-api'
import {
  RecommendedProductsGrid,
  BlogComponent,
} from '../app/components/Layout'

import { Grid } from '../app/components/Components'

const Components = {
  '/app/components/Layout': {
    RecommendedProductsGrid: {
      component: RecommendedProductsGrid,
      supportsChildren: true,
      properties: {},
      variants: [],
    },
    BlogComponent: {
      component: BlogComponent,
      children: {
        preferredContents: {
          component: 'div',
          variants: { name: 'div' },
        },
      },
      properties: {
        title: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'h1',
              variants: [
                { label: 'Title', code: '<h1>Title</h1>' },
              ],
            },
          ],
        },
        children: Utopia.arrayControl(Utopia.jsxControl()),
      },
      variants: [
        {
          label: '  Post',
          imports: `import { BlogComponent } from '/app/components/Layout';`,
          code: '<BlogComponent title={<h1>Title</h1>}><div>Blog Post</div></BlogComponent>',
        },
        {
          label: 'Empty Blog Post',
          imports: `import { BlogComponent } from '/app/components/Layout';`,
          code: '<BlogComponent title={<h1>Title</h1>} />',
        },
      ],
      preferredChildComponents: [
        {
          name: 'div',
        },
      ],
    },
  },
  '/app/components/Components': {
    Grid: {
      component: Grid,
      properties: {
        left: {
          control: 'jsx',
        },
        right: {
          control: 'jsx',
        },
      },
      supportsChildren: false,
      variants: [],
    },
  },
}

export default Components
