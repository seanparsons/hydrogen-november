import {
  Column,
  HalfAndHalf,
  Section,
  Spacer,
  TrippyButton,
  SpecialRow,
  TwoFeatureCallout,
  QuoteWithRating,
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
        <Spacer height={220} />
      </Section>
      <Section padded>
        <Column centered>
          <h3>And in comfort binds them</h3>
          <h2>one bag to fit them all</h2>
        </Column>
      </Section>
      <Section style={{ padding: '3em 9em' }}>
        <Column>
          <SpecialRow
            style={{
              background: 'var(--purple',
              color: 'white',
            }}
            left={
              <div>
                <QuoteWithRating
                  quote={
                    'My 3 y/o loves it carrying daily to the school! ❤️'
                  }
                  rating={5}
                  backgroundColor={'var(--dark-blue)'}
                />
              </div>
            }
            right={
              <Column style={{ padding: '2em 0em' }}>
                <h2
                  style={{
                    color: 'var(--color-light)',
                    fontSize: 40,
                    paddingTop: '1em',
                    lineHeight: '1.2em',
                  }}
                >
                  Amazing Pal for the Little Ones
                </h2>
                {/* TODO replace with remix link */}
                <a
                  style={{
                    marginTop: '1em',
                    color: 'white',
                  }}
                  href='/'
                >
                  View Child Collection
                </a>
                <TwoFeatureCallout
                  style={{
                    marginTop: '1.4em',
                  }}
                  left={
                    <Column padded>
                      <img
                        srcSet='illustration/feature-image-purple-02@2x.png 2x'
                        alt='purple 1'
                        width={55}
                        height={55}
                      />
                      <h4>No Shoulder Ache</h4>
                      <p>
                        Lorem ipsum dolor sit amet,
                        consectetur
                      </p>
                    </Column>
                  }
                  right={
                    <Column padded>
                      <img
                        srcSet='illustration/feature-image-purple-01@2x.png 2x'
                        width={55}
                        height={55}
                        alt='purple  1'
                      />
                      <h4>Stationery Pockets</h4>
                      <p>
                        Lorem ipsum dolor sit amet,
                        consectetur
                      </p>
                    </Column>
                  }
                ></TwoFeatureCallout>
              </Column>
            }
          />
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
