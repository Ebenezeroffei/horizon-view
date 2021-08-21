let submitQuestionOrComment = () => {
    $('#submit-question-or-comment').click(function(){
        // Start loading
        $(this).html(
            `<div class='spinner-border spinner-border-sm'></div>`
        );
        // Get inputs
        let name = $('#id_name').val();
        let email = $('#id_email').val();
        let questionOrComment = $('#id_question').val();
        let emailRegex = /^[a-z][a-zA-Z\d]+@[a-z]+\.[a-z]+$/
        // Verify inputs
        if(name && emailRegex.test(email) && questionOrComment){
            console.log("Valid")
            $('#error-message').removeClass('alert-danger').empty();
            // Upload
            // $.post(
            //     url,
            //     {
            //         name,
            //         email,
            //         questionOrComment,
            //         'task': 'questionOrComment'
            //     },
            //     function(res){
            //         console.log(res);
            //     }
            // );
        }
        else{
            $(this).html("Send");
            $('#error-message').addClass('alert-danger').html(
                `<h3 class="alert-header">Error</h3>
                <hr>
                <p>
                    Fill in all fields with the appropiate details before sending your comment or question.
                </p>`
            );
        }
    });
}

submitQuestionOrComment();