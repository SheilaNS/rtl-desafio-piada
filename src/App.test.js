import { render } from "@testing-library/react";
import App from "./App";

describe("Teste do App Jokes", () => {
  test('exibe o título "Piadas do Chuck Norris" na tela', () => {
    render(<App />);

  });

  test("exibe o corpo da piada na tela", async () => {

  });
});
