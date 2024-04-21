require("dotenv").config();

const ResponseCodes = require("../utils/response.code");

let response_code = new ResponseCodes();
let unauthorized_status = response_code.unauthorized().status;

const verifyUserToken=async ()=>{
	return async (req, res, next) => {
		try {
			if (req.headers.authorization == undefined) {
				return res.status(unauthorized_status).send(response_code.unauthorized());
			}

			res.locals.user = user;
			next();
		} catch (err) {
			return res.status(unauthorized_status).send(response_code.unauthorized());
		}
	};
};

export default verifyUserToken;