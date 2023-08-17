import React from 'react';
import Sticky from 'react-stickynode';
import Container from '../../UiElements/Container/Container';
import MainMenu from '../HeaderMenu/MainMenu/MainMenu';
import AvatarMenu from '../HeaderMenu/AvatarMenu/AvatarMenu';
import HeaderWrapper, {
  TopBar,
  MenuRight,
  Navbar,
  StickyNav,
  NavLeft,
  NavRight,
} from './DefaultHeader.styled';
import { useSession } from "next-auth/react"

const DefaultHeader = () => {
  const { data: session } = useSession()

  return (
    <HeaderWrapper className="default">
      <Container>
        <TopBar className="mx-[10px] w-full flex justify-end">
          <MenuRight className="top-bar flex justify-end ">
            <AvatarMenu
              name="Team Wings"
              src={session?.user?.image}
            />
          </MenuRight>
        </TopBar>
      </Container>

      <Sticky>
        <Navbar className="navbar">
          <Container>
            <StickyNav className="flex justify-center">
              <NavLeft>
                <MainMenu className="main-nav" />
              </NavLeft>
              <NavRight className="cart-and-avatar">
                <AvatarMenu
                  name="Team Wings"
                  src={session?.user?.image}
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
