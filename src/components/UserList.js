import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button,
    Fade,
    Jumbotron
} from "reactstrap";

export const UserList = () => {
    const { users, removeUser } = useContext( GlobalContext );

    return (
        <Jumbotron >
            <Fade>
                <ListGroup>
                    {users.length > 0 ? (
                        <>
                            {users.map( user => (
                                <ListGroupItem className="d-block mt-2" key={user.id}>
                                    <strong>{user.name}</strong>
                                    <div className="ml-auto">
                                        <Link to={`/edit/${user.id}`} color="warning" className="btn btn-success  mr-4">Update or edit</Link>
                                        <Button onClick={() => removeUser( user.id )} color="danger">Remove</Button>
                                    </div>
                                </ListGroupItem>
                            ) )}
                        </>
                    ) : (
                            <h4 className="text-center">No Users</h4>
                        )}
                </ListGroup>

            </Fade>

            <div style={{ "position": "absolute", "top": "8rem", "left": "48rem", "fontFamily": "fantasy", "color": "gray", }}>inspired by jemin patel</div>

        </Jumbotron>


    )
}