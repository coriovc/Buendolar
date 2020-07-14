function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
$(document).ready(function() {
	
	$(".send").click(function () {
		//nombre
		if ( trim($("#nombre").val()) == '' )
		{
			$('.nombre').addClass('was-validated');
			$('.nombre').addClass('error-label');
			$("#nombre").val('').focus();
			return false;
		}
		//apellido
		if ( trim($("#apellido").val()) == '' )
		{
			$('.apellido').addClass('was-validated');
			$('.apellido').addClass('error-label');
			$("#apellido").val('').focus();
			return false;
		}
		//telenono
		if ( trim($("#phone").val()) == '' )
		{
			$('.phone').addClass('was-validated');			
			$('.phone').addClass('error-label');
			$("#error_phone").html('Por favor ingrese un numero de telefono.');
			$("#error_phone").show();
			$("#phone").val('').focus();
			return false;
		}
		else
		{
			var value = trim($("#phone").val());
			var phonefilter = /^[0-9]+\d{9}$/;
			if ( !phonefilter.test(value) )
			{
				$('.phone').addClass('was-validated');
				$('.phone').addClass('error-label');
				$("#error_phone").html('Ingresa el código de área sin el 15: EJ: 1145652798');
				$("#error_phone").show();				
				$("#phone").focus();
				return false;

			}
			else
			{
				
				$("#error_phone").hide();
			}
		}
		//email
		if ( trim($("#email").val()) == '' )
		{
			$('.email').addClass('was-validated');
			$('.email').addClass('error-label');
			$("#error_email").html('Por favor ingrese un mail.');
			$("#error_email").show();
			$("#email").val('').focus();
			return false;
		}
		else
		{
			var emailfilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if ( !emailfilter.test(trim($("#email").val())) )
			{
				$('.email').addClass('was-validated');
				$('.email').addClass('error-label');
				$("#error_email").html('El formato del mail no es válido');
				$("#error_email").show();
				$("#email").focus();
				return false;
			}
			else
			{
				$("#error_email").hide();
			}
		}		
				
		//comentario
		if ( trim($("#comentario").val()) == '' )
		{
			$('.comentario').addClass('was-validated');
			$('.email').addClass('error-label');
			$("#comentario").val('').focus();
			return false;
		}
	});
});
