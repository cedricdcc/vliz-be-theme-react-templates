//this component is used in the list component 

import React from 'react';
import ItemListBlockColoredItem from './item';

export default function ItemListBlockColored(props) {

    let items = props.items;

    return(
        <div class="col-12 field__item">
            <div class="pb-4 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                class="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                <div class="row field__items">
                    <div class="col-12 field__item">
                    <div class="paragraph paragraph--type--block paragraph--view-mode--default">
                        <div class="field field--name-field-block field--type-block-field field--label-hidden field__items">
                        <div class="views-element-container block block-views block-views-blockfaq-faq-promoted-block"
                            id="block-views-block-faq-faq-promoted-block">
                            <div>
                            <div class="faq-promoted view view-faq view-id-faq view-display-id-faq_promoted_block">
                                <div class="view-content included-item-list">
                                    {
                                        items.map((item) => {
                                            return <ItemListBlockColoredItem item={item} />
                                        })
                                    }
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}