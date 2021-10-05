export function NavbarItems({items = []}) {
  return (
    <div className="menu-block-wrapper">
      <div className="menu-overlay" />

      <nav className="menu-block" id="append-menu-header">
        <div className="mobile-menu-head">
          <div className="go-back">
            <i className="fa fa-angle-left" />
          </div>

          <div className="current-menu-title" />
          <div className="mobile-menu-close">×</div>
        </div>
        <ul className="site-menu-main">
          {!!items.length &&
            items.map((menuItem, index) =>
              menuItem.children ? (
                <li
                  key={`nav-item-${index}`}
                  className="nav-item nav-item-has-children"
                >
                  <a href="#" className="nav-link-item drop-trigger">
                    {menuItem.label}
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="sub-menu" id="submenu-1">
                    {menuItem.children.map((itemChildren, indexChildren) => (
                      <li
                        key={`sub-menu-${indexChildren}`}
                        className="sub-menu--item"
                      >
                        <a href={itemChildren.linkTo}>{itemChildren.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={`nav-item-${index}`} className="nav-item">
                  <a href={menuItem.linkTo} className="nav-link-item">
                    {menuItem.label}
                  </a>
                </li>
              ),
            )}
        </ul>
      </nav>
    </div>
  )
}
