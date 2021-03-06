import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Jumbotron,
    Toast,
    ToastHeader
} from "reactstrap";

export const EditUser = ( props ) => {
    const { editUser, users } = useContext( GlobalContext );
    const [selectedUser, setSelectedUser] = useState( {
        id: '',
        name: ''
    } )
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect( () => {
        const userId = currentUserId;
        const selectedUser = users.find( user => user.id === userId );
        setSelectedUser( selectedUser );
    }, [currentUserId, users] )

    const onChange = ( e ) => {
        setSelectedUser( { ...selectedUser, [e.target.name]: e.target.value } )
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        editUser( selectedUser );
        history.push( "/" )
    }

    return (
        <Jumbotron>
            <Toast>
                <ToastHeader>
                    <Form onSubmit={onSubmit} className="mt-5">
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
                        </FormGroup>
                        <Button type="submit">Update Name</Button>
                        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                    </Form>
                </ToastHeader>
            </Toast>

        </Jumbotron>
    )
}