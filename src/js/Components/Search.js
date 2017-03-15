import React from 'react';

var Search = React.createClass({
    onHandleChangeText: function (){
        var filterText = this.refs.inp.value;
        this.props.changeText(filterText);
    },
    render: function (){ 
        return(
             <div>
                <input type="text" ref="inp" onChange={this.onHandleChangeText}/>
                <input type="checkbox" onClick={this.props.changeFunc}/>only show products in stock
            </div>
        )
    }
});
export default Search;