import React, {Component} from 'react';
import PropTypes from 'prop-types';

list.propTypes = {
    handledellist: PropTypes.func,
    txt: PropTypes.string,
    li: PropTypes.array
};


    function list(props) {
        let number = props.txt;
        let index = Date.now();
        let v_list = props.li.map(function(number, index) {
            return <li key={index} onClick={() => props.handleClick(number)}>
                {number}
            </li>;
        });

        return v_list;

            }
            
            
            





export default list;