import React from 'react';

//create your first component
export default class File extends React.Component{
    
    render(){
        return (
            <div className="conatiner">
                <style>{'body { background-color: black;}'}</style>
                <div className="contentTodo justify-content-center">
                    <style>{'div .contentTodo {   width: 50%;  height: 680px;  margin: 0 auto;  background: #f7f7f7;  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);}'}</style>
                    <div className="display-2 ">
                        <h1>todos</h1>
                        <style>{'h1 { text-align:center; width:100%; margin:0; color: gray; font-size:100px; padding: 30px; line-height:100%;}'}</style>
                    </div>
                    <div className="todo shadow-sm pb-2 mb-5 bg-white rounded">
                        <style>{'div .todo { width: 530px; margin-top: 50px; margin-left: 70px;}'}</style>
                        <div className="shadow-sm pb-2 bg-white ">
                            <div className="shadow-sm pb-2 bg-white ">
                                <input className="addToDo px-3" type="text" placeholder="What needs to be done?"></input>
                                <style>{'input { width: 100%; height: 57px; border: none;}'}</style>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                     Cras justo odio
                                        <button type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                     Cras justo odio
                                        <button type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </li>                                    
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                     Cras justo odio
                                        <button type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </li>
                                </ul> 
                                <small className="p-2">1 item left</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
