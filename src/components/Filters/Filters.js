import React from "react";
import ActionButton from "../Button/ActionButton";
import "./Filters.css";


const Filters = (props) => {

    const {
        top10ByRevenueActive,
        top10RevenuePerYearActive,
        onTop10RevenueClicked,
        onTop10RevenuePerYearClicked,
        onRefresh
    } = props;

    return (
        <div className="Filters-container">
            <div className="Filters-spacing">
                <ActionButton
                    onClick={onTop10RevenueClicked}
                    label="Top 10 Revenue"
                    active={top10ByRevenueActive}
                />
            </div>
            <div className="Filters-spacing">
                <ActionButton
                    onClick={onTop10RevenuePerYearClicked}
                    label="Top 10 Revenue per Year"
                    active={top10RevenuePerYearActive}
                />
            </div>
            {
                top10ByRevenueActive || top10RevenuePerYearActive ?
                    (
                        <div onClick={onRefresh} className="Filters-repeat">
                            <img src={require('../../image/repeat.png')} alt="Repeat not working"/>
                        </div>
                    )
                :
                    null
            }
        </div>
    );
}

export default Filters;