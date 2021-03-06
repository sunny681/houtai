const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 创建文档的定义
const Goods = new Schema({
    goods_name  : String,
    huohao      : String,
    // detail      : String,
    market_price:String,
    goods_img	  : String,
    create_date : { type: Date, default: Date.now }
});

// 创建model对象，与数据库中的文档（表）映射
const GoodsModel = mongoose.model('goods', Goods);
// commonJS规范(暴露接口)
module.exports = GoodsModel;