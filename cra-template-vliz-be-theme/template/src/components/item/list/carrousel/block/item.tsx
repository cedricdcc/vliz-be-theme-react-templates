//this component will be part of the item/list/carrousel/main component

import React from 'react';

export default function ItemListCarrouselBlockItem(props) {
    let item = props.item;
    return (
        <div class="field__item">
            <div class="background-white pb-4 pt-4 px-4 text-add-box-shadow paragraph paragraph--type--basic-text paragraph--view-mode--default">
                <div class="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                <div class="included-item">
                    <h4 class="highlighted-heading text-align-center">
                    {item.title }
                    </h4>

                    <p class="paragraph-small text-align-center">
                    {item.description }
                    </p>
                    {
                        item.clickthrough_url ?
                        <>
                        <p class="paragraph-brand-color text-align-center">
                        <a 
                            class="more-link-colored"
                            href={item.clickthrough_url }
                            >
                                {item.clickthrough_text }
                            </a>
                        </p>
                        </>
                        :
                        <></>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}