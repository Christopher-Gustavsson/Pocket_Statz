import React, { Component } from 'react';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="bar"></div>
                <div className="row center">
                    <div className="col s12 m6 l6 team-card">
                    <img src="/dist/assets/images/about_jason.jpg"></img><br></br>
                        <div className="wrapper"><h3>Jason</h3></div>
                        <div>
                            <a href="https://github.com/jyataslam" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 128 128" className="icon">
                                        <title>Github</title><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/jason-yata-a20535179/" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 118 118" className="icon">
                                        <title>LinkedIn</title><path fill="#fff" d="M189.1,435.47A57.49,57.49,0,1,1,246.58,378,57.55,57.55,0,0,1,189.1,435.47Zm0-109A51.49,51.49,0,1,0,240.58,378,51.55,51.55,0,0,0,189.1,326.5Z" transform="translate(-131.61 -320.5)" /><path fill="#fff" d="M216.18,402.88v-20c0-10.73-5.73-15.73-13.37-15.73a11.52,11.52,0,0,0-10.46,5.77v-5H180.74c0.15,3.28,0,34.94,0,34.94h11.61V383.37a7.94,7.94,0,0,1,.38-2.83,6.35,6.35,0,0,1,6-4.25c4.2,0,5.88,3.2,5.88,7.9v18.69h11.61ZM168.5,363.17c4,0,6.57-2.69,6.57-6s-2.52-6-6.5-6-6.57,2.61-6.57,6,2.52,6,6.42,6h0.07Zm5.81,39.71V367.94H162.7v34.94h11.61Z" transform="translate(-131.61 -320.5)" />
                                    </svg>
                                </div>
                            </a>
                            <a href="http://www.jasonyata.com" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 1024 1024" className="icon">
                                        <title>Portfolio</title><path fill="#fff" d="M751.104 514.112 736.448 496c49.408-370.88-231.68-479.168-234.56-480.256L492.992 12.48 484.16 15.744C481.28 16.832 200.128 125.056 249.6 496L234.88 514.112C140.992 629.376 140.992 630.336 140.992 642.56c0 1.92 19.2 209.984 90.176 265.536l11.968 5.76 7.68 0c8.256 0 28.352-3.136 38.72-32 2.88-8.064 3.52-18.752 4.48-40.192 2.048-43.008 6.4-132.48 46.08-137.536l25.216-3.264c-17.344 32.064-62.528 149.312 111.616 278.72l14.336 10.688 14.912-9.728c66.24-43.2 174.016-156.416 116.416-279.36l23.232 3.008c39.68 5.12 44.032 94.592 46.08 137.536 1.024 21.44 1.6 32.064 4.48 40.256 10.368 28.864 30.528 32 38.72 32l14.336-1.536 6.976-5.44c69.312-54.4 88.512-262.4 88.512-264.32C844.992 630.336 844.992 629.376 751.104 514.112zM368.064 696.064l-1.92-7.168 6.72 0-2.24 3.072C370.56 692.096 369.472 693.696 368.064 696.064zM618.88 692.736l-1.984-3.84 3.008 0L618.88 692.736zM492.672 927.04c-115.648-92.736-98.368-167.616-86.592-194.304l174.656-0.064C614.016 822.08 528.384 899.584 492.672 927.04zM743.232 844.032c-0.064-1.536-0.128-3.2-0.192-4.864-2.56-53.504-7.04-147.264-62.912-177.216l6.528-24.256L299.392 637.696l6.528 24.256c-55.872 29.952-60.352 123.712-62.912 177.216-0.064 1.344-0.128 2.624-0.192 3.84-28.864-52.352-46.4-159.04-49.92-194.112 13.44-18.56 58.752-74.24 81.728-102.528L303.488 510.72 301.824 499.648C256.256 194.56 448 88.128 492.992 67.584c44.992 20.544 236.736 127.04 191.168 432.128L682.496 510.72l28.928 35.712c22.912 28.224 68.16 83.776 81.664 102.4C789.312 685.952 771.648 793.472 743.232 844.032zM492.992 206.464c-78.784 0-142.976 60.736-142.976 135.424s64.192 135.424 142.976 135.424 142.912-60.736 142.912-135.424S571.84 206.464 492.992 206.464zM492.992 426.112c-50.624 0-91.776-37.76-91.776-84.224s41.152-84.224 91.776-84.224c50.56 0 91.712 37.76 91.712 84.224S543.552 426.112 492.992 426.112z" /></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 team-card">
                        <img src="/dist/assets/images/about_joe.jpg"></img><br></br>
                        <h3>Joe</h3>
                        <div>
                            <a href="https://github.com/JoeDeiRossi" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 128 128" className="icon">
                                        <title>Github</title><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/joe-dei-rossi/" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 118 118" className="icon">
                                        <title>LinkedIn</title><path fill="#fff" d="M189.1,435.47A57.49,57.49,0,1,1,246.58,378,57.55,57.55,0,0,1,189.1,435.47Zm0-109A51.49,51.49,0,1,0,240.58,378,51.55,51.55,0,0,0,189.1,326.5Z" transform="translate(-131.61 -320.5)" /><path fill="#fff" d="M216.18,402.88v-20c0-10.73-5.73-15.73-13.37-15.73a11.52,11.52,0,0,0-10.46,5.77v-5H180.74c0.15,3.28,0,34.94,0,34.94h11.61V383.37a7.94,7.94,0,0,1,.38-2.83,6.35,6.35,0,0,1,6-4.25c4.2,0,5.88,3.2,5.88,7.9v18.69h11.61ZM168.5,363.17c4,0,6.57-2.69,6.57-6s-2.52-6-6.5-6-6.57,2.61-6.57,6,2.52,6,6.42,6h0.07Zm5.81,39.71V367.94H162.7v34.94h11.61Z" transform="translate(-131.61 -320.5)" />
                                    </svg>
                                </div>
                            </a>
                            <a href="http://joedeirossi.com" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 1024 1024" className="icon">
                                        <title>Portfolio</title><path fill="#fff" d="M751.104 514.112 736.448 496c49.408-370.88-231.68-479.168-234.56-480.256L492.992 12.48 484.16 15.744C481.28 16.832 200.128 125.056 249.6 496L234.88 514.112C140.992 629.376 140.992 630.336 140.992 642.56c0 1.92 19.2 209.984 90.176 265.536l11.968 5.76 7.68 0c8.256 0 28.352-3.136 38.72-32 2.88-8.064 3.52-18.752 4.48-40.192 2.048-43.008 6.4-132.48 46.08-137.536l25.216-3.264c-17.344 32.064-62.528 149.312 111.616 278.72l14.336 10.688 14.912-9.728c66.24-43.2 174.016-156.416 116.416-279.36l23.232 3.008c39.68 5.12 44.032 94.592 46.08 137.536 1.024 21.44 1.6 32.064 4.48 40.256 10.368 28.864 30.528 32 38.72 32l14.336-1.536 6.976-5.44c69.312-54.4 88.512-262.4 88.512-264.32C844.992 630.336 844.992 629.376 751.104 514.112zM368.064 696.064l-1.92-7.168 6.72 0-2.24 3.072C370.56 692.096 369.472 693.696 368.064 696.064zM618.88 692.736l-1.984-3.84 3.008 0L618.88 692.736zM492.672 927.04c-115.648-92.736-98.368-167.616-86.592-194.304l174.656-0.064C614.016 822.08 528.384 899.584 492.672 927.04zM743.232 844.032c-0.064-1.536-0.128-3.2-0.192-4.864-2.56-53.504-7.04-147.264-62.912-177.216l6.528-24.256L299.392 637.696l6.528 24.256c-55.872 29.952-60.352 123.712-62.912 177.216-0.064 1.344-0.128 2.624-0.192 3.84-28.864-52.352-46.4-159.04-49.92-194.112 13.44-18.56 58.752-74.24 81.728-102.528L303.488 510.72 301.824 499.648C256.256 194.56 448 88.128 492.992 67.584c44.992 20.544 236.736 127.04 191.168 432.128L682.496 510.72l28.928 35.712c22.912 28.224 68.16 83.776 81.664 102.4C789.312 685.952 771.648 793.472 743.232 844.032zM492.992 206.464c-78.784 0-142.976 60.736-142.976 135.424s64.192 135.424 142.976 135.424 142.912-60.736 142.912-135.424S571.84 206.464 492.992 206.464zM492.992 426.112c-50.624 0-91.776-37.76-91.776-84.224s41.152-84.224 91.776-84.224c50.56 0 91.712 37.76 91.712 84.224S543.552 426.112 492.992 426.112z" /></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col s12 m6 team-card">
                        <img src="/dist/assets/images/about_chris.png"></img><br></br>
                        <h3>Chris</h3>
                        <div>
                            <a href="https://github.com/Christopher-Gustavsson" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 128 128" className="icon">
                                        <title>Github</title><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/christopher-gustavsson/" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 118 118" className="icon">
                                        <title>LinkedIn</title><path fill="#fff" d="M189.1,435.47A57.49,57.49,0,1,1,246.58,378,57.55,57.55,0,0,1,189.1,435.47Zm0-109A51.49,51.49,0,1,0,240.58,378,51.55,51.55,0,0,0,189.1,326.5Z" transform="translate(-131.61 -320.5)" /><path fill="#fff" d="M216.18,402.88v-20c0-10.73-5.73-15.73-13.37-15.73a11.52,11.52,0,0,0-10.46,5.77v-5H180.74c0.15,3.28,0,34.94,0,34.94h11.61V383.37a7.94,7.94,0,0,1,.38-2.83,6.35,6.35,0,0,1,6-4.25c4.2,0,5.88,3.2,5.88,7.9v18.69h11.61ZM168.5,363.17c4,0,6.57-2.69,6.57-6s-2.52-6-6.5-6-6.57,2.61-6.57,6,2.52,6,6.42,6h0.07Zm5.81,39.71V367.94H162.7v34.94h11.61Z" transform="translate(-131.61 -320.5)" />
                                    </svg>
                                </div>
                            </a>
                            <a href="http://www.christophergustavsson.com" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 1024 1024" className="icon">
                                        <title>Portfolio</title><path fill="#fff" d="M751.104 514.112 736.448 496c49.408-370.88-231.68-479.168-234.56-480.256L492.992 12.48 484.16 15.744C481.28 16.832 200.128 125.056 249.6 496L234.88 514.112C140.992 629.376 140.992 630.336 140.992 642.56c0 1.92 19.2 209.984 90.176 265.536l11.968 5.76 7.68 0c8.256 0 28.352-3.136 38.72-32 2.88-8.064 3.52-18.752 4.48-40.192 2.048-43.008 6.4-132.48 46.08-137.536l25.216-3.264c-17.344 32.064-62.528 149.312 111.616 278.72l14.336 10.688 14.912-9.728c66.24-43.2 174.016-156.416 116.416-279.36l23.232 3.008c39.68 5.12 44.032 94.592 46.08 137.536 1.024 21.44 1.6 32.064 4.48 40.256 10.368 28.864 30.528 32 38.72 32l14.336-1.536 6.976-5.44c69.312-54.4 88.512-262.4 88.512-264.32C844.992 630.336 844.992 629.376 751.104 514.112zM368.064 696.064l-1.92-7.168 6.72 0-2.24 3.072C370.56 692.096 369.472 693.696 368.064 696.064zM618.88 692.736l-1.984-3.84 3.008 0L618.88 692.736zM492.672 927.04c-115.648-92.736-98.368-167.616-86.592-194.304l174.656-0.064C614.016 822.08 528.384 899.584 492.672 927.04zM743.232 844.032c-0.064-1.536-0.128-3.2-0.192-4.864-2.56-53.504-7.04-147.264-62.912-177.216l6.528-24.256L299.392 637.696l6.528 24.256c-55.872 29.952-60.352 123.712-62.912 177.216-0.064 1.344-0.128 2.624-0.192 3.84-28.864-52.352-46.4-159.04-49.92-194.112 13.44-18.56 58.752-74.24 81.728-102.528L303.488 510.72 301.824 499.648C256.256 194.56 448 88.128 492.992 67.584c44.992 20.544 236.736 127.04 191.168 432.128L682.496 510.72l28.928 35.712c22.912 28.224 68.16 83.776 81.664 102.4C789.312 685.952 771.648 793.472 743.232 844.032zM492.992 206.464c-78.784 0-142.976 60.736-142.976 135.424s64.192 135.424 142.976 135.424 142.912-60.736 142.912-135.424S571.84 206.464 492.992 206.464zM492.992 426.112c-50.624 0-91.776-37.76-91.776-84.224s41.152-84.224 91.776-84.224c50.56 0 91.712 37.76 91.712 84.224S543.552 426.112 492.992 426.112z" /></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col s12 m6 team-card">
                        <img src="\dist\michelle.png"></img><br></br>
                        <h3>Michelle</h3>
                        <div>
                            <a href="https://github.com/mrpoole" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 128 128" className="icon">
                                        <title>Github</title><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/mrpooledev/" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 118 118" className="icon">
                                        <title>LinkedIn</title><path fill="#fff" d="M189.1,435.47A57.49,57.49,0,1,1,246.58,378,57.55,57.55,0,0,1,189.1,435.47Zm0-109A51.49,51.49,0,1,0,240.58,378,51.55,51.55,0,0,0,189.1,326.5Z" transform="translate(-131.61 -320.5)" /><path fill="#fff" d="M216.18,402.88v-20c0-10.73-5.73-15.73-13.37-15.73a11.52,11.52,0,0,0-10.46,5.77v-5H180.74c0.15,3.28,0,34.94,0,34.94h11.61V383.37a7.94,7.94,0,0,1,.38-2.83,6.35,6.35,0,0,1,6-4.25c4.2,0,5.88,3.2,5.88,7.9v18.69h11.61ZM168.5,363.17c4,0,6.57-2.69,6.57-6s-2.52-6-6.5-6-6.57,2.61-6.57,6,2.52,6,6.42,6h0.07Zm5.81,39.71V367.94H162.7v34.94h11.61Z" transform="translate(-131.61 -320.5)" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.michellepoole.dev" target="_blank">
                                <div className="link-icon">
                                    <svg viewBox="0 0 1024 1024" className="icon">
                                        <title>Portfolio</title><path fill="#fff" d="M751.104 514.112 736.448 496c49.408-370.88-231.68-479.168-234.56-480.256L492.992 12.48 484.16 15.744C481.28 16.832 200.128 125.056 249.6 496L234.88 514.112C140.992 629.376 140.992 630.336 140.992 642.56c0 1.92 19.2 209.984 90.176 265.536l11.968 5.76 7.68 0c8.256 0 28.352-3.136 38.72-32 2.88-8.064 3.52-18.752 4.48-40.192 2.048-43.008 6.4-132.48 46.08-137.536l25.216-3.264c-17.344 32.064-62.528 149.312 111.616 278.72l14.336 10.688 14.912-9.728c66.24-43.2 174.016-156.416 116.416-279.36l23.232 3.008c39.68 5.12 44.032 94.592 46.08 137.536 1.024 21.44 1.6 32.064 4.48 40.256 10.368 28.864 30.528 32 38.72 32l14.336-1.536 6.976-5.44c69.312-54.4 88.512-262.4 88.512-264.32C844.992 630.336 844.992 629.376 751.104 514.112zM368.064 696.064l-1.92-7.168 6.72 0-2.24 3.072C370.56 692.096 369.472 693.696 368.064 696.064zM618.88 692.736l-1.984-3.84 3.008 0L618.88 692.736zM492.672 927.04c-115.648-92.736-98.368-167.616-86.592-194.304l174.656-0.064C614.016 822.08 528.384 899.584 492.672 927.04zM743.232 844.032c-0.064-1.536-0.128-3.2-0.192-4.864-2.56-53.504-7.04-147.264-62.912-177.216l6.528-24.256L299.392 637.696l6.528 24.256c-55.872 29.952-60.352 123.712-62.912 177.216-0.064 1.344-0.128 2.624-0.192 3.84-28.864-52.352-46.4-159.04-49.92-194.112 13.44-18.56 58.752-74.24 81.728-102.528L303.488 510.72 301.824 499.648C256.256 194.56 448 88.128 492.992 67.584c44.992 20.544 236.736 127.04 191.168 432.128L682.496 510.72l28.928 35.712c22.912 28.224 68.16 83.776 81.664 102.4C789.312 685.952 771.648 793.472 743.232 844.032zM492.992 206.464c-78.784 0-142.976 60.736-142.976 135.424s64.192 135.424 142.976 135.424 142.912-60.736 142.912-135.424S571.84 206.464 492.992 206.464zM492.992 426.112c-50.624 0-91.776-37.76-91.776-84.224s41.152-84.224 91.776-84.224c50.56 0 91.712 37.76 91.712 84.224S543.552 426.112 492.992 426.112z" /></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;