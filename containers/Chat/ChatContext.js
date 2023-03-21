import React from 'react';

export const ChatContext = React.createContext({});

const ChatProvider = (props) => {
  const [user, setUser] = React.useState({
    id: '1',
    name: 'Brian Smith',
    image: 'https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    message: 'Nice to meet you!',
    isActive: true,
  });

  const handleSelectedUser = (data) => {
    setUser(data);
  };

  return (
    <ChatContext.Provider value={{ user, handleSelectedUser }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
