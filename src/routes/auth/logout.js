import * as api from 'api.js'

export function post(req, res) {
  api.get('auth/logout').then(response => {
    if(response.success){
      delete req.session.user;
	    res.end(JSON.stringify({ ok: true }));
    }
  })
}
