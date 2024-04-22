import {
  Column,
  HalfAndHalf,
  Section,
  TrippyButton,
} from '~/components/Components'

export default function Blog() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          width: 1440,
          height: 9599,
          backgroundImage:
            'url(https://cdn.discordapp.com/attachments/703248722334842910/1231926200054583316/trippytrails.jpg?ex=6638bbae&is=662646ae&hm=0e5a7fd4ed51a811416af3dd6a93f8d0baf5b3956a3023bb4714579c81d597c0&)',
        }}
      ></div>
      <Section padded>
        <HalfAndHalf
          left={
            <Column>
              <h1>
                We produce high quality bags for lifestyle
              </h1>
              <TrippyButton price={59}>
                Add to Cart
              </TrippyButton>
            </Column>
          }
          right={<div>Placeholder</div>}
        />
      </Section>
    </>
  )
}
