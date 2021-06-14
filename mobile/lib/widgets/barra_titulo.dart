
import 'package:flutter/material.dart';

import '../funcoes.dart';


class BarraTitulo {
  static Widget criar(String titulo,
      {IconData icone, IconData iconeAcao, Function eventoAcao, bool tituloCentralizado = true}) {
    return AppBar(
      backgroundColor: Colors.blue[900],
      title: Row(
        children: [
          Funcoes.criarIcone(icone),
          Text(titulo),
        ],
      ),
      centerTitle: tituloCentralizado,
    );
  }
}


