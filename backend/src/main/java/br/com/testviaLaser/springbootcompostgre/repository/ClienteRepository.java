/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.testviaLaser.springbootcompostgre.model.Cliente;

/**
 *
 * @author amc-desenv
 */

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
 List<Cliente> findByNomeCliStartingWith(String nome);  
}
