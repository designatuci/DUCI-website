import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Nav,Bot,Section,Text,Space, Icon,PageIcon } from './Symbols.js'
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"

// const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
const url = "https://weebly.us16.list-manage.com/subscribe/post?u=96e1277e37e6f4c2940cd1dc9&id=3cdf6c3ea8";

export function EmailForm(props) {
    let ref_email, ref_fname, ref_lname, ref_sub, ref_form
    let springLoad = true
    function validate(submit) {
        let formData = {
            EMAIL: ref_email.value,
            FNAME: ref_fname.value,
            LNAME: ref_lname.value,
        }
        ref_sub(formData)
    }
    function spring() {
        if (springLoad) {
            window.scrollTo(0, 384)
            springLoad = false
        }
    }
    return <div className="form spaceChildren" ref={node => (ref_form = node)}>
        <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <div className="flex spaceChildrenSmall">
            {ref_sub = subscribe}

            {(status==null || status=="sending" || (status === "error" && message.indexOf("already subscribed") == -1)) && <div className="inputs">
                <input type="email" placeholder="Your email" ref={node => (ref_email = node)}/>
                <input type="firstname" placeholder="First Name" ref={node => (ref_fname = node)}/>
                <input type="lastname" placeholder="Last Name" ref={node => (ref_lname = node)}/>
            </div>}

            {status == "success" && spring()}
            {status == "error" && spring()}

            {status == "success" && <Text size="XL" className="wait show dx bold color blue" style={{marginBottom:"32px",marginTop:"8px"}}>Subscribed!</Text>}
            {status == "success" && <Text className="wait show dx bold color gray">Thank you.</Text>}
            {status == "error" && message.indexOf("already subscribed") >= 0 && <Text className="wait show dx bold color blue" size="XL" style={{marginBottom:"32px",marginTop:"8px"}}>You are already subscribed.</Text>}
            {status == "error" && message.indexOf("already subscribed") >= 0 && <Text className="wait show dx color gray">Thank you.</Text>}

            <div className="flex spaceChildrenSmall">
                {(status==null || status == "sending" || (status=="error" && message.indexOf("already subscribed") == -1)) && <a className="button fill blue" onClick={validate}>
                    <Text>{(status=="sending")?"• • •":"Sign-up"}</Text>
                </a>}
                {status === "error" && message.indexOf("already subscribed") == -1 && <Text style={{ color: "red" }}>Error, please check your inputs and try again</Text>}
                {(status==null || status=="sending" || (status === "error" && message.indexOf("already subscribed") == -1)) &&
                 <Text className="S color gray nano">Mail services provided by <a target="noreferer" href="https://mailchimp.com" className="link">MailChimp</a>. By signing up, you agree to their <a target="noreferer" href="https://mailchimp.com/legal/privacy/" className="link">privacy policy</a>.</Text>}
            </div>
            
            </div>
        )}
        />
        {/* <div className="inputs">
            <input type="email" placeholder="Your email" />
            <input type="firstname" placeholder="First Name" />
            <input type="lastname" placeholder="Last Name" />
        </div>
        <div className="flex spaceChildrenSmall">
            <a className="button fill blue">
                <Text>Sign-up</Text>
            </a>
            <Text className="S color gray nano">Mail services provided by <a target="noreferer" href="https://mailchimp.com" className="link">MailChimp</a>. By signing up, you agree to their <a target="noreferer" href="https://mailchimp.com/legal/privacy/" className="link">privacy policy</a>.</Text>
        </div> */}
    </div>
}

