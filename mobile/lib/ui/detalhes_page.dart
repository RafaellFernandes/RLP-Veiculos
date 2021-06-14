import 'package:aula08_28_04_2021_json/funcoes.dart';
import 'package:aula08_28_04_2021_json/widgets/barra_titulo.dart';
import 'package:aula08_28_04_2021_json/widgets/imagem.dart';
import 'package:flutter/material.dart';

class DetalhesPage extends StatelessWidget {

  final Map dadosEmissora;

  DetalhesPage(this.dadosEmissora);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BarraTitulo.criar(dadosEmissora["veiculo"]),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
            Imagem.criarImagemWeb(
              Funcoes.corrigeLinkImagem(dadosEmissora["foto"].toString()),
                //dadosEmissora["foto"].toString(),
            ),
          Text("Carro: " + dadosEmissora["veiculo"].toString()),
          Text("Marca: " + dadosEmissora["marca"].toString()),
          Text("Cor: " + dadosEmissora["cor"].toString()),
          Text("Modelo: " + dadosEmissora["tipo"].toString()),
          Text("Ano: " + dadosEmissora["ano_modelo"].toString()),
          Text("Preço: " + dadosEmissora["preco"].toString()),
          Text("Fabricação: " + dadosEmissora["fabricacao"].toString()),
          Text("Opcionais: " + dadosEmissora["opcionais"].toString()),

        ],
      )
    );
  }
}
