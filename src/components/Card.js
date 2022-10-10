export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} />
            <p>⭐ {props.rating} ({props.reviewcount}) {props.country}</p>
            &nbsp;
            <p>${props.price}/person</p>
            <p><b>Life lessons with Katie Zaferes</b></p>
        </div>
    );
}