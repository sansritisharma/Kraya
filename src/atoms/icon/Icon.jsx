
function Icon (props) {
    const {classText, count, clickHandler} = props;

    const handleAddToWishList = () => {
        clickHandler()         
    }

    return (
        <>          
            <i className={classText} onClick={handleAddToWishList} >
                {count ? <span className="wish-count">{count}</span> : null}  
            </i>
        </>

    )
};
export default Icon;