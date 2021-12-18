const Trade = require("../models/trade.model");

//creates a new Trade object and saves it to the database
exports.createTrade = (trade) => {
	return new Promise((resolve, reject) => {
		Trade.create(trade)
			.then((trade) => {
				resolve(trade);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

//finds and updates a Trade object in the database
exports.updateTrade = (tradeId, update) => {
	return new Promise((resolve, reject) => {
		Trade.findByIdAndUpdate(tradeId, update, { new: true, runValidators: true })
			.then((trade) => {
				resolve(trade);
			})
			.catch((error) => {
				reject(error);
			});
	});
};