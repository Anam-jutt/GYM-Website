import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../assets/features/UserDetails";
import { Link } from "react-router-dom";

function ShowData() {
  const [id, setId] = useState();
  const allUsers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const { users, loading } = useSelector((state) => state.app);
 // Define the Bootstrap column class based on the number of users
 const getColClass = (count) => {
  if (count === 1) return "col-12"; // Full width for 1 card
  if (count === 2) return "col-sm-6"; // Half width for 2 cards
  return "col-sm-4"; // One-third width for 3 or more cards
};
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "rgba(255, 255, 255, 0.337)",
            padding: "3rem 0",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Here Are All Users:</h1>
            <h1>Total Users:({allUsers.length})</h1>
            <br />
            <div
              className="row"
              style={{ justifyContent: "center", marginLeft:"6rem"}}
            >
              {users.map((user) => (
                <div  className={getColClass(users.length)} key={user.id}>
                  <Card
                    style={{
                      width: "18rem",
                      color: "rgba(255, 255, 255, 0.837)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      marginBottom: "3rem",
                    }}
                  >
                    <Card.Header>
                      Name <h4>{`${user.firstName} ${user.lastName}`}</h4>
                    </Card.Header>
                    <ListGroup
                      variant="flush"
                      style={{
                        color: "rgba(255, 255, 255, 0.837)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                      <ListGroup.Item>
                        Contact: {user.contactNumber}
                      </ListGroup.Item>
                      <ListGroup.Item>Country: {user.country}</ListGroup.Item>
                      <ListGroup.Item>City: {user.city}</ListGroup.Item>
                      <ListGroup.Item>Club: {user.clubName}</ListGroup.Item>
                      <ListGroup.Item>Package: {user.pckage}</ListGroup.Item>
                      <ListGroup.Item>
                        Timezone: {user.timingZone}
                      </ListGroup.Item>
                      <ListGroup.Item>Trainer: {user.trainer}</ListGroup.Item>
                    </ListGroup>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "1rem",
                      }}
                    >
                      <Link to={`/edit/${user.id}`}
                        style={{ color: "white", textDecoration: "none" }}
                        
                      >
                        Edit
                      </Link>
                      <Link style={{ color: "white", textDecoration: "none" }} onClick={()=> dispatch(deleteUser(user.id))}>
                        Delete
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowData;
