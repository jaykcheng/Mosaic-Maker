import '../App.css';
import './settings.css';
import home from "./home.module.css";
import React from 'react';
import logo from "../assets/MosaicMakerLogo.png";
import Menu from "../Component/Menu";
import Rectangles2 from './rectangles2';
import {Link} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount(){
    // Load from flask api the images...
    fetch(`/home/images`, {credentials: 'include'})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    results : result
                })
                console.log(result)
            },
            (error) => {}
        )
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }
    render() {
        return (
            <div className={home.home}>
                <header className={home.header}>
                    <Rectangles2/>
                    <img className={home.logo} src={logo} alt="logo"/> 
                    <div className={home.titleBG}></div>
                    <text className = {home.BannerText}>Mosaic Maker</text>
                    <div className = {home.Border}></div>
                </header>
                <div className={home.submission}>
                  <div className={home.tabs}>
                    <Link to = "/home/upload" style={{ textDecoration: 'none' }}>
                      <div className={home.uploadboxselected} >
                        <text className={home.uploadtext}>UPLOAD</text>
                      </div>
                    </Link>
                    <Link to = "/home/keyword" style={{ textDecoration: 'none' }}>
                      <div className={home.keywordbox}>
                        <text className={home.keywordtext}>KEYWORD</text>
                      </div>
                    </Link>
                    <Link to = "/home/random" style={{ textDecoration: 'none' }}>
                      <div className={home.randombox}>
                        <text className={home.randomboxtext}>RANDOM</text>
                      </div>
                    </Link>
                  </div>
                  <div className={home.background}>
                    <form className={home.uploadfield} enctype="multipart/form-data" method = "post">
                      <div className={home.selections}>
                        <input type="file" className={home.uploadinput} name = "img"></input>
                      </div>
                      <div className={home.selections}>
                        <text className={home.description}>Accepted file types: .png, .jpg, .jpeg</text>
                      </div>
                      <div className={home.selections} onChange={this.onChangeValue}>
                        <input type="radio" name="privacy" value="public" className={home.public} checked = "checked"/><text className={home.publictext}>Public</text>
                        <input type="radio" name="privacy" value="private" className={home.private}/> <text className={home.privatetext}>Private</text>
                        <br></br>
                        <button className={home.submit} type = "submit">
                          <text className={home.submittext}>SUBMIT</text>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={home.Border2}></div>
                <div className={home.recentimages}>
                  <div className={home.recentimagestab}>
                    <div className={home.recentimagesbox}>
                      <text className={home.recentimagestext}>RECENT IMAGES</text>
                    </div>
                  </div>
                  <div className={home.recentimagesBG}>
                    {this.state.results.map (
                      (image) =>
                          <div className= "image">
                              <a href = {`/view/id/${image.imageID}`}>
                                  <img src={`/id/${image.imageID}`} alt={`${image.imageID}`} className="homeimages"/>
                              </a>
                          </div>
                      )
                    }
                  </div>
                </div>
                <Menu />
            </div>
        );
    } 
}

export default Home