package com.Projeto.Financas.EntMov;


import jakarta.persistence.*;

import java.util.Optional;


@Entity
@Table(name= "financas")
public class movimentacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name= "destino", length = 200, nullable = true)
    private String destino;

    @Column(name= "data_uso", length = 50, nullable = true)
    private String data_uso;

    @Column(name= "valor", length = 50, nullable = true)
    private double valor;


    public Integer getId() {

        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getData_uso() {
        return data_uso;
    }

    public void setData_uso(String data_uso) {
        this.data_uso = data_uso;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

}
