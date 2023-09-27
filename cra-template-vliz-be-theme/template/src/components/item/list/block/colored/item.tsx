//this component is the subitem of the item/list/block/colored/main component

import React from 'react';

export default function ItemListBlockColoredItem(props) {
    let item = props.item;

    let content_h = <span class="field field--name-title field--type-string field--label-hidden">{item.title}</span>
    if (item.clickthrough_url) {
        content_h = <a href={item.clickthrough_url } rel="bookmark">
            <span class="field field--name-title field--type-string field--label-hidden">{item.title}</span>
        </a>
    }

    return (
        <div class="views-row">
        <article role="article">
        <div class="node node--type-faq-question node--promoted node--view-mode-teaser">
            <div class="included-item">
            <h2>
                {content_h}
            </h2>
            <div class="node__content">
            </div>
            </div>
        </div>
        </article>
        </div>
    )
}