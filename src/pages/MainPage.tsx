import React from 'react';
import Header from "../elements/Header";
import Banner from "../components/main/Banner";
import Modal from "../elements/Modal";
import {useAppSelector} from "../redux/store";

const MainPage = () => {
    const isModalOpen = useAppSelector(state => state.modalSlice.modalState)
    const {year, month, date, day} = useAppSelector(state => state.modalSlice.dateState)

    return (
        <div>
            {
                isModalOpen &&
                <Modal year={year} month={month} date={date} day={day}/>
            }
            <Header isMyPage={false}/>
            <Banner/>
        </div>
    );
};

export default MainPage;