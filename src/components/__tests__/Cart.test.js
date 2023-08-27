import { act } from "react-dom/test-utils"
import { fireEvent, render,screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import MOCK_MENU from "../../mocks/mockRestaurantMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"
global.fetch=jest.fn(()=>
Promise.resolve({
    json:()=>Promise.resolve(MOCK_MENU)
})

)
it('should load Restaurant Menu Component',async()=>{
    await act(async()=>render(
        <BrowserRouter>
         <Provider store={appStore}>
             <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
       
   
    ))
    const accordianHeader=screen.getByText("Recommended (19)")
    expect(accordianHeader).toBeInTheDocument()
    fireEvent.click(accordianHeader)
    const items=screen.getAllByTestId("foodItems")
    expect(items.length).toBe(19)
})
it('click add button in Restaurant Menu',async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
             <RestaurantMenu/>
             <Cart/>
        </Provider>
        </BrowserRouter>
        
   
    ))
    const accordianHeader=screen.getByText("Recommended (19)")
    fireEvent.click(accordianHeader)
    const items=screen.getAllByTestId("foodItems")
    expect(screen.getAllByTestId("foodItems").length).toBe(19)
   const addBtns=screen.getAllByRole("button",{name:"Add +"})
   fireEvent.click(addBtns[0])
   expect(screen.getByText("Cart(1)")).toBeInTheDocument()
   expect(screen.getAllByTestId("foodItems").length).toBe(20)
   fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
   expect(screen.getAllByTestId("foodItems").length).toBe(19)
})