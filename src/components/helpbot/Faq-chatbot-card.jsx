import React from 'react';
import { Link, withRouter } from "react-router-dom";

const FAQChatbotCard = () => {
    return (
        <div>
            <Link to="/faq">
                JW Music Store FAQ page
            </Link>
        </div>
    )
}
export default withRouter(FAQChatbotCard)