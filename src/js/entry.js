require('../css/backdrop.css');
import React from 'react';
import ReactDom from 'react-dom';
import Search from './Components/Search.js';
import ProductTable from './Components/ProductTable.js';
var PRODUCTS = [
        {category:"Sports Goods",price:"$49.49",stocked:true,name:"football"},
        {category:"Sports Goods",price:"$39.99",stocked:true,name:"basketball"},
        {category:"Sports Goods",price:"$28.88",stocked:true,name:"badminton"}, 
        {category:"Sports Goods",price:"$48.88",stocked:false,name:"volleyball"},
        {category:"Sports Goods",price:"$18.88",stocked:true,name:"ping-pong"},
        {category:"Sports Goods",price:"$58.88",stocked:false,name:"golfball"},
        {category:"electronic",price:"$177.88",stocked:true,name:"huawei"},
        {category:"electronic",price:"$123.88",stocked:true,name:"oppo"}, 
        {category:"electronic",price:"$121.99",stocked:false,name:"vivo"}, 
        {category:"electronic",price:"$111.88",stocked:true,name:"meizu"},
        {category:"electronic",price:"$88.88",stocked:true,name:"nubia"},
        {category:"electronic",price:"$66.66",stocked:false,name:"iphone"}   
     ];
var App = React.createClass({
    getInitialState: function (){ //初始化状态
        return {
            onlyShowStocked: false,
            filterText:''
        }
    },
    changeShowStocked: function (){
        this.setState({
            onlyShowStocked: !this.state.onlyShowStocked
        });
    },
    changeFilterText: function (text){
        this.setState({
            filterText:text
        })
    },
    render: function (){
        return (
            <div>
                <Search changeFunc={this.changeShowStocked} changeText={this.changeFilterText}></Search>
                <ProductTable products={this.props.products} onlyShowStocked={this.state.onlyShowStocked} filterText={this.state.filterText} ></ProductTable>
            </div>
        )
    }
});

ReactDom.render(
    <App products={PRODUCTS}></App>,
    document.getElementById('root')
);