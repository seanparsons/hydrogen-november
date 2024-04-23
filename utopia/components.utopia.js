import * as Utopia from 'utopia-api'
import {
  RecommendedProductsGrid,
  BlogComponent,
} from '../app/components/Layout'

import { RecommendedProducts } from '../app/routes/_index'

import {
  Grid,
  Section,
  Row,
  Column,
  Spacer,
  Text,
  Stars,
  Placeholder,
} from '../app/components/Components'

const RowVariants = [
  {
    label: 'Row with Placeholders',
    imports:
      'import { Row } from "/app/components/Components"',
    code: `    <Row
  style={{
    width: 533,
    height: 150,
    padding: '10px 10px 10px 10px',
    borderRadius: 13,
    overflow: 'hidden',
    gap: 20,
    contain: 'layout',
  }}
>
  <div
    style={{
      backgroundColor: '#5956d6',
      contain: 'layout',
      borderRadius: 25,
      overflow: 'hidden',
      height: 130,
      flexGrow: 1,
    }}
  />
  <div
    style={{
      backgroundColor: '#5956d6',
      contain: 'layout',
      borderRadius: 25,
      overflow: 'hidden',
      height: 130,
      flexGrow: 1,
    }}
  />
  <div
    style={{
      backgroundColor: '#5956d6',
      contain: 'layout',
      borderRadius: 25,
      overflow: 'hidden',
      height: 130,
      flexGrow: 1,
    }}
  />
</Row>`,
  },
]

const SectionVariants = [
  {
    label: 'Section with Rows',
    imports:
      'import { Section, Row } from "/app/components/Components"',
    code: `<Section
  style={{
    width: 653,
    height: 374,
    contain: 'layout',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 11,
    backgroundColor: '#0074ff',
    borderRadius: 21,
    overflow: 'hidden',
  }}
>
  <Row
    style={{
      width: '100%',
      height: 408,
      padding: '10px 10px 10px 10px',
      borderRadius: 13,
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        backgroundColor: '#5956d6',
        contain: 'layout',
        height: '100%',
        flexGrow: 1,
        borderRadius: 25,
        overflow: 'hidden',
      }}
    />
  </Row>
  <Row
    style={{
      padding: '10px 10px 10px 10px',
      width: '100%',
      height: 408,
    }}
  >
    <div
      style={{
        backgroundColor: '#5956d6',
        contain: 'layout',
        height: '100%',
        flexGrow: 1,
        borderRadius: 25,
        overflow: 'hidden',
      }}
    />
  </Row>
</Section>`,
  },
  {
    label: 'Section with Columns',
    imports:
      'import { Section, Column } from "/app/components/Components"',
    code: `<Section
  style={{
    width: 688,
    height: 348,
    contain: 'layout',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 40,
    borderRadius: 54,
    overflow: 'hidden',
    backgroundColor: '#5956d6',
  }}
>
  <Column
    style={{
      padding: '60px 60px 60px 60px',
      contain: 'layout',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexGrow: 1,
    }}
  >
    <div
      style={{
        backgroundColor: '#0074ff',
        contain: 'layout',
        width: 192,
        height: 276,
        borderRadius: 40,
        overflow: 'hidden',
      }}
    />
  </Column>
  <Column
    style={{
      padding: '60px 60px 60px 60px',
      contain: 'layout',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexGrow: 1,
    }}
  >
    <div
      style={{
        backgroundColor: '#0074ff',
        contain: 'layout',
        width: 192,
        height: 276,
        borderRadius: 42,
        overflow: 'hidden',
      }}
    />
  </Column>
</Section>`,
  },
]

const ColumnVariants = [
  {
    label: 'Column with Placeholders',
    imports:
      "import { Column } from '/app/components/Components'",
    code: `<Column
  style={{
    width: 176,
    height: 464,
    backgroundColor: '#237893',
    padding: '10px 10px 10px 10px',
    gap: 10,
    contain: 'layout',
  }}
>
  <div
    style={{
      backgroundColor: '#0074ff',
      contain: 'layout',
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      flexGrow: 1,
    }}
  />
  <div
    style={{
      backgroundColor: '#0074ff',
      contain: 'layout',
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      flexGrow: 1,
    }}
  />
  <div
    style={{
      backgroundColor: '#0074ff',
      contain: 'layout',
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      flexGrow: 1,
    }}
  />
</Column>`,
  },
]

// HalfAndHalf,
// TrippyButton,
// SpecialRow,
// TwoFeatureCallout,
// QuoteWithRating,
// DuplicatedImageWithBackground,
// SectionSubtitle,
// SectionTitle,

