import 'package:flutter/material.dart';

import '../funcoes.dart';


class BarraDrawer {

  static Widget criar(BuildContext context, String titulo, Color corFundo, Color corTexto, List<Map> listaItens, {IconData iconeTitulo}) {
    return Drawer(
      child: ListView(
        children: [
          _criarTituloBarra(titulo, corFundo, corTexto, iconeTitulo),
          _criarListaItens(context, listaItens, corFundo),
        ],
      ),
    );
  }

  static Widget _criarTituloBarra(String titulo, Color corFundo, Color corTexto, IconData iconeTitulo) {
    return DrawerHeader(
      child: Column(
        children: [
          Funcoes.criarIcone(iconeTitulo, cor: Colors.white, tamanho: 50),
          Text(titulo, style: TextStyle(color: corTexto, fontSize: 25),),
        ],
      ),
      decoration: BoxDecoration(color: corFundo),
    );
  }

  static Widget _criarListaItens(BuildContext context, List<Map> listaItens, Color corTexto) {
    var lista = List<Widget>();

    for (var item in listaItens)
      lista.add(_criarItem(context, item["texto"], item["icone"], corTexto, item["evento"]));

    return Column(children: lista,);
  }

  static Widget _criarItem(BuildContext context, String texto, IconData icone, Color corTexto, Function evento) {
    return ListTile(
      title: Row(
        children: [
          Funcoes.criarIcone(icone, tamanho: 28, cor: corTexto),
          Text(texto, style: TextStyle(fontSize: 18, color: corTexto),),
        ],
      ),
      onTap: () {
        Navigator.pop(context);
        evento();
      },
    );
  }
}