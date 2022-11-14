import React, { useEffect } from "react"

export default function Meme() {

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json()).then((e) => setAllMemes(e.data.memes))
    }, [])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="container my-2">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Top text"
                            className="form-control col-6"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            placeholder="Bottom text"
                            className="form-control col-6"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="form--button col-12"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="random-meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}