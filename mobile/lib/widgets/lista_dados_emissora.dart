import 'package:aula08_28_04_2021_json/ui/detalhes_page.dart';
import 'package:flutter/material.dart';

import '../funcoes.dart';
import 'imagem.dart';

class ListaDadosEmissora {
  static void cliqueItem(BuildContext context, Map dados){
    Navigator.push(context, MaterialPageRoute(
        builder: (context) =>DetalhesPage(dados)
    ));
  }

  static Widget criarItem(Map dados){
   return Row(
      children:<Widget>[
        Imagem.criarImagemWeb(
           Funcoes.corrigeLinkImagem(
               dados["foto"].toString()
            ),
            h: 75, w: 75
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child:  Text(dados["veiculo"].toString(),
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),),
          ),
        ),
      ],
    );
  }
}