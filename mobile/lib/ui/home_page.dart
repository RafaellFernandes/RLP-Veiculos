import 'package:flutter/material.dart';
import 'package:hackathon/widgets/barra_titulo.dart';
import 'package:hackathon/widgets/circulo_aguarde.dart';
import 'package:hackathon/widgets/lista_dados.dart';

import '../funcoes.dart';



class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: BarraTitulo.criar("RLP Veículos", icone: Icons.directions_car_outlined),
      backgroundColor: Colors.grey,
      body: Column(
        children: <Widget>[
          Expanded(
            child: FutureBuilder(
              future: Funcoes.getListaJson("https://60c6aecd19aa1e001769f8e1.mockapi.io/veiculos/"),
              builder: (context, snapshot) {
                switch (snapshot.connectionState) {
                  case ConnectionState.waiting:
                  case ConnectionState.none:
                    return CirculoAguarde.criar();
                  default:
                    if (snapshot.hasError)
                      return Text("Erro muito erro errado que deu erro!" + snapshot.error.toString());
                    else
                      return ListaDados.criar(context, snapshot, Funcoes.LISTA_VEICULO);
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}