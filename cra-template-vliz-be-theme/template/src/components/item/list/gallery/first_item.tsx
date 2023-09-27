//this component will be used by main component

import React from 'react';

export default function ItemListGalleryFirstItem(props) {
    let item = props.item;
    console.log(item);

    return(
        <div class="attachment attachment-before">
            <div class="views-element-container">
                <div
                    class="view-news-promoted-first view view-news view-id-news view-display-id-attachment_1">
                    <div class="view-content">
                        <div class="views-row">
                            <article role="article" about={item.clickthrough_url}
                                class="node node--type-news node--promoted node--view-mode-extended-teaser">
                                <div class="node__content included-item">
                                    <div class="before">
                                        <a href={item.clickthrough_url } hreflang="nl" target="_blank">
                                            <img loading="lazy" src={ item.image }
                                                width="1000" height="562" alt={ item.title }
                                                title={ item.title } typeof="foaf:Image"
                                                class="image-style-large-cropped-16-9" />
                                        </a>
                                    </div>
                                    <div class="main" >
                                        <div class="main-inner">
                                            {
                                                item.tags ?
                                                item.tags.map((tag) => {
                                                    return <a href="#" class="field__news_teaser">{tag}</a>
                                                })
                                                :
                                                <></>
                                            }
                                            <h3>
                                                <a href={ item.clickthrough_url } hreflang="nl"
                                                    target="_blank"><span
                                                        class="field field--name-title field--type-string field--label-hidden">{ item.title }</span>
                                                </a>
                                            </h3>
                                            <div class="node-date">
                                                { item.date }
                                            </div>

                                            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__articles">
                                                { item.description }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}