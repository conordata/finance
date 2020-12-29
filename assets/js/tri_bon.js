$(document).ready(function(){
    var frais=$("#frais_type").val();
    var date_debut=document.getElementById('date_deb').value;
    var date_fin=$("#date_fin").val();
    var type=$("#type_bon").val();

    $("#btn_tri").click(function () {
        console.log(date_debut)
        $.ajax({
            type:"post",
            url:"execute/tri_bon.php",
            data:{'type':type,'frais':frais,'debut':date_debut,'fin':date_fin},
            success:function (data) {
                console.log(data)
            }
        })
    })
})