/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.model;

import javax.persistence.*;

/**
 *
 * @author amc-desenv
 */
@Entity
@Table(name="produto", schema = "teste")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idprod")
    private Long id;
    
    @Column(name="nomeprod")
    private String nomeProd;
    
    @Column(name="descprod")
    private String descProd;
    
    @Column(name="valorprod")
    private float valorProd;
   
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeProd() {
        return nomeProd;
    }

    public void setNomeProd(String nomeProd) {
        this.nomeProd = nomeProd;
    }
    
    public String getDescProd() {
        return descProd;
    }

    public void setDescProd(String descProd) {
        this.descProd = descProd;
    }
    
    public float getValorProd() {
        return valorProd;
    }

    public void setValorProd(float valorProd ) {
        this.valorProd = valorProd;
    }
    
}
