import 'package:aula08_28_04_2021_json/ui/detalhes_page.dart';
import 'package:aula08_28_04_2021_json/widgets/lista_dados_emissora.dart';
import 'package:flutter/material.dart';
import '../funcoes.dart';
import 'imagem.dart';

class ListaDados {
  static Widget criar(BuildContext context, AsyncSnapshot snapshot, int tipo) {
    return ListView.builder(
      padding: EdgeInsets.all(4),
      scrollDirection: Axis.vertical,
      itemCount: snapshot.data.length,
      itemBuilder: (context, index){
        return GestureDetector(
            onTap: () {
              if (tipo == Funcoes.LISTA_EMISSORA)
              ListaDadosEmissora.cliqueItem(context, snapshot.data[index]);
            },
            child: Card(
              color: Colors.white,
              child: Padding(
                padding: EdgeInsets.all(10),
                child: _retornaLista(tipo, snapshot.data[index]),
              ),
            ),
        );
      },
    );
  }

  static Widget _retornaLista(int tipo, Map dados){
    switch (tipo){
      case Funcoes.LISTA_EMISSORA:
        return ListaDadosEmissora.criarItem(dados);
      case Funcoes.LISTA_PROGRAMA:
        return Container(); //return do  ListaDadosEmissora.criarItem(snapshot.data[index]),
      default:
        return Container();
    }
  }
}