import { Icon, NavBar } from 'antd-mobile';
import React from 'react';

const title = process.env.REACT_APP_PROJECT_NAME;

const NavBarHeader = ({ meta, history }) => {
  const onLeftClick = () => {
    history.goBack();
  };
  if (meta.isShowNavbar !== false) {
    return (
      <div className='layout-navbar'>
        <div className='layout-fixed layout-fixed-top navbar-content'>
          <NavBar
            mode='light'
            icon={meta.isBack !== false ? <Icon type='left' /> : ''}
            onLeftClick={onLeftClick}
          >
            { meta.title || title }
          </NavBar>
        </div>
      </div>
    );
  }
  return (<></>);
};

export default NavBarHeader;
