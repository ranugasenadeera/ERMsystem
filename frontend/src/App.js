import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AddOther from './components/AddOther';
import AllOther from './components/AllOther';
import FinanceDash from './components/financeDash';
import AddProfit from './components/AddProfit';
import ProfitDetails from './components/viewProfit';
import UpdateProfit from './components/editProfit';
import TaxDetails from './components/viewTax';
import AddTax from './components/addTax';


import UpdateOther from './components/updateOther';
import Supplier from './components/supplier';
import AddSupplier from './components/addSupplier';
import AddPurchaseOrder from './components/addPurchaseOrder';
import Trainees from './components/Trainee';
import CustomerR from './components/Customer';
import UpdateCustomer from './components/UpdateCustomer';

//billing
import Bill from './components/billingcomponents/bill';
import CreateBill from './components/billingcomponents/createBill';
import UpdateBill from './components/billingcomponents/updateBill';
//discount
import Discounts from './components/discountComponents/Discount';




function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <br></br>
      <br></br><br></br>
      <br></br>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/otherExpense/add" element={<AddOther/>}/>
        <Route path="/otherExpense" element={<AllOther/>}/>
        <Route path="/otherExpense/update/:id" element={<UpdateOther/>}/>
        <Route path="/finance" element={<FinanceDash/>}/>
        <Route path="/profit/:month" element={<AddProfit/>}/>
        <Route path="/profit/get/:id" element={<ProfitDetails/>}/>
        <Route path="/profit/update/:id" element={<UpdateProfit/>}/>
        <Route path="/tax/get/:id" element={<TaxDetails/>}/>
        <Route path="/tax/:epfetf" element={<AddTax/>}/>
        <Route path="/supplier" element={<Supplier/>}/>
        <Route path="/supplier/add" element={<AddSupplier/>}/>
        <Route path="/purchaseOrder/add" element={<AddPurchaseOrder/>}/>
        <Route path="/Customer" element={<CustomerR/>}/>
        <Route path="/Customer/update/:id" element={<UpdateCustomer/>}/>
        <Route path="/trainee" element={<Trainees/>}/>
        <Route path="/bill" element={<Bill/>}/>
        <Route path="/bill/CreateBill" element={<CreateBill/>}/>
        <Route path="/bill/update/:id" element={<UpdateBill/>}/>
         <Route path="/bill/discounts" element={<Discounts/>} />

      </Routes>  
    
  </div>
  </BrowserRouter>
    
  );
}

export default App;