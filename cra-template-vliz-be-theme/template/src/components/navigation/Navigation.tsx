//this file will be used to create the navigation bar
import React from 'react';

export default function Navigation() {
    //import navigation items from json file
    const navigationItems = require('../../data/navigation.json');

    console.log(navigationItems);

    return (
        <>
        <header role="banner">
        <div class="header-wrapper">
            <div class="header-main">
            <button class="hamburger hamburger--elastic" type="button" aria-label="Mobile Menu" aria-controls="navigation">
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </button>
            <div class="region region-header-branding">
                <div id="block-vlizbase-site-branding" class="block block-system block-system-branding-block">
                <a href="/" rel="home" title="">
                    Img here
                </a>
                </div>
            </div>
            <div class="header-content">
                <div class="header-content-inner">
                <div class="region region-header-navigation-top"></div>
                <div class="region region-header-navigation">
                    <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation">
                    <h2 class="visually-hidden" id="block-mainnavigation-menu">Main
                        navigation</h2>
                    <ul class="menu">
                        {
                        navigationItems.length > 0 ?
                        //use react loop here to loop through the navigation items
                        navigationItems.map((item, index) => {
                            //check if item has property items
                            if (item.items) {
                                //make data-doormat-block by checking if index is 0
                                let doormatBlock = "doormat-block-hoofdnavigatie";
                                if (index != 0) {
                                    let toadd = index+1;
                                    doormatBlock += "-" + toadd;
                                }
                                //make class by checking if item has a property named highlight
                                let classHighlight = "";
                                if (item.highlight) {
                                    classHighlight = "highlight";
                                }

                                //make site url by checking if item has a property named url
                                let siteUrl = "";
                                if (item.url) {
                                    siteUrl = item.url;
                                }

                                return (
                                <li class="menu-item menu-item--collapsed">
                                    <a class={classHighlight} href={siteUrl}
                                    data-doormat-target={doormatBlock}>{item.title}</a>
                                </li>
                                )
                            }
                        })
                        : <></>
                        }
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="region region-header-doormat">
            {
                navigationItems.length > 0 ?
                navigationItems.map((item, index) => {

                    let indexadd = index+1;
                    let doormatBlock = "doormat-block-hoofdnavigatie";
                    if (index != 0) {
                        doormatBlock += "-" + indexadd;
                    }

                    return(
                        <div 
                            id={doormatBlock} 
                            class="block block-menu-block block-menu-blockmain block-doormat"
                            data-doormat-id={doormatBlock}
                        >
                            <div class="doormat-inner">
                                <ul class="menu">
                                {
                                    item.items.map((subitem, subindex) => {
                                        if (item.items.length > 4) {
                                            return (
                                                <li class="menu-item menu-item--expanded">
                                                    <a 
                                                        href={subitem.url}
                                                        target="blank"
                                                    >{subitem.title}</a>
                                                    {
                                                        subitem.items ? (
                                                            <ul class="menu">
                                                                {
                                                                    subitem.items.map((subsubitem, subsubindex) => {
                                                                        return (
                                                                            <li class="menu-item">
                                                                                <a 
                                                                                    href={subsubitem.url}
                                                                                    target="blank"
                                                                                >{subsubitem.title}</a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </li>
                                            )
                                        } else {
                                            let width = 100 / item.items.length;
                                            return (
                                                <li class="menu-item menu-item--expanded" style={{width: width + "%"}}>
                                                    <a 
                                                        href={subitem.url}
                                                        target="blank"
                                                    >{subitem.title}</a>
                                                    {
                                                        subitem.items ? (
                                                            <ul class="menu">
                                                                {
                                                                    subitem.items.map((subsubitem, subsubindex) => {
                                                                        return (
                                                                            <li class="menu-item">
                                                                                <a 
                                                                                    href={subsubitem.url}
                                                                                    target="blank"
                                                                                >{subsubitem.title}</a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </li>
                                            )
                                        }
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    )
                })
                : <></>
            }        
        </div>

        </header>
        </>
    )

}