/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.repository;

import br.com.testviaLaser.springbootcompostgre.model.Cliente;

import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
/**
 *
 * @author amc-desenv
 */
public class ClienteCustomRepository {
 
    private final EntityManager em;

    public ClienteCustomRepository(EntityManager em) {
        this.em = em;
    }

    public List<Cliente> find(Long id, String nomeCli, String endCli, Float limiteCred, Float limiteParc ) {

        String query = "select C from Cliente as C ";
        String condicao = "where";

        if(id != null) {
            query += condicao + " C.id = :id";
            condicao = " and ";
        }

        if(nomeCli != null) {
            query += condicao + " C.nomeCli = :nomeCli";
            condicao = " and ";
        }

        if(endCli != null) {
            query += condicao + " C.endCli = :endCli";
        }
        
        if(limiteCred != null) {
            query += condicao + " C.limiteCred = :limiteCred";
        }
        
        if(limiteParc != null) {
            query += condicao + " C.limiteParc = :limiteParc";
        }

        var q = em.createQuery(query, Cliente.class);

        if(id != null) {
            q.setParameter("id", id);
        }

        if(nomeCli != null) {
            q.setParameter("nomeCli", nomeCli);
        }

        if(endCli != null) {
            q.setParameter("endCli", endCli);
        }
        
        if(limiteCred != null) {
            q.setParameter("limiteCred", limiteCred);
        }
        
        if(limiteParc != null) {
            q.setParameter("limiteParc", limiteParc);
        }
        
        return q.getResultList();
    }

}
