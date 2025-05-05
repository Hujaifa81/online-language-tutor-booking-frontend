import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitle = (detailsTitle) => {
    const location = useLocation();
    

    useEffect(() => {
        let pageTitle 

        if (location.pathname.includes("tutor/details/")) {
            pageTitle = `${detailsTitle} | Hi Tutor`; 
        } 
        else if(location.pathname.includes("/find-tutors/")){
            const category = location.pathname.split("/")[2];
            if(category) {
            pageTitle = `Find Tutors - ${category} | Hi Tutor`;}
        }
        else if (location.pathname.includes("/find-tutors")) {
            
            
            pageTitle = "Find Tutors | Hi Tutor";
        } 
        
        else{
            switch (location.pathname) {
                case "/":
                    pageTitle = "Home | Hi Tutor";
                    break;
                case "/sign-in":
                    pageTitle = "Sign In | Hi Tutor";
                    break;
                case "/sign-up":
                    pageTitle = "Sign Up | Hi Tutor";
                    break;
                case "/forget-password":
                    pageTitle = "forget-password | Hi Tutor";
                    break;
                case "/add-tutor":
                    pageTitle = "Add Tutor | Hi Tutor";
                    break;
                
                
                case "/my-tutors":
                                pageTitle = "My Tutors | Hi Tutor";
                                break;
                case "/my-booked-tutors":
                                    pageTitle = "My Booked Tutors | Hi Tutor";
                                    break;
                case "/about-us":
                                    pageTitle = "About Us | Hi Tutor";
                                    break;
                case "/contact-us":
                                    pageTitle = "Contact Us | Hi Tutor";
                                    break;
                
                default:
                    pageTitle = "Hi Tutor";
                    break;
            }
        }
        

        document.title = pageTitle;
    }, [location,detailsTitle]);
};

export default useTitle;