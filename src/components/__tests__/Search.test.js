import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../../mocks/mockRestaurantList.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render Body Component with Search",async()=>{
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
     </BrowserRouter>
    ))
    const searchButton=screen.getByRole("button",{name:"Search"})
    expect(searchButton).toBeInTheDocument()
})
it("should show cards before Search",async()=>{
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
     </BrowserRouter>
    ))
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length>0)
})
it("should show cards after Search",async()=>{
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
     </BrowserRouter>
    ))
    const searchButton=screen.getByRole("button",{name:"Search"})
    const searchInput=screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"Pizza"}})
    fireEvent.click(searchButton)
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length>0)
})

it("should render Body Component with Top Rated Restaurant",async()=>{
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
     </BrowserRouter>
    ))
    const searchButton=screen.getByRole("button",{name:"Top Rated Restaurant"})
    expect(searchButton).toBeInTheDocument()
})
it("before filter Top Rated Restaurant",async()=>{
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
     </BrowserRouter>
    ))
    const searchButton=screen.getByRole("button",{name:"Top Rated Restaurant"})
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length>0)
})
it("should filter Top Rated Restaurant",async()=>{
    await act(async()=> render(
        <BrowserRouter>
         <Body/>
     </BrowserRouter>
    ))
    const searchButton=screen.getByRole("button",{name:"Top Rated Restaurant"})
    fireEvent.click(searchButton)
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length>2)
})