import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { CustomForm } from '../CustomForm'

const MailchimpForm = props => {

const url = `https://isemear.us5.list-manage.com/subscribe/post?u=46231f54d74102619596a143c&id=d4003037a6`

      return (
        <div className="mc__form-container">
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    </div>

    );

};

export default MailchimpForm;