module.exports = {
	apps : [{
		name: 'paint',
		script: "./server.js",
		args: "start",
		watch: true,
		ignore_watch : ["node_modules"],
		env: {
			"PORT": 3002,
			"NODE_ENV": "development"
		},
		env_production: {
			"PORT": 3002,
			"NODE_ENV": "production",
		}
	}]
}
