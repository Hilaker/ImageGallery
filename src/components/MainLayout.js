/**
 * Created by hilakerer1 on 16/01/2018.
 */
import React, {Component} from 'react';
import ImagesContainer from './ImagesContainer.js';

class MainLayout extends Component {
    render(){
        return (
            <div>
                <div className='title'>Image Gallery</div>
                <ImagesContainer />
            </div>
        )
    }
}

export default MainLayout;