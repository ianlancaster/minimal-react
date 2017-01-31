<?php

// register custom post types for use with the wp REST API

function wpsd_add_test_args() {
    global $wp_post_types;

    $wp_post_types['test']->show_in_rest = true;
    $wp_post_types['test']->rest_base = 'test';
    $wp_post_types['test']->rest_controller_class = 'WP_REST_Posts_Controller';
}
add_action( 'init', 'wpsd_add_test_args', 30 );
