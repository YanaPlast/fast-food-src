
import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import {  Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders} from './Components/Hooks/useOrders';


function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  // setOpenItem - хук, который обновляет стейт и дает команду перерндерить компонент
  // setOpenItem необходимо запускать когда мы кликаем на каком-то товаре

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>} 
    </>
  );
}

export default App;
