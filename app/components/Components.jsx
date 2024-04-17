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

export const Image = ({ source, rounded }) => (
  <img
    src='https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg'
    style={{
      width: 300,
      borderRadius: rounded ? '20px' : 0,
    }}
  />
)

export const Heading = ({ children }) => <h1>{children}</h1>
export const Footer = ({ children }) => <h1>{children}</h1>
export const Text = ({ children }) => <h1>{children}</h1>
export const Button = ({ children }) => <h1>{children}</h1>

export const Row = ({
  content,
  moreContent,
  evenMoreContent,
  padded,
  gap,
  tall,
}) => (
  <div
    style={{
      display: 'flex',
      flexGrow: 1,
      padding: padded ? '10px' : 0,
      gap: gap ? '10px' : 0,
      height: tall ? '250px' : null,
      alignItems: tall ? 'center' : null,
      justifyContent: tall ? 'center' : null,
    }}
  >
    {content}
    {moreContent}
    {evenMoreContent}
  </div>
)
export const Column = ({
  content,
  moreContent,
  evenMoreContent,
  padded,
  gap,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      padding: padded ? '10px' : 0,
      gap: gap ? '10px' : 0,
      width: '100%',
    }}
  >
    {content}
    {moreContent}
    {evenMoreContent}
  </div>
)

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
  content,
  moreContent,
  evenMoreContent,
  padded,
  gap,
}) => (
  <div
    style={{
      padding: padded ? '20px' : 0,
      minHeight: 400,
      width: '100%',
    }}
  >
    {content}
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
