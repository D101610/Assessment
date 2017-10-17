import React from 'react';

//left catefory
export default class StaffDetail extends React.Component{
    render(){
        let staffDetail = this.props.staffDetail;
        if(!staffDetail)
            return null;
        return (
            <div id="leftContent">
                <div  id="catalogueID"  align="center">
                    <h3 align="center">Catalogue</h3>
                    <ul >
                        <li>Man's</li>
                        <li>Woman's</li>
                    </ul>
                </div>
            </div>
        );
    }
}