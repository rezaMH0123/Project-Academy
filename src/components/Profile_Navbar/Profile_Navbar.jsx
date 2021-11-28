import React, { Fragment } from "react";
import search from "../../Assets/img/2.PNG";
import filter from "../../Assets/img/1.PNG";
import style from "./Profile_Navbar.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

const Profile_Navbar = () => {
	return (
		<Fragment>
			<div className='navbar position-absolute'>
				<div className='top-right row'>
					<div class='col fw-bold text-center selection h-100 d-inline-block'>
						<NavLink
							to='/profile/u_profile'
							activeStyle={{ borderBottom: "3px solid black" }}>
							پروفایل
						</NavLink>
					</div>
					<div class='col fw-bold text-center selection h-100 d-inline-block'>
						<NavLink
							to='/profile/u_dore'
							activeStyle={{ borderBottom: "3px solid black" }}>
							دوره های من
						</NavLink>
					</div>
					<div class='col fw-bold text-center selection h-100 d-inline-block'>
						<NavLink
							to='/profile/u_list'
							activeStyle={{ borderBottom: "3px solid black" }}>
							لیست دوره ها
						</NavLink>
					</div>
					<div class='col fw-bold text-center selection h-100 d-inline-block'>
						<NavLink
							to='/profile/u_text'
							activeStyle={{ borderBottom: "3px solid black" }}>
							پیام های من
						</NavLink>
					</div>
				</div>
				<div className='top_left'>
					<div className='search'>
						<img src={search} />
					</div>
					<div className='filter'>
						<img src={filter} />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Profile_Navbar;
