import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';


class Funcoes{

  static const LISTA_VEICULO = 1;
  static const LISTA_MARCA = 2;

  void mostrarMensagem(BuildContext context, String tituloMensagem, String corpoMensagem) {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text(tituloMensagem),
            content: Text(corpoMensagem),
            actions: [
              TextButton(
                child: Text("oukay"),
                onPressed: () { _fecharTelaAtual(context); },
              ),
            ],
          );
        }
    );
  }
  void _fecharTelaAtual(BuildContext context) {
    Navigator.pop(context);
  }

  static String corrigeLinkImagem(String link){
    return link.replaceAll("~/", "https://60c6aecd19aa1e001769f8e1.mockapi.io/veiculos/");
  }

  static Widget criarIcone(IconData icone, {Color cor, double tamanho}) {
    return icone != null ? _criarIconeEspacado(icone, cor, tamanho) : Container();
  }

  static Widget _criarIconeEspacado(IconData icone, Color cor, double tamanho) {
    return Padding(
      padding: EdgeInsets.all(4),
      child: Icon(icone, color: cor, size: tamanho,),
    );
  }

  static Future<List<dynamic>> getListaJson(String link) async {
    //com _ é um metodo private
    // sem a underline é um metodo public

    Uri uri = Uri.parse(link);
    http.Response response = await http.get(uri);
    return json.decode(response.body);

  }
}