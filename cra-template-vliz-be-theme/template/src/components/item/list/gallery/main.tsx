import React from 'react';
import ItemListGalleryFirstItem from './first_item';
import ItemListGalleryItem from './item';

export default function ItemListGallery(props) {
    let item = props.item;
    console.log(item);
    return(
        <div class="col-12 field__item">
            <div class="pb-6 pt-4 paragraph paragraph--type--container paragraph--view-mode--default">
                <div
                class="field field--name-field-paragraph-container-items field--type-entity-reference-revisions field--label-hidden">
                <div class="row field__items">
                    <div class="col-12 field__item">
                    <div class="paragraph paragraph--type--block paragraph--view-mode--default">
                        <div class="field field--name-field-block field--type-block-field field--label-hidden field__items">
                        <div class="views-element-container block block-views block-views-blocknews-news-promoted"
                            id="block-views-block-news-news-promoted">
                            <div>
                            <div class="view-news-promoted view view-news view-id-news view-display-id-news_promoted included-item-list">
                                <ItemListGalleryFirstItem item={item.items[0]} />
                                <div class="view-content">
                                    {
                                        item.items.map((iteme, index) => {
                                            return(
                                            index != 0 ?
                                            <ItemListGalleryItem item={iteme} />
                                            :
                                            <></>
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