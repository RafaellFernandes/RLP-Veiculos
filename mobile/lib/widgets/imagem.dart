import 'package:flutter/material.dart';
import 'package:transparent_image/transparent_image.dart';

class Imagem {

  static Widget criarImagemWeb(String link, {double w, double h}){
    return  FadeInImage.memoryNetwork(
      placeholder: kTransparentImage,
      image: link,
      height: h,
      width: w,
    );
  }

}