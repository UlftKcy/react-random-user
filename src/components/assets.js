import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card-body">
      <div className="card-row">
        <img className="rounded-circle mx-auto" src={user.picture.large}></img>
        <p className="card-content">
          {user.name.title} {user.name.first} {user.name.last}
        </p>
      </div>
      <div className="card-row">
        <i class="fas fa-envelope-open-text"></i>
        <p className="card-content">{user.email}</p>
      </div>
      <div className="card-row">
        <i class="fas fa-phone-square-alt"></i>
        <p className="card-content">{user.phone}</p>
      </div>
      <div className="card-row">
        <i class="fas fa-map-marker-alt"></i>
        <p className="card-content">
          {user.location.city} - {user.location.country}
        </p>
      </div>
      <div className="card-bottom">Age : {user.dob.age}</div>
      <div className="card-bottom">Register Date : {user.registered.date}</div>
    </div>
  );
};
export default Card;
