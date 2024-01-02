import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
function page() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#5B20B6] text-center">
          Get Artistic Prints
        </h1>
        <p className="text-center text-xl text-gray-500">
          Evaluate Your Space with stunning art prints , transform Surrounding
        </p>
      </div>
      <div className="p-10">
        <div className="max-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
