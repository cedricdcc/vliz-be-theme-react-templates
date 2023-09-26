//this component will contain the main banner

import React from 'react';


export default function BannerMain(props: any) {

    //set variables based on given props
    let title = props.title ? props.title : "Give a prop title";
    let description = props.description ? props.description : "Give a prop description";
    let image = props.image ? props.image : "";
    let url = props.url ? props.url : "";
    let url_text = props.url_text ? props.url_text : "Give a prop url_text";

    return (
    <>
        <div class="col-12 field__item">
            <div class="paragraph paragraph--type--hero paragraph--view-mode--default">
            <div class="hero-container">
                <div
                class="field field--name-field-media field--type-entity-reference field--label-hidden field__items">
                <article class="media media--type-video media--view-mode-hero">
                    <img loading="lazy" src={image}
                        width="640" height="480" alt={title}
                        title="{title}" typeof="foaf:Image"
                        class="image-style-medium-cropped"
                    />
                </article>
                </div>
                <div
                class="clearfix text-formatted field field--name-field-body field--type-text-long field--label-hidden field__items grayoverlay">
                <div class="field__item">
                    <h2 class="white">{title}</h2>
                    <p>{description}</p>
                    <p><a class="more-link" href={url}
                    >{url_text}</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}