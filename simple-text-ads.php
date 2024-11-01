<?php
/**
 * Plugin Name: Simple Text Ads
 * Description: Description
 * Plugin URI: https://exportsmedia.com/simple-text-ads/
 * Author: Michael Markoski
 * Author URI: https://exportsmedia.com
 * Version: 1.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 *
 * Simple Text Ads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * Simple Text Ads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Simple Text Ads. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
 */

defined( 'ABSPATH' ) or exit;


class Simple_Text_Ads {

	/**
	 * Initialization function
	 */
	function __construct() {

		add_action( 'wp_enqueue_scripts', array( $this, 'sta_enqueue_scripts' ));

		add_action( 'admin_enqueue_scripts', array( $this, 'sta_admin_enqueue_scripts' ), 20);

		add_action('admin_init', array( $this, 'sta_mce_button' ));

		add_shortcode('simple_text_ad', array( $this, 'sta_shortcode' ));

	}

	/*
	 * Scripts to be enqueued into the front end of Wordpress.
	 */
	function sta_enqueue_scripts() {

		wp_register_style( 'sta-styles', plugins_url( '/styles.css', __FILE__ ) );

		wp_enqueue_style( 'sta-styles' );

	}

	/*
	 * Scripts to be enqueued into the backend of Wordpress.
	 */
	function sta_admin_enqueue_scripts() {

		wp_register_style( 'sta-admin-styles', plugins_url( '/admin.css', __FILE__ ) );

		wp_enqueue_style( 'sta-admin-styles' );

	}

	/*
	 * Filter Functions with Hooks
	 */
	function sta_mce_button() {

		// Check if the logged in WordPress User can edit Posts or Pages
		// If not, don't register our TinyMCE plugin
			
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {

			return;

		}

		// Check if the logged in WordPress User has the Visual Editor enabled
		// If not, don't register our TinyMCE plugin
		if ( get_user_option( 'rich_editing' ) !== 'true' ) {

			return;

		}

	    add_filter( 'mce_external_plugins', array( $this, 'sta_tinymce_plugin' ));

	    add_filter( 'mce_buttons', array( $this, 'register_mce_button' ));

	}

	/*
	 * Function for new button
	 */
	function sta_tinymce_plugin( $plugin_array ) {

	  $plugin_array['sta_mce_button'] = plugin_dir_url( __FILE__ ) . 'admin.js';

	  return $plugin_array;

	}

	/*
	 * Register new button in the editor
	 */
	function register_mce_button( $buttons ) {

	  array_push( $buttons, 'sta_mce_button' );

	  return $buttons;

	}

	/**
	 * Add the shortcode.
	 */
	function sta_shortcode($atts, $content) {

		static $i = 1;

	    $data = shortcode_atts( array(
			'headline' 		=> '',
			'message' 		=> '',
			'button_text' 	=> '',
			'button_url' 	=> '#',
			'button_color' 	=> '#FC5E18',
			'new_tab'		=> 'true'
	    ), $atts );

	    ob_start();

	    $new_tab = (esc_attr($data['new_tab']) === 'true') ? 'target="_blank"' : '';

		?>

		<style>

			aside.sta-ad-<?php echo $i; ?> a { background-color: <?php echo esc_attr($data['button_color']); ?>; }

		</style>

		<aside class="sta-ad sta-ad-<?php echo $i; ?>">

			<header>

				<h1><?php echo esc_attr($data['headline']); ?></h1>

			</header>

			<article>
				
				<p><?php echo esc_attr($data['message']); ?></p>

			</article>

			<footer>
				
				<a href="<?php echo esc_url($data['button_url']); ?>" <?php echo esc_attr($new_tab); ?>><?php echo esc_attr($data['button_text']); ?></a>

			</footer>

		</aside>

		<?php

		$output = ob_get_clean();

		$i++;

		return $output;

	}
	
}


$Simple_Text_Ads = new Simple_Text_Ads;