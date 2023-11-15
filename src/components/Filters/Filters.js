import React from "react";
import ActionButton from "../Button/ActionButton";
import "./Filters.css"


const Filters = (props) => {

    const {
        top10ByRevenueActive,
        top10RevenuePerYearActive,
        onTop10RevenueClicked,
        onTop10RevenuePerYearClicked
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
                /**
                 * If revenue per year activated we need to change label of that button above "Top ten Revenue 2011"
                 * and we need to show additional reload button
                 *
                 * <ActionButton />
                 */
            }
        </div>
    );
}

export default Filters;