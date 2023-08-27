import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US test case",()=>{
    test("Should load contact us component",()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    test("Should load button inside contact us component",()=>{
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside contact us component",()=>{
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    })
    
    test("Should load all input name inside contact us component",()=>{
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2)
    })
})
