var template = require('./template.marko');
//var api_request = require('./api_request.js');

module.exports = function(req,res){
	template.stream({
		ip_address:'127.0.0.1',
		device_type:'Desktop',
		locale:'en-IN',
		is_ip_blocked:'Internal',
	}).pipe(res);
}