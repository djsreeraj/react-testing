import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test text in app", ()=> {
    render(<App />)
    const text = screen.getByText("Welcome to React Testing")
    expect(text).toBeInTheDocument();
    
})

