import React from "react";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

    return (
        <div className="Pagination">
            <button onClick={onLeftClick}>◀️</button>
            <div class="pages-number">{page} de {totalPages}</div>
            <button onClick={onRightClick}>▶️</button>
        </div>
    )
}

export default Pagination