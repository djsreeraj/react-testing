import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test text in app", ()=> {
    render(<App />)
    //const text = screen.getByText("Welcome to React Testing") //case sensitive
    const text = screen.getByText(/Welcome to React Testing/i) //case insensitive
    const text2 = screen.getByText("Photo by Freepik")
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument()
})

test("title text in App", () => {
    render(<App />)
    const title = screen.getByTitle("AI generated image")
    expect(title).toBeInTheDocument()
})

