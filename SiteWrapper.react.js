// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Site, Nav, Grid, List, Button, RouterContextProvider, } from "tabler-react";
import type { NotificationProps } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type State = {|
  notificationsObjects: Array<NotificationProps>,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

const navBarItems: Array<navItem> = [
  {
    value: "Events",
    to: "/events",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Customers",
    to: "/customers",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Users",
    to: "/users",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Account Management",
    to: "/accmanagement",
    LinkComponent: withRouter(NavLink),
  },
];

const accountDropdownProps = {
  avatarURL: "https://image.flaticon.com/icons/png/512/55/55089.png",
  name: "Username Here",
  description: "User Role Here",
  options: [
    { isDivider: true },
    { icon: "log-out", value: "Sign out", to: "/", LinkComponent: withRouter(NavLink) },
  ],
};

class SiteWrapper extends React.Component<Props, State> {
  render(): React.Node {
    return (
		<Site.Wrapper
			headerProps={{ href: "/", alt: "Eagles Event Planning Service", accountDropdown: accountDropdownProps, }}
			navProps={{ itemsObjects: navBarItems }}
			routerContextComponentType={withRouter(RouterContextProvider)}
			footerProps={{ nav: ( <React.Fragment> This is a footer. </React.Fragment> ), }}
		>
			{this.props.children}
		</Site.Wrapper>
    );
  }
}

export default SiteWrapper;
