import React from 'react';
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';
import { StatefulPopover } from 'baseui/popover';
import ActiveLink from '../../../UiElements/NavLink/NavLink';
import MenuWrapper, { MenuItem } from './AvatarMenu.styled';

const Menu = () => {

  const handleSignOut = () => {
    document.cookie = 'sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }

  return (
    <MenuWrapper>
      <li>
        <ActiveLink activeClassName="active" href='/login?type=workshop'>
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </ActiveLink>
      </li>
    </MenuWrapper>
  );
};

const AvatarMenu = ({ name, src, placement, showOnlyMenu, onClick }) => {
  return (
    <>
      {showOnlyMenu ? (
        <Menu onClick={onClick} />
      ) : (
        <StatefulPopover
          content={<Menu onClick={onClick} />}
          placement={placement ? placement : 'bottomRight'}
          overrides={{
            Inner: {
              style: ({ $theme }) => {
                return {
                  backgroundColor: $theme.colors.primaryB,
                };
              },
            },
          }}
          showArrow
        >
          <Block overrides={{ Block: { style: { cursor: 'pointer' } } }}>
            <Avatar src={src} name={name ? name : 'Jon Doe'} size="scale1000" />
          </Block>
        </StatefulPopover>
      )}
    </>
  );
};

export default AvatarMenu;
