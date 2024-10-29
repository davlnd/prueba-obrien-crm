import { useGetItemById } from "@app/services/inmueblesServices";
import {
  Box,
  Grid2,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import Carousel from "react-material-ui-carousel";

export default function Propiedad() {
  const { query } = useRouter();
  const id = Number(query.id);
  const { data } = useGetItemById(isNaN(id) ? 0 : id);

  return (
    <>
      <Head>
        <title>{data?.data[0].tituloInmueble}</title>
        <meta name="description" content={data?.data[0].descripcionSEO} />
        <meta property="og:title" content={data?.data[0].tituloInmueble} />
        <meta
          property="og:description"
          content={data?.data[0].descripcionSEO}
        />
        <meta property="og:image" content={data?.data[0].imagenPortada} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Typography component="div">
          <Box
            sx={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "700",
              letterSpacing: 2,
              my: 3,
              color: "#c0c0c0",
            }}
          >
            {data?.data[0].tituloInmueble}
          </Box>
        </Typography>
        <Box sx={{ width: "100%", height: "auto", overflowY: "scroll" }}>
          {data && (
            <ImageList variant="masonry" cols={3} gap={8}>
              {data?.data[0].imagenesGaleria.map((item) => (
                <ImageListItem key={item}>
                  <img srcSet={item} src={item} alt={item} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
        <Box sx={{ px: 6, my: 2 }}>
          <Typography component="div">
            <Box sx={{ color: "#000" }}>
              {data?.data[0].descriptionLarga.replace(/(<([^>]+)>)/gi, "")}
            </Box>
          </Typography>
        </Box>
        <Grid2 container sx={{ px: 6, my: 2 }}>
          <Grid2 size={6}>
            <Typography component="div" mb={2}>
              <Box sx={{ color: "#000", fontSize: "22px" }}>
                Detalles del inmueble:
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Habitaciones: {data?.data[0].nroHabitaciones}
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Baños: {data?.data[0].nroBanios}
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Estacionamientos: {data?.data[0].nroEstacionamientos}
              </Box>
            </Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography component="div" mb={2}>
              <Box sx={{ color: "#000", fontSize: "22px" }}>Ubicacion:</Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Provincia: {data?.data[0].provincia}
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Municipio: {data?.data[0].municipio}
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Localidad: {data?.data[0].localidad}
              </Box>
            </Typography>
          </Grid2>
          <Grid2 size={12} mt={4}>
            <Typography component="div" mb={2}>
              <Box sx={{ color: "#000", fontSize: "22px" }}>Agente:</Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Nombre: {data?.data[0].nombreAgente}
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Telefono: {data?.data[0].telefonoAgente}
              </Box>
            </Typography>
            <Typography component="div" mb={1}>
              <Box sx={{ color: "#000", fontSize: "16px" }}>
                Correo: {data?.data[0].correoAgente}
              </Box>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
