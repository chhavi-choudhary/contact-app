import "./Contact.css";


function Contact({ isOnline,name,image }) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={image}
        alt="avatar"
      />
      <div>
        <div className="name">{name}</div>
        <div className="status">
          <div className={isOnline ? "status-online" : "status-offline"}></div>
          <div className="status-text">{isOnline ? "online" : "offline"}</div>
        </div>
      </div>
    </div>
  );
}
export default Contact;