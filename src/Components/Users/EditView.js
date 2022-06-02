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
function View() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user);
  useEffect(() => {
    fetchUser(id).then((response) => {
      if (response.data.statusCode === 200) {
        dispatch(setUser(response.data.data));
      }
    });
  }, []);
  return (
    <section>
      <TopArea />
      {data && (
        <ViewSection>
          <div className="row">
            <div className="col-10">
                <div className="row">
                    <div className="col-3">
                    First Name:<span>{data.firstName}</span>
                    </div>
                    <div className="col-3">
                    Last Name:<span>{data.lastName}</span>
                    </div>
                    <div className="col-3">
                    Email:<span>{data.email}</span>
                    </div>
                    <div className="col-3">
                    Role:<span>{data.role}</span>
                    </div>
                </div>
            </div>
          </div>
        </ViewSection>
      )}
    </section>
  );
}

export default View;
