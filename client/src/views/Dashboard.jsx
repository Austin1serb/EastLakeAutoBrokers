import React from 'react'

const Dashboard = () => {
    return (

        <div class="wrap">
            <div class="logoBox">
                <div class="logo">
                    <a href="/" title="Illinois Motors">
                        <img class="img-responsive" src="https://www.ilmotors.com/wp-content/themes/aanWordpress/images/logo.png" alt="Illinois Motors"/>
                    </a>
                </div>
            </div>
            <div class="rightSide">
                <div class="topBox">
                    <div class="address">
                        <a href="https://www.ilmotors.com/directions/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20">
                                <path id="ic_location_on_24px" d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z" transform="translate(-5 -2)" fill="#C40000"></path>
                            </svg>
                            <span class="mhid">711 Industrial Drive Cary, IL 60013</span>
                        </a>
                    </div>
                    <div class="phone">
                        <a href="tel:1-888-801-4011" class="tel-sales" title="Phone">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.602" height="23.602" viewBox="0 0 23.602 23.602">
                                <path id="ic_local_phone_24px" d="M6.62,10.79a15.149,15.149,0,0,0,6.59,6.59l2.2-2.2a.994.994,0,0,1,1.02-.24,11.407,11.407,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.25,1.02Z" transform="matrix(0.921, 0.391, -0.391, 0.921, 5.444, -3.934)" fill="#C40000"></path>
                            </svg>
                            <span class="mhid">
                                <span>
                                    1-888-801-4011                                </span>
                            </span>
                        </a>
                    </div>
                    <a href="javascript:;" id="user_hi" onclick="logout()" style="display: none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Group_11" data-name="Group 11" transform="translate(-1647 -16)">
                                <g id="Group_8" data-name="Group 8" transform="translate(405 -2)">
                                    <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(1242 18)" fill="none" stroke="#ED1C24" stroke-width="1">
                                        <circle cx="10" cy="10" r="10" stroke="none"></circle>
                                        <circle cx="10" cy="10" r="9.5" fill="none"></circle>
                                    </g>
                                </g>
                                <g id="Group_10" data-name="Group 10" transform="translate(1169.101 -238.21)">
                                    <g id="Group_9" data-name="Group 9" transform="translate(486.467 266.212)">
                                        <path id="Path_97" data-name="Path 97" d="M509.286,313.276c-.02-.036.019.037,0,0Z" transform="translate(-509.28 -311.485)" fill="#fff"></path>
                                        <path id="Path_98" data-name="Path 98" d="M511.141,301.871l-.549.467-1.275,1.324c.289.533.931.217.931.217l.214-.88c.281.258.807.044.807.044l.229-.942A1.019,1.019,0,0,1,511.141,301.871Z" transform="translate(-509.311 -301.871)" fill="#ED1C24"></path>
                                    </g>
                                    <path id="Path_99" data-name="Path 99" d="M517.18,261.284l.406-.406-.218-1.058-1.052-.213-2.441,2.441-.248-.248a.419.419,0,0,0-.593,0l-1.744,1.744a.426.426,0,0,0,.041.635l1.019-.836a.986.986,0,0,1,.732-.222,1.224,1.224,0,0,1,.822.473,1.307,1.307,0,0,1,.3.811,1,1,0,0,1-.359.786l-.812.692a.422.422,0,0,0,.615.022l1.744-1.744a.419.419,0,0,0,0-.593l-.248-.248.55-.55-.23-.588.179-.178.581.237.424-.424-.23-.588.179-.179Zm-2.951,1.118-.178-.178L516.272,260l.178.178Z" transform="translate(-24.406)" fill="#ED1C24"></path>
                                    <path id="Path_100" data-name="Path 100" d="M489.194,276.795a.838.838,0,0,0-.557-.329.591.591,0,0,0-.444.135l-1.843,1.507,0-1.3a.747.747,0,0,1,.2-.642l1.205-1.205-2.122.486a1.327,1.327,0,0,0-.811.505l-1.763,2.366-.816.3,0,2.872,2.473-.038a1.443,1.443,0,0,0,1.089-.476l1.486-1.514,1.9-1.618a.62.62,0,0,0,.22-.487A.916.916,0,0,0,489.194,276.795Z" transform="translate(0 -12.956)" fill="#ED1C24"></path>
                                </g>
                            </g>
                        </svg>

                        <span class="np">Hi, <span id="fname_hi"></span> (Logout)</span>
                    </a>
                    <div class="garageBox">
                        <a href="https://www.ilmotors.com/my-garage/">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#ED1C24"></stop>
                                        <stop offset="1" stop-color="#ED1C24"></stop>
                                    </radialGradient>
                                </defs>
                                <path id="ic_account_circle_24px" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,3A3,3,0,1,1,9,8,3,3,0,0,1,12,5Zm0,14.2a7.2,7.2,0,0,1-6-3.22c.03-1.99,4-3.08,6-3.08s5.97,1.09,6,3.08A7.2,7.2,0,0,1,12,19.2Z" transform="translate(-2 -2)" fill="url(#radial-gradient)"></path>
                            </svg>
                            <span class="np">My Garage</span> <span class="pincount">(<span class="text">0</span>)</span>
                        </a>
                    </div>
                    <div class="menuicBox">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="botBAr">
                    <div class="navigation">
                        <div class="menuBox">
                            <ul id="menu-header-menu" class="nav"><li id="menu-item-2145" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145"><a href="https://www.ilmotors.com/inventory/">Inventory</a></li>
                                <li id="menu-item-2148" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2148"><a href="https://www.ilmotors.com/finance/">Finance</a></li>
                                <li id="menu-item-2146" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2146"><a href="https://www.ilmotors.com/service-appointment/">Service</a></li>
                                <li id="menu-item-2315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2315"><a href="https://www.ilmotors.com/sell-us-your-car-in-illinois/">Sell Your Car</a></li>
                                <li id="menu-item-2147" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2147"><a href="https://www.ilmotors.com/contact-us/">Contact</a></li>
                            </ul>                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard