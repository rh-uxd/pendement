import { useState } from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsItem,
  PageHeaderToolsGroup,
  PageSidebar,
  Nav,
  NavList
} from '@patternfly/react-core';
import { HomePage, Page1, Page2, LoginPage } from './pages';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <li className="pf-c-nav__item">
    <Link className="pf-c-nav__link" to={to}>
      {children}
    </Link>
  </li>
);

export const App = () => {
  const [username, setUsername] = useState(sessionStorage.getItem('username'));
  const [userId, setUserId] = useState('');
  const isLoggedIn = Boolean(username);
  const logoProps = {
    to: isLoggedIn ? '/' : '/login',
  };
  const HeaderTools = isLoggedIn && (
    <PageHeaderTools>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem>
          <div style={{ marginRight: '16px' }}>
            {username} ({userId})
          </div>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
          <Link
            to="/login"
            onClick={() => {
              sessionStorage.removeItem('username');
              setUsername('');
            }}
          >
            Log out
          </Link>
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
    </PageHeaderTools>
  );
  const Header = (
    <PageHeader
      logo="Logo"
      logoComponent={Link}
      logoProps={logoProps}
      headerTools={HeaderTools}
    />
  );
  const MyNav = (
    <Nav>
      <NavList>
        <NavItem to="/page1">
          Link 1
        </NavItem>
        <NavItem to="/page2">
          Link 2
        </NavItem>
      </NavList>
    </Nav>
  );
  const Sidebar = <PageSidebar nav={MyNav} />;

  console.log('render app');
  return (
    <Switch>
      <Route path="/login">
        <Page header={Header}>
          <LoginPage onLogin={(name, id) => {
            setUsername(name);
            setUserId(id);
          }} />
        </Page>
      </Route>
      {isLoggedIn
        ? <Route path="/">
            <Page header={Header} sidebar={Sidebar}>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/page1">
                  <Page1 />
                </Route>
                <Route path="/page2">
                  <Page2 />
                </Route>
              </Switch>
            </Page>
          </Route>
        : <Redirect to="/login" />
      }
    </Switch>
  );
}
