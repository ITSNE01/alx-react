import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function() {
  // Add logo element
  $('body').append('<div id="logo"></div>');
  
  // Add other elements
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count">0 clicks on the button</p>');
  $('body').append('<p>Copyright - ALX</p>');

  // Counter functionality
  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind debounced function to button click
  $('button').on('click', _.debounce(updateCounter, 300));
});
