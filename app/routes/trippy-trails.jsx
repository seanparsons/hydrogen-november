import { Link } from '@remix-run/react'
import { BlogComponent } from '../components/Layout'

export default function Blog() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: 1440,
          height: 9599,
          backgroundImage:
            'url(https://cdn.discordapp.com/attachments/703248722334842910/1231926200054583316/trippytrails.jpg?ex=6638bbae&is=662646ae&hm=0e5a7fd4ed51a811416af3dd6a93f8d0baf5b3956a3023bb4714579c81d597c0&)',
        }}
      ></div>
      <BlogComponent title={<h1>Hello!</h1>}>
        hi!
      </BlogComponent>
    </>
  )
}
