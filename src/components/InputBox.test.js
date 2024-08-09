import { fireEvent, render, screen } from "@testing-library/react"
import InputBox from "./InputBox"

test("Test for inputbox", () => {
    render(<InputBox />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'username')

    fireEvent.change(input, {target: {value: 'a'}});
    expect(input.value).toBe('a')

})