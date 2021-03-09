import logo200Image from "assets/img/logo/jinx_logo.svg";
import sidebarBgImage from "assets/img/sidebar/sidebar.jpg";
import SourceLink from "components/SourceLink";
import React from "react";
import {
  MdAccountCircle,
  MdDashboard,
  MdInsertChart,
  MdViewCarousel,
  MdWeb,
  MdStore,
  MdContacts,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from "reactstrap";
import bn from "utils/bemnames";

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const pageContents = [
  { to: "/login", name: "login / signup", exact: false, Icon: MdAccountCircle },
  {
    to: "/login-modal",
    name: "login modal",
    exact: false,
    Icon: MdViewCarousel,
  },
  {
    to: "/companies-modal",
    name: "Companies Modal",
    exact: false,
    Icon: MdViewCarousel,
  },
];

const navItems = [
  { to: "/", name: "dashboard", exact: true, Icon: MdDashboard },
  { to: "/applications", name: "applications", exact: false, Icon: MdStore },
  { to: "/feed", name: "feed", exact: false, Icon: MdWeb },
  { to: "/explore", name: "explore", exact: false, Icon: MdInsertChart },
  { to: "/contacts", name: "contacts", exact: false, Icon: MdContacts },
];

const bem = bn.create("sidebar");

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = (name) => () => {
    this.setState((prevState) => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e("background")} style={sidebarBackground} />
        <div className={bem.e("content")}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img src={logo200Image} width="40" height="30" alt="" />
              <span className="text-white">Jinx</span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e("nav-item")}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e("nav-item-icon")} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
