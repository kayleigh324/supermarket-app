Create project directory locally and new respority in github

Navigate to project directory and run npm install

Then cd supermarket-app

npm start

Clear unnessary code

Check packages ensure the development server is working

Begin to organise and create folders, one folder for assets, one for components. In components, create folders for Header, ProductDetail, ProductList, Basket. Along with css in those folders.

Call the API through ProductList.js, create logic to handle any errors. Display all items by id and by name.

Create the ProductDetails to show the description when clicked.

Create the Basket.js component to add to Basket.

Create the reducers and actioners, install redux, organise files and create index.js for each.

Update the Basket.js and ProjectList.js to show ensure state is updated when item is added and removed.

When testing the UI, I noticed some data was not behaving as expected in terms of adding the same component, so updated the state logic to ensure the user can add multiple items of the same item.

Added persister to ensure the items remain in Basket when the page is reloaded. Installed npm install redux redux-persist and updated store.js with persister 

const persistedReducer = persistReducer(persistConfig, rootReducer);

Then ensure the store is updated with the logic
const persistor = persistStore(store);


Adding Header.js, ensuring ProductList and Basket are correctly directed in path using React Router and Link

In ProductList.js, removed unnecessary props from ProductDetail and directly called the Basket component without passing unnecessary props.

In Basket.js, removed the dependency on the onRemoveFromBasket prop. REMOVE_FROM_BASKET action directly within the handleClick function.

Added styles with CSS to ensure the layout is responsive when on desktop or mobile

Added ProductDetail.test.js test cases
