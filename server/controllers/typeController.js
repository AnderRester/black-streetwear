const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
    async create(req, res) {
        const { name } = req.body;
        const type = await Type.create({ name });
        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async updateOne(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const type = await Type.findOne({
            where: { id },
        });
        device.update({ name: name });
        return res.json(type);
    }

    async removeOne(req, res) {
        const { id } = req.params;
        const type = await Type.removeOne({
            where: { id },
        });
        return res.json(type);
    }
}

module.exports = new TypeController();
