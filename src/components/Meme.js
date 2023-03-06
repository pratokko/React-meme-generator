import React, { useState, useEffect } from "react";

// import memesData from "./memesData";

function Meme() {
  // const [memeImage, setMemeImage] = useState("");
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  });

  const getMemeImage = () => {
    
    const randomNum = Math.floor(Math.random() * allMemes.length);
    // const url =
    setMemeImage((prevState) => ({
      ...prevState,
      randomImage: allMemes[randomNum].url,
    }));
  };

  function handleForm(event) {
    const { name, value } = event.target;
    setMemeImage((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="shut up"
          className="form--input"
          name="topText"
          value={memeImage.topText}
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="take my money"
          className="form--input"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleForm}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="form--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
