$(document).ready(function() {

  $('.btn-form-email').click(function () {
	$('.text-input-email').val('');
	$('.text-input-email').removeClass('not-valid');
	$('.content-form-email').removeClass('bt-flabel__float');
	if ($('.btn-form-email').hasClass('text-color-not')) {
	  $('.btn-form-email').removeClass('text-color-not');
	  $('.text-input-email').removeClass('text-color-not');
	  $('.content-form-email label').removeClass('text-color-not');
	} else {
	  $('.btn-form-email').removeClass('text-color-is');
	  $('.text-input-email').removeClass('text-color-is');
	  $('.content-form-email label').removeClass('text-color-is');
	}
  });

  $('.btn-form-name').click(function () {
	$('.text-input-name').val('');
	$('.text-input-name').removeClass('not-valid');
	$('.content-form-name').removeClass('bt-flabel__float');
	if ($('.btn-form-name').hasClass('text-color-not')) {
	  $('.btn-form-name').removeClass('text-color-not');
	  $('.text-input-name').removeClass('text-color-not');
	  $('.content-form-name label').removeClass('text-color-not');
	} else {
	  $('.btn-form-name').removeClass('text-color-is');
	  $('.text-input-name').removeClass('text-color-is');
	  $('.content-form-name label').removeClass('text-color-is');
	}
  });

  var floatingLabel;

  floatingLabel = function(onload) {
	var $input;
	$input = $(this);
	if (onload) {
	  $.each($('.content-form input'), function(index, value) {
		var $current_input;
		$current_input = $(value);
		if ($current_input.val()) {
		  $current_input.closest('.content-form').addClass('bt-flabel__float');
		}
	  });
	}

	setTimeout((function() {
	  if ($input.val()) {
		$input.closest('.content-form').addClass('bt-flabel__float');
	  } else {
		$input.closest('.content-form').removeClass('bt-flabel__float');
	  }
	}), 1);
  };

  $('.content-form input').keydown(floatingLabel);
  $('.content-form input').change(floatingLabel);

  var myForm = $('form');
  var validate = {};
  var validateFields = myForm.find('.validate');
  var validatingLength = validateFields.length;
  var submitBtn = myForm.find('.submit');

  for(var i = 0; i < validatingLength; i++){
    validate['field' + $(validateFields[i]).attr('name')] = false;
  }

  $('.validate').blur(function(){
	var name =  $(this).attr('name');
	var validateThisVal = $(this).val();
	var validateThisType = $(this).attr('type');

	if(validateThisType === "email"){

	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  if(!validateThisVal.match(re)){
		$(this).addClass('not-valid');
		$(this).removeClass('is-valid');
		$(this).addClass('text-color-not');
		$('.btn-form-email').addClass('text-color-not');
		$('.content-form-email label').addClass('text-color-not');
		return validate['field' + name] = false;
	  } else{
		$(this).addClass('is-valid');
		$(this).removeClass('not-valid');
		$(this).addClass('text-color-is');
		$('.btn-form-email').addClass('text-color-is');
		$('.content-form-email label').addClass('text-color-is');
		return validate['field' + name] = true;
	  }
	} else{
	  if(validateThisVal == ""){
		$(this).addClass('not-valid');
		$(this).removeClass('is-valid');
		$(this).addClass('text-color-not');
		$('.btn-form-name').addClass('text-color-not');
		$('.content-form-name label').addClass('text-color-not');
		return validate['field' + name] = false;
	  } else{
		$(this).addClass('is-valid');
		$(this).removeClass('not-valid');
		$(this).addClass('text-color-is');
		$('.btn-form-name').addClass('text-color-is');
		$('.content-form-name label').addClass('text-color-is');
		return validate['field' + name] = true;
	  }
	}
  });

  submitBtn.click(function(event){
	event.preventDefault();
	var falseCtn = 0;
	for(var i = 0; i < validatingLength; i++){
	  if(validate['field' + $(validateFields[i]).attr('name')] == false){
		falseCtn++;
	  }
	}

	if(falseCtn === 0){
	  myForm.submit();
	}
  });

});