import * as api from 'api.js';

export function post(req, res) {
	const user = req.body;

	api.post('auth/login', user ).then(response => {
		if (response.user) req.session.user = response.user; req.session.token = response.token;
		res.end(JSON.stringify(response));
	});
}

