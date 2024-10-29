import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { IItem } from "@app/types/types";
import { useRouter } from "next/router";

export const CardInmueble = (props: { data: IItem }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const { data } = props;

  const venta = data?.precioVenta?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const renta = data?.precioRenta?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const action = () => {
    router.push(
      "/propiedad/[id]/[slug-propiedad]",
      `/propiedad/${data.idInmueble}/${data.slug}`
    );
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardActionArea onClick={action}>
        <CardMedia
          sx={{ height: 180 }}
          image={data.imagenPortada}
          title={data.tituloInmueble}
        />
        <CardContent sx={{ minHeight: 247 }}>
          <Typography
            fontWeight={600}
            gutterBottom
            variant="h6"
            component="div"
          >
            {data.tituloInmueble}
          </Typography>
          <Box>
            {data.precioVenta !== 0 && (
              <Typography fontSize={16} component="div">
                <Typography component="span" fontWeight={900}>
                  Precio de venta:
                </Typography>{" "}
                {venta}
              </Typography>
            )}
            {data.precioRenta !== 0 && (
              <Typography fontSize={16} component="div">
                <Typography component="span" fontWeight={900}>
                  Precio de renta:
                </Typography>{" "}
                {renta}
              </Typography>
            )}

            <Typography fontSize={16} component="div">
              <Typography component="span" fontWeight={900}>
                Agente Autorizado:
              </Typography>{" "}
              {data.nombreAgente}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            bottom: hover ? 0 : "-247px",
            left: 0,
            right: 0,
            height: "247px",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            transition: "bottom 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography fontSize={24} fontWeight={700} mb={1}>
            Detalles
          </Typography>
          <Typography fontSize={14}>
            Nº Habitaciones: {data.nroHabitaciones}
          </Typography>
          <Typography fontSize={14}>Nº Baños: {data.nroBanios}</Typography>
          <Typography fontSize={14}>Provincia: {data.provincia}</Typography>
          <Typography fontSize={14}>Municipio: {data.municipio}</Typography>
          <Typography fontSize={14}>Localidad: {data.localidad}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};
