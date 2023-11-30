export type Dimensiones = {
  id: string;
  nombre: string;
  planetas: Planetas[];
};

export type Planetas = {
  id: string;
  nombre: string;
  personas: Personas[];
};

export type Personas = {
  id: string;
  name: string;
};

export type Tardis = {
  camuflaje: string;
  numRegeneracion: number;
  año: number;
  dimensiones: Dimensiones[];
};
