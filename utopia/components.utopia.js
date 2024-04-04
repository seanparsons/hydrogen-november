import * as Utopia from 'utopia-api'
import { Image, Money } from '@shopify/hydrogen'
import { RecommendedProductsGrid } from '../app/components/Layout'

const ImageCropControl = Utopia.popupListControl([
  { value: 'top', label: 'top' },
  { value: 'center', label: 'center' },
  { value: 'bottom', label: 'bottom' },
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
])

const ImageTypeControl = Utopia.objectControl({
  altText: Utopia.stringControl(),
  id: Utopia.stringControl(),
  url: Utopia.stringControl(),
  height: Utopia.numberControl(),
  width: Utopia.numberControl(),
})

const CurrencyCodeControl = Utopia.popupListControl([
  {
    value: 'AED',
    label: 'United Arab Emirates Dirham (AED)',
  },
  {
    value: 'AFN',
    label: 'Afghan Afghani (AFN).',
  },
  // TODO: all currencies
])

const UnitPriceMeasurementMeasuredUnit =
  Utopia.popupListControl([
    {
      label: 'CL',
      value: 'va100 centiliters equals 1 liter.',
    },
    {
      value: 'CM',
      label: '100 centimeters equals 1 meter.',
    },
    {
      value: 'G',
      label: 'Metric system unit of weight.',
    },
    {
      value: 'KG',
      label: '1 kilogram equals 1000 grams.',
    },
    // TODO: all values
  ])

const MoneyV2Control = Utopia.objectControl(
  {
    amount: Utopia.numberControl(),
    currency: CurrencyCodeControl,
  },
  { required: true },
)

const UnitPriceMeasurementControl = Utopia.objectControl({
  measuredType: Utopia.popupListControl([
    {
      value: 'AREA',
      label: 'Unit of measurements representing areas.',
    },
    {
      value: 'LENGTH',
      label: 'Unit of measurements representing lengths.',
    },
    {
      value: 'VOLUME',
      label: 'Unit of measurements representing volumes.',
    },
    {
      value: 'WEIGHT',
      label: 'Unit of measurements representing weights.',
    },
  ]),
  quantityUnit: UnitPriceMeasurementMeasuredUnit,
  quantityValue: Utopia.numberControl(),
  referenceUnit: UnitPriceMeasurementMeasuredUnit,
  referenceValue: Utopia.numberControl(), // this can only be int
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
    Money: {
      component: Money,
      properties: {
        data: MoneyV2Control,
        withoutCurrency: Utopia.checkboxControl(),
        withoutTrailingZeros: Utopia.checkboxControl(),
        measurement: UnitPriceMeasurementControl,
        measurementSeparator: Utopia.jsxControl(),
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
