//this component will render a waved carrousel
import React from 'react';
import ItemListCarrouselWavedItem from './item';

export default function ItemListCarrouselWaved({ item }) {
    return(
        <div class="col-12 field__item">
            <div
                class="background-white container-full-width pb-6 pt-6 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                    class="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                    <div class="row field__items">
                        <div class="col-12 field__item">
                            <div class="paragraph paragraph--type--block paragraph--view-mode--default">
                                <div
                                    class="field field--name-field-block field--type-block-field field--label-hidden field__items">
                                    <div class="views-element-container block block-views block-views-blockevents-events-upcoming-block"
                                        id="block-views-block-events-events-upcoming-block">
                                        <h2>{item.title}
                                        </h2>
                                        <div>
                                            <div
                                                class="events-ticker view view-events view-id-events view-display-id-events_upcoming_block js-view-dom-id-e191d37c185b818cd5a6c279ebcc6dfdf564c0f46c280e772a63f13439f29bd0">
                                                <div class="view-header-wrapper">
                                                    <div class="view-header">
                                                    </div>
                                                </div>
                                                <div class="view-content included-item-list">
                                                    {
                                                        item.items.map((item, index) => {
                                                            return(
                                                            <ItemListCarrouselWavedItem item={item} />
                                                            )
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