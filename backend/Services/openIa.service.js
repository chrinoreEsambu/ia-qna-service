require("dotenv").config({ quiet: true });

class OpenServices {
  async hollo(question) {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MISTRA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `Explique moi en 1 paragrphe comme un gosse de 18 ans le : ${question}`,
          },
        ],
        model: "mistral-large-latest",
      }),
    });

    const data = await response.json();
    return data;
  }
}

module.exports = new OpenServices();
