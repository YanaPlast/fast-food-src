import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import { Context } from '../Fuctions/context';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = () => {

    const { openItem: { setOpenItem }} = useContext(Context)

    const res = useFetch();
    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner/>
            { res.response ? 
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem 
                            itemList={dbMenu.burger}
                            setOpenItem={setOpenItem}
                        />  
                    </SectionMenu>
                    <SectionMenu>
                        <h2>Закуски и напитки</h2>
                        <ListItem 
                            itemList={dbMenu.other}
                            setOpenItem={setOpenItem}
                        />
                    </SectionMenu>
                </>
                : res.error ?
                <div>Произошла ошибка, но мы скоро всё починим</div> :
                <div>Загрузка</div>
            }
        </MenuStyled>
    );

};