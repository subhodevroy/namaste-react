import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockRestaurantcard.json"
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom"
it("should render Restaurant component with props data",()=>{

    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Grameen Kulfi")
    expect(name).toBeInTheDocument()
})