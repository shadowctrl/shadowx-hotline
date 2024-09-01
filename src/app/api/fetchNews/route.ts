const bingEndpoint = async (category: string) => {
  const data = await fetch(
    "https://" +
      process.env.RAPIDAPI_BING_ENDPOINT +
      "/news" +
      `?category=${category}` +
      "&textFormat=Raw",
    {
      headers: {
        "x-rapidapi-key": `${process.env.RAPIDAPI_BING_KEY}`,
        "x-rapidapi-host": `${process.env.RAPIDAPI_BING_ENDPOINT}`,
        "X-BingApis-SDK": "true",
      },
    }
  );

  console.log(await data.json());
};
export const POST = async (req: Request) => {
  const data = await req.json();
  await bingEndpoint(data.category);
  return new Response("", { status: 200 });
};
