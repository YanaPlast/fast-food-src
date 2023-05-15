
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/database';

import { NavBar } from './Components/NavBar/NavBar';
import {  Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders} from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';

import { Context } from "./Components/Fuctions/context";


const firebaseConfig = {
  apiKey: "AIzaSyA7KOyM9JdXvttZOFNzAtnPUpFdlgH0-W8",
  authDomain: "fastfood-9fec5.firebaseapp.com",
  databaseURL: "https://fastfood-9fec5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fastfood-9fec5",
  storageBucket: "fastfood-9fec5.appspot.com",
  messagingSenderId: "599641302264",
  appId: "1:599641302264:web:0dc0b791d614e43ddd070d"
};


firebase.initializeApp(firebaseConfig);
////var auth = firebase.auth();

//var provider = new firebase.auth.GoogleAuthProvider();
//console.log("auth is",auth);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  // setOpenItem - хук, который обновляет стейт и дает команду перерндерить компонент
  // setOpenItem необходимо запускать когда мы кликаем на каком-то товаре

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/> 
      <Menu/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>} 
      {orderConfirm.openOrderConfirm && 
      <OrderConfirm {...orders} {...auth} {...orderConfirm} firebaseDatabase={firebase.database}/>}
    </Context.Provider>
  );
}

export default App;
