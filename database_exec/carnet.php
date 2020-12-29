<?php

class Carnet
{

    private $id;
    private $nom;
    private $postnom;
    private $prenom;
    private $libelle;
    private $montant;
    private $id_ben;
    private $sign_ac;
    private $sign_au;
    private $sign_ca;
    private $type;
    /**
     * Carnet constructor.
     * @param $id
     * @param $nom
     * @param $postnom
     * @param $prenom
     * @param $libelle
     * @param $montant
     * @param $id_ben
     * @param $sign_ac
     * @param $sign_au
     * @param $sign_ca
     */
    public function __construct($id=null, $nom=null, $postnom=null, $prenom=null, $libelle=null, $montant=null, $id_ben=null, $sign_ac=null, $sign_au=null, $sign_ca=null,$type=null)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->postnom = $postnom;
        $this->prenom = $prenom;
        $this->libelle = $libelle;
        $this->montant = $montant;
        $this->id_ben = $id_ben;
        $this->sign_ac = $sign_ac;
        $this->sign_au = $sign_au;
        $this->sign_ca = $sign_ca;
        $this->type=$type;
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getPostnom()
    {
        return $this->postnom;
    }

    /**
     * @param mixed $postnom
     */
    public function setPostnom($postnom)
    {
        $this->postnom = $postnom;
    }

    /**
     * @return mixed
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * @param mixed $prenom
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
    }

    /**
     * @return mixed
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;
    }

    /**
     * @return mixed
     */
    public function getMontant()
    {
        return $this->montant;
    }

    /**
     * @param mixed $montant
     */
    public function setMontant($montant)
    {
        $this->montant = $montant;
    }

    /**
     * @return mixed
     */
    public function getIdBen()
    {
        return $this->id_ben;
    }

    /**
     * @param mixed $id_ben
     */
    public function setIdBen($id_ben)
    {
        $this->id_ben = $id_ben;
    }

    /**
     * @return mixed
     */
    public function getSignAc()
    {
        return $this->sign_ac;
    }

    /**
     * @param mixed $sign_ac
     */
    public function setSignAc($sign_ac)
    {
        $this->sign_ac = $sign_ac;
    }

    /**
     * @return mixed
     */
    public function getSignAu()
    {
        return $this->sign_au;
    }

    /**
     * @param mixed $sign_au
     */
    public function setSignAu($sign_au)
    {
        $this->sign_au = $sign_au;
    }

    /**
     * @return mixed
     */
    public function getSignCa()
    {
        return $this->sign_ca;
    }

    /**
     * @param mixed $sign_ca
     */
    public function setSignCa($sign_ca)
    {
        $this->sign_ca = $sign_ca;
    }

    /**
     * @return null
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param null $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }




}