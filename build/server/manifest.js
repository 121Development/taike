const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CLno_oQp.js","app":"_app/immutable/entry/app.BLPRR24N.js","imports":["_app/immutable/entry/start.CLno_oQp.js","_app/immutable/chunks/DiEv6aAG.js","_app/immutable/chunks/CaFSpNbJ.js","_app/immutable/chunks/Dxo9tbix.js","_app/immutable/entry/app.BLPRR24N.js","_app/immutable/chunks/CaFSpNbJ.js","_app/immutable/chunks/Cch7DiX4.js","_app/immutable/chunks/DQMpbO-H.js","_app/immutable/chunks/Dxo9tbix.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-bf502e99.js')),
			__memo(() => import('./chunks/1-3ae19621.js')),
			__memo(() => import('./chunks/2-4f0a2cd5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
