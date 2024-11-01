=== Simple Text Ads ===
Contributors: exportsmedia
Donate link: https://exportsmedia.com/buy-me-a-chocolate-milk/
Tags: ad, advertising, marketing, cta, shortcode
Requires at least: 4.6
Tested up to: 4.7
Stable tag: trunk
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Add a simple text ad to your content.

== Description ==

Simple Text Ads is an easy to use shortcode for adding simple text based advertisements with a call to action button in posts or pages.


= Features =

* Adds one shortcode for adding text ads to your site
* Supports multiple ads with individual settings on a single page
* A button in the TinyMCE editor makes it easy to add and configure the ad shortcode
* Responsive


= The Shortcode =

The shortcode that is added is:

`[simple_text_ad]`

= Basic Usage Example =

	[simple_text_ad headline="Learn How to Leverage Email Marketing" message="Our ebook offers 47 pages of the best techniques to leverage email marketing." button_text="Download our FREE ebook" button_url="#" button_color="#FC5E18" new_tab="false"]

This will output the following HTML:

	<aside class="sta-ad sta-ad-1">
		<header>
			<h1>Learn How to Leverage Email Marketing</h1>
		</header>
		<article>
			<p>Our ebook offers 47 pages of the best techniques to leverage email marketing.</p>
		</article>
		<footer>
			<a href="#">Download our FREE ebook</a>
		</footer>
	</aside>


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Use the TinyMCE button in the Visual Editor to create the shortcode, or paste the shortcode in your Post/Page content.


== Frequently Asked Questions ==

Simple Text Ads is an easy to use shortcode for adding simple text based advertisements with a call to action button in posts or pages.


== Screenshots ==

1. How the Simple Text Ad looks on the front end.
2. An example of the shortcode filled out and pasted within the content area.
3. The plugin adds a TinyMCE button that says `AD`. Clicking this will bring up a modal to help easily fill out the settings.
4. The modal contains all the settings the shortcode offers. Upon clicking OK the shortcode will be inserted into your content at your cursor position.

== Other Notes ==

= Full Simple Text Ad Settings =

The full shortcode, with all the default settings looks like this:

    [simple_text_ad headline="Example Headline" message="Example message." button_text="Example button text" button_url="#" button_color="#FC5E18" new_tab="false"]

**headline**: The headline for the ad.

**message**: The message for the ad.

**button_text**: The text for the button.

**button_url**: The URL for the button to open.

**button_color**: Set the color of the button. Accepts a HEX color code. Default is `#FC5E18`.

**new_tab**: Whether to open the button link ina new tab. Default is `true`.


== Changelog ==

= 1.0 =
* Initial Release

