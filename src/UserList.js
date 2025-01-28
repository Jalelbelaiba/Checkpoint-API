import React from 'react'
import './UserList.css'

const UserList = ({user}) => {
  return (
    <div>
 <main className="main">
  <div className="">
    <article className="card">
      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8LrGjiUDcvYjUMk7jUJJZo0kK4Y4NzKxmQ&s"
          alt="Prfile. "
        />
        <p className="note">{user.username}</p>
      </div>
      <div className="card__content">
        <h2 className="card_title"> {user.name} </h2>
        <p className="list-label"> <span> Email : </span>{user.email}</p>
        <p className="list-label"><span> Street : </span> {user.address.street}</p>
        <p className="list-label"> <span> Suite : </span> {user.address.suite}</p>
        <p className="list-label"> <span> City : </span> {user.address.city}</p>
        <p className="list-label"> <span> Zipcode : </span> {user.address.zipcode}</p>
        <p className="list-label"> <span> Lat : </span> {user.address.geo.lat}</p>
        <p className="list-label"> <span> Ing : </span> {user.address.geo.lng}</p>
        <p className="list-label"> <span> Phone : </span>{user.phone}</p>
        <p className="list-label"> <span> Website : </span>{user.website}</p>
        <p className="list-label"> <span> Company Name : </span>{user.company.name}</p>
        <p className="list-label"> <span>Catch Phrase : </span> {user.company.catchPhrase}</p>
        <p className="list-label"> <span> Bs : </span> {user.company.bs}</p>
      </div>
    </article>

  </div>
</main>
    </div>
  )
}

export default UserList
