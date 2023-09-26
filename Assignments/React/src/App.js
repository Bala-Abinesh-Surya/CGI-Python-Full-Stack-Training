import React from "react";

// retail shop app
import RetailShopApp from "./exercises/1.retail-app-routing/Nav-Bar-App";

// products api call
import FakeStoreApi from './exercises/2.fake-store-api-call-products/FakeStoreApi'

// form validation
import FormComponent from "./exercises/3.form-validation/Form";

// local storage
import LocalStorage from "./exercises/4.local-storage/LocalStorage";

function App() {
  return ( 
    <FakeStoreApi />
  );
}

export default App;

