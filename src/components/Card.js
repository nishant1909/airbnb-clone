export default function Card(props) {

    let badgetext = "Available";
    if(props.openspots === 0){
        badgetext  = "SOLD OUT"
    }else if(props.location === "Online"){
        badgetext = "ONLINE"
    }
    return (

        <div className="card">
            <div class="card-badge">{badgetext}</div>
            <img src={props.image} />&nbsp;
            <p><b>{props.title}</b></p>

            <p>⭐ {props.rating} ({props.reviewcount}) {props.location}</p>

            <p>${props.price}/person</p>

        </div>
    );
}