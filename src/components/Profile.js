import React, { useState, useEffect } from 'react'
import ViewProfile from './ViewProfile'
import EditProfile from './EditProfile'
import { useHistory, Link, Switch, Route, useRouteMatch } from 'react-router-dom'

const Profile = ({ login }) => {

    const history = useHistory()

    useEffect(() => {
        if (!login) {
            history.push('/')
        }
    }, [login, history]);


    const { path, url } = useRouteMatch()

    return (
        <div>
            <h1>Profile page</h1>

            <ul>
                {/* adding previous url with our new url */}
                <li><Link to={`${url}/viewprofile`}> View Profile</Link></li>
                <li><Link to={`${url}/editprofile`}> Edit Profile</Link></li>
            </ul>

            <Switch>
                {/* adding previous path with our new path */}
                <Route path={`${path}/viewprofile`} exact component={ViewProfile} />
                <Route path={`${path}/editprofile`} exact component={EditProfile} />
            </Switch>
        </div>
    )
}

export default Profile
