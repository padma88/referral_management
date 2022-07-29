import {
    Row, Col, Button
} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CustomCol = styled(Col)`
    text-align: end
`
function Index () {
    return <Row>
        <Col sm={10}>
            <h1>Users</h1>
        </Col>
        <CustomCol sm={2}>
            <NavLink to="/users/create">Create</NavLink>
        </CustomCol>
    </Row>
}

export default Index;