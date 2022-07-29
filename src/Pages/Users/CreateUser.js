import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../services/users";
import { setUser } from "../../store/user";

import TopArea from "./TopArea";
import styled from "styled-components";

const ViewSection = styled.section`
    background: #f8f8f9;
    border: 1px solid #eae0f5b5;
    padding: 1em;
    border-radius: 10px;
`
function CreateUser() {
  return (
    <section>
      <TopArea />
        <ViewSection>
          <div className="row">
            <div className="col-10">
                <div className="row">
                    <div className="col-6">
                    First Name:
                    <input name="firstName" value=""/>
                    </div>
                    
                    <div className="col-6">
                    Last Name:<span></span>
                    </div>
                    <div className="col-6">
                    Email:<span></span>
                    </div>
                    <div className="col-6">
                    Role:<span></span>
                    </div>
                </div>
            </div>
          </div>
        </ViewSection>
    </section>
  );
}

export default CreateUser;
