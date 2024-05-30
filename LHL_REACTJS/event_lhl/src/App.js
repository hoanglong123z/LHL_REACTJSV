import React, { Component } from 'react'
import LHLProductJS from './Component/LHLProductJS';
import LHLProductAddOrEdit from './Component/LHLProductAddOrEdit';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Siêu Nhân Xanh - Hà Quốc Thành', id: 2210900039, Active:true},
        {title: 'Siêu Nhân Đỏ - Lê Hoàng Long', id: 2210900037, Active:false},
        {title: 'Siêu Nhân Hồng - Ngô Hoàng Minh', id: 2210900044, Active:true},
        {title: 'Siêu Nhân TinyMeo - Lê Trần Khánh Duy', id: 2210900020, Active:true},
      ],
      product: "",
      flag:true
    } 
  }
  lhlhandleSubmit = (param)=>{
    console.log("App:",param);

    let {products} = this.state;
    if(param.flag === true){
    products.push(param);
    this.setState({
      products:products
     })
   }else{
    for (let index = 0; index < products.length; index++) {
      if(products[index].id === param.id){
        let product = {
          id:param.id,
          title:param.title,
          Active:param.Active
        }
        products[index] = product;
      }
    }
    this.setState({
      products:products
    })
   }
  }
  lhlhandleEdit =(products)=>{
    console.log("App-Edit:",products)
    this.setState({
      products:products,
      flag:false
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Lê Hoàng Long - Event Form - Render Data</h1>
        <LHLProductJS renderProducts={this.state.products} lhlOnleEdit={this.lhlhandleEdit}/>
        <hr/>
        <LHLProductAddOrEdit onSubmit = {this.lhlhandleSubmit}
        renderProducts = {this.state.products} renderflag={this.state.flag}/>
      </div>
    )
  }
}
export default App;