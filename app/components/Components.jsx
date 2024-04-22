export const Title = ({ title, level }) => (
  <h1
    style={{
      fontSize:
        level == 'primary'
          ? 48
          : level == 'default'
          ? 24
          : 18,
    }}
  >
    {title}
  </h1>
)

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

export const Heading = ({ children }) => <h1>{children}</h1>
export const Footer = ({ children }) => <h1>{children}</h1>
export const Text = ({ children }) => <h1>{children}</h1>
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
