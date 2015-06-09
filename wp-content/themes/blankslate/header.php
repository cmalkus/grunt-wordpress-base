<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<title><?php wp_title( ' | ', true, 'right' ); ?></title>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<meta name="description" content="Base setup for a Grunt project" />
		<meta name="author" content="[YOUR NAME]" />
		<meta name="google-site-verification" content="[VERIFICATION CODE]" />
		<!-- <meta name="robots" content="NOODP"> -->
		
		<!-- Schema.org markup (Google+) -->
		<meta itemprop="name" content="Grunt Base" />
		<meta itemprop="description" content="Base setup for a Grunt project" />
		<meta itemprop="image" content="http://[YOUR SITE]" />
		
		<!-- Open Graph data (Facebook) -->
		<meta property="og:title" content="Grunt Base" />
		<meta property="og:description" content="Base setup for a Grunt project" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://[YOUR SITE]/" />
		<meta property="og:image" content="images/[IMAGE]" />	
		
		<!-- Twitter Card data -->
		<meta name="twitter:title" content="Grunt Base" />
		<meta name="twitter:description" content="Base setup for a Grunt project" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="@[TWITTER HANDLE]" />
		<meta name="twitter:image" content="images/[IMAGE]" />

		<?php wp_head(); ?>
		
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
		<script type="text/javascript" src="js/main.min.js"></script>
	</head>
	
	<body <?php body_class(); ?>>
		<div id="wrapper" class="hfeed">
			<header id="header" role="banner">
				<section id="branding">
					<div id="site-title"><?php if ( ! is_singular() ) { echo '<h1>'; } ?><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php esc_attr_e( get_bloginfo( 'name' ), 'blankslate' ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a><?php if ( ! is_singular() ) { echo '</h1>'; } ?></div>
					<div id="site-description"><?php bloginfo( 'description' ); ?></div>
				</section>
				<nav id="menu" role="navigation">
					<div id="search">
						<?php get_search_form(); ?>
					</div>
					<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
				</nav>
			</header>
			<div id="container">