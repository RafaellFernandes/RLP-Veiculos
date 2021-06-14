import 'package:flutter/material.dart';
import 'package:hackathon/widgets/lista_dados_veiculos.dart';

import '../funcoes.dart';

class ListaDados {
  static Widget criar(BuildContext context, AsyncSnapshot snapshot, int tipo) {
    return ListView.builder(
      padding: EdgeInsets.all(4),
      scrollDirection: Axis.vertical,
      itemCount: snapshot.data.length,
      itemBuilder: (context, index){
        return GestureDetector(
          onTap: () {
            if (tipo == Funcoes.LISTA_VEICULO)
              ListaDadosVeiculos.cliqueItem(context, snapshot.data[index]);
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
      case Funcoes.LISTA_VEICULO:
        return ListaDadosVeiculos.criarItem(dados);
      case Funcoes.LISTA_MARCA:
        return Container();
      default:
        return Container();
    }
  }
}