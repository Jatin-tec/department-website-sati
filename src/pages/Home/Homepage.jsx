import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown"
import "./style.css"
import { connect } from "react-redux";
import { updateHeaderTitle } from "../../store/actions/headerActionState";

const pages = [
        {
                title: 'Classes',
                path: '/classes'
        }
];

const Homepage = (props) => {
        useEffect(() => {
                (async () => {
                        props.updateHeader(pages);
                })()
        })

        return (
                <div>
                
                        <SpeedDialTooltipOpen />
                </div>
        )
}


const mapDispatchToProps = (dispatch) => {
        return {
                updateHeader: (titles) => dispatch(updateHeaderTitle(titles))
        }
}

export default connect(null, mapDispatchToProps)(Homepage)