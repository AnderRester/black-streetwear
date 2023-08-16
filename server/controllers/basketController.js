const { where } = require("sequelize");
const { Device, BasketDevice, User } = require("../models/models");

class BasketController {
    async addToBasket(req, res, next) {
        const { deviceId, basketId } = req.body;
        const basket = await BasketDevice.create({ basketId: basketId, deviceId: deviceId });
        return res.json(basket);
    }

    async getBasketUser(req, res) {
        const { id } = req.params;
        const basket = await BasketDevice.findAll({
            where: { basketId: id },
            include: {
                model: Device,
            },
        });

        return res.json(basket);
    }
}

module.exports = new BasketController();
