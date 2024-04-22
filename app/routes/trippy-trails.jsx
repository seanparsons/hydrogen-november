import {
  Column,
  HalfAndHalf,
  Section,
  Spacer,
  TrippyButton,
} from '~/components/Components'

export default function LandingPage() {
  return (
    <Column>
      <div
        style={{
          opacity: 0.5,
          position: 'absolute',
          zIndex: -1,
          top: 0,
          width: 1440,
          height: 9599,
          backgroundImage:
            'url(https://cdn.discordapp.com/attachments/703248722334842910/1231926200054583316/trippytrails.jpg?ex=6638bbae&is=662646ae&hm=0e5a7fd4ed51a811416af3dd6a93f8d0baf5b3956a3023bb4714579c81d597c0&)',
        }}
      ></div>
      <Spacer height={'4em'} />
      <Section padded>
        <HalfAndHalf
          left={
            <Column gap={'1em'}>
              <h1>
                We produce high quality bags for lifestyle
              </h1>
              <TrippyButton price={59}>
                Add to Cart
              </TrippyButton>
              <Spacer />
              <WomanSeeking />
            </Column>
          }
          right={<div>Placeholder</div>}
        />
      </Section>
      <Section padded>
        <Spacer height={200} />
      </Section>
      <Section padded>
        <Column centered>
          <h3>And in comfort binds them</h3>
        </Column>
      </Section>
    </Column>
  )
}

export const WomanSeeking = () => (
  <div style={{ contain: 'layout' }}>
    <div
      style={{
        position: 'absolute',
        zIndex: -1,
        width: 260,
        height: 260,
        bottom: 4,
        backgroundColor: 'var(--orange)',
        borderRadius: '10px 10px 0px 0px',
      }}
    />
    <img
      alt='woman seeking'
      srcSet='illustration/seeking@2x.png 2x'
    />
  </div>
)
