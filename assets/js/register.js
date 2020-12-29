$(document).ready(function () {
    $("#id_frais").change(function () {
        $.ajax({
            type:'post',
            url:'execute/register_filtre.php',
            data:{
                'frais':$('#id_frais').val(),
                'mois':$('#id_mois').val(),
                'class_id':$("#classe_id").val()
            },
            success:function (data) {
                $('#liste_des_eleves').html(data);
            }
        })
    })


    $('#id_mois').change(function () {
        $.ajax({
            type:'post',
            url:'execute/register_filtre.php',
            data:{
                'frais':$('#id_frais').val(),
                'mois':$('#id_mois').val(),
                'class_id':$("#classe_id").val()
            },
            success:function (data) {
                $('#liste_des_eleves').html(data);
            }
        })
    })
})