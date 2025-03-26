test("Deve retornar status 200", async () => {
  const response = await fetch("http://localhost:5000/api/quotes/list");
  expect(response.status).toBe(200);
});
