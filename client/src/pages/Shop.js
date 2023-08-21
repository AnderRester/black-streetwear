import React, { useContext, useEffect } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchOneDevice, fetchTypes } from "../http/deviceAPI";
import ADVLine from "../components/ADVLine";

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
        fetchDevices(null, null).then((data) => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
        // fetchOneDevice(id).then(data => device.setBrands(data))
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id).then((data) => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, [device.page, device.selectedType, device.selectedBrand]);

    return (
        <div>
            <ADVLine />
            <div className={"d-flex flex-row mt-3 "}>
                <div>
                    <TypeBar />
                    <BrandBar />
                </div>
                <DeviceList />
            </div>
        </div>
    );
});

export default Shop;
