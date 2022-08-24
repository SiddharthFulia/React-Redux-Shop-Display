The useSelector hook allows to access state in any file so its very useful.
In route for product details donot forget to put : in '/product/:productid' as it is needed for useparams to identify it.
While getting the last digit as a string using useParams() donot forget {} as {} makes it a string.Ex: const {productid}=useParams();