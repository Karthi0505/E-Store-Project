import { createSlice } from "@reduxjs/toolkit";
import { Shop1, Shop2, Shop3, Shop4, Shop5, Shop6 } from "../../../assets/Utils/Images";

const initialState = [
    {
      id: 1,
      pName: "Leather Jacket",
      pPrice: 45,
      img: Shop1,
    },
    {
      id: 2,
      pName: "Watch",
      pPrice: 50,
      img: Shop2,
    },
    {
      id: 3,
      pName: "Sunglass",
      pPrice: 20,
      img: Shop3,
    },
    {
      id: 4,
      pName: "Bag",
      pPrice: 10,
      img: Shop4,
    },
    {
      id: 5,
      pName: "Denim",
      pPrice: 45,
      img: Shop5,
    },
    {
      id: 6,
      pName: "Leather Jacket",
      pPrice: 100,
      img: Shop6,
    },
  ];

const productSlice = createSlice({
    name: "Product",
    initialState
});

export default productSlice;
