
export default function TeamCard({ description, name, position, image }) {
  return <div className="team animated" data-animate="fadeInUp" data-delay=".2">
    <div className="team-photo">
      <img src={image} alt="team" width={700}  height={700}/>
      <a href={null} className="team-show content-popup" />
      <ul className="team-social">
        <li>
          <a href="#">
            <em className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="#">
            <em className="fab fa-facebook-f" />
          </a>
        </li>
      </ul>
    </div>
    <h5 className="team-name title title-sm">{name}</h5>
    <span>{position} </span>
    <span className="team-position">{description}</span>
  </div>;
}
