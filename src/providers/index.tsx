import ProductsProvider from "@/context/ProductsContext"

function Providers({children} : {children : React.ReactNode}) {
  return (
    <ProductsProvider>
        {children}
    </ProductsProvider>
  )
}

export default Providers