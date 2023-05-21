import React, { useContext, useEffect, useState} from "react";

//INTERNAL IMPORT

import {
    Table,
    Form,
    Services,
    Profile,
    CompleteShipment,
    GetShipment,
    StartShipment,
} from "../Components/index";


import { TrackingContext } from "../Context/TrackingContext";

const index = () => {
    const {
        currentUser,
        createShipment,
        getAllShipment,
        getShipment,
        startShipment,
        getShipmentsCount,
        
    } = useContext(TrackingContext);


    //State variable
    const [createShipmentModel, setCreateShipmentModel] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [startModal, setStartModal] = useState(false);
    const [completeModal, setCompleteModal] = useState(false);
    const [getModel, setGetModel] = useState(false);

    //data state
    const [allShipmentsdata, setallShipmentsdata] = useState();

    useEffect(() => {
        const getCampaignsData = getAllShipment();

        return async () => {
            const allData = await getCampaignsData;
            setallShipmentsdata(allData);
        };
    },[]);

    return (
        <>
            <Services
                setOpenProfile = { setOpenProfile }
                setCompleteModal = { setCompleteModal }
                setGetModel = {setGetModel}
                setStartModal = {setStartModal}
            />
            <Table 
                setCreateShipmentModel = {setCreateShipmentModel}
                allShipmentsdata = {allShipmentsdata}
            />
            <Form
                createShipmentModel = {createShipmentModel}
                createShipment = {createShipment}
                setCreateShipmentModel = {setCreateShipmentModel}
            />   
            <Profile
                openProfile = {openProfile}
                setOpenProfile = {setOpenProfile}
                currentUser = {currentUser}
                getShipmentsCount = {getShipmentsCount}
            />
            <CompleteShipment   
                completeModal = {completeModal}
                setCompleteModal = {setCompleteModal}
                CompleteShipment = {CompleteShipment}
            />
            <GetShipment    
                getModel = {getModel}
                setGetModel= {setGetModel}
                getShipment = {getShipment}
            />
            <StartShipment 
                startModal = {startModal}
                setStartModal = {setStartModal}
                startShipment = {startShipment}
            />
    </>
    );
};


export default index;