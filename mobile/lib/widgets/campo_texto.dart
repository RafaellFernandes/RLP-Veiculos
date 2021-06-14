import 'package:flutter/material.dart';

class CampoTexto {

  static Widget criar(String texto, String prefixo ,TextEditingController controller, TextInputType teclado) {
    return  Container(
      padding: EdgeInsets.fromLTRB(8, 16, 8, 16),
      child:
      TextField(
        controller: controller,
        decoration: InputDecoration(
          border: OutlineInputBorder(),
          labelText: texto,
          labelStyle: TextStyle(color: Colors.blue, fontSize: 25),
          prefixText: prefixo,
          prefixStyle: TextStyle(color: Colors.blue, fontSize: 25),
        ),

        style: TextStyle(color: Colors.deepPurpleAccent, fontSize: 25),
        keyboardType: teclado,

      ),
    );
  }
}