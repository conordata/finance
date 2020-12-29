<?php
if(!isset($_SESSION))
{
    session_start();
}

if(isset($_POST['iden'],$_POST['pass']) && !empty($_POST['iden']) && !empty($_POST['pass']))
{
    include_once '../database_exec/fuser.php';

    $res=Fuser::login_user($_POST['iden'],$_POST['pass']);


    if(is_array($res))
    {
        $_SESSION['nom']=$res['nom'];
        $_SESSION['prenom']=$res['prenom'];
        $_SESSION['type']=$res['type'];
        $_SESSION['id']=$res['id'];
        header('Location: ../home.php');
    }else
    {
        $_SESSION['err']="Identifiant ou mot de passe incorrecte";
        header('Location: ../login.php');
    }
}else
{
    $_SESSION['err']="Remplir tous les champs !";
    header('Location: ../login.php');
}