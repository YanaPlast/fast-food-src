
import React from 'react';
import { NavBar } from './Components/NavBar';
import {  Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/UseOpenItem';


function App() {

  const openItem = useOpenItem();

  // setOpenItem - хук, который обновляет стейт и дает команду перерндерить компонент
  // setOpenItem необходимо запускать когда мы кликаем на каком-то товаре

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu {...openItem} />
      <ModalItem {...openItem} />
    </>
  );
}

export default App;
