import React from 'react'
import { Modal, Button, Carousel } from 'antd'

class ShowPics extends React.Component{
    info = () => {
        Modal.info({
            title: '',
            iconType: 'false',
            width: '800px',
            okText: 'ok',
            content: (
                <div style={{width: 650, height: 400, lineHeight: 400, textAlign: "center"}}>
                    <Carousel autoplay={true}>
                    {
                        this.props.pics.split(',').map((item, index) => {
                            return <div><img style={{maxWidth: 600, maxHeight: 400, margin: "0 auto"}} src={item}/></div>
                        })
                    }
                    </Carousel>
                </div>
            ),
            onOk() {},

        });
    }
    constructor(props) {
        super(props);
        this.state = {
            bthDisabled: this.props.pics ? false : true
        }
    }

    render(){
        return (
            <div>
                <Button disabled = {this.state.btnDisabled} icon = "picture" shape="circle" onClick={()=>{this.info()}}/>
            </div>
        )
    }
}

export default ShowPics;