import Link from 'next/link'

export default function LoginButton() {
  return (
    <div className="btn-login">
      <Link href="/login">
        <button className="btn-login">
          Login
        </button>
      </Link>
    </div>
  )
}
