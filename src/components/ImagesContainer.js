/**
 * Created by hilakerer1 on 16/01/2018.
 */
import React, {Component} from 'react';
import * as data from '../common/gallery-data.json';
import '../styles/ImagesContainer.css';

class ImagesContainer extends Component {
    constructor(props){
        super(props);
        var imagesList = data || [];
        this.state = {imagesList: imagesList, index:100};
        this.handleScroll = this.handleScroll.bind(this);
        this.isMobile = navigator.userAgent.indexOf("Mobile") >= 0 ? true : false;
    }
    componentDidMount() {
        //53 is the header size, improve experience detect if it's mobile and change to 27
        this.offset = document.body.offsetHeight - 53;
        window.addEventListener('scroll', this.handleScroll.bind(this), false);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }
    componentDidUpdate(prevProps, prevState){
        this.ticking = false;
    }
    handleScroll(){
        if(((window.innerHeight + window.scrollY) >= this.offset) && !this.ticking){
                this.ticking = true;
                this.setState({index: this.state.index + 100});
                this.offset = document.body.offsetHeight - 53;
        }
    }
    render(){
        const imagesListComponents  = [];
        for(let i=0; i<this.state.index; i++){
            var item = this.state.imagesList[i];
            var style = {backgroundColor: item.prominentColor};
            imagesListComponents.push(
                <div className='item' key={i}  style={style}>
                    <a href={this.isMobile ? item.low_resolution.url : item.standard_resolution.url} target={this.isMobile ? '_self' : '_blank'}><img src={item.thumbnail.url}  /></a>
                </div>);
        }
        return <div className='images-container'>{imagesListComponents}</div>
    }
}

export default ImagesContainer;