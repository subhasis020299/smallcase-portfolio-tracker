const { GeneralError } = require("../utils/error");
const { ValidationError } = require("mongoose").Error;

module.exports = (err, req, res, next) => {
	if (err instanceof GeneralError) {
		const code = err.getCode();
		return res.status(code).json({ error: err.message });
	} else if (err instanceof ValidationError) {
		const { errors } = err;
		const errorKeys = Object.keys(errors);
		return res.status(400).json({
			error: errors[errorKeys[0]].properties.message,
		});
	} else {
		console.error(`Error in ${req.method} ${req.originalUrl}\n`, err);
		return res.status(500).json({ error: "Internal Server Error!" });
	}
};
