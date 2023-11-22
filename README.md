Create project directory locally and new respority in github

Navigate to project directory and run npm install

Then cd supermarket-app

npm start

Clear unnessary code

Check packages ensure the development server is working

Begin to organise and create folders, one folder for assets, one for components. In components, create folders for Header, ProductDetail, ProductList, Basket. Along with css in those folders


In ProductList.js - removed unnecessary props from ProductDetail component and directly called the Basket component without passing unnecessary props.


In Basket.js - removed the dependency on the onRemoveFromBasket prop - dispatched the REMOVE_FROM_BASKET action directly within the handleClick function.
