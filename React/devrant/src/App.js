import React, {Component} from 'react';
import Header from './components/Header'
import './App.css';
import Loader from "./components/Spinner";

class App extends Component {
    render() {
        return (
           <div>


               <div class="page">

                    {/*Start of Header */}
                    {/*======================= */}

                   <Header/>

                   {/* ======================= */}
                   {/* End of Header */}

                   {/* Start of Main Section */}
                   {/* ======================= */}

                   {/*<section class="main layout--center">*/}
                       {/*<div class="main__content layout--wrapped">*/}

                           {/*/!* Start of Loader *!/*/}
                           {/*/!* ======================= *!/*/}

                            <Loader/>

                           {/*/!* ======================= *!/*/}
                           {/*/!* End of loader *!/*/}


                           {/*/!* Start of Rant List Page *!/*/}
                           {/*/!* ======================= *!/*/}

                           {/*<div class="post-list">*/}

                               {/*<article class="post">*/}
                                   {/*<div class="post__inner">*/}
                                       {/*<div class="score">*/}
                                           {/*<div class="score__up layout--center">++</div>*/}
                                           {/*<div class="score__board layout--center">100</div>*/}
                                           {/*<div class="score__down layout--center">--</div>*/}
                                       {/*</div>*/}
                                       {/*<div class="post__body">*/}
                                           {/*Hello World... </div>*/}
                                   {/*</div>*/}
                                   {/*<div class="post__footer">*/}
                                       {/*<div class="post__time">2m ago</div>*/}
                                       {/*<div class="post__comments">*/}
                                           {/*<svg class="icon" viewBox="0 0 31 32">*/}
                                               {/*<path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 */}
                                    {/*0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 */}
                                    {/*8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 */}
                                    {/*3.922-2.61 7.23-6.186 8.294z"></path>*/}
                                           {/*</svg>*/}
                                           {/*23*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                               {/*</article>*/}

                               {/*<div class="rant__add" title="Add Rant">+</div>*/}

                           {/*</div>*/}

                           {/*/!* ======================= *!/*/}
                           {/*/!* End of Rant List Page *!/*/}


                           {/*/!* Start of Rant Details Page*!/*/}
                           {/*/!* ======================= *!/*/}

                           {/*/!* <div class="rant-details layout--center">*/}

                           {/*<section class="post-hero">*/}
                               {/*<div class="post-hero__inner">*/}
                                   {/*<div class="score">*/}
                                       {/*<div class="score__up layout--center">++</div>*/}
                                       {/*<div class="score__board layout--center">100</div>*/}
                                       {/*<div class="score__down layout--center">--</div>*/}
                                   {/*</div>*/}
                                   {/*<div class="post-hero__body">*/}
                                       {/*<div class="profile">*/}
                                           {/*<div class="profile__picture">*/}
                                               {/*<svg height="36" width="36">*/}
                                                   {/*<circle cx="18" cy="18" r="18" fill="#5c5f6f" />*/}
                                               {/*</svg>*/}
                                           {/*</div>*/}
                                           {/*<div class="profile__name">*/}
                                               {/*Elon*/}
                                           {/*</div>*/}
                                       {/*</div>*/}
                                       {/*<div class="post__details">*/}
                                           {/*Lorem ipsum*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                               {/*</div>*/}
                               {/*<div class="post-hero__footer">*/}
                                   {/*<div class="post-hero__delete">DELETE</div>*/}
                                   {/*<div class="post-hero__time">2m ago</div>*/}
                               {/*</div>*/}
                           {/*</section>*/}

                           {/*<section class="comments layout--center">*/}

                               {/*<h1 class="comments__title"><span>#</span>Comments</h1>*/}

                               {/*<section class="comment">*/}
                                   {/*<div class="comment__inner">*/}
                                       {/*<div class="comment__body">*/}
                                           {/*<div class="profile">*/}
                                               {/*<div class="profile__picture">*/}
                                                   {/*<svg height="36" width="36">*/}
                                                       {/*<circle cx="18" cy="18" r="18" fill="#5c5f6f" />*/}
                                                   {/*</svg>*/}
                                               {/*</div>*/}
                                               {/*<div class="profile__name">*/}
                                                   {/*Elon*/}
                                               {/*</div>*/}
                                           {/*</div>*/}
                                           {/*<div class="post__details">*/}
                                               {/*Lorem ipsum*/}
                                               {/*<br />*/}
                                           {/*</div>*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                                   {/*<div class="comment__footer">*/}
                                       {/*<div class="comment__delete">DELETE</div>*/}
                                       {/*<div class="comment__time">2m ago</div>*/}
                                   {/*</div>*/}
                               {/*</section>*/}

                           {/*</section>*/}

                           {/*<div class="rant__comment layout--center" title="Comment">*/}
                               {/*<svg class="icon" viewBox="0 0 31 32" width="100%" height="100%">*/}
                                   {/*<path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 */}
                            {/*0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 */}
                            {/*8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 */}
                            {/*3.922-2.61 7.23-6.186 8.294z"></path>*/}
                               {/*</svg>*/}
                           {/*</div>*/}

                       {/*</div> *!/*/}

                           {/*/!* ======================= *!/*/}
                           {/*/!* End of Rant Details Page*!/*/}

                       {/*</div>*/}
                   {/*</section>*/}

                   {/* ======================= */}
                   {/* End of Main Section */}

               </div>

               {/* Start of login popup */}
               {/* ======================= */}

               {/* <div class="popup popup--open">
               <div class="popup__header">
                   <div title="Close" class="close layout--center">
                       X
                   </div>
               </div>
               <div class="popup__body layout--center">
                   <div class="popup__body-inner">

                       <div class="form">
                           <div class="form__title">
                               JOIN <span class="highlight">#</span>DEVRANT
                           </div>
                           <div class="form__description">
                               Vote and comment on others' rants. Post your own.
                           </div>
                           <form name="login">
                               <div class="login">

                                   <input type="text" placeholder="USERNAME" />
                                   <input type="password" placeholder="PASSWORD" />

                                   <div class="loader">
                                       <div class="spinner"></div>
                                   </div>

                                   <div class="form__error">
                                       Some fields are missing !
                                   </div>

                                   <input type="submit" value="LET ME IN" />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div> */}

               {/* ======================= */}
               {/* End of login popup */}

               {/* Start of post popup */}
               {/* ======================= */}

               {/* <div class="popup popup--open">
               <div class="popup__header">
                   <div title="Close" class="close layout--center">
                       X
                   </div>
               </div>
               <div class="popup__body layout--center">
                   <div class="popup__body-inner">

                       <div class="form">
                           <div class="form__title">
                               NEW <span class="highlight">#</span>RANT
                           </div>
                           <div class="form__description">
                               Express yourself with 140 characters.
                           </div>
                           <form name="new-rant">
                               <div class="new-rant">
                                   <textarea maxlength="140"></textarea>

                                   <div class="loader">
                                       <div class="spinner"></div>
                                   </div>

                                   <div class="form__error">
                                       Some fields are missing !
                                   </div>

                                   <input type="submit" value="POST">
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div> */}

               {/* ======================= */}
               {/* End of post popup */}

               {/* Start of comment popup */}
               {/* ======================= */}

               {/* <div class="popup popup--open">
               <div class="popup__header">
                   <div title="Close" class="close layout--center">
                       X
                   </div>
               </div>
               <div class="popup__body layout--center">
                   <div class="popup__body-inner">

                       <div class="form">
                           <div class="form__title">
                               NEW <span class="highlight">#</span>COMMENT
                           </div>
                           <div class="form__description">
                               Comment with 140 characters.
                           </div>
                           <form name="new-comment">
                               <div class="new-comment">
                                   <textarea maxlength="140"></textarea>

                                   <div class="loader">
                                       <div class="spinner"></div>
                                   </div>

                                   <div class="form__error">
                                       Some fields are missing !
                                   </div>

                                   <input type="submit" value="COMMENT"/>
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div> */}

               {/* ======================= */}
               {/* End of comment popup */}

               {/* Start of alert popup */}
               {/* ======================= */}

               {/* <div class="popup popup--open">
               <div class="popup__header">
                   <div title="Close" class="close layout--center">
                       X
                   </div>
               </div>
               <div class="popup__body layout--center">
                   <div class="popup__body-inner">

                       <div class="form">
                           <div class="form__title">
                               <span class="highlight">#</span>OOPS!
                           </div>
                           <div class="form__description">
                               You can not vote on your own post :)
                           </div>
                           <form name="alert">
                               <div class="alert">
                                   <input type="submit" value="OK" />
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div> */}

               {/* ======================= */}
               {/* End of alert popup */}

           </div>

        );
    }
}

export default App;
