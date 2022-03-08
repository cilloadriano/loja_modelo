/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.testviaLaser.springbootcompostgre.cotroller;

import br.com.testviaLaser.springbootcompostgre.cotroller.dto.ProdutoRq;
import br.com.testviaLaser.springbootcompostgre.cotroller.dto.ProdutoRs;
import br.com.testviaLaser.springbootcompostgre.model.Produto;
import br.com.testviaLaser.springbootcompostgre.repository.ProdutoCustomRepository;
import br.com.testviaLaser.springbootcompostgre.repository.ProdutoRepository;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author amc-desenv
 */
@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;
    
    @Autowired
    private ProdutoCustomRepository produtoCustomRepository;

    @GetMapping
    @CrossOrigin(origins = "*")
    public List<ProdutoRs> findAll() {
        List<Produto> produtos = produtoRepository.findAll();
        return produtos
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ProdutoRs findById(@PathVariable("id") Long id) {
        var produto = produtoRepository.getById(id);
        return ProdutoRs.converter(produto);
    }

    @PostMapping("/")
    public void savePerson(@RequestBody ProdutoRq produto) {
        var p = new Produto();
        p.setNomeProd(produto.getNomeProd());
        p.setValorProd(produto.getValorProd());
        p.setDescProd(produto.getDescProd());
        produtoRepository.save(p);
    }

    @PutMapping("/{id}")
    public void updatePerson(@PathVariable("id") Long id, @RequestBody ProdutoRq produto) throws Exception {
        var p = produtoRepository.findById(id);

        if (p.isPresent()) {
            var produtoSave = p.get();
            produtoSave.setNomeProd(produto.getNomeProd());
            produtoSave.setDescProd(produto.getDescProd());
            produtoSave.setValorProd(produto.getValorProd());
            produtoRepository.save(produtoSave);
        } else {
            throw new Exception("Produto Não Encontrado");
        }
    }

    @GetMapping("/filter/custom")
    public List<ProdutoRs> findPersonByCustom(
            @RequestParam(value = "id", required = false) Long id,
            @RequestParam(value = "nomeProd", required = false) String nomeProd,
            @RequestParam(value = "descProd", required = false) String descProd,
            @RequestParam(value = "valorProd", required = false) Float valorProd
    ) {
        return this.produtoCustomRepository.find(id, nomeProd, descProd, valorProd)
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }

}
