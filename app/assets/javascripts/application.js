// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require tether/dist/js/tether
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function pollDOM () {
  const el = document.getElementById('amount');

  if (el != null) {
    $('#amount').keyup(function(){
      $('#submit-btn').click()
   });
  } else {
    setTimeout(pollDOM, 300);
  }
}

pollDOM();

function pollDOM1 () {
  const el = document.getElementById('invert');

  if (el != null) {
    $('#invert').click(function(){
      let temp1 = document.getElementById('source_currency').selectedIndex
      let temp2 = document.getElementById('target_currency').selectedIndex
      document.getElementById('source_currency').selectedIndex = temp2
      document.getElementById('target_currency').selectedIndex = temp1
   });
  } else {
    setTimeout(pollDOM1, 300);
  }
}

pollDOM1();