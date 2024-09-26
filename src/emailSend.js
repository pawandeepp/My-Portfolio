import toast from "react-hot-toast";


export async function EmailSend({ name = "NA", email = "NA", subject = "NA", Comment = "NA" }) {

    var data = {
        service_id: "service_5q9rl2i",
        template_id: "template_4f5i7gd",
        user_id: "IJpaFiFGHLY2B1-La",
        template_params: {
            user_name: name,
            user_email: email,
            user_subject: subject,
            user_commnet: Comment,
        },
    };

    try {
       let resp = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        if (Comment === "Subscribe") {
            toast.success("Subscribed successfuly. Thank You!")
        } else {
            toast.success("Your message was sent successfuly. You will be contacted soon. Thank You!")
        }
        
        return resp;

    } catch (error) {
        console.error("Error while sending mail:", error);
        toast.error("This didn't work.")
        
        return error;

    }
}
