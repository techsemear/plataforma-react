import Image from 'next/image'

export function HeaderItems({items = []}) {
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
                  <a
                    href={menuItem.linkTo}
                    className="nav-link-item drop-trigger"
                  >
                    {menuItem.label}
                    {menuItem.image && (
                      <div className="iconNavItem">
                        <Image
                          src={menuItem.image}
                          className="mx-2"
                          alt="icon"
                          width={30}
                          height={30}
                        />
                      </div>
                    )}
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
                    {menuItem.image && (
                      <div className="iconNavItem">
                        <Image
                          src={menuItem.image}
                          alt="icon"
                          width={30}
                          height={30}
                        />
                      </div>
                    )}
                  </a>
                </li>
              ),
            )}
        </ul>
      </nav>
    </div>
  )
}
