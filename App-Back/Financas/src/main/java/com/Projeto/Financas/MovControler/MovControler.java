package com.Projeto.Financas.MovControler;

import com.Projeto.Financas.EntMov.movimentacao;
import com.Projeto.Financas.InterMov.InterMov;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.InvalidParameterException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/Financas")
public class MovControler extends  RuntimeException{

    @Autowired
    private InterMov db;//interface de acesso ao banco


    // buscar todas as movimentaçoes
    @GetMapping("/all")
    public ResponseEntity<List<movimentacao>> allFinancas(){

        List<movimentacao> allMovimentacoes = (List<movimentacao>) db.findAll();
        return ResponseEntity.status(200).body(allMovimentacoes);
    }

    @GetMapping("{id}")
    public ResponseEntity findById(@PathVariable Integer id){
        Optional<movimentacao> estaMovimentaçao = db.findById(id) ;
        return ResponseEntity.status(200).body(estaMovimentaçao);
    }

    // adicionar uma nova movimentação
    @PostMapping
    public ResponseEntity adicionarGasto(@RequestBody movimentacao gasto ){
        movimentacao novoGasto =  db.save(gasto);

        return ResponseEntity.status(201).body(novoGasto) ;
    }

    //alterar uma movimentação existente
    @PutMapping
    public movimentacao alterarGasto(@RequestBody movimentacao gastoAlterado){
        movimentacao movimentacaoAlterada = db.save(gastoAlterado);
        return gastoAlterado ;
    }

    // deleta uma movimentação financeira
    @DeleteMapping("/{id}")
    public Optional<movimentacao> deletarMovimentacao (@PathVariable Integer id ){
        Optional<movimentacao> movimentacaoDeletada = db.findById(id);
        db.deleteById(id);
        return movimentacaoDeletada;

    }

    @GetMapping("/")
    public List<movimentacao> buscarAllData(String data){
        return (List<movimentacao>) db.getFindByData(data);
    }
}
