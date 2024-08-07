import { render, screen } from "@testing-library/react";
import App from "./App";

describe("text testing", ()=> {
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
})


describe("Test for form elements", () => {
    test("Test input box", () => {
        render(<App />)
        let checkInput = screen.getByRole('textbox');
        let checkInputPlaceHolder = screen.getByPlaceholderText('Enter username')
        expect(checkInput).toBeInTheDocument()
        expect(checkInputPlaceHolder).toBeInTheDocument()
        expect(checkInput).toHaveAttribute('name',"userName")
        expect(checkInput).toHaveAttribute('id', 'userId')
        expect(checkInput).toHaveAttribute('type', 'text')
    })
})



