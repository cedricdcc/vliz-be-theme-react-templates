//this component will render a colered card

import React from 'react';
import ItemListCardColoredItem from './item';

export default function ItemListCardColored(props) {
    let item = props.item;

    return(
        <div class="col-12 field__item">
            <div class="pb-6 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div class="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                <div class="row field__items">
                    <div class="col-12 field__item">
                    <div class="paragraph paragraph--type--block paragraph--view-mode--default">
                        <div class="field field--name-field-block field--type-block-field field--label-hidden field__items">
                        <div class="views-element-container block block-views block-views-blockjobs-block-jobs-promoted"
                            id="block-views-block-jobs-block-jobs-promoted">
                            <h2>{ item.title }</h2>
                            <div>
                            <div class="promoted-jobs view view-jobs view-id-jobs view-display-id-block_jobs_promoted ">
                                <div class="view-content">
                                    {
                                        item.items.map((iteme) => {
                                            return <ItemListCardColoredItem item={iteme} />
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