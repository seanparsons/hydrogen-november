// Typographic Components
// .page-title       { font-size: 60px; line-height: 120% }
// .section-title    { font-size: 48px; line-height: 140% }
// .subsection-title { font-size: 40px; line-height: 120% }
// .section-subtitle { font-size: 20px; line-height: 140%; font-weight: bold }

// Text styles
// .large     { font-size: 20px; line-height: 140% }
// .regular             { font-size: 16px; line-height: 140%; }
// .smaller     { font-size: 15px; line-height: 140%; }

import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from '@remix-run/react'
import { Image, Money } from '@shopify/hydrogen'

export const PageTitle = ({ style, children }) => (
  <h1
    style={{ fontSize: 60, lineHeight: '120%', ...style }}
  >
    {children}
  </h1>
)
export const SectionTitle = ({ style, children }) => (
  <h2
    style={{
      fontFamily: 'Amiko',
      fontSize: '48px',
      lineHeight: '120%',
      padding: 0,
      margin: 0,
      ...style,
    }}
  >
    {children}
  </h2>
)
export const SubsectionTitle = ({ style, children }) => (
  <h3
    style={{
      fontFamily: 'Amiko',
      fontSize: '40px',
      lineHeight: '120%',
      padding: 0,
      margin: 0,
      ...style,
    }}
  >
    {children}
  </h3>
)

export const SectionSubtitle = ({ style, children }) => (
  <h5
    style={{
      fontFamily: 'Amiko',
      fontSize: '20px',
      lineHeight: '140%',
      padding: 0,
      margin: 0,
      ...style,
    }}
  >
    {children}
  </h5>
)

export const Text = ({
  level,
  deemphasized,
  children,
  style,
}) => {
  const defaultText = {
    lineHeight: '140%',
    fontFamily: 'Amiko',
  }
  const large = { fontSize: '20px' }
  const elevated = { fontSize: '17px' }
  const regular = { fontSize: '16px' }
  const smaller = { fontSize: '15px' }

  const resultingStyle =
    level === 'large'
      ? large
      : level === 'elevated'
      ? elevated
      : level === 'regular'
      ? regular
      : smaller

  return (
    <div
      style={{
        ...defaultText,
        ...resultingStyle,
        opacity: deemphasized ? 0.5 : 1,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export const Grid = ({ left, right, padded, gap }) => (
  <div
    style={{
      display: 'flex',
      flexGrow: 1,
      padding: padded ? '20px' : 0,
      gap: gap ? '40px' : 0,
    }}
  >
    {left}
    {right}
  </div>
)

export const SpecialRow = ({
  left,
  right,
  inverted,
  style,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: inverted
        ? '1.2fr 1fr'
        : '1fr 1.2fr',
      gap: '2em',
      ...style,
    }}
  >
    {left}
    {right}
  </div>
)

export const Button = ({ children }) => <h1>{children}</h1>

export const Card = ({
  content,
  padded,
  gap,
  title,
  bottom,
}) => (
  <div
    style={{
      boxShadow:
        '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),       0 4px 4px hsl(0deg 0% 0% / 0.075),  0 8px 8px hsl(0deg 0% 0% / 0.075),      0 16px 16px hsl(0deg 0% 0% / 0.075)',
      padding: padded ? '10px' : 0,
      gap: gap ? '10px' : 0,
      width: '100%',
      borderRadius: 30,
      overflow: 'hidden',
    }}
  >
    <Column
      content={title}
      moreContent={content}
      evenMoreContent={bottom}
    />
  </div>
)

export const Section = ({
  padded,
  style,
  children,
  minHeight,
}) => (
  <section
    style={{
      padding: padded ? '1em 10em' : null,
      minHeight: minHeight ? '85vh' : null,
      ...style,
    }}
  >
    {children}
  </section>
)

export const Row = ({
  padded,
  centered,
  wrap,
  gap,
  style,
  children,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      padding: padded ? '1em' : null,
      justifyContent: centered ? 'center' : null,
      gap: gap ?? null,
      flexWrap: wrap ? 'wrap' : 'no-wrap',
      ...style,
    }}
  >
    {children}
  </div>
)

export const Column = ({
  padded,
  centered,
  wrap,
  gap,
  style,
  children,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      padding: padded ? '1em' : null,
      gap: gap ?? null,
      alignItems: centered ? 'center' : null,
      ...style,
    }}
  >
    {children}
  </div>
)
export const Page = ({ content, padded, gap }) => (
  <div
    style={{
      display: 'flex',
      direction: 'column',
      padding: padded ? '10px' : 0,
      gap: gap ? '10px' : 0,
      background: 'yellow',
    }}
  >
    {content}
  </div>
)

export const MenuBar = () => (
  <div
    style={{
      display: 'flex',
      height: 48,
      alignItems: 'center',
      gap: 20,
      flexGrow: 1,
      width: '100%',
    }}
  >
    <div>Home</div>
    <div>Collections</div>
    <div>Featured</div>
    <div>Just In</div>
  </div>
)

export const HalfAndHalf = ({
  left,
  right,
  padded,
  gap,
  style,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: padded ? '20px' : 0,
      gap: gap ? '40px' : 0,
      ...style,
    }}
  >
    {left}
    {right}
  </div>
)

