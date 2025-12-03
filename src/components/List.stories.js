import React from "react";
import List from "./List"; 

export default {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  
};

export const Default = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg/330px-Bruce_Willis_by_Gage_Skidmore_3.jpg",
    nombre: "Bruce Willis",
    esNota10: false,
    children: "Bruce Willis es un actor, productor y cantante estadounidense conocido por su papel en 'Jungla de cristal' y 'El sexto sentido'."
  },
};

export const Destacado = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg",
    nombre: "Tom Hanks",
    esNota10: true,
    children: "Tom Hanks es un actor estadounidense ganador del Óscar por interpretar a Forrest Gump."
  },
};

export const ConFotoReal = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/AnthonyHopkins10TIFF.jpg/500px-AnthonyHopkins10TIFF.jpg",
    nombre: "Anthony Hopkins",
    esNota10: false,
    children: ""
  },
};