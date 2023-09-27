//main component of text image row

import React from 'react';
import ItemListRowTextImageItem from './item';

export default function ItemListRowTextImage(props) {
    let item = props.item;

    return(
        <div class="col-12 field__item">
            <div class="pb-4 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                    class="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                    <div class="row field__items included-item-list">
                        {
                            item.items.map((iteme) => {
                                return(
                                    <ItemListRowTextImageItem item={iteme} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}