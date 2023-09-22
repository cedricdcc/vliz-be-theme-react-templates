import React from 'react';
import Navigation from '../navigation/Navigation';

const DefaultLayout: React.FC = ({ children }) => (
    <>
    <a href="#main-content" class="visually-hidden focusable skip-link">
        Skip and go to main content
    </a>
    <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
        <div class="layout-container">
            <Navigation />
            <h1>TODO Cover banner here</h1>
            <main role="main">
                <div class="main-container">
                    <a id="main-content" tabindex="-1"></a>
                    <div class="layout-content ">
                        <div class="region region-content">
                            <div class="region-content-inner">
                                <div id="block-vlizbase-page-title" class="block block-core block-page-title-block">
                                    <h1 class="page-title"><span property="schema:name"
                                            class="field field--name-title field--type-string field--label-hidden">Homepage</span>
                                    </h1>
                                </div>
                                <div id="block-vlizbase-content" class="block block-system block-system-main-block">
                                    <article role="article" about="/nl/homepage" typeof="schema:WebPage"
                                        class="node node--type-page node--view-mode-full">
                                        <span property="schema:name" content="Homepage" class="hidden"></span>
                                        <div class="node__content">
                                            <div
                                                class="field field--name-field-paragraphs field--type-entity-reference-revisions field--label-hidden">
                                                <div class="row field__items">
                                                    {children}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <h1>Site share enabling here</h1>
                    </div>
                </div>
            </main>
            <h3>TODO Footer here</h3>
            <h3>TODO Mobile something something here</h3>
        </div>
    </div>
</>
);

export default DefaultLayout;