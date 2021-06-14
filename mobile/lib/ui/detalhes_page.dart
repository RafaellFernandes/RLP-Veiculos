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
        appBar: BarraTitulo.criar(dadosVeiculo["veiculo"]),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Imagem.criarImagemWeb(
              Funcoes.corrigeLinkImagem(dadosVeiculo["foto"].toString()),
            ),
            Text("Carro: " + dadosVeiculo["veiculo"].toString()),
            Text("Marca: " + dadosVeiculo["marca"].toString()),
            Text("Cor: " + dadosVeiculo["cor"].toString()),
            Text("Modelo: " + dadosVeiculo["tipo"].toString()),
            Text("Ano: " + dadosVeiculo["ano_modelo"].toString()),
            Text("Preço: " + dadosVeiculo["preco"].toString()),
            Text("Fabricação: " + dadosVeiculo["fabricacao"].toString()),
            Text("Opcionais: " + dadosVeiculo["opcionais"].toString()),

          ],
        )
    );
  }
}
