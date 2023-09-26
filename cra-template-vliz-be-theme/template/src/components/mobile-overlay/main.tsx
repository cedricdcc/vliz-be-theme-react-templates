//this component will be used to display the mobile overlay

import React from 'react';

export default function MobileOverlay() {
    let navigationLinks = require('../../data/navigation.json');

    return (
        navigationLinks.length > 0 ?
        <div class="region region-mobile-overlay">
            <nav role="navigation" aria-labelledby="block-hoofdnavigatie-5-menu" id="block-hoofdnavigatie-5"
                class="mobile-main-navigation">
                <h2 class="visually-hidden" id="block-hoofdnavigatie-5-menu">Hoofdnavigatie</h2>
                <ul class="menu">
                {
                    navigationLinks.map((item: any) => {
                        return(
                            <li class="menu-item menu-item--expanded">
                                <span data-doormat-target="doormat-block-hoofdnavigatie">{item.title}</span>
                                <ul class="menu">
                                {
                                item.items.length > 0 ?
                                item.items.map((subitem: any) => {

                                    //check if subitem has the property items and if it has items in it
                                    let subitemlist = <></>;
                                    if(subitem.hasOwnProperty('items') && subitem.items.length > 0) {
                                        subitemlist = 
                                        <ul class="menu">
                                        {
                                            subitem.items.map((subsubitem: any) => {
                                                return(
                                                    <li class="menu-item menu-item--expanded">
                                                        <a href={subsubitem.url}>{subsubitem.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                    }

                                    return(
                                        <li class="menu-item menu-item--expanded">
                                            <span data-doormat-target="doormat-block-hoofdnavigatie" >{subitem.title}</span>
                                            {subitemlist}
                                        </li>
                                    )
                                })
                                :
                                <></>
                                }
                                </ul>
                            </li>
                        )
                    })
                }
                {
                    navigationLinks.map((item: any) => {
                        return( 
                            <li class="menu-item menu-item--expanded">
                                <span data-doormat-target="doormat-block-hoofdnavigatie">{item.title}</span>
                                <ul class="menu">
                                {
                                item.items.length > 0 ?
                                item.items.map((subitem: any) => {

                                    //check if subitem has the property items and if it has items in it
                                    let subitemlist = <></>;
                                    if(subitem.hasOwnProperty('items') && subitem.items.length > 0) {
                                        subitemlist = 
                                        <ul class="menu">
                                        {
                                            subitem.items.map((subsubitem: any) => {
                                                return(
                                                    <li class="menu-item menu-item--expanded">
                                                        <a href={subsubitem.url}>{subsubitem.title}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                    }

                                    return(
                                        <li class="menu-item menu-item--expanded">
                                            <span data-doormat-target="doormat-block-hoofdnavigatie" >{subitem.title}</span>
                                            {subitemlist}
                                        </li>
                                    )
                                })
                                :
                                <></>
                                }
                                </ul>
                            </li>
                        )
                    })
                }
                </ul>
            </nav>
            <nav role="navigation" aria-labelledby="block-servicenavigation-2-menu" id="block-servicenavigation-2">
                <h2 class="visually-hidden" id="block-servicenavigation-2-menu">Service navigation</h2>
            </nav>
        </div>
        :
        <></>
    )
}