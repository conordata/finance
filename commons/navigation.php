<?php
if(!isset($_SESSION))
{
    session_start();
}
;?>
<div class="mdk-drawer js-mdk-drawer" id="default-drawer">
    <div class="mdk-drawer__content">
        <div class="mdk-drawer__inner" data-simplebar data-simplebar-force-enabled="true">
            <nav class="drawer  drawer--dark">
                <div class="drawer-spacer">
                    <div class="media align-items-center">
                        <a href="index.html" class="drawer-brand-circle mr-2">C</a>
                        <div class="media-body">
                            <a href="home.php" class="h4 m-0 text-link">Cherad - Finance</a>
                        </div>
                    </div>
                </div>
                <!-- MENU -->
                <ul class="drawer-menu" id="dasboardMenu" data-children=".drawer-submenu">
                    <li class="drawer-menu-item active">
                        <a href="home.php">
                            <i class="material-icons">dashboard</i>
                            <span class="drawer-menu-text"> Accueil</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item">
                        <a href="index.html">
                            <i class="material-icons">gradient</i>
                            <span class="drawer-menu-text"> Calculatrice</span>
                        </a>
                    </li>
                    <?php if($_SESSION['type']=="admin"):?>
                        <li class="drawer-menu-item">
                            <a href="taux_frais.php">
                                <i class="material-icons">account_balance</i>
                                <span class="drawer-menu-text"> Taux & Frais</span>
                            </a>
                        </li>
                    <?php endif;?>
                    <li class="drawer-menu-item  ">
                        <a href="events-calendar.html">
                            <i class="material-icons">event_available</i>
                            <span class="drawer-menu-text"> Calendrier</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item  ">
                        <a href="ui-notifications.html">
                            <i class="material-icons">notifications</i>
                            <span class="drawer-menu-text"> Notifications</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item  ">
                        <a href="maps.html">
                            <i class="material-icons">pin_drop</i>
                            <span class="drawer-menu-text"> Localisation</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item  ">
                        <a href="#">
                            <i class="material-icons">receipt</i>
                            <span class="drawer-menu-text"> Tâches</span>
                        </a>
                        <div>
                    <li class="drawer-menu-item ">
                        <a href="bon_entree.php">
                            <i class="material-icons px-3">receipt</i>
                            <span class="drawer-menu-text px-3"> Bon d'entrée</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item ">
                        <a href="bon_de_sortie.php">
                            <i class="material-icons px-3">receipt</i>
                            <span class="drawer-menu-text px-3"> Bon de Sortie</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item ">
                        <a href="bulletin-de-paie.php">
                            <i class="material-icons px-3">receipt</i>
                            <span class="drawer-menu-text px-3"> Bulletin de Paie</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item drawer-submenu">
                        <a href="book.php" data-toggle="collapse" data-parent="#mainMenu" data-target="#uiComponentsMenu" aria-controls="uiComponentsMenu" aria-expanded="false" class="collapsed">
                            <i class="material-icons px-3">receipt</i>
                            <span class="drawer-menu-text px-3"> Carnet de Reçu</span>
                        </a>
                        <ul class="collapse" id="uiComponentsMenu">
                            <li class="drawer-menu-item px-4">
                                <a href="recu.php">Reçu</a>
                            </li>
                        </ul>
                    </li>
                    <li class="drawer-menu-item ">
                        <a href="ui-buttons.html">
                            <i class="material-icons px-3">receipt</i>
                            <span class="drawer-menu-text px-3"> Rapport Global</span>
                        </a>
                    </li>
                    <li class="drawer-menu-item ">
                        <a href="registre.php">
                            <i class="material-icons px-3">receipt</i>
                            <span class="drawer-menu-text px-3"> Registres</span>
                        </a>
                    </li>
        </div>
        </li>
    </div>
    </nav>
</div>
</div>
