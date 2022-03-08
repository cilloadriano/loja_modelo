/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.repository;


import br.com.testviaLaser.springbootcompostgre.model.Produto;

import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
/**
 *
 * @author amc-desenv
 */
public class ProdutoCustomRepository {
 
    private final EntityManager em;

    public ProdutoCustomRepository(EntityManager em) {
        this.em = em;
    }

    public List<Produto> find(Long id, String nomeProd, String descProd, Float valorProd) {

        String query = "select P from Produto as P ";
        String condicao = "where";

        if(id != null) {
            query += condicao + " P.id = :id";
            condicao = " and ";
        }

        if(nomeProd != null) {
            query += condicao + " P.nomeProd = :nomeProd";
            condicao = " and ";
        }

        if(descProd != null) {
            query += condicao + " P.descProd = :descProd";
        }
        
        if(valorProd != null) {
            query += condicao + " P.valorProd = :valorProd";
        }
        
        var q = em.createQuery(query, Produto.class);

        if(id != null) {
            q.setParameter("id", id);
        }

        if(nomeProd != null) {
            q.setParameter("nomeProd", nomeProd);
        }

        if(descProd != null) {
            q.setParameter("descProd", descProd);
        }
        
        if(valorProd != null) {
            q.setParameter("valorProd", valorProd);
        }

        return q.getResultList();
    }

}
