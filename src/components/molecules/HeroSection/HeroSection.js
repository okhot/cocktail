import React, { setState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../HeroSection/HeroSection.css";
import NavBar from "../NavBar/NavBar";

export default function HeroSection() {
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const letter = e.target.value;
    const url = `www.thecocktaildb.com/api/json/v1/1/search.php?f=a` + letter;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ cocktails: data }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?searchTerm=${e.target.search.value}`);
  };

  useEffect(() => {}, []);

  return (
    <div className="Herosection">
      <NavBar />
      <div className="hero__text">
        <h1>ENJOY</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Mi
          mauris arcu aenean in <br /> mauris elementum sed non. In sapien enim
        </p>
        <form onSubmit={submitHandler} className="input">
          <input placeholder="SEARCH COCKTAILS" name="search" className="searchbar" />
        </form>
      </div>
    </div>
  );
}
