import React from 'react';
import ProductCategory from './ProductCategory.js';
import ProductRow from './ProductRow';

var ProductTable = React.createClass({
    render:function (){
        var products = this.props.products;
        var onlyShowStocked = this.props.onlyShowStocked;
        var filterText = this.props.filterText;
        var row = [];
        var lastCategory = '';
        products.forEach(function (ele,index){
            if(lastCategory != ele.category){
                lastCategory = ele.category;
                row.push(<ProductCategory key={index} category={ele.category}></ProductCategory>)
            }
            if(!(onlyShowStocked && !ele.stocked)){
                if(ele.name.indexOf(filterText)!== -1){  //indexOf 寻找第一次出现子字符串的位置，若没找到则返回-1
                      row.push(<ProductRow key={index + 100} name={ele.name}  stocked={ele.stocked} price={ele.price}></ProductRow>);
                }  
            } 
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {row}  
                </tbody>
            </table>
        )
    }
});
export default ProductTable;