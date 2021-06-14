
import 'package:flutter/material.dart';

import '../funcoes.dart';


class Botao{
  static Widget criar(String texto, Function clique, {double tamanhoBotao = 150, Color cor = Colors.deepPurple}) {
    return ElevatedButton(

      child: Container(
        width: tamanhoBotao,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(texto, style: TextStyle(color: Colors.white, fontSize: 27),),
          ],
        ),
      ),
      style: ButtonStyle(backgroundColor: MaterialStateProperty.all(cor)),
      onPressed: clique,
    );
  }

  static Widget criarBotaoFlutuante(IconData icone, Function evento) {
    return FloatingActionButton(
      backgroundColor: Colors.deepPurple,
      child: Funcoes.criarIcone(icone),
      onPressed: evento,
    );
  }
}