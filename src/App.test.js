import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test text in app", ()=> {
    render(<App />)
    //const text = screen.getByText("Welcome to React Testing") //case sensitive
    const text = screen.getByText(/Welcome to React Testing/i) //case insensitive
    expect(text).toBeInTheDocument();
    
})

