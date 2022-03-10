/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.cotroller.dto;

import br.com.testviaLaser.springbootcompostgre.model.Cliente;

/**
 *
 * @author amc-desenv
 */
public class ClienteRs {

    private Long id;
    private String nomeCli;
    private String endCli;
    private float limiteCred;
    private float limiteParc;

    public static ClienteRs converter(Cliente c) {
        var cliente = new ClienteRs();
        cliente.setId(c.getId());
        cliente.setNomeCli(c.getNomeCli());
        cliente.setEndCli(c.getEndCli());
        cliente.setLimiteCred(c.getLimiteCred());
        cliente.setLimiteParc(c.getLimiteParc());
        return cliente;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCli() {
        return nomeCli;
    }

    public void setNomeCli(String nomeCli) {
        this.nomeCli = nomeCli;
    }

    public String getEndCli() {
        return endCli;
    }

    public void setEndCli(String endCli) {
        this.endCli = endCli;
    }

    public float getLimiteCred() {
        return limiteCred;
    }

    public void setLimiteCred(float limiteCred) {
        this.limiteCred = limiteCred;
    }

    public float getLimiteParc() {
        return limiteParc;
    }

    public void setLimiteParc(float limiteParc) {
        this.limiteParc = limiteParc;
    }

}
