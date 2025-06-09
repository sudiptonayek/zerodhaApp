const { model } = require("mongoose");
    const { OrdersSchema } = require("../Schema/OrdersSchema");

    const OrdersModel = model("Orders", OrdersSchema);
    module.exports = {OrdersModel};
