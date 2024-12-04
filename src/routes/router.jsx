import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWishList from "../pages/GameWishList";
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../pages/ReviewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: '/reviews',
        element: <AllReviews></AllReviews>,
        loader: ()=> fetch('http://localhost:5000/reviews')
      },
      {
        path: '/review/:id',
        element: <ReviewDetails></ReviewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
      },
      {
        path: '/addReview',
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: '/myWishlist',
        element: <PrivateRoute><GameWishList></GameWishList></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
