import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ResponseData = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    res.status(304).send("Method not allowed");
  }
  const id = Number(req.query.id);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const token = req.headers.authorization;

  if (id === undefined || isNaN(id) || typeof id !== "number") {
    res.status(500).send("Internal Error");
  }

  axios
    .get(`${url}Website/inmueble/${id}`, {
      params: {
        tk: token,
      },
    })
    .then((response) => {
      if (response.data === "" || response.status === 404) {
        res.status(404).send("Not Found");
      }
      res.status(200).send(response.data);
    });
}
