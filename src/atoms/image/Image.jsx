function Image (props) {
    const {classText, src, altText} = props;
    return (
        <img className={classText} src={src} alt={altText} />
    )
};
export default Image;