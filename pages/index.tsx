import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <nav>
        <Link href="/other-page">
          <a>Other page</a>
        </Link>
      </nav>
    </div>
  )
}

export default Home
