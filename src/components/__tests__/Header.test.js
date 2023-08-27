import {fireEvent, render,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";
it("should load Header component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
    const loginButton= screen.getByRole("button",{name:"Login"})
    expect(loginButton).toBeInTheDocument();
})
it("should load Header component with a cart item 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
    const loginButton= screen.getByText("Cart(0)")
    expect(loginButton).toBeInTheDocument();
})
it("should change Login button to Logout on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
    const loginButton= screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const logoutButton=screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument();
})