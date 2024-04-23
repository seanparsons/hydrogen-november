import {
  Column,
  Row,
  HalfAndHalf,
  Section,
  Spacer,
  TrippyButton,
  SpecialRow,
  TwoFeatureCallout,
  QuoteWithRating,
  DuplicatedImageWithBackground,
  SectionSubtitle,
  SectionTitle,
  Text,
  Stars,
} from '~/components/Components'

export const ReviewCard = ({
  children,
  style,
  rating,
  title,
  text,
  country,
  name,
}) => (
  <div
    style={{
      width: 372,
      height: 200,
      flexShrink: 0,
      borderRadius: 17,
      border: '1px solid #c5c5c5',
      overflow: 'hidden',
      padding: '27px 24px',
    }}
  >
    <Stars rating={rating} />
    <Text
      level='embiggened'
      style={{
        marginTop: 14,
        marginBottom: 8,
        fontWeight: 'bold',
      }}
    >
      {title}
    </Text>
    <Text level='smaller' deemphasized>
      {text}
    </Text>
    <Text level='smaller' style={{ marginTop: 8 }}>
      {country}&nbsp; {name}
    </Text>
  </div>
)

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
              background: 'var(--purple)',
              color: 'white',
            }}
            left={
              <div
                style={{
                  contain: 'layout',
                }}
              >
                <DuplicatedImageWithBackground
                  backgroundColor={'var(--lihgt-purple)'}
                  image={'merchandise/bag-black@2x.png'}
                />
                <QuoteWithRating
                  quote={
                    'My 3 y/o loves it carrying daily to the school! ❤️'
                  }
                  rating={5}
                  backgroundColor={'var(--dark-blue)'}
                  style={{
                    position: 'relative',
                    left: 100,
                  }}
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
      <Section
        style={{ background: 'white', paddingTop: 100 }}
      >
        <Column centered>
          <Column
            centered
            style={{
              paddingLeft: '21em',
              paddingRight: '21em',
              marginBottom: 50,
            }}
          >
            <SectionSubtitle>
              They love us ❤️
            </SectionSubtitle>
            <SectionTitle
              style={{ marginTop: 8, position: 'relative' }}
            >
              <img
                style={{
                  position: 'absolute',
                  top: -55,
                  left: -55,
                  transform: 'scale(.5)',
                }}
                src='/decorative/swirl_black_02@2x.png'
                alt='decorative swirl'
              />
              <img
                style={{
                  position: 'absolute',
                  top: 0,
                  right: -80,
                  transform: 'scale(.5)',
                }}
                src='/decorative/underline_01@2x.png'
                alt='decorative swirl'
              />
              <span
                style={{
                  position: 'relative',
                }}
              >
                some of our happy faces
              </span>
            </SectionTitle>
            <Text
              level='large'
              style={{
                marginTop: 16,
                marginBottom: 16,
                textAlign: 'center',
              }}
            >
              We offer some special services through which
              you can easily complete the marketing work on
              social media. Which helps increase your lead
              and sales.
            </Text>
          </Column>
          <Row gap={27} style={{ marginBottom: 36 }}>
            <ReviewCard
              rating={5}
              title='Very Noice'
              text='Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura'
              country='🇦🇺'
              name='D. Alighieri'
            />
            <ReviewCard
              rating={4}
              title='Now you listen to me'
              text='A friend should always underestimate your virtues and an enemy overestimate your faults'
              country='🇮🇹'
              name='Mario Puzo'
            />
            <ReviewCard
              rating={4}
              title='Something to know about backpacks'
              text='Wearing a backpack and a turtleneck is like a weak midget trying to bring you down'
              country='🇺🇸'
              name='Johnny Hands'
            />
          </Row>

          <Row
            style={{
              overflow: 'scroll',
              maxWidth: '100%',
              scrollSnapType: 'x proximity',
              scrollPadding: '20px',
              border: '1px solid red',
            }}
            gap={27}
          >
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
          </Row>
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
