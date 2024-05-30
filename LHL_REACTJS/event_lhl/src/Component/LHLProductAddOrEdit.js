import React, { Component } from 'react';
class LHLProductAddOrEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:  1,
            title: 'Cabbage',
            ACtive: true,
            flag:true,
        };
    }
    componentWillUnmount=()=>{
        let {renderProducts} = this.props;
        console.log("renderProducts:" , renderProducts);
        if(renderProducts !=null){
            this.setState({
                title : renderProducts.title,
                id: renderProducts.id,
                active : renderProducts.active,
            })
        }
    }
    componentWillReceiveProps = (NextProps)=>{
        let {renderProducts} = NextProps;
        this.setState({
            title : renderProducts.title,
            id: renderProducts.id,
            active : renderProducts.active,
            flag:false
        })
    }
    lhlhandleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    lhlhandleSubmit = (ev) =>{
        ev.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
        let elementbutton = "Thêm Mới";
        if(this.state.flag === false){
            elementbutton = "Cập Nhật";
        }
        return (
            <div>
                <h2>Thêm Mới Sản Phẩm</h2>
                <form className='col-md-6'>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">ID</span>
                        <input type="text" class="form-control" placeholder="Username" 
                               className="form-control"
                               name='id'
                               value={this.state.id}
                               onChange={this.lhlhandleChange}
                               aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Title</span>
                        <input
                            type="text"
                            className="form-control"
                            name='title'
                            value={this.state.title}
                            onChange={this.lhlhandleChange}
                            aria-label='title' aria-describedby='basic-addon2'
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">Active</span>
                        <select 
                            className="form-control"
                            name='Active'
                            value={this.state.status}
                            onChange={this.lhlhandleChange}>
                            <option value={true}>Hiển Thị</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>
                    <button onClick={this.lhlhandleSubmit} className='btn btn-success'>{elementbutton}</button>
                </form>
            </div>
        )
    }
}

export default LHLProductAddOrEdit;
