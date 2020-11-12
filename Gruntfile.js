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
		// cssmin: {
		//     target: {
		//         src: ["assets/css/main.css"],
		//         dest: "assets/css/main.min.css",
		//     },
		// },
		watch: {
			css: {
				files: "assets/**/*.scss",
				tasks: ["sass"], //, "cssmin"
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

	// Default task(s).
	grunt.registerTask("default", ["browserSync", "watch"]);
};
