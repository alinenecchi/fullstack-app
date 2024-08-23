import fetch from "node-fetch";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const apiUrl = `${process.env.API_URL}/${id}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const product = await response.json();
    return res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
