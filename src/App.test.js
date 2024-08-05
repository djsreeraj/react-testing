import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test text in app", ()=> {
    render(<App />)
    //const text = screen.getByText("Welcome to React Testing") //case sensitive
    const text = screen.getByText(/Welcome to React Testing/i) //case insensitive

    const title = screen.getByTitle("AI generated image")
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument()
    
})

