import * as Utopia from 'utopia-api'
import { Image } from '@shopify/hydrogen'
import { RecommendedProductsGrid } from '../app/components/Layout'

const ImageCropControl = Utopia.expressionPopupListControl([
  Utopia.expression('top', '"top"'),
  Utopia.expression('center', '"center"'),
  Utopia.expression('bottom', '"bottom"'),
  Utopia.expression('left', '"left"'),
  Utopia.expression('right', '"right"'),
])

const ImageTypeControl = Utopia.objectControl({
  altText: Utopia.stringControl(),
  id: Utopia.stringControl(),
  url: Utopia.stringControl(),
  height: Utopia.numberControl(),
  width: Utopia.numberControl(),
})

const Components = {
  '@shopify/hydrogen': {
    // https://shopify.dev/docs/api/hydrogen-react/2024-01/components/image
    Image: {
      component: Image,
      properties: {
        aspectRatio: Utopia.stringControl(),
        crop: ImageCropControl,
        data: ImageTypeControl,
        // loader is omitted, we don't have a control description for functions yet
        srcSetOptions: Utopia.objectControl({
          intervals: Utopia.numberControl(),
          startingWidth: Utopia.numberControl(),
          incrementSize: Utopia.numberControl(),
          placeholderWidth: Utopia.numberControl(),
        }),
      },
      supportsChildren: false,
      variants: [],
    },
  },
  '/app/components/Layout': {
    RecommendedProductsGrid: {
      component: RecommendedProductsGrid,
      supportsChildren: true,
      properties: {},
      variants: [],
    },
  },
}

export default Components
