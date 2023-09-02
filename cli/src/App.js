// App.js
import React from "react";
import DataProvider from "./context/DataProvider";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import DetailsView from "./Components/details/DetailsView";
import Cart from './Components/cart/Cart';
import { Box } from "@mui/material";
import { BrowserRouter ,Routes ,Route} from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        
          <Header />
          
          <Box style={{ marginTop: 54 }}>
            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/product/:id" element={<DetailsView/>}/>
               <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
