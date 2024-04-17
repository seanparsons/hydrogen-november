import * as Utopia from 'utopia-api'
import {
  RecommendedProductsGrid,
  BlogComponent,
} from '../app/components/Layout'

import {
  Grid,
  Section,
  Row,
  Column,
} from '../app/components/Components'

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
    Section: {
      component: Section,
      properties: {
        padded: Utopia.checkboxControl(),
      },
      children: {
        preferredContents: [
          {
            component: 'Row',
            moduleName: '/app/components/Components',
            variants: { name: 'Row' },
          },
          {
            component: 'Column',
            moduleName: '/app/components/Components',
            variants: { name: 'Row' },
          },
        ],
      },
      focus: 'never',
    },
    Row: {
      component: Row,
      properties: {
        padded: Utopia.checkboxControl(),
        centered: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      children: 'supported',
      focus: 'never',
    },
    Column: {
      component: Column,
      properties: {
        padded: Utopia.checkboxControl(),
        centered: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      children: 'supported',
      focus: 'never',
    },
  },
}

export default Components
