import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ResponseData = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(304).send("Method not allowed");
  }
  const page = Number(req.body.page);
  const search = req.body.search;
  const url = process.env.NEXT_PUBLIC_API_URL;
  const token = req.headers.authorization;

  if (isNaN(page) || typeof page !== "number") {
    res.status(400).send("Invalid request!!");
  }
  axios
    .post(
      `${url}/Website/inmuebles`,
      {
        tituloInmueble: search,
      },
      {
        params: {
          tk: token,
          page,
        },
      }
    )
    .then((response) => {
      res.status(200).send(response.data);
    });
}
