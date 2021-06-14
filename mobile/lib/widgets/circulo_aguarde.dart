import 'package:flutter/material.dart';

class CirculoAguarde {
  static Widget criar({Color cor = Colors.black}) {
    return Center(
      child: CircularProgressIndicator(
        valueColor: AlwaysStoppedAnimation<Color>(cor),
        strokeWidth: 5,
      ),
    );
  }
}