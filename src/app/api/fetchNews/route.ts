const newsEndpoint = async () => {
  const res = await fetch(
    "https://" +
      process.env.SERP_API_ENDPOINT +
      "?engine=google_news" +
      "&no_cache=true" +
      `&topic_token=${process.env.SERP_API_TOPIC_TOKEN}` +
      `&api_key=${process.env.SERP_API_KEY}`,
    { cache: "force-cache" }
  );
  const data = await res.json();
  return data.news_results;
};
export const GET = async () => {
  const results = await newsEndpoint();
  return Response.json(results);
};
