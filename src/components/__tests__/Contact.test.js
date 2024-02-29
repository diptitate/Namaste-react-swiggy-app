import { render, screen } from "@testing-library/react";

import Contact from "../Contact";
import "@testing-library/jest-dom"

test("should load contact component", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

test("should load button inside contact component", () => {
    render(<Contact />);

    //const heading = screen.getByRole("heading");

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
});

test("should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");   //select the input box with placeholder name

    //Assertion
    expect(inputName).toBeInTheDocument();
});

test("should load input name inside the contact component", ()=> {
    render(<Contact />);

    //Querying
    const inputName = screen.getByPlaceholderText("name");        

    //console.log(inputBoxes);
    //Assertion

    expect(inputName).toBeInTheDocument();
});

test("should load 2 input boxes on the contact component", ()=> {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");        //will give you both input boxes--for both, use textbox

    console.log(inputBoxes.length);
    //Assertion

    expect(inputBoxes.length).toBe(2);
});
