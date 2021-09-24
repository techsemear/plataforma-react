import Link from 'next/link'

export default function LoginButton({children}) {
  return (
    <div className="btn-login">
      <Link href="/login">
        <button className="btn-login">{children}</button>
      </Link>
    </div>
  )
}
