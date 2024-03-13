import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(15);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handaleSelect = (course, id) => {
    if (selectedCourseId === id) {
      // If the same course button is clicked again, return without doing anything
      return toast.warn("you don't repeat buy same course");
    }

    // Set the selected course ID
    setSelectedCourseId(id);
    //  * condition on credit
    if (remainingCredit - course.credit < 0) {
      toast.warn("Not enough credit!");
      return;
    }

    const newCart = [...cart, course];
    setCart(newCart);
    const newPrice = price + course.price;
    setPrice(newPrice);
    const newCredit = credit + course.credit;
    setCredit(newCredit);

    const newRemainingCredit = remainingCredit - course.credit;
    setRemainingCredit(newRemainingCredit);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#1C1B1B] text-center py-8">
        Course Registration
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="md:w-2/3">
          <Courses handaleSelect={handaleSelect} selectedCourseId={selectedCourseId}></Courses>
        </div>
        <div className="md:w-1/3">
          <Cart
            cart={cart}
            price={price}
            credit={credit}
            remainingCredit={remainingCredit}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
