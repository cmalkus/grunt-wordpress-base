module.exports = function(grunt) {

// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				cwd: 'wp-content/themes/<%= pkg.themeFolder %>/',
				src: ['js/lib/*.js', 'js/mian.js'],
				dest: 'js/mian.min.js'
			}
		},
		
		sass: {
			dist: {
				options: {
					style: 'copressed'
				},
				cwd: 'wp-content/themes/<%= pkg.themeFolder %>/'
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'wp-content/themes/<%= pkg.themeFolder %>/',
					src: ['*.{png,jpg,gif}'],
					dest: 'images/build/'
		    	}]
			}
		},
		
		watch:{
			css: {
				cwd: 'wp-content/themes/<%= pkg.themeFolder %>/',
				files: 'css/*.scss',
				tasks: 'sass'
			},
			
			scripts:{
				cwd: 'wp-content/themes/<%= pkg.themeFolder %>/',
				files: 'js/*.js',
				tasks: 'uglify'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['uglify', 'sass', 'imagemin']);

};