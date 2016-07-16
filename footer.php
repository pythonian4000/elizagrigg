<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Snowglass
 */

?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'snowglass' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'snowglass' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'snowglass' ), 'snowglass', '<a href="https://jackgrigg.com/" rel="designer">Jack Grigg</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->

	</div><!-- #content -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
