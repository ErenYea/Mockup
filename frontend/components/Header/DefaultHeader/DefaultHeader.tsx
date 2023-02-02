import React from 'react';
import Sticky from 'react-stickynode';
import Badge from '../../UiElements/Badge/Badge';
import Logo from '../../UiElements/Logo/Logo';
import SvgIcon from '../../UiElements/SvgIcon/SvgIcon';
import Container from '../../UiElements/Container/Container';
// import TopMenu from '../HeaderMenu/TopMenu/TopMenu';
import MainMenu from '../HeaderMenu/MainMenu/MainMenu';
import AvatarMenu from '../HeaderMenu/AvatarMenu/AvatarMenu';
import { useCartState } from '../../../contexts/cart/cart.provider';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import HeaderWrapper, {
  TopBar,
  MenuRight,
  Navbar,
  StickyNav,
  NavLeft,
  NavRight,
} from './DefaultHeader.styled';
import {
  useThemeSwitcherCtx,
  THEME,
} from '../../../contexts/theme/theme.provider';
import avatar from '../../../assets/images/avatar.jpg';

const DefaultHeader: React.FC<{}> = () => {
  const cartItems = useCartState('cartItems');
  const { theme, setTheme } = useThemeSwitcherCtx();
  return (
    <HeaderWrapper className="default">
      <Container>
        <TopBar className="top-bar flex justify-end">
          {/* <Logo
            path="/"
            src={
              <SvgIcon
                src={require('../../../assets/images/logo.svg?include')}
              />
            }
          /> */}
          <MenuRight >
            {/* <TopMenu /> */}

            {/* <Badge
              path="/shop/checkout"
              icon={
                <SvgIcon
                  src={require('../../../assets/images/cart-bag.svg?include')}
                />
              }
              count={cartItems.length}
            /> */}
            <div className=' w-10 h-10 cursor-pointer'>
{/* 
              {theme === THEME.light ? <SunIcon onClick={() => {
              let getTheme = theme === THEME.light ? THEME.dark : THEME.light;
              setTheme(getTheme);
              localStorage.setItem('theme', getTheme);
              }}
          />: <MoonIcon className='text-white' onClick={() => {
            let getTheme = theme === THEME.dark ? THEME.light : THEME.dark;
            setTheme(getTheme);
            localStorage.setItem('theme', getTheme);
            }}
        />} */}
            </div>
            <AvatarMenu
              name="Team Wings"
              src={require('../../../assets/images/pic.jpg')}
            />
           
          </MenuRight>
        </TopBar>
      </Container>

      <Sticky>
        <Navbar className="navbar">
          <Container>
            <StickyNav>
              <NavLeft>
                {/* <Logo
                  path="/"
                  src={
                    <SvgIcon
                      src={require('../../../assets/images/logo.svg?include')}
                    />
                  }
                /> */}
                <MainMenu className="main-nav" />
              </NavLeft>
              <NavRight className="cart-and-avatar">
                {/* <Badge
                  path="/shop/checkout"
                  icon={
                    <SvgIcon
                      src={require('../../../assets/images/cart-bag.svg?include')}
                    />
                  }
                  count={cartItems.length}
                /> */}
                <div className=' w-10 h-10 cursor-pointer'>
                  {/* {theme === THEME.light ? <SunIcon onClick={() => {
                  let getTheme = theme === THEME.light ? THEME.dark : THEME.light;
                  setTheme(getTheme);
                  localStorage.setItem('theme', getTheme);
                  }}
                  />: <MoonIcon className='text-white' onClick={() => {
                  let getTheme = theme === THEME.dark ? THEME.light : THEME.dark;
                  setTheme(getTheme);
                  localStorage.setItem('theme', getTheme);
                  }}
                  />} */}
                  </div>
                <AvatarMenu
                  name="Team Wings"
                  src={require('../../../assets/images/pic.jpg')}
                />
              </NavRight>
            </StickyNav>
          </Container>
        </Navbar>
      </Sticky>
    </HeaderWrapper>
  );
};

export default DefaultHeader;
