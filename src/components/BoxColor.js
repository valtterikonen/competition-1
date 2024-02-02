const BoxColor = (props) => {
    let divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        border: "1px solid black",
        margin: "10px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: props.fontColor,
        textAlign: "center"
    };

    let pStyle = {
        margin: "0"
    };

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')

    return (
        <div style={divStyle}>
            <p style={pStyle}>rgb({props.r},{props.g},{props.b})</p>
            <p style={pStyle}>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    );
}
export default BoxColor;
