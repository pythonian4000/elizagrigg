<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package ElizaGrigg
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">
		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div>

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<h1 class="menu-toggle"><?php _e( 'Menu', 'elizagrigg' ); ?></h1>
			<div class="screen-reader-text skip-link"><a href="#content"><?php _e( 'Skip to content', 'elizagrigg' ); ?></a></div>

			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="scroller">
		<div id="header-image">Loading images...</div>
		<div class="header-image_caption"></div>
		<style type="text/css">
			#header-image {
				float: left;
				margin: 1em auto;
				border: 1px solid #000000;
				width: 400px;
				height: 200px;
			}
			div.header-image_caption {
				position: absolute;
				margin-top: 175px;
				margin-left: -75px;
				width: 150px;
				text-align: center;
				left: 50%;
				padding: 5px 10px;
				background: black;
				color: white;
				font-family: sans-serif;
				border-radius: 10px;
				display: none;
				z-index: 2;
			}
		</style>
		<noscript>
			<div id="header-image_nojs">
				<img id="cimy_img_id" src="" alt="" />
			</div>
		</noscript>
	</div>

	<div id="content" class="site-content">
