PseudoCode:-
Soluton:-

1.Start
2.Initialize variables: cart (empty list),choice, productId, productName, image, price, quantity

3.Define addToCart
1. Initialize a shopping cart as an empty array.
2. Define functions for cart operations:
3.Function AddToCart(productId, productName, image, price, quantity)
4.IF quantity > 0 AND price > 0 
5.    IF productId EXISTS in cart 
6.        Update quantity of productId in cart
7.   ELSE
        Add {productId, productName, image, price, quantity} to cart
    ENDIF
    Display "Item added successfully!"
    ELSE
    Display "Invalid price or quantity!"
    ENDIF
  END FUNCTION
  
Function RemoveFromCart(productId)
  IF productId EXISTS in cart 
    Remove productId from cart
    Display "Item removed successfully!"
  ELSE
    Display "Item not found in cart!"
  ENDIF
END FUNCTION

Function CalculateTotalPrice()
 Set totalPrice = 0
 FOR EACH item in cart DO
    totalPrice = totalPrice + (item.price * item.quantity)
 ENDFOR
Display "Total cart price: " + totalPrice
RETURN totalPrice
END FUNCTION

Function CalculateAveragePrice()
Set totalPrice = 0
Set totalQuantity = 0
FOR EACH item in cart DO
    totalPrice = totalPrice + (item.price * item.quantity)
    totalQuantity = totalQuantity + item.quantity
ENDFOR
IF totalQuantity == 0 THEN
    RETURN 0
ELSE
    RETURN totalPrice / totalQuantity
ENDIF
END FUNCTION

Function FilterProducts(minPrice, maxPrice)
SET filteredCart = []
FOR EACH item in cart DO
    IF item.price ≥ minPrice AND item.price ≤ maxPrice THEN
        Add item to filteredCart
    ENDIF
ENDFOR
RETURN filteredCart
END FUNCTION

 Function SortCart(orderBy, orderType)
IF orderBy == "price" THEN
    Sort cart by item.price in orderType order
ELSE IF orderBy == "name" THEN
    Sort cart by item.name in orderType order
ENDIF
RETURN cart
END FUNCTION

 Function ClearCart()
SET cart = []
Display "Cart has been cleared!"
END FUNCTION

 WHILE TRUE DO
Display "Choose an option: "

Add to Cart

Remove from Cart

View Total Price

View Average Price

Filter Products

Sort Cart

Clear Cart

Exit

Input choice

IF choice == 1 THEN

    Display "Enter Product ID:"

    Input productId

    Display "Enter Product Name:"

    Input productName

    Display "Enter Image URL:"

    Input image

    Display "Enter Price:"

    Input price

    Display "Enter Quantity:"

    Input quantity

    Call AddToCart(productId, productName, image, price, quantity)

ELSE IF choice == 2 THEN

    Display "Enter Product ID to remove:"

    Input productId

    Call RemoveFromCart(productId)

ELSE IF choice == 3 THEN

    Call CalculateTotalPrice()

ELSE IF choice == 4 THEN

    Call CalculateAveragePrice()

ELSE IF choice == 5 THEN

    Display "Enter Min Price:"

    Input minPrice

    Display "Enter Max Price:"

    Input maxPrice

    Call FilterProducts(minPrice, maxPrice)

ELSE IF choice == 6 THEN

    Display "Sort by (price/name):"

    Input orderBy

    Display "Order type (asc/desc):"

    Input orderType

    Call SortCart(orderBy, orderType)

ELSE IF choice == 7 THEN

    Call ClearCart()

ELSE IF choice == 8 THEN

    Display "Exiting shopping cart. Thank you!"

    BREAK

ELSE

    Display "Invalid choice. Please select a valid option."

ENDIF

ENDWHILE

END






