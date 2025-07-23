export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.hostname = "pub-60f391dda5724b80b1bffd5db70fd416.r2.dev";

    const response = await fetch(url.href);
    return new Response(response.body, {
      headers: {
        "Content-Type": "model/gltf-binary",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
