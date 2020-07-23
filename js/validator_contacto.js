$( document ).ready( function () {
      $( "#contacto_form" ).validate( {
        rules: {
          nombre: "required",
          apellido: "required",
          phone: {required: true, minlength: 10},
          email: {required: true, email: true},
          comentario: "required"
          },
        messages: {
          nombre: "Por favor ingrese su nombre",
          apellido: "Por favor ingrese su apellido",
          phone: {required: "Por favor ingrese un número de teléfono.",
                  minlength: "Ingresa el código de área sin el 15: EJ: 1145652798."},
          email:{required: "Por favor ingrese un mail",
                email:"El formato del mail no es válido EJ: buendolar@mail.com"},
          comentario: "Por favor escriba un comentario."
          },
        errorElement: "span",
        errorPlacement: function ( error, element ) {
          // Add the `invalid-feedback` class to the error element
          error.addClass( "invalid-feedback" );
          error.insertAfter( element );
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).addClass("is-invalid").removeClass("is-valid");
          $(element.form).find("label[for=" + element.id + "]").addClass("error-l");
        },
        unhighlight: function (element, errorClass, validClass) {
          $( element ).addClass("is-valid").removeClass("is-invalid");
          $(element.form).find("label[for=" + element.id + "]").removeClass("error-l");
        }
      } );
    } );