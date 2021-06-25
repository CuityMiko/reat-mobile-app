import { TabBar } from 'antd-mobile';
import React from 'react';

const PageTabBar = ({ history, location, meta }) => {
  const tabbarItemClick = (path) => {
    history.push(`/propaganda/${path}`);
  };
  if (meta.isShowTabbar) {
    return (
      <div className='layout-tabbar'>
        <div className='layout-fixed layout-fixed-bottom tabbar-content'>
          <TabBar
            unselectedTintColor='#949494'
            tintColor='#FEDA04'
            barTintColor='white'
          >
            <TabBar.Item
              icon={<span className='iconfont yangtabbarhome' />}
              selectedIcon={<span className='iconfont yangtabbarhomeselect' />}
              selected={location.pathname === '/propaganda/home'}
              onPress={() => tabbarItemClick('home')}
              title='首页'
            />
            <TabBar.Item
              icon={<span className='iconfont yangicontabbarmyup' />}
              selectedIcon={<span className='iconfont yangTABbar-fill' />}
              selected={location.pathname === '/propaganda/user'}
              onPress={() => tabbarItemClick('user')}
              title='我的'
            />
          </TabBar>
        </div>
      </div>
    );
  }
  return (<></>);
};

export default PageTabBar;
