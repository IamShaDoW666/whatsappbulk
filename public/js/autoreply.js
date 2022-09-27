
$('#type').on('change', () => {
    const type = $('#type').val();
    $.ajax({
        url: `/bulkwhatsapp/public/autoreply/${type}`,
        type: 'GET',
        dataType: 'html',
        success: (result) => {

            $('.ajaxplace').html(result)
        },
        error: (error) => {
            console.log(error);
        }
    })
})


function viewReply(id) {
    $.ajax({
        url: `/bulkwhatsapp/public/autoreply/show-reply/${id}`,
        type: 'GET',
        dataType: 'html',
        success: (result) => {

            $('.showReply').html(result);
            $('#modalView').modal('show')
        },
        error: (error) => {
            console.log(error);
        }
    })
    // 
}

