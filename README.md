# E-commerce_API


🔗Hosted link = https://e-commerce-api-wvk0.onrender.com/products


✅ ABOUT:-
➡️ This is an E-commerce API made using Node.Js & MongoDB. 

✅STEPS TO USE THE API:-
1) run "npm install" command on terminal to install all the packages
2) start the server using "npm start"
3) Open postman
4) Make a GET request on localhost:4000/products
5) The products should be visible

✅STEPS TO CREATE A NEW PRODUCT:-
1) start the server using "npm start"
2) Open postman
3) put localhost:4000/products/create as the url. 
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) Make a POST request.
7) If you recieve the message saying new product added successfully then you have done everything correct.
8) The product is created. Check it out by making a GET request at localhost:4000/products

✅STEPS TO DELETE A PRODUCT:-
1) copy the object id of the product you want to delete.
2) add the id after localhost:4000/products/
3) Make a DELETE request.
4) You will recieve a message saying deleted successfully.

✅STEPS TO UPDATE THE QUANTITY OF A PRODUCT:-
1) Copy the object id of the product whose quantity you want to update
2) Put the id after localhost:4000/products/
3) After putting the id add /update_quantity/?number={x} in the url where x is the number by which you want to increase or decrease the quantity.
4) the url should be looking like localhost:4000/products/{id}/update_quantity/?number={x}
5) Make a POST request and you should get a message containing the update product


✅ TECHSTACK:-
➡️ Node.Js, MongoDB
