import Link from 'next/link'

export default function Route() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/onboarding">
          <a>Onboarding</a>
        </Link>
      </li>
    </ul>
  )
}
