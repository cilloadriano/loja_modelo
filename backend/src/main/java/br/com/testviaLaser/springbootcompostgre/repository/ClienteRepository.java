/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.repository;


import br.com.testviaLaser.springbootcompostgre.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author amc-desenv
 */

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    
}
