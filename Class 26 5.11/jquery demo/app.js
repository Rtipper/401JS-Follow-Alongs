'use strict';

// words, wordsInput, clicker

// application state
let wordsTyped = '';

$("#wordsInput").on('change', handleChangedInput);
$("#click").on('click', handleClcik);

function handleChangedInput() {
  wordsTyped = $(this).val();
}

$('#clicker').on('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  $('#words').text(wordsTyped);
}
