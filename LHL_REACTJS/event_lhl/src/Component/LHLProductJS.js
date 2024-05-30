import React, { Component } from 'react'

class LHLProductJS extends Component {

    lhlHandleEdit = (product) => {
        console.log("Edit:",product)
        this.props.lhlOnleEdit(product);
    }
  render() {
    let {renderProducts} = this.props
    console.log("App",renderProducts);
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.status===1?'Active':'NonActive'}</td> */}
                    <td>
                        {item.Active?'Hiển Thị' : 'Ẩn'}
                    </td>  
                    <td>
                    <button  className="btn btn-success mx-1"
                    name='lhlBtnEdit'
                    onClick={()=>this.lhlHandleEdit(item)}
                    ><i class="fa-regular fa-pen-to-square"></i></button>
                    <button  className="btn btn-danger mx-1"
                    name='lhlBtnDelete'
                    ><i class="fa-solid fa-trash"></i></button>
                    </td>

                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh Sách Sản Phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {elementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}
export default LHLProductJS;