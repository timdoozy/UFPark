import React, { useState, Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import Switch from 'react-switch';

function Settings () {
    
    const [decalOptions, setDecalOptions] = useState([ {name: 'All Decals', id: 1, value: 'All'}, {name: 'Red 1', id: 2, value: 'Red 1'}, {name: 'Red 3', id: 3, value: 'Red 3'}, {name: 'Park & Ride', id: 4, value: 'Park & Ride'}, {name: 'Green', id: 5, value: 'Green'}, {name: 'Brown 2', id: 6, value: 'Brown 2'}, {name: 'Brown 3', id: 7, value: 'Brown 3'}, {name: 'Disabled Student', id: 8, value: 'Disabled Student'}, {name: 'Motorcycle/Scooter', id: 9, value: 'Motorcycle/Scooter'}]);
    const [viewOptions, setViewOptions] = useState([{name: 'Map View', id: 10, value: 'Map View'}, {name: 'List View', id: 11, value: 'List View'}]);

    const[hideLotsCheck, setHideLotsCheck] = useState(false);
    const[darkModeCheck, setDarkModeCheck] = useState(false);

    const [openSettings, setOpenSettings] = useState(false);

    const handleClickOpen = () => setOpenSettings(true);
    const handleClose = () => setOpenSettings(false);
    const handleLotChange = () => setHideLotsCheck(!hideLotsCheck);
    const handleDarkModeChange = () => setDarkModeCheck(!darkModeCheck);

    if(openSettings == false)
    {
        return (
            <button onClick={handleClickOpen} style={{cursor:"pointer", border: "none", background:"none", padding:"0"}}><img src="/assets/img/icons8-settings-50.png"/></button>
        );
    }
    if(openSettings == true)
    {
        return (
            <div id="mySettings" class="settings">
                <div class="settings-content">
                    <div class="settings-header">
                        <h1 class="settingsTitle">Settings</h1>
                        <span class="exitSettings" onClick={handleClose}>&times;</span>
                    </div>
                    <div class="settings-body">
                        <div class="decals">
                            <Multiselect options={decalOptions} displayValue="name" placeholder="Select Your Decal" singleSelect />
                        </div>
                        <div class="startpage">
                            <Multiselect options={viewOptions} displayValue="name" placeholder="Select Start Page" singleSelect />
                        </div>
                        <div class="fullLots">
                            <span style={{textAlign: 'left'}}>Hide Full Lots</span>
                            <Switch
                                className="react-switch"
                                onChange={handleLotChange}
                                checked={hideLotsCheck}
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}
                                id="fullLotsSwitch"
                            />
                        </div>
                        <div class="darkMode">
                            <span style={{textAlign: 'left'}}>Dark Mode</span>
                            <Switch 
                                checked={darkModeCheck} 
                                onChange={handleDarkModeChange}
                                className="react-switch"
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}
                                id="darkmode-switch"
                             />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;