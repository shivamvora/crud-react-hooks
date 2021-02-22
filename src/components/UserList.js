import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';


const UserList = () => {
    return (
        <ListGroup>
            <ListGroupItem className="d-flex">
                <strong>User One</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
                    <Button color="danger" >Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}

export default UserList;
