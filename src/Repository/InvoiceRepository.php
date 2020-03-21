<?php

namespace App\Repository;

use App\Entity\Invoice;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Invoice|null find($id, $lockMode = null, $lockVersion = null)
 * @method Invoice|null findOneBy(array $criteria, array $orderBy = null)
 * @method Invoice[]    findAll()
 * @method Invoice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InvoiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Invoice::class);
    }
    
    //fonction pour trouver le dernier chrono pour un user avec requête DQL (si c'est la première facture, il n'y a pas de dernier chrono alors on retourne 1 quand il y a une erreur) :
    public function findNextChrono(User $user) {
        try {
            return $this->createQueryBuilder("i") //requête sur les invoices qu'on appelle "i"
                        ->select("i.chrono") // on veut uniquement le champs chrono
                        ->join("i.customer", "c") // on veut trouver le customer lié à l'invoice (et on l'appelle "c")
                        ->where("c.user = :user") // là où le customer a un user égal au paramètre ":user"
                        ->setParameter("user", $user) // le paramètre ":user" pointe vers l'user qu'on a reçu en paramètre de la fonction
                        ->orderBy("i.chrono", "DESC") // on classe les résultats par chrono descendant
                        ->setMaxResults(1) // nb max de résultats : 1 => on ne veut que le dernier chrono (le plus grand donc pour cet user)
                        ->getQuery() // on recupère la query
                        ->getSingleScalarResult() +1; //On veut uniquement le numéro de chrono auquel on ajoute 1
        } catch(\Exception $e){
            return 1;
        }
    }

    // /**
    //  * @return Invoice[] Returns an array of Invoice objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Invoice
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
