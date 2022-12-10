import React from 'react';
import styled from "styled-components";
import Header from "../elements/Header";
import Banner from "../components/main/Banner";
import Modal from "../elements/Modal";
import {useAppSelector} from "../redux/store";

const MainPage = () => {
    const isModalOpen = useAppSelector(state => state.modalSlice.modalState);

    return (
        <div>
            <Header isMyPage={false}/>
            <Banner/>
            {
                isModalOpen && <><Shadow/><Modal/></>
            }
        </div>
    );
};

export default MainPage;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
`