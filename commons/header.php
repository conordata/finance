<?php
if(!isset($_SESSION))
{
    session_start();
}
;?>

  <li class="nav-item">
      <a href="#" class="nav-link dropdown-toggle dropdown-clear-caret" data-toggle="sidebar" data-target="#user-drawer"> <?=$_SESSION['nom'].' '.$_SESSION['prenom'];?>
          <img src="../../../pbs.twimg.com/profile_images/928893978266697728/3enwe0fO_400x400.jpg" class="img-fluid rounded-circle ml-1" width="35" alt="">
      </a>
  </li>
  

