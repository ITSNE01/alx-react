import $ from 'jquery';
import './header.css';

console.log('Init header');

$(document).ready(function() {
    $('#header').append('<div id="logo"></div>');
    $('#header').append('<h1>ALX Dashboard</h1>');
});
