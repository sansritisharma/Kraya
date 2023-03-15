function Anchor (props) {
    const {classText,anchorText, href} = props;
    return (
        <a className={classText} href={href} >{anchorText}</a>
    )
};
export default Anchor;