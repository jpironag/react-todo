//import react into the bundle
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  value: '',
                  txt: '',
                  li: [],
                  counter: 0
                  };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({txt: event.target.value});
    if (event.key === 'Enter') {
      if (this.state.value === '') return ;
        let temp = this.state.li;
        temp.push(this.state.txt);
        this.setState( {value: '',
                        txt: '',
                        li:temp,
                        counter: this.state.li.length} );               
                        }
                }
  
  handleSubmit(event) {
    event.preventDefault();
    }
  
  handledellist(index){
    var arraytemp = this.state.li;
    arraytemp.splice(index,1);
    this.setState( {li: arraytemp,
                    counter: this.state.li.length} );
    }
  
    render() {
        return  (<div className="conatiner">
            <style>{'body { background-color: black;}'}</style>
            <div className="contentTodo justify-content-center">
                <style>{'div .contentTodo {   width: 50%;  height: 680px;  margin: 0 auto;  background: #f7f7f7;  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);}'}</style>
                <div className="display-2 ">
                    <h1 className="display-2">todos</h1>
                    <style>{'h1 { text-align:center; width:100%; margin:0; color: gray; font-size:100px; padding: 30px; line-height:100%;}'}</style>
                </div>
                <div className="todo shadow-sm pb-2 mb-5 bg-white rounded">
                    <style>{'div .todo { width: 530px; margin-top: 50px; margin-left: 70px;}'}</style>
                    <div className="shadow-sm pb-2 bg-white ">
                        <div className="shadow-sm pb-2 bg-white ">
                            <input className="addToDo sm-3 px-3" type="text" value={this.state.value} onChange={this.handleChange} placeholder="What needs to be done?" onKeyPress={this.handleChange}/>
                            <style>{'input { width: 100%; height: 57px; border: none;}'}</style>
                            <ul className="list-group">
                                <style>{'input { width: 100%; height: 57px; border: none;}'}</style>
                                {this.state.li.map((value, index) => {
                                    return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                        {value}
                                        <button type="button" className="close" aria-label="Close" onClick={()=>this.handledellist(index)}>
                                            <span className="close" aria-hidden="true">&times;</span>
                                        </button>
                                    </li>;
                                    })
                                }
                            </ul>
                            <small className="p-2">{this.state.counter} item left</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
  }
}