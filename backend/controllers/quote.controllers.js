// Função para obter a lista de cotações de todas as ações
export const listQuotes = async (req, res) => {
  try {
    // Obtém o token do arquivo.env
    const apiToken = process.env.BRAPI_API_TOKEN;

    if (!apiToken) {
      return res.status(500).json({
        success: false,
        error: "Token de API não configurado",
      });
    }

    // Obtém a URL da API externa
    const quoteListURL =
      String(process.env.QUOTE_LIST_URL) || "https://brapi.dev/api/quote/list";

    // Faz a requisição para a API externa
    const response = await fetch(quoteListURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
    });

    // Verifica se a resposta é bem-sucedida
    if (!response.ok) {
      throw new Error(
        `Erro na API externa: ${response.status} ${response.statusText}`
      );
    }

    // Converte a resposta par JSON
    const data = await response.json();

    // Retorna os dados para o cliente
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Erro ao chamar API externa:", error.message);

    return res.status(500).json({
      success: false,
      message: "Erro ao buscar dados da API externa",
      error: error.message,
    });
  }
};
