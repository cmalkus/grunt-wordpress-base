module.exports = function(grunt) {

// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['wp-content/themes/<%= pkg.themeFolder %>/js/lib/*.js', 'wp-content/themes/<%= pkg.themeFolder %>/js/mian.js'],
				dest: 'wp-content/themes/<%= pkg.themeFolder %>/js/mian.min.js'
			}
		},
		
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'wp-content/themes/<%= pkg.themeFolder %>/style.css': 'wp-content/themes/<%= pkg.themeFolder %>/style.scss'
				}
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'wp-content/themes/<%= pkg.themeFolder %>/',
					src: ['wp-content/themes/<%= pkg.themeFolder %>/*.{png,jpg,gif}'],
					dest: 'wp-content/themes/<%= pkg.themeFolder %>/images/build/'
		    	}]
			}
		},
		
		watch:{
			css: {
				files: 'wp-content/themes/<%= pkg.themeFolder %>/*.scss',
				tasks: 'sass'
			},
			
			scripts:{
				files: 'wp-content/themes/<%= pkg.themeFolder %>/js/*.js',
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