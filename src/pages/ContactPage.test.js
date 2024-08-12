import { fireEvent, render, screen } from "@testing-library/react"
import ContactPage from "./ContactPage"


test('button test ', () => {
  
    render(<ContactPage />)

    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(screen.getByText("Updated Data")).toBeInTheDocument();
})
