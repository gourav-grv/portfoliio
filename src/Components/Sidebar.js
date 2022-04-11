import { Avatar } from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import "./CssOfComponents/Sidebar.css";
import grv from "../img/png/grv.jpg"
import PeopleIcon from '@material-ui/icons/People';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import CreateIcon from '@material-ui/icons/Create';
import { NavLink } from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar
          className="sidebar__top_avatar"
          src={grv}
        />
        <h4>Gourav Shrivastava</h4>
        <p style={{textTransform:"uppercase"}}>Computer Science Engineer</p>
        <hr></hr>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom__list">
          <ul>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/">
              <PersonIcon /> &nbsp;<p>Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Education">
                <PeopleIcon/>
                &nbsp;<p>Education</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Certificate">
                <CardMembershipIcon />
                &nbsp;<p> Certificates</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/Projects">
                <CreateIcon />
                &nbsp;<p>Projects </p>
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__option" activeClassName="navlink__option__active" exact to="/ComponentInsideCom/ContactUs">
                <CallIcon/>
                &nbsp;<p>Contact Me</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
