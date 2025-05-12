import $ from 'jquery';
import _ from 'lodash';

// Add elements to the page
$(document).ready(function() {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
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
