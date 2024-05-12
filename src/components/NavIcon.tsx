
interface NavLinkProps {
  href: string,
  fabClass: string
}
const NavIcon = ({href, fabClass}: NavLinkProps) => {
  return (
    <>
      <li>
        <a href={href} target="_blank" className="nav-icon"><i className={fabClass}></i></a>
      </li>
    </>
  )
}

export default NavIcon;