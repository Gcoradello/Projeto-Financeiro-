package com.Projeto.Financas.InterMov;

import com.Projeto.Financas.EntMov.movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InterMov extends CrudRepository<movimentacao, Integer> {


    @Query(
            value = "SELECT * FROM financas WHERE data_uso=?1 ",
            nativeQuery = true
    )
    public  List<movimentacao> getFindByData(String data);

}
