class Youtube {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async mostPopular() {
    const response = await this.client.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
