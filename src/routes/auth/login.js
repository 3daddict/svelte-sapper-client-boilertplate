import * as api from 'api.js';

export function post(req, res) {
	const user = req.body;

	api.post('auth/login', user ).then(response => {
		//Send the user and token object to the server for persistant data storage.
		//if (response.user) req.session.user = response.user; req.session.token = response.token;
		if (response.user) {
			req.session.user = response.user;
			req.session.token = response.token;
		}
		res.end(JSON.stringify(response));
	});
}
