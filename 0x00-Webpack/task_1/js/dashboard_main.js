import $ from 'jquery';
import debounce from 'lodash/debounce';

$(function() {
  $('body')
    .append('<p>ALX Dashboard</p>')
    .append('<p>Dashboard data for the students</p>')
    .append("<button id='start-btn'>Click here to get started</button>")
    .append("<p id='count'></p>")
    .append('<p>\u00A9 Copyright - ALX</p>');

  let count = 0;
  const updateCounter = () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };

  $('#start-btn').on('click', debounce(updateCounter, 300));
});
