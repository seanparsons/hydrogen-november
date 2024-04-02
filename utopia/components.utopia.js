import * as Utopia from 'utopia-api'
import { Image } from '@shopify/hydrogen'

const Components = {
  '@shopify/hydrogen': {
    // https://shopify.dev/docs/api/hydrogen-react/2024-01/components/image
    Image: {
      component: Image,
      properties: {
        aspectRatio: Utopia.stringControl(),
        crop: Utopia.stringControl(),
        data: Utopia.objectControl({
          altText: Utopia.stringControl(),
          id: Utopia.stringControl(),
          url: Utopia.stringControl(),
          height: Utopia.numberControl(),
          width: Utopia.numberControl(),
        }),
        // loader is omitted, we don't have a control description for functions yet
        srcSetOptions: Utopia.objectControl({
            intervals: Utopia.numberControl(),
            startingWidth: Utopia.numberControl(),
            incrementSize: Utopia.numberControl(),
            placeholderWidth: Utopia.numberControl(),
        })
      },
      supportsChildren: false,
      variants: [],
    },
  },
}

export default Components
