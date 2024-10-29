interface IItem {
  idInmueble: number;
  tituloInmueble: string;
  precioVenta: number;
  precioRenta: number;
  monedaVenta: string;
  monedaRenta: string;
  imagenPortada: string;
  nroHabitaciones: number;
  nroBanios: number;
  nroEstacionamientos: number;
  provincia: string;
  municipio: string;
  localidad: string;
  slug: string;
  nombreAgente: string;
  telefonoAgente: string;
  correoAgente: string;
}

interface IItemById extends IItem {
  descripcionSEO: string;
  descriptionLarga: string;
  imagenesGaleria: string[];
}

interface IPagination {
  page: number;
  pageSize: number;
  total: number;
  totalCount: string;
}

interface IData {
  data: IItem[];
  meta: { pagination: IPagination };
}

export type { IData, IPagination, IItem, IItemById };
