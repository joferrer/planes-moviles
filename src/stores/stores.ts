import { atom } from "nanostores";

export enum seleccionOpciones  {
    Economicos = "economicos",
    Ilimitados = "ilimitados",
}

export const selectValor = atom<seleccionOpciones >(seleccionOpciones.Economicos); 