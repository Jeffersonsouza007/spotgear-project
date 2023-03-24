import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProductsList from "../components/ProductsList";
import ProductCreate from "../components/ProductCreate/Index";

export default function Products() {
  const handleSave = (product: { name: string; code: string }) => {
    console.log("Product saved:", product);
  };

  const handleCancel = () => {
    console.log("Product creation cancelled.");
  };
  return (
    <>
      <Header />
      <Navigation title="PRODUTOS" />
      <ProductCreate onSave={handleSave} onCancel={handleCancel}/>
      <ProductsList />
      <Footer />
    </>
  );
}