export const TwoFeatureCallout = ({
  left,
  right,
  style,
}) => (
  <HalfAndHalf
    style={{
      width: 530,
      height: 158,
      border: '1px solid var(--stroke-light)',
      borderRadius: 16,
      color: 'var(--color-light)',
      ...style,
    }}
    left={left}
    right={right}
  />
)

export const TrippyButton = ({ children, price }) => (
  <button
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 32px',
      borderRadius: 10,
      background: 'var(--yellow)',
      color: 'var(--color-dark)',
      border: 'none',
      width: 330,
      height: 70,
      boxShadow:
        '-5px 5px 0px 0px #000, 0px 5px 0px 0px #000',
      fontFamily: 'Amiko',
      fontSize: 18,
      fontWeight: 'bold',
    }}
  >
    <span style={{ flexGrow: 1, textAlign: 'left' }}>
      {children}
    </span>
    {price && (
      <Row gap={5}>
        ${price}
        <img
          src='shoppingbag_black_small@2x.png'
          width={24}
          height={24}
          alt=''
        />
      </Row>
    )}
  </button>
)

export const Spacer = ({ height }) => (
  <div style={{ height: height ?? 36 }} />
)

export const Stars = ({ rating }) => (
  <Row style={{ justifyContent: 'flex-start' }}>
    {Array.from({ length: rating ?? 1 }).map((_, i) => {
      // return <div>hi</div>
      return (
        <StarIcon
          key={'star' + i}
          style={{ width: 20, color: 'orange' }}
        />
      )
    })}
  </Row>
)

export const QuoteWithRating = ({
  quote,
  rating,
  backgroundColor,
  style,
}) => (
  <div
    style={{
      boxSizing: 'border-box',
      contain: 'layout',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style,
    }}
  >
    <div
      style={{
        position: 'relative',
        top: 10,
        backgroundColor: 'var(--color-light)',
        borderRadius: 12,
        padding: '3px 8px',
      }}
    >
      <Stars rating={rating} />
    </div>
    <div
      style={{
        boxSizing: 'border-box',
        width: 250,
        backgroundColor: backgroundColor ?? null,
        color: 'var(--color-light)',
        padding: '1em',
        borderRadius: 12,
      }}
    >
      {quote}
    </div>
  </div>
)

export const DuplicatedImageWithBackground = ({
  image,
  backgroundColor,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <div
      style={{
        position: 'relative',
        top: 70,
        width: 350,
        height: 325,
        backgroundColor: backgroundColor ?? null,
        borderRadius: 20,
      }}
    />
    <img
      style={{
        position: 'absolute',
        top: 10,
        left: 242,
        scale: '0.8',
      }}
      srcSet={image + ' 2x'}
      alt=''
    />
    <img
      style={{
        position: 'absolute',
        top: 10,
        left: 100,
      }}
      srcSet={image + ' 2x'}
      alt=''
    />
  </div>
)

export const ProductCard = ({
  id,
  handle,
  image,
  title,
  price,
}) => (
  <Link
    key={id}
    className='recommended-product'
    to={`/products/${handle}`}
  >
    <Image
      data={image}
      aspectRatio='1/1'
      sizes='(min-width: 45em) 20vw, 50vw'
    />
    <h4>{title}</h4>
    <small>
      <Money data={price} />
    </small>
  </Link>
)
