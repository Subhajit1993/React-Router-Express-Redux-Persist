import React, {Component} from 'react'
import * as permissionPageActions from '../../actions/permission'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
const axios = require('axios');
const ChildPage = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-2">
                        <label>Select Parent Page {props.parents}</label>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Page/Url Name"/>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )

}
class Permission extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            parents:null
        }
    }
    componentDidMount(){
        axios.get('/getAllParents').then(function (res) {
            console.log(res.data)
        })
    }

    handleChange = (event, type) =>{
        console.log(this.props.permission, event.target.value)
    };

    submitNewPage = () =>{
        const pageId = document.getElementById('page-id').value;
        const pageName = document.getElementById('page-name').value;
        const pageUrl = document.getElementById('page-url').value;
        const isChild = document.getElementById('isParent').checked;
        console.log(pageId, pageName,pageUrl, isChild)
    }
    render(){
        return (
            <section className="content">
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">Permission Management</h3>
                    </div>
                    <div className="box-body">
                        <div className="row">
                            <div className="col-md-2">
                                <label>Page Name</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="page-name" value={this.props.permission.page_name} onChange={(event)=>{this.props.permissionFieldsChanged(event.target.value, 'NAME_CHANGED')}} placeholder="Page/Url Name"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Page Id</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="page-id" value={this.props.permission.page_id} onChange={(event)=>{this.props.permissionFieldsChanged(event.target.value, 'PAGE_ID_CHANGED')}} placeholder="Page/Url Id"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Page Url</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="page-url" value={this.props.permission.page_url} onChange={(event)=>{this.props.permissionFieldsChanged(event.target.value, 'PAGE_URL_CHANGED')}} placeholder="Page Url"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <label>This is Child Page?</label>
                            </div>
                            <div className="col-md-1">
                                <input className="form-check-input" id="isParent" checked={this.props.permission.checkBoxClicked} onChange={()=>{this.props.checkBox(this.props.permission.checkBoxClicked)}} type="checkbox"/>
                            </div>
                        </div>
                        {this.props.permission.checkBoxClicked ? (
                            <ChildPage parents = {this.state.parents}/>
                        ) : (
                            null
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.submitNewPage}>Submit Page Details</button>
                    </div>
                </div>
            </section>
        )
    }

};

function mapStateToProps(state)
{
    return{
        permission:state.permission
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({...permissionPageActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Permission)