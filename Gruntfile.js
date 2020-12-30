module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					"assets/css/main.css": "assets/sass/main.scss",
				},
			},
		},
		cssmin: {
			sitecss: {
				options: {
					banner: "",
				},
				files: {
					"assets/css/main.min.css": ["assets/css/main.css"],
				},
			},
		},
		concat: {
			js: {
				src: [
					"assets/js/modal.js",
					"assets/js/carousel.js",
					"assets/js/quantity.js",
					"assets/js/strongPass.js",
					"assets/js/search.js",
					"assets/js/order.js",
					"assets/js/flags.js",
				],
				dest: "assets/js/concatScript.js",
			},
		},
		uglify: {
			options: {
				compress: true,
			},
			build: {
				files: {
					"assets/js/all.min.js": ["assets/js/concatScript.js"],
				},
			},
		},
		watch: {
			stylesheets: {
				files: ["assets/**/*.css", "assets/**/*.scss"],
				tasks: ["sass", "cssmin"],
			},
			scripts: {
				files: "assets/js/*.js",
				tasks: ["concat", "uglify"],
			},
		},
		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"assets/css/*.css",
						"*.html",
						"assets/sass/*.scss",
						"assets/js/*.js",
					],
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./",
					},
				},
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");

	// Default task(s).
	grunt.registerTask("default", ["browserSync", "watch"]);
};
