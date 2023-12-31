import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post("api/type", type);
    return data;
};

export const fetchTypes = async () => {
    const { data } = await $host.get("api/type");
    return data;
};

export const createBrand = async (brand) => {
    const { data } = await $authHost.post("api/brand", brand);
    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get("api/brand");
    return data;
};

export const createDevice = async (device) => {
    const { data } = await $authHost.post("api/device", device);
    return data;
};

export const fetchDevices = async (typeId, brandId) => {
    const { data } = await $host.get("api/device", {
        params: {
            typeId,
            brandId,
        },
    });
    return data;
};

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get("api/device/" + id);
    return data;
};

export const addToBasket = async (userId, deviceId) => {
    const { response } = await $authHost.post("api/cart", userId, deviceId);
    return response;
};

export const getBasket = async (userId) => {
    const { data } = await $authHost.get("api/cart/" + userId);
    return data;
};