const Components = {
  '/app/routes/_index': {
    RecommendedProducts: {
      component: RecommendedProducts,
      properties: {},
      focus: 'always',
      inspector: [],
    },
  },
  '/app/components/Layout': {
    RecommendedProductsGrid: {
      component: RecommendedProductsGrid,
      supportsChildren: true,
      properties: {},
      variants: [],
      focus: 'never',
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
    Placeholder: {
      component: Placeholder,
      properties: {
        margin: Utopia.numberControl(),
        fill: Utopia.colorControl(),
        fixed: Utopia.checkboxControl(),
      },
    },
    Grid: {
      component: Grid,
      properties: {
        left: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'Row',
              moduleName: '/app/components/Components',
              variants: RowVariants,
            },
            {
              component: 'Column',
              moduleName: '/app/components/Components',
              variants: ColumnVariants,
            },
          ],
        },
        right: {
          control: 'jsx',
          preferredContents: [
            {
              component: 'Row',
              moduleName: '/app/components/Components',
              variants: RowVariants,
            },
            {
              component: 'Column',
              moduleName: '/app/components/Components',
              variants: ColumnVariants,
            },
          ],
        },
      },
      variants: [],
    },
    Section: {
      component: Section,
      properties: {
        padded: Utopia.checkboxControl(),
      },
      inspector: ['layout', 'layout-system'],
      focus: 'never',
      children: {
        preferredContents: [
          {
            component: 'Row',
            moduleName: '/app/components/Components',
            variants: RowVariants,
          },
          {
            component: 'Column',
            moduleName: '/app/components/Components',
            variants: { name: 'Column' },
          },
          {
            component: 'Section',
            moduleName: '/app/components/Components',
            variants: { name: 'Section' },
          },
        ],
      },
      variants: [...SectionVariants],
      focus: 'never',
    },
    Row: {
      component: Row,
      inspector: ['layout-system'],
      properties: {
        padded: Utopia.checkboxControl(),
        centered: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          {
            component: 'Row',
            moduleName: '/app/components/Components',
            variants: RowVariants,
          },
          {
            component: 'Column',
            moduleName: '/app/components/Components',
            variants: ColumnVariants,
          },
          {
            component: 'Section',
            moduleName: '/app/components/Components',
            variants: SectionVariants,
          },
        ],
      },
      focus: 'never',
      variants: RowVariants,
    },
    Column: {
      component: Column,
      inspector: ['typography'],
      properties: {
        padded: Utopia.checkboxControl(),
        centered: Utopia.checkboxControl(),
        wrap: Utopia.checkboxControl(),
        gap: Utopia.numberControl(),
      },
      focus: 'never',
      children: {
        preferredContents: [
          {
            component: 'Row',
            moduleName: '/app/components/Components',
            variants: RowVariants,
          },
          {
            component: 'Column',
            moduleName: '/app/components/Components',
            variants: { name: 'Column' },
          },
          {
            component: 'Section',
            moduleName: '/app/components/Components',
            variants: { name: 'Section' },
          },
        ],
      },
      focus: 'never',
      variants: ColumnVariants,
    },
    Spacer: {
      component: Spacer,
      properties: {
        height: Utopia.stringControl(),
      },
      variants: {
        label: 'Spacer',
        imports:
          'import { Spacer } from "/app/components/Components"',
        code: `<Spacer height={50} />`,
      },
    },
    Text: {
      component: Text,
      properties: {
        level: Utopia.popupListControl([
          {
            label: 'large',
            value: 'large',
          },
          {
            label: 'embiggened',
            value: 'embiggened',
          },
          {
            label: 'regular',
            value: 'regular',
          },
          {
            label: 'smaller',
            value: 'smaller',
          },
        ]),
        deemphasized: Utopia.checkboxControl(),
        emboldened: Utopia.checkboxControl(),
        style: Utopia.styleControl(),
      },
      children: { preferredContents: 'text' },
      variants: [
        {
          label: 'Text, embiggened',
          imports:
            'import { Text } from "/app/components/Components"',
          code: `<Text level='embiggened'><span>Embiggened text</span></Text>`,
        },
      ],
    },
    Stars: {
      component: Stars,
      properties: {
        rating: Utopia.numberControl(),
        style: Utopia.styleControl(),
      },
      variants: {
        label: 'Stars',
        imports: `import { Stars } from '/app/components/Components'`,
        code: `<Stars rating={5} />`,
      },
    },
  },
}

export default Components
