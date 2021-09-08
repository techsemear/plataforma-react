
export default function Button({icon = false, dark = false, children}) {
  return (
    <div className={dark ? 'hero-btn-l6' : 'l1-create-acc-btn'}>
      <a href="#" className="btn btn-style-02">
        {children}

        {icon && <i className="fas fa-angle-right" />}
      </a>
    </div>
  )
}
