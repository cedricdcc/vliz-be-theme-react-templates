//this will be a carrousel item for the main component

import React from 'react';

export default function ItemListCarrouselWaved({ item }) {
    return(
        <div class="views-row">
            <div class="node node--type-events node--view-mode-teaser">
                <div class="included-item">
                    <div class="node__content">
                        <div class="event-date-wrapper">
                            <div class="field field--name-field-event-begindate field--type-datetime field--label-hidden field__items">
                                {item.title }
                            </div>
                        </div>
                        <h4> <a href={item.clickthrough_url}><span
                            class="field field--name-title field--type-string field--label-hidden"
                            >{item.description}</span></a>
                        </h4>
                    </div>
                    <svg class="wave" xmlns="http://www.w3.org/2000/svg"
                        width="1565.074" height="134.348" viewBox="0 0 414.093 35.546">
                        <path
                            d="M-111.589 83.852s79.026-33.03 221.644 1.182C252.673 119.245 304.62 91.88 304.62 91.88v14.063l-415.364.179z"
                            transform="translate(110.53 -69.517)" />
                    </svg>
                </div>
            </div>
        </div>
    )
}