const router = require("express").Router();
const {
	addTrade,
	modifyTrade,
	removeTrade,
	fetchTrades,
	fetchPortfolio,
	fetchCumulativeReturns,
} = require("../controllers/trade.controller");
const errorHandler = require("../middlewares/errorHandler");

// @route   POST /api/trades
// @desc    Add a new trade
router.post("/trades", addTrade);

// @route   PUT /api/trades/:tradeId
// @desc    Update a trade
router.put("/trades/:tradeId", modifyTrade);

// @route   DELETE /api/trades/:tradeId
// @desc    Delete a trade
router.delete("/trades/:tradeId", removeTrade);

// @route   GET /api/trades
// @desc    Fetch all trades grouped by security ticker
router.get("/trades", fetchTrades);

// @route   GET /api/portfolio
// @desc    Fetch portfolio
router.get("/portfolio", fetchPortfolio);

// @route   GET /api/cumulative-returns
// @desc    Fetch cumulative returns
router.get("/cumulative-returns", fetchCumulativeReturns);

//error handling for all routes
router.use(errorHandler);

module.exports = router;
