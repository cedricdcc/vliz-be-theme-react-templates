//this component wil be part of the main component

import React from 'react';

export default function ItemListRowTextImageItem(props) {
    let item = props.item;

    return (
            item.image ?
            <>
            <div class={`col-lg-${item.col_width_text} field__item`}>
                <div class="paragraph paragraph--type--basic-text paragraph--view-mode--default">
                    <div
                        class="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                        <p>
                            <a href={item.clickthrough_url}>
                                {item.title} : 
                            </a>
                            {item.description}
                        </p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-{{ 12 | minus:col_width_text }} field__item">
                <div class="paragraph paragraph--type--media paragraph--view-mode--default">
                    <div class="field field--name-field-media field--type-entity-reference field--label-hidden field__items">
                        <article class="media media--type-image media--view-mode-large">
                            <div class="field field--name-field-media-image field--type-image field--label-hidden field__items">
                                <img loading="lazy"
                                    src={item.image }
                                    alt={ item.title } 
                                    typeof="foaf:Image" 
                                    class="image-style-large-1000" 
                                    style="width: {{ 12 | minus:col_width_text | times:70}}px; display:block;margin:auto;vertical-align:middle;max-width:300px;"
                                />
                            </div>
                        </article>

                    </div>
                </div>
            </div>
            </>
        :
        <div class="col-lg-12 offset-lg-0 field__item">
            <div class="paragraph paragraph--type--basic-text paragraph--view-mode--default">
                <div
                    class="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items">
                    <p>
                        <a href={item.clickthrough_url}>
                            {item.title}
                        </a>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
        
    )
}