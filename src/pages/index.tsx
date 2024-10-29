import { CardInmueble } from "@app/components/Card";
import { Header } from "@app/components/Header";
import { Loading } from "@app/components/Loading";
import { Search } from "@app/components/Search";
import { useItems } from "@app/services/inmueblesServices";
import { Grid2, Pagination, Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");

  const { data, isLoading } = useItems(search, page);
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <>
      <Head>
        <title>Inmuebles Obrien</title>
        <meta
          name="description"
          content="Compra o Alquila cualquiera de los inmuebles dondequiera que estes!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <Loading />}
      <Header />
      <Search setValue={setSearch} setPage={setPage} />
      <Box sx={{ py: 2 }}>
        <Grid2 container spacing={2} sx={{ px: 2 }}>
          {data?.data.map((value) => (
            <Grid2 size={3} key={value.idInmueble}>
              <CardInmueble data={value} />
            </Grid2>
          ))}
        </Grid2>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 2,
          }}
        >
          <Pagination
            count={data?.meta.pagination.total}
            page={page}
            onChange={onChangePage}
            shape="rounded"
          />
        </Box>
      </Box>
    </>
  );
}
