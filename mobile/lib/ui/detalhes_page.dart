import 'package:flutter/material.dart';
import 'package:hackathon/widgets/barra_titulo.dart';
import 'package:hackathon/widgets/imagem.dart';

import '../funcoes.dart';

class DetalhesPage extends StatelessWidget {

  final Map dadosVeiculo;

  DetalhesPage(this.dadosVeiculo);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: BarraTitulo.criar(dadosVeiculo["modelo"]),
        body: Column(
          children:<Widget>[
            Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                 children: [
                 Container(
                   child: Column(
                       crossAxisAlignment: CrossAxisAlignment.start,
                       mainAxisAlignment: MainAxisAlignment.start,
                     children: [
                        Imagem.criarImagemWeb(
                          Funcoes.corrigeLinkImagem(dadosVeiculo["foto_destaque"].toString()),
                        ),
                        Text("Carro: " + dadosVeiculo["modelo"].toString()),
                        Text("Marca: " + dadosVeiculo["marca_id"].toString()),
                        Text("Ano Modelo: " + dadosVeiculo["ano_modelo"].toString()),
                        Text("Cor: " + dadosVeiculo["cor_id"].toString()),
                        Text("Modelo: " + dadosVeiculo["tipo"].toString()),
                        Text("Ano: " + dadosVeiculo["ano_modelo"].toString()),
                        Text("Preço: " + dadosVeiculo["valor"].toString()),
                        Text("Fabricação: " + dadosVeiculo["ano_fabricacao"].toString()),
                        Text("Opcionais: " + dadosVeiculo["opcionais"].toString()),
                     ]
                   )
                 )
                ]
              )
            )
          ]
        )
    );
  }
}